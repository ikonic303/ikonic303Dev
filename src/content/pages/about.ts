import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/about';

export const about: PageContent = {
  slug,
  seo: {
    title: 'About ikonic303 — Why We Work This Way',
    description:
      'We run our own operations on the systems we build. That is the whole basis on which we ask anyone to let us inside their business.',
  },
  breadcrumb: crumbs({ name: 'About', href: slug }),
  eyebrow: 'ABOUT',
  h1: 'About',
  answer:
    'We build and run operating systems for mid-size companies, and we run our own business on the same kind of systems we build. That is the honest basis of the pitch — not a client list, not a case study we cannot show you, but the fact that this work started as our own problem.',
  sections: [
    { type: 'heading', level: 2, text: 'Where this came from' },
    {
      type: 'paragraph',
      text: 'ikonic303 grew out of an operating business, not out of a consultancy. The systems came first because we needed them: measurement tools, quoting workflows, automated follow-up, reporting that reflected reality instead of what we wished were true. They were built to solve problems we were personally losing money to.',
    },
    {
      type: 'paragraph',
      text: 'That origin shows up in how we work. We start by watching, because we know how far a documented process drifts from the real one. We insist on measuring before quoting, because we have seen what estimating from a meeting produces. And we stay after launch, because we know that the six weeks after go-live are where a system is actually won or lost.',
    },
    { type: 'heading', level: 2, text: 'What we believe about this work' },
    {
      type: 'paragraph',
      text: '**The recommendation is the easy part.** Anyone who has spent a week in a business can tell you what is broken. Far fewer will stand there while it gets fixed.',
    },
    {
      type: 'paragraph',
      text: '**Measurement before proposal, always.** A price quoted before the workflow is measured is a guess in a suit. If we cannot measure it, we do not have a quote — and we will tell you that rather than invent one.',
    },
    {
      type: 'paragraph',
      text: '**You should own everything.** Your accounts, your credentials, your data, your documentation. A vendor whose work stops functioning when you stop paying has built their renewal into your operations.',
    },
    {
      type: 'paragraph',
      text: '**Capacity is the constraint that keeps the work good.** Two concurrent engagements, hard cap. It costs us revenue and it is the reason the work is worth buying.',
    },
    {
      type: 'paragraph',
      text: '**Say the hard thing early.** If the measurement says do not proceed, that is the finding. It has happened and it will happen again.',
    },
    { type: 'heading', level: 2, text: 'What we are not' },
    {
      type: 'paragraph',
      text: 'Not a staffing firm, not a consultancy, not a software product, not an agency with a new label. We take a small number of engagements and go deep on them.',
    },
    {
      type: 'paragraph',
      text: 'We are also not enterprise-scale. If you need a vendor with a compliance department and a global delivery model, that is a legitimate requirement and we are not it.',
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
      headline: 'About ikonic303',
      description:
        'ikonic303 builds and runs operating systems for mid-size companies, and runs its own business on the same kind of systems.',
      section: 'About',
    }),
  ],
  related: [
    { label: 'How an engagement runs', href: '/how-we-work' },
    { label: 'Who we work with', href: '/who-we-work-with' },
    { label: 'What is a forward deployed engineer?', href: '/forward-deployed-engineering' },
  ],
};
