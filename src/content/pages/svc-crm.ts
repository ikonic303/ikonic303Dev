import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/services/crm-and-sales-systems';

export const crmSystems: PageContent = {
  slug,
  seo: {
    title: 'CRM and Sales Systems That Reflect What Is Real',
    description:
      'Most CRM problems are not CRM problems — they are data-entry problems wearing a CRM costume. What to fix before you migrate again.',
  },
  breadcrumb: crumbs(
    { name: 'Services', href: '/services' },
    { name: 'CRM and sales systems', href: slug },
  ),
  eyebrow: 'SERVICES',
  h1: 'CRM and sales systems',
  answer:
    'Most CRM problems are data-entry problems in disguise. The pipeline is wrong because updating it is work that benefits somebody else, so it gets done badly on Friday. Migrating to a better CRM does not change that — and it is the most common expensive mistake in this category.',
  sections: [
    { type: 'heading', level: 2, text: 'The three things that are actually broken' },
    {
      type: 'paragraph',
      text: '**1. The pipeline is a work of fiction.** Deals sit in stages they left months ago. Forecasting off it is guesswork with a spreadsheet. Cause: updating it is manual and the person doing it gets nothing back.',
    },
    {
      type: 'paragraph',
      text: '**2. Speed to response.** The measurable one. Inbound enquiries that get a reply in minutes convert at a meaningfully different rate than ones answered the next day — and almost every mid-size company can tell you their close rate but not their median response time. **Pull that number before you buy anything.**',
    },
    {
      type: 'paragraph',
      text: '**3. Follow-up depends on memory.** Most quoted work that never closes was never chased. Not a motivation problem — a systems problem.',
    },
    { type: 'heading', level: 2, text: 'What we do about it' },
    {
      type: 'list',
      items: [
        '**Make the pipeline update itself** from things that already happen: a call logged, a document sent, an invoice raised. If a stage move requires a human to remember, it will be wrong.',
        '**Route and respond fast** — automatically, in the channel the enquiry arrived in, with something genuinely useful rather than an autoresponder that says we have received your message.',
        '**Follow-up that runs on rails**, with a human handling replies. The sequence should never be the reason a deal was lost.',
        '**Reporting the sales team believes.** A dashboard nobody trusts gets replaced by a private spreadsheet within a month, and then you have two systems.',
      ],
    },
    { type: 'heading', level: 2, text: 'Before you migrate again' },
    { type: 'paragraph', text: 'Three questions, in order:' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Do you know your median response time to an inbound enquiry?** If not, measure that first. It is usually the single largest recoverable number in the whole function.',
        '**Is the data bad, or is the entry bad?** Migrating bad entry habits to a new platform reproduces the problem in a nicer interface, four months later, at considerable cost.',
        '**What does the sales team actually use?** If it is WhatsApp and a notebook, build toward that reality rather than against it.',
      ],
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'More on this — you cannot automate a mess →', href: '/guides/you-cannot-automate-a-mess' },
      ],
    },
    { type: 'heading', level: 2, text: 'On platforms' },
    {
      type: 'paragraph',
      text: 'We work in whatever you already have. We have run GoHighLevel at depth, and plenty of others besides, but the platform is not the interesting part of this and a vendor who leads with their platform preference is telling you something about their incentives.',
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'All services →', href: '/services' },
        { label: 'How an engagement runs →', href: '/how-we-work' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'CRM and sales systems',
      description:
        'Pipelines that update themselves, measured speed-to-response, and follow-up that does not depend on memory.',
      section: 'Services',
    }),
  ],
  related: [
    { label: 'AI agents and automation', href: '/services/ai-agents-and-automation' },
    { label: 'Marketing systems', href: '/services/marketing-systems' },
    { label: 'All services', href: '/services' },
  ],
};
