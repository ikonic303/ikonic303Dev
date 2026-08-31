import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/services/marketing-systems';

export const marketingSystems: PageContent = {
  slug,
  seo: {
    title: 'Marketing Systems — Capture, Routing, Follow-up, Proof',
    description:
      'Most mid-size companies do not have a lead problem. They have a lead-handling problem — and the fix is engineering, not another campaign.',
  },
  breadcrumb: crumbs(
    { name: 'Services', href: '/services' },
    { name: 'Marketing systems', href: slug },
  ),
  eyebrow: 'SERVICES',
  h1: 'Marketing systems',
  answer:
    'Most companies at this size do not have a lead generation problem. They have a lead handling problem: enquiries arrive and die in the gap between arriving and someone dealing with them. Spending more on campaigns to feed a leaky handler is the most expensive mistake in marketing.',
  sections: [
    { type: 'heading', level: 2, text: 'Measure the handler before you fund the top' },
    {
      type: 'paragraph',
      text: 'Four numbers. Get them before you approve another campaign budget:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Median time from enquiry to first human response.** Not average — median. The average hides the overnight ones.',
        '**Percentage of enquiries that receive more than one follow-up attempt.** Usually shockingly low.',
        "**Percentage that end up in a system at all** rather than in one person's inbox.",
        '**Close rate by response-time band.** Under an hour, under a day, over a day. Your own data, your own answer, and it will change the conversation in the room.',
      ],
    },
    {
      type: 'paragraph',
      text: 'If those numbers are poor, spending more on generation increases waste proportionally. Fix the handler first — it is faster, cheaper, and it makes every future campaign worth more.',
    },
    { type: 'heading', level: 2, text: 'What we build' },
    {
      type: 'list',
      items: [
        '**Capture that works everywhere an enquiry can arrive** — form, phone, email, chat, marketplace — into one place, with the source preserved.',
        '**Routing by rule, immediately.** Not a daily digest, not a shared inbox where responsibility evaporates.',
        '**A first response in minutes**, in the channel it came in on, that is actually useful.',
        '**Follow-up on rails** so nothing depends on somebody remembering on a busy Thursday.',
        '**Attribution that survives contact with reality** — which is usually less precise than dashboards claim, and being honest about that is more useful than a confident wrong number.',
      ],
    },
    { type: 'heading', level: 2, text: 'Where this sits relative to campaigns' },
    {
      type: 'paragraph',
      text: 'This is the plumbing, not the creative. We build the system a campaign runs through. If your handler is sound and you genuinely need more at the top, that is a different piece of work and we will say so.',
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'All services →', href: '/services' },
        { label: 'Speed to quote →', href: '/guides/speed-to-quote' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'Marketing systems',
      description:
        'Lead capture, routing, immediate response and follow-up treated as engineering rather than as campaigns.',
      section: 'Services',
    }),
  ],
  related: [
    { label: 'CRM and sales systems', href: '/services/crm-and-sales-systems' },
    { label: 'AI agents and automation', href: '/services/ai-agents-and-automation' },
    { label: 'All services', href: '/services' },
  ],
};
