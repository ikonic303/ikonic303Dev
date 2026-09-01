import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { parseInline, isInternalHref, type InlineToken } from './inline';
import type { Section } from './types';

const linkClass = 'text-mint underline underline-offset-2 decoration-mint/40 hover:decoration-mint transition-colors';

function renderToken(tok: InlineToken, key: number) {
  switch (tok.t) {
    case 'text':
      return <Fragment key={key}>{tok.v}</Fragment>;
    case 'code':
      return (
        <code key={key} className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-offwhite">
          {tok.v}
        </code>
      );
    case 'bold':
      return (
        <strong key={key} className="font-semibold text-offwhite">
          {parseInline(tok.v).map(renderToken)}
        </strong>
      );
    case 'link':
      return isInternalHref(tok.href) ? (
        <Link key={key} to={tok.href} className={linkClass}>
          {tok.v}
        </Link>
      ) : (
        <a key={key} href={tok.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {tok.v}
        </a>
      );
  }
}

function Inline({ text }: { text: string }) {
  return <>{parseInline(text).map(renderToken)}</>;
}

function SectionBlock({ section }: { section: Section }) {
  switch (section.type) {
    case 'heading':
      return section.level === 2 ? (
        <h2 className="font-display text-2xl md:text-3xl font-bold text-offwhite mt-16 mb-5 pt-8 border-t border-white/10 scroll-mt-28 first:mt-4 first:pt-0 first:border-0">
          <span className="mr-2.5 inline-block h-[0.7em] w-[3px] translate-y-[1px] rounded-full bg-mint align-middle" />
          <Inline text={section.text} />
        </h2>
      ) : (
        <h3 className="font-display text-lg md:text-xl font-bold text-offwhite mt-10 mb-3 scroll-mt-28">
          <Inline text={section.text} />
        </h3>
      );

    case 'paragraph':
      return (
        <p className="text-offwhite-dark leading-7 my-4">
          <Inline text={section.text} />
        </p>
      );

    case 'blockquote':
      return (
        <blockquote className="my-7 rounded-r-lg border-l-2 border-mint bg-white/[0.03] py-3 pl-5 pr-4 text-lg leading-relaxed text-offwhite/95">
          <Inline text={section.text} />
        </blockquote>
      );

    case 'callout':
      return (
        <div className="my-7 flex gap-3 rounded-xl border border-mint/30 bg-mint/[0.07] p-5 text-sm sm:text-base leading-relaxed text-offwhite">
          <span aria-hidden className="mt-[0.4rem] h-2 w-2 shrink-0 rounded-full bg-mint" />
          <div>
            <Inline text={section.text.replace(/^\s*⚠️?\s*/, '')} />
          </div>
        </div>
      );

    case 'codeblock':
      return (
        <pre className="my-6 max-w-full overflow-x-auto rounded-xl border border-white/10 bg-charcoal-light p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed text-offwhite-dark">
          {section.code}
        </pre>
      );

    case 'list':
      return section.ordered ? (
        <ol className="my-5 ml-5 list-decimal space-y-2.5 text-offwhite-dark leading-7 marker:font-semibold marker:text-mint">
          {section.items.map((item, i) => (
            <li key={i} className="pl-1.5">
              <Inline text={item} />
            </li>
          ))}
        </ol>
      ) : (
        <ul className="my-5 space-y-2.5 text-offwhite-dark leading-7">
          {section.items.map((item, i) => (
            <li key={i} className="relative pl-6">
              <span
                aria-hidden
                className="absolute left-0 top-[0.65rem] h-1.5 w-1.5 rounded-full bg-mint"
              />
              <Inline text={item} />
            </li>
          ))}
        </ul>
      );

    case 'ctaRow':
      return (
        <div className="my-7 flex flex-wrap gap-2.5">
          {section.links.map((l, i) => {
            const cls =
              'group inline-flex items-center gap-1.5 rounded-full border border-mint/30 bg-mint/[0.06] px-3.5 py-1.5 text-sm font-medium text-mint hover:bg-mint/[0.12] hover:border-mint/50 transition-colors';
            const arrow = (
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            );
            const label = l.label.replace(/\s*→\s*$/, '');
            return isInternalHref(l.href) ? (
              <Link key={i} to={l.href} className={cls}>
                {label}
                {arrow}
              </Link>
            ) : (
              <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className={cls}>
                {label}
                {arrow}
              </a>
            );
          })}
        </div>
      );

    case 'table':
      return (
        <div className="my-6 max-w-full overflow-x-auto rounded-xl border border-white/10 [-webkit-overflow-scrolling:touch]">
          <table className="w-full min-w-[34rem] border-collapse text-xs sm:text-sm">
            {section.caption && (
              <caption className="px-3 py-2 text-left text-xs text-white/40">
                <Inline text={section.caption} />
              </caption>
            )}
            <thead>
              <tr className="bg-charcoal-light">
                {section.headers.map((h, i) => (
                  <th
                    key={i}
                    className="border-b border-white/10 px-3 py-2.5 sm:px-4 sm:py-3 text-left font-semibold text-offwhite"
                  >
                    <Inline text={h} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className="align-top border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-3 py-3 sm:px-4 sm:py-3.5 ${
                        ci === 0 ? 'text-offwhite font-medium' : 'text-offwhite-dark'
                      }`}
                    >
                      <Inline text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default function RenderSections({ sections }: { sections: Section[] }) {
  return (
    <div className="font-body">
      {sections.map((section, i) => (
        <SectionBlock key={i} section={section} />
      ))}
    </div>
  );
}
