import type { PageContent } from '../types';
import { ORIGIN, crumbs } from './_shared';

const slug = '/contact';

const contactSchema: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${ORIGIN}${slug}`,
  name: 'Contact ikonic303',
  url: `${ORIGIN}${slug}`,
  mainEntity: {
    '@type': 'Organization',
    name: 'ikonic303',
    url: `${ORIGIN}/`,
    email: 'solutions@ikonic303.dev',
    areaServed: { '@type': 'Country', name: 'United States' },
  },
};

export const contact: PageContent = {
  slug,
  seo: {
    title: 'Contact — Start With the Measurement',
    description:
      'Tell us which workflow everybody complains about. The first conversation is a measurement, not a pitch, and you keep the number either way.',
  },
  breadcrumb: crumbs({ name: 'Contact', href: slug }),
  eyebrow: 'CONTACT',
  h1: 'Start with the measurement',
  answer:
    "The first conversation is not a pitch. It is a short version of the measurement: which workflow, how many people touch it, how long it takes, what it costs when it goes wrong. Sometimes that conversation ends with us telling you there is not enough in it to be worth anyone's money. That is a legitimate outcome and it is free.",
  sections: [
    { type: 'heading', level: 2, text: 'What to bring' },
    { type: 'paragraph', text: 'Nothing prepared. Just be able to answer:' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Which workflow does everybody complain about?**',
        '**Roughly how many people touch it, and for roughly how many hours a week?**',
        '**What happens when it goes wrong** — who fixes it, and how long does that take?',
        '**What have you already tried?**',
      ],
    },
    {
      type: 'paragraph',
      text: 'If you would rather run the numbers yourself first, the full worksheet is public. [The measurement worksheet →](/what-it-costs)',
    },
    { type: 'heading', level: 2, text: 'How to reach us' },
    {
      type: 'paragraph',
      text: '**Email — solutions@ikonic303.dev.** The best first contact. Describe the workflow in a few lines — which one it is, roughly how many people touch it, and what breaks when it goes wrong — and you will get a real reply from a person, Monday to Friday.',
    },
    {
      type: 'paragraph',
      text: '**Where we are:** Colorado. The measurement phase happens on site wherever you are; the build is remote; we come back for deployment.',
    },
    { type: 'heading', level: 2, text: 'What happens next' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**A conversation**, 30–45 minutes. Which workflow, and is there enough in it.',
        '**If it looks real, a site visit.** That is where measurement actually happens — with your people, in your building.',
        '**A number and a scope**, in writing, including the percentage of the cost we expect to remove.',
        '**You decide.** No sequence of follow-up calls designed to wear you down.',
      ],
    },
    { type: 'heading', level: 2, text: 'What we will not do with your details' },
    {
      type: 'paragraph',
      text: 'No list, no drip sequence, no third parties. You contacted us about a specific problem; we will reply about that problem. If it is not a fit, we will say so and that is the end of it.',
    },
  ],
  schema: [contactSchema],
  related: [
    { label: 'The measurement worksheet', href: '/what-it-costs' },
    { label: 'How an engagement runs', href: '/how-we-work' },
  ],
};
