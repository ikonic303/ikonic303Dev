import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/industries/professional-services';

export const indProfessionalServices: PageContent = {
  slug,
  seo: {
    title: 'Automation for Professional Services Firms — Intake to Bill',
    description:
      'New matter intake, document assembly, and the billable hours lost to work nobody can charge for. Where automation pays in a professional services firm.',
  },
  breadcrumb: crumbs(
    { name: 'Who we work with', href: '/who-we-work-with' },
    { name: 'Professional services', href: slug },
  ),
  eyebrow: 'INDUSTRY',
  h1: 'Forward deployed engineering for professional services',
  answer:
    "In professional services the expensive workflow is intake-to-billing, and the cost is unusual: it is mostly senior people doing work that is not billable and not senior. Every hour a fee earner spends chasing a document is an hour of the firm's highest-value capacity spent on administration.",
  sections: [
    { type: 'heading', level: 2, text: 'The pattern' },
    {
      type: 'list',
      items: [
        'New matter intake is a form, an email chain and three follow-ups for missing information.',
        'Conflict and compliance checks are manual and hold up the start.',
        "Documents get assembled by copying from the last similar one, which carries the last one's mistakes.",
        'Time is recorded from memory at the end of the week, which reliably undercounts.',
        'Billing takes days and generates queries that take more days.',
        'Nobody knows realisation rate by matter type until someone builds a report.',
      ],
    },
    { type: 'heading', level: 2, text: 'What gets measured' },
    {
      type: 'table',
      headers: ['Question', 'Source'],
      rows: [
        [
          'How many hours a week do fee earners spend on non-billable administration?',
          'observation — self-reporting undercounts badly',
        ],
        ['How long from first contact to matter opened?', 'your system'],
        ['What proportion of recorded time is entered more than 48 hours late?', 'the time system knows'],
        ['What percentage of bills generate a query, and what does resolving one cost?', 'billing'],
        ['What is the realisation rate by matter type?', 'if unknown, that is the first finding'],
      ],
    },
    {
      type: 'paragraph',
      text: 'The late-time-entry number is the one to run first. Time recorded from memory a week later is systematically low, and the gap between it and contemporaneous recording is straight revenue.',
    },
    { type: 'heading', level: 2, text: 'What typically gets built' },
    {
      type: 'list',
      items: [
        '**Intake that collects everything once**, chases what is missing without a person doing the chasing, and opens the matter when it is complete.',
        '**Document assembly from structured matter data** rather than from the last similar file.',
        '**Time capture at the moment of work**, designed so it is faster than not doing it.',
        '**Bill assembly with the queries pre-empted** — the common ones are predictable and the same every month.',
        '**Realisation visible during the matter**, not after.',
      ],
    },
    { type: 'heading', level: 2, text: 'The caveat that matters here' },
    {
      type: 'paragraph',
      text: 'We do not touch professional judgement, advice, or anything that produces client-facing work product without a qualified human owning it. The target is the administrative shell around the expertise, which is where the measured hours are anyway.',
    },
    {
      type: 'paragraph',
      text: 'And a boundary worth stating: firms in regulated environments with formal data-handling obligations should confirm those requirements can be met before any engagement. If they cannot, we will say so.',
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'The measurement worksheet →', href: '/what-it-costs' },
        { label: 'Who we work with →', href: '/who-we-work-with' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'Forward deployed engineering for professional services',
      description: 'Matter intake, document assembly, contemporaneous time capture, realisation.',
      section: 'Industries',
    }),
  ],
  related: [
    { label: 'Who we work with', href: '/who-we-work-with' },
    { label: 'How an engagement runs', href: '/how-we-work' },
    { label: 'Measuring the return on an automation', href: '/guides/measuring-automation-roi' },
  ],
};
