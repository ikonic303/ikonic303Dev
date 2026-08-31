import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/services/internal-tools-and-dashboards';

export const internalTools: PageContent = {
  slug,
  seo: {
    title: 'Internal Tools That Replace the Spreadsheet Nobody Owns',
    description:
      'Every mid-size company runs on two or three critical spreadsheets one person maintains. That is a risk, and it is usually a small application.',
  },
  breadcrumb: crumbs(
    { name: 'Services', href: '/services' },
    { name: 'Internal tools and dashboards', href: slug },
  ),
  eyebrow: 'SERVICES',
  h1: 'Internal tools and dashboards',
  answer:
    'Every company between 50 and 500 people runs on two or three spreadsheets that are load-bearing, undocumented, and maintained by one person who cannot take a holiday. That is not a tooling gap — it is an operational risk, and it is usually a small application that takes weeks rather than months.',
  sections: [
    { type: 'heading', level: 2, text: 'How to find yours' },
    {
      type: 'paragraph',
      text: 'Ask the question this way: **“If [name] were unreachable for two weeks, what stops?”**',
    },
    {
      type: 'paragraph',
      text: 'The answers are your list. It is almost always shorter than people expect and more critical than the org chart suggests.',
    },
    {
      type: 'paragraph',
      text: 'Then ask the second question: **“Which report does someone rebuild by hand every month?”** Recurring manual assembly is a permanent, quantifiable cost that nobody has ever added up.',
    },
    { type: 'heading', level: 2, text: 'What we build' },
    {
      type: 'list',
      items: [
        '**The application that replaces the spreadsheet** — same job, but with validation, history, access control, and the ability for a second person to use it correctly.',
        '**The dashboard people open unprompted**, which means it answers a question somebody has daily, not one an executive asked for once.',
        '**The tool that removes a handoff** — the small interface that means two departments stop emailing each other files.',
      ],
    },
    { type: 'heading', level: 2, text: 'Design rules we hold' },
    {
      type: 'paragraph',
      text: '**Built for the person who uses it, not the person who commissioned it.** The most common failure of internal tooling is a system designed in a meeting nobody who does the work attended.',
    },
    {
      type: 'paragraph',
      text: '**Faster than the thing it replaces, on day one.** People do not adopt tools that are better in principle. They adopt tools that are quicker this afternoon. If the new way takes more clicks than the spreadsheet, the spreadsheet wins and it should.',
    },
    {
      type: 'paragraph',
      text: '**Boring technology.** Internal tools should be maintainable by whoever you hire next, not just by us. Novel stacks are a form of lock-in even when nobody intended it.',
    },
    {
      type: 'paragraph',
      text: '**Exports.** Anything that goes in comes out, in a standard format, without asking us. The spreadsheet you are replacing had that property and you should not lose it.',
    },
    { type: 'heading', level: 2, text: 'What we will not build' },
    {
      type: 'paragraph',
      text: 'A tool that only works while we are engaged. If it needs our credentials, our hosting, or our attention to keep functioning, it is not a tool — it is a subscription with extra steps.',
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'All services →', href: '/services' },
        { label: 'Build vs buy →', href: '/guides/build-vs-buy-internal-tools' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'Internal tools and dashboards',
      description: 'Replacing the load-bearing spreadsheets maintained by a single person.',
      section: 'Services',
    }),
  ],
  related: [
    { label: 'AI agents and automation', href: '/services/ai-agents-and-automation' },
    { label: 'CRM and sales systems', href: '/services/crm-and-sales-systems' },
    { label: 'All services', href: '/services' },
  ],
};
