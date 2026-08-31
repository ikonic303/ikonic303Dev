import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/who-we-work-with';

export const whoWeWorkWith: PageContent = {
  slug,
  seo: {
    title: 'Who We Work With — Operating Companies, 50–500 People',
    description:
      'We work with companies that build, install, deliver or service something real, have 50–500 people, and one workflow everybody already complains about.',
  },
  breadcrumb: crumbs({ name: 'Who we work with', href: slug }),
  eyebrow: 'WHO WE WORK WITH',
  h1: 'Who we work with',
  answer:
    'Operating companies between 50 and 500 people — firms that build, install, deliver, distribute or service something physical — with one workflow that everybody already complains about and a senior person who can authorise changing it. If you cannot name the workflow, the first job is not engineering.',
  sections: [
    { type: 'heading', level: 2, text: 'Why 50 to 500' },
    { type: 'paragraph', text: 'It is not a preference, it is where the arithmetic works.' },
    {
      type: 'paragraph',
      text: '**Below about 50 people**, the expensive workflows usually are not expensive enough. Two people spending part of their week on something painful is genuinely painful and usually is not a $75,000-a-year problem. Off-the-shelf software is the right answer and we will say so.',
    },
    {
      type: 'paragraph',
      text: '**Above about 500**, you can afford to hire the capability permanently, you probably have an internal platform team, and procurement will want a vendor with a compliance department. Frankly, you should hire.',
    },
    {
      type: 'paragraph',
      text: '**In between** is the gap: expensive enough workflows, no internal capacity to fix them, not enough continuous deployment work to justify a permanent hire. That gap is the entire business.',
    },
    { type: 'heading', level: 2, text: 'The four conditions' },
    { type: 'paragraph', text: 'All four, not three:' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**A named workflow.** Quote-to-invoice, dispatch, intake, RFQ response, claims, onboarding. Something you could point at on a whiteboard.',
        '**Systems already in place.** You have a CRM, an ERP, a scheduler. The problem is the seams between them and the humans stitching those seams by hand. If you have no systems at all, the first project is different work.',
        '**An authoriser.** One senior person who can say “yes, the process may change.” Automation that is only permitted to preserve the existing process removes maybe a fifth of the cost.',
        '**Tolerance for a hard answer.** In week four we hand you a number. Sometimes that number says do not proceed.',
      ],
    },
    { type: 'heading', level: 2, text: 'Where we do this most naturally' },
    {
      type: 'list',
      items: [
        '**[Construction and the trades →](/industries/construction-and-trades)** — estimating, quote-to-invoice, field-to-office',
        '**[Distribution and wholesale →](/industries/distribution-and-wholesale)** — order entry, quoting, inventory reconciliation',
        '**[Field service →](/industries/field-service)** — dispatch, intake, scheduling, parts',
        '**[Professional services →](/industries/professional-services)** — intake, matter setup, document handling',
      ],
    },
    {
      type: 'paragraph',
      text: 'Not on the list is not a no. The pattern travels: a workflow with humans copying data between systems, under time pressure, where mistakes are expensive.',
    },
    { type: 'heading', level: 2, text: 'Where we are honestly not the right call' },
    {
      type: 'list',
      items: [
        '**Regulated environments needing a compliance apparatus** — healthcare data, financial services, defence. Real requirements we do not currently carry.',
        '**You want ongoing feature development.** Hire developers.',
        '**Twenty small problems rather than one big one.** That is an operations hire.',
        '**The real problem is people.** Some broken workflows are broken because two departments do not talk. Software makes that measurably worse.',
      ],
    },
    { type: 'heading', level: 2, text: 'Geography' },
    {
      type: 'paragraph',
      text: 'The measurement phase happens on site, wherever you are. The build is remote. We return for deployment. Based in Colorado; we travel for the phases that need a person in the room.',
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'How an engagement runs →', href: '/how-we-work' },
        { label: 'Start with the measurement →', href: '/contact' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'Who we work with',
      description:
        'Operating companies of 50–500 people with a named, expensive workflow and a senior person able to authorise changing it.',
      section: 'Forward Deployed Engineering',
    }),
  ],
  related: [
    { label: 'How an engagement runs', href: '/how-we-work' },
    { label: 'What is a forward deployed engineer?', href: '/forward-deployed-engineering' },
    { label: 'What it costs', href: '/what-it-costs' },
  ],
};
