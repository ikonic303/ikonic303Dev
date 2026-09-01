// Framework-agnostic renderer: PageContent -> HTML string.
// Used at build time by scripts/prerender-routes.mjs to produce the crawler-visible
// body of each route. Keep imports relative (no "@/" alias) so the Node/tsx import
// graph stays simple.

import { parseInline, isInternalHref, type InlineToken } from './inline';
import type { PageContent, Section } from './types';

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function tokenToHtml(tok: InlineToken): string {
  switch (tok.t) {
    case 'text':
      return esc(tok.v);
    case 'code':
      return `<code>${esc(tok.v)}</code>`;
    case 'bold':
      return `<strong>${parseInline(tok.v).map(tokenToHtml).join('')}</strong>`;
    case 'link': {
      const attrs = isInternalHref(tok.href) ? '' : ' rel="noopener"';
      return `<a href="${esc(tok.href)}"${attrs}>${esc(tok.v)}</a>`;
    }
  }
}

function inlineToHtml(src: string): string {
  return parseInline(src).map(tokenToHtml).join('');
}

function sectionToHtml(s: Section): string {
  switch (s.type) {
    case 'heading':
      return `<h${s.level}>${inlineToHtml(s.text)}</h${s.level}>`;
    case 'paragraph':
      return `<p>${inlineToHtml(s.text)}</p>`;
    case 'blockquote':
      return `<blockquote>${inlineToHtml(s.text)}</blockquote>`;
    case 'callout':
      return `<aside>${inlineToHtml(s.text)}</aside>`;
    case 'codeblock':
      return `<pre>${esc(s.code)}</pre>`;
    case 'list': {
      const tag = s.ordered ? 'ol' : 'ul';
      return `<${tag}>${s.items.map((i) => `<li>${inlineToHtml(i)}</li>`).join('')}</${tag}>`;
    }
    case 'ctaRow':
      return `<p>${s.links
        .map((l) => `<a href="${esc(l.href)}">${esc(l.label)}</a>`)
        .join(' &middot; ')}</p>`;
    case 'table': {
      const cap = s.caption ? `<caption>${inlineToHtml(s.caption)}</caption>` : '';
      const head = `<thead><tr>${s.headers
        .map((h) => `<th>${inlineToHtml(h)}</th>`)
        .join('')}</tr></thead>`;
      const body = `<tbody>${s.rows
        .map(
          (r) => `<tr>${r.map((c) => `<td>${inlineToHtml(c)}</td>`).join('')}</tr>`,
        )
        .join('')}</tbody>`;
      return `<div style="overflow-x:auto"><table>${cap}${head}${body}</table></div>`;
    }
  }
}

function jsonLd(obj: Record<string, unknown>): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

/** The crawler-visible body fragment for one page (goes inside #root > <main>). */
export function pageToHtml(page: PageContent): string {
  const parts: string[] = [];

  if (page.breadcrumb.length > 1) {
    parts.push(
      `<nav aria-label="Breadcrumb"><p>${page.breadcrumb
        .map((c, i) =>
          i < page.breadcrumb.length - 1
            ? `<a href="${esc(c.href)}">${esc(c.name)}</a>`
            : esc(c.name),
        )
        .join(' / ')}</p></nav>`,
    );
  }

  parts.push(`<h1>${inlineToHtml(page.h1)}</h1>`);
  parts.push(`<p><strong>${inlineToHtml(page.answer)}</strong></p>`);
  for (const s of page.sections) parts.push(sectionToHtml(s));

  if (page.faqs && page.faqs.length > 0) {
    parts.push('<h2>FAQ</h2>');
    for (const f of page.faqs) {
      parts.push(`<h3>${esc(f.question)}</h3>`);
      parts.push(`<p>${esc(f.answer)}</p>`);
    }
  }

  if (page.related && page.related.length > 0) {
    parts.push(
      `<p>${page.related
        .map((r) => `<a href="${esc(r.href)}">${esc(r.label)}</a>`)
        .join(' &middot; ')}</p>`,
    );
  }

  for (const obj of page.schema ?? []) {
    parts.push(`<script type="application/ld+json">${jsonLd(obj)}</script>`);
  }

  // FAQPage schema, generated from the same visible items the SPA shows.
  if (page.faqs && page.faqs.length > 0) {
    parts.push(
      `<script type="application/ld+json">${jsonLd({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      })}</script>`,
    );
  }

  return parts.join('\n');
}

const stripInline = (s: string): string =>
  s
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)');

/** Plain-text rendering of one page, for llms-full.txt. */
export function pageToPlainText(page: PageContent, origin: string): string {
  const out: string[] = [];
  out.push('='.repeat(78));
  out.push(`# ${stripInline(page.h1)}`);
  out.push(`URL: ${origin}${page.slug === '/' ? '/' : page.slug}`);
  out.push('');
  out.push(stripInline(page.answer));
  out.push('');
  for (const s of page.sections) {
    switch (s.type) {
      case 'heading':
        out.push('');
        out.push(`${s.level === 2 ? '##' : '###'} ${stripInline(s.text)}`);
        break;
      case 'paragraph':
      case 'blockquote':
      case 'callout':
        out.push(stripInline(s.text));
        break;
      case 'codeblock':
        out.push(s.code);
        break;
      case 'list':
        for (const it of s.items) out.push(`- ${stripInline(it)}`);
        break;
      case 'ctaRow':
        out.push(s.links.map((l) => `${l.label} (${origin}${l.href})`).join(' | '));
        break;
      case 'table': {
        out.push(s.headers.map(stripInline).join(' | '));
        for (const row of s.rows) out.push(row.map(stripInline).join(' | '));
        break;
      }
    }
  }
  if (page.faqs && page.faqs.length > 0) {
    out.push('');
    out.push('## FAQ');
    for (const f of page.faqs) {
      out.push(`Q: ${f.question}`);
      out.push(`A: ${f.answer}`);
    }
  }
  out.push('');
  return out.join('\n');
}

/** Plain-text word count of the rendered body — used by build-time assertions. */
export function wordCount(page: PageContent): number {
  const strings: string[] = [page.h1, page.answer];
  for (const s of page.sections) {
    if ('text' in s && s.text) strings.push(s.text);
    if (s.type === 'codeblock') strings.push(s.code);
    if (s.type === 'list') strings.push(...s.items);
    if (s.type === 'ctaRow') strings.push(...s.links.map((l) => l.label));
    if (s.type === 'table') {
      strings.push(...s.headers, ...s.rows.flat());
      if (s.caption) strings.push(s.caption);
    }
  }
  for (const f of page.faqs ?? []) strings.push(f.question, f.answer);
  const text = strings
    .join(' ')
    .replace(/\*\*|`/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  return text.split(/\s+/).filter(Boolean).length;
}
