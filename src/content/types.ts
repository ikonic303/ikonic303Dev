// Content-as-data model for the ikonic303.dev editorial pages.
//
// Page copy lives ONLY in the modules under ./pages. Two renderers consume it:
//   - src/content/RenderSections.tsx  — React/JSX for the live SPA
//   - src/content/emitHtml.ts         — plain HTML string for the build-time
//                                       crawler prerender (scripts/prerender-routes.mjs)
// Because both read the same PageContent, the interactive page and the crawler
// HTML can never drift.

export interface SeoMeta {
  /** Final <title>, verbatim. <=60 chars. No boilerplate suffix is appended. */
  title: string;
  /** Final meta description, verbatim. <=156 chars. */
  description: string;
}

export interface Crumb {
  name: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

/**
 * A body block. Paragraph / list-item / heading / table-cell / blockquote text
 * may contain the tiny inline subset parsed by ./inline: **bold**, [text](/path)
 * and `code`.
 */
export type Section =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'blockquote'; text: string }
  /** Boxed aside — the "warning" callouts in the source copy. */
  | { type: 'callout'; text: string }
  /** Pre-formatted monospace block — the cost worksheets. Not inline-parsed. */
  | { type: 'codeblock'; code: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  /** A row of link CTAs, rendered inline separated by middots. */
  | { type: 'ctaRow'; links: CtaLink[] }
  | { type: 'table'; headers: string[]; rows: string[][]; caption?: string };

export interface PageContent {
  /** Route path and canonical, e.g. "/what-it-costs". "/" for the homepage. */
  slug: string;
  seo: SeoMeta;
  /** Breadcrumb trail, Home first, this page last. */
  breadcrumb: Crumb[];
  /** Small uppercase kicker above the H1. Optional. */
  eyebrow?: string;
  h1: string;
  /** The ~40-word extraction paragraph shown directly under the H1 (plain text). */
  answer: string;
  sections: Section[];
  faqs?: FaqItem[];
  /** JSON-LD objects emitted on the page (Article / HowTo / Service / ContactPage). */
  schema?: Record<string, unknown>[];
  /** "Related" link row rendered at the end of the body. */
  related?: CtaLink[];
}
