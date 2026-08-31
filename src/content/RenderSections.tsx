import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { parseInline, isInternalHref, type InlineToken } from './inline';
import type { Section } from './types';

const linkClass = 'text-mint underline underline-offset-2 hover:text-mint-light transition-colors';

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
        <h2 className="font-display text-2xl md:text-3xl font-bold text-offwhite mt-14 mb-4 scroll-mt-28">
          <Inline text={section.text} />
        </h2>
      ) : (
        <h3 className="font-display text-lg md:text-xl font-bold text-offwhite mt-10 mb-3">
          <Inline text={section.text} />
        </h3>
      );

    case 'paragraph':
      return (
        <p className="text-offwhite-dark leading-relaxed my-4">
          <Inline text={section.text} />
        </p>
      );

    case 'blockquote':
      return (
        <blockquote className="my-6 border-l-2 border-mint pl-5 text-offwhite italic">
          <Inline text={section.text} />
        </blockquote>
      );

    case 'callout':
      return (
        <div className="my-6 rounded-xl border border-mint/30 bg-mint/5 p-5 text-offwhite">
          <Inline text={section.text} />
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
        <ol className="my-4 ml-5 list-decimal space-y-2 text-offwhite-dark marker:text-mint">
          {section.items.map((item, i) => (
            <li key={i} className="pl-1 leading-relaxed">
              <Inline text={item} />
            </li>
          ))}
        </ol>
      ) : (
        <ul className="my-4 ml-5 list-disc space-y-2 text-offwhite-dark marker:text-mint">
          {section.items.map((item, i) => (
            <li key={i} className="pl-1 leading-relaxed">
              <Inline text={item} />
            </li>
          ))}
        </ul>
      );

    case 'ctaRow':
      return (
        <p className="my-6 flex flex-wrap gap-x-3 gap-y-2 text-sm font-medium">
          {section.links.map((l, i) => (
            <Fragment key={i}>
              {i > 0 && <span className="text-white/30">·</span>}
              {isInternalHref(l.href) ? (
                <Link to={l.href} className={linkClass}>
                  {l.label}
                </Link>
              ) : (
                <a href={l.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {l.label}
                </a>
              )}
            </Fragment>
          ))}
        </p>
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
                <tr key={ri} className="align-top">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="border-b border-white/5 px-3 py-2.5 sm:px-4 sm:py-3 text-offwhite-dark"
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
