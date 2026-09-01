import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/industries/construction-and-trades';

export const indConstruction: PageContent = {
  slug,
  seo: {
    title: 'AI & Automation for Construction and Trade Contractors',
    description:
      "The estimator's inbox, the field-to-office gap, and quotes that go out three days late. Where automation actually pays in a construction business.",
  },
  breadcrumb: crumbs(
    { name: 'Who we work with', href: '/who-we-work-with' },
    { name: 'Construction and the trades', href: slug },
  ),
  eyebrow: 'INDUSTRY',
  h1: 'Forward deployed engineering for construction and the trades',
  answer:
    'In construction the expensive workflow is almost always quote-to-invoice: the path from an enquiry landing to money arriving. It crosses estimating, the field and the office, it runs on three systems that do not talk, and the gaps between them are filled by people re-typing numbers under time pressure.',
  sections: [
    { type: 'heading', level: 2, text: 'What it actually looks like on the ground' },
    {
      type: 'list',
      items: [
        "The estimator's inbox is the pipeline. Nothing else is.",
        'Takeoffs live in one system, the quote in a second, the job in a third, and someone rekeys between them.',
        'A quote goes out three days after the walk, and the ones that lose are the slow ones — not the expensive ones.',
        'The field records work on paper or in a text message, and the office reconstructs it on Friday.',
        'Change orders are agreed verbally and invoiced from memory.',
        'Nobody can tell you margin on a completed job until the month closes.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Every one of those is a leakage line, and leakage is usually the biggest number in the measurement. [The worksheet →](/what-it-costs)',
    },
    { type: 'heading', level: 2, text: 'What we look at in the first two weeks' },
    {
      type: 'paragraph',
      text: 'We follow one job end to end, from enquiry to paid invoice, and time every handoff. Then we ask the estimator, the PM and whoever does the invoicing the same question separately: where does this get stuck? Three different answers is itself the finding.',
    },
    { type: 'paragraph', text: 'The specific numbers we go after:' },
    {
      type: 'table',
      headers: ['Question', 'Where it comes from'],
      rows: [
        ['How many hours a week go into producing a quote?', 'observation, not recollection'],
        ['What proportion of quotes go out more than 48 hours after the walk?', 'timestamps in the mailbox'],
        [
          'What is the close rate on quotes sent inside 24 hours vs after 72?',
          'your own records — this one usually stops the room',
        ],
        ['How many invoices get corrected after issue?', 'accounting'],
        ['How many change orders never made it onto an invoice?', 'ask the PMs. Then ask accounting. Compare'],
      ],
    },
    {
      type: 'paragraph',
      text: 'That last comparison is the one that most often pays for the whole engagement by itself.',
    },
    { type: 'heading', level: 2, text: 'What typically gets built' },
    {
      type: 'paragraph',
      text: 'Depends on the measurement, and we do not decide before it. Common shapes:',
    },
    {
      type: 'list',
      items: [
        '**Quote assembly** that pulls current pricing, produces the document, and sends it while the estimator is still in the truck.',
        '**Field-to-office capture** that does not depend on anyone remembering on Friday.',
        '**Change-order capture at the moment of agreement**, because that is the only moment it is reliable.',
        '**Job margin visible during the job** rather than after it.',
      ],
    },
    { type: 'heading', level: 2, text: 'What we will not tell you' },
    {
      type: 'paragraph',
      text: 'We will not tell you AI will price your jobs. Estimating is judgement built on years of local knowledge, and a system that pretends otherwise will lose you money on the first unusual job. What software is good at is the **hours around** the estimate — gathering, assembling, sending, chasing, reconciling. That is where the measured cost lives anyway.',
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'How an engagement runs →', href: '/how-we-work' },
        { label: 'Who we work with →', href: '/who-we-work-with' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'Forward deployed engineering for construction and the trades',
      description: 'Quote-to-invoice, estimating hours, field-to-office capture, change orders.',
      section: 'Industries',
    }),
  ],
  related: [
    { label: 'Who we work with', href: '/who-we-work-with' },
    { label: 'How an engagement runs', href: '/how-we-work' },
    { label: 'Speed to quote', href: '/guides/speed-to-quote' },
  ],
};
