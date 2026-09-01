import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/industries/distribution-and-wholesale';

export const indDistribution: PageContent = {
  slug,
  seo: {
    title: 'Automation for Distributors and Wholesale Businesses',
    description:
      'Order entry by email, quotes that take a day, and inventory that is right in the system and wrong on the shelf. Where the cost actually sits.',
  },
  breadcrumb: crumbs(
    { name: 'Who we work with', href: '/who-we-work-with' },
    { name: 'Distribution and wholesale', href: slug },
  ),
  eyebrow: 'INDUSTRY',
  h1: 'Forward deployed engineering for distribution and wholesale',
  answer:
    'In distribution the expensive workflow is usually order-to-cash, and the cost concentrates in two places: orders arriving as unstructured email, PDF and phone calls that someone rekeys, and quoting that is slow enough to lose business you had already won on relationship.',
  sections: [
    { type: 'heading', level: 2, text: 'The pattern' },
    {
      type: 'list',
      items: [
        'Orders arrive in six formats. A person turns all six into one format, by hand, all day.',
        'A rekeying error becomes a wrong shipment, a return, a credit and a phone call. Four costs from one keystroke.',
        'Quotes involve checking stock, checking cost, checking who this customer is — and take a day, while a competitor answers in an hour.',
        'Inventory is accurate in the system and wrong on the shelf, and everybody has a private workaround.',
        'Backorder communication happens when the customer chases.',
      ],
    },
    { type: 'heading', level: 2, text: 'What gets measured' },
    {
      type: 'table',
      headers: ['Question', 'Source'],
      rows: [
        ['How many order lines are manually keyed per week, and how long each takes?', 'observation'],
        ['What is the error rate per hundred lines, and the full cost of one error?', 'returns and credits'],
        ['What is average quote turnaround, and close rate by turnaround band?', 'your own system'],
        ['How many customer contacts are chasing status?', 'the phones'],
        ['What does an emergency stock check cost when it happens?', 'ask the warehouse'],
      ],
    },
    {
      type: 'paragraph',
      text: "The error-cost line is the one distributors habitually undercount. One mis-keyed line is not the picking time — it is the return, the credit note, the re-ship, the phone calls, and the customer's next quote going to somebody else.",
    },
    { type: 'heading', level: 2, text: 'What typically gets built' },
    {
      type: 'list',
      items: [
        '**Order intake that reads the incoming format**, structures it, and puts a human on the exceptions only — with the exceptions visible rather than silently guessed.',
        '**Quote assembly** that has stock, cost and customer terms in one place.',
        '**Proactive status**, so the customer hears about the backorder before they chase it.',
        '**Reconciliation that runs continuously** rather than as a quarterly event everybody dreads.',
      ],
    },
    { type: 'heading', level: 2, text: 'The honest caveat' },
    {
      type: 'paragraph',
      text: 'Automated order intake is where over-promising happens in this industry. A system that reads 95% of orders correctly and silently guesses the other 5% is **worse than the person it replaced** — the errors are now invisible until they ship.',
    },
    {
      type: 'paragraph',
      text: 'So the design rule is: everything it is not confident about goes to a human, visibly, with the reason. The measurement is not “how many did it read” but “how many did it read and how many wrong ones did it let through.”',
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'The measurement worksheet →', href: '/what-it-costs' },
        { label: 'How an engagement runs →', href: '/how-we-work' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'Forward deployed engineering for distribution and wholesale',
      description: 'Order intake from unstructured formats, quote turnaround, inventory reconciliation.',
      section: 'Industries',
    }),
  ],
  related: [
    { label: 'Who we work with', href: '/who-we-work-with' },
    { label: 'How an engagement runs', href: '/how-we-work' },
    { label: 'AI agents that do work', href: '/guides/ai-agents-that-do-work' },
  ],
};
