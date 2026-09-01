import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/guides/agency-vs-consultant-vs-fde';

export const guideAgencyVsConsultantVsFde: PageContent = {
  slug,
  seo: {
    title: 'Agency, Consultant, or Embedded Engineer: Which One',
    description:
      'Three ways to buy this work, three genuinely different trades. What each is good at, what each costs you, and how to tell which you are being sold.',
  },
  breadcrumb: crumbs(
    { name: 'Guides', href: '/guides' },
    { name: 'Agency, consultant, or FDE', href: slug },
  ),
  eyebrow: 'GUIDE',
  h1: 'Agency, consultant, or forward deployed engineer',
  answer:
    'An automation agency ships fast and cheap on their platform. A consultant produces analysis you still have to build. An embedded engineer builds it into your stack and owns whether it works in production. The right answer depends on how much of the risk you want to keep — and all three are correct for somebody.',
  sections: [
    { type: 'heading', level: 2, text: 'The three, honestly' },
    { type: 'heading', level: 3, text: 'Automation agency' },
    {
      type: 'paragraph',
      text: '**Good at:** speed, breadth, cost. Connecting known tools in known ways. If your need is “these five apps should talk to each other,” an agency will do it faster and for less than anyone else, and you should let them.',
    },
    {
      type: 'paragraph',
      text: '**The trade:** it usually lives on their platform, in their tenant, on their integration accounts. It also degrades — automations break when a vendor changes an API, and if nobody is watching, they break silently.',
    },
    {
      type: 'paragraph',
      text: '**Choose one when:** the need is well-defined, tool-shaped, and not existential. Ask one question first: **“Whose account does this run on?”**',
    },
    { type: 'heading', level: 3, text: 'Management consultant' },
    {
      type: 'paragraph',
      text: '**Good at:** structured analysis, cross-functional problems, situations needing an outside voice with standing. Genuinely valuable when the question is what should we do rather than how do we do it.',
    },
    {
      type: 'paragraph',
      text: '**The trade:** the deliverable is the recommendation. Building it is a separate project, separately funded, usually starting months later — by which time the analysis has aged and the momentum is gone.',
    },
    {
      type: 'paragraph',
      text: '**Choose one when:** the question is strategic, the problem is company-wide, or you need the brand for a board or a lender. Those are real needs.',
    },
    { type: 'heading', level: 3, text: 'Forward deployed engineer' },
    {
      type: 'paragraph',
      text: '**Good at:** one workflow, deep, all the way into production and adoption. Carrying the risk that it actually works in real life.',
    },
    {
      type: 'paragraph',
      text: '**The trade:** slower than an agency and narrower than a consultancy. Costs more per workflow. And you have to let an outsider genuinely inside one part of your business, which not every company can do.',
    },
    {
      type: 'paragraph',
      text: '**Choose one when:** the workflow is expensive, the previous attempt died before production, and you need to own the result rather than rent it.',
    },
    { type: 'heading', level: 2, text: 'Side by side' },
    {
      type: 'table',
      headers: ['', 'Agency', 'Consultant', 'Embedded engineer'],
      rows: [
        ['Deliverable', 'Working automations', 'Analysis and recommendation', 'A production system in use'],
        ['Runs on', 'Usually their platform', 'n/a', 'Your stack, your accounts'],
        ['Ends at', 'Delivery', 'Report accepted', 'Adoption'],
        ['Scope', 'Broad, shallow', 'Broad, analytical', 'Narrow, deep'],
        ['Speed', 'Fastest', 'Medium', 'Slower to production, faster to value'],
        ['Cost', 'Lowest', 'Highest per week', "Priced against the workflow's measured cost"],
        ['Who carries the risk', 'You', 'You', 'Them'],
        ['Fails by', 'Silent degradation', 'Never getting built', 'Being the wrong scope'],
      ],
    },
    { type: 'heading', level: 2, text: 'How to tell which one you are actually being sold' },
    {
      type: 'paragraph',
      text: 'The labels have blurred badly. Agencies advertise engineering; consultancies advertise deployment. Three questions cut through:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**“Who writes the code, and on whose accounts does it run?”** — the single most revealing question. “Ours” for accounts means a dependency you will discover at renewal.',
        '**“What is the last thing you deliver?”** A document, a handover pack, or a system in daily use. These are three different products.',
        "**“What is your fee tied to?”** Hours reward duration. A fee tied to the workflow's measured cost rewards removing it. Neither is dishonest — but they point in different directions and you should know which way yours points.",
      ],
    },
    { type: 'heading', level: 2, text: 'The combination that usually works' },
    {
      type: 'paragraph',
      text: 'Most mid-size companies should not pick one for everything:',
    },
    {
      type: 'list',
      items: [
        '**Agency** for the tool-to-tool plumbing — cheap, fast, replaceable.',
        '**Embedded engineering** for the one or two workflows that are genuinely yours and genuinely expensive.',
        '**Consultant** when the question is strategic rather than operational.',
      ],
    },
    {
      type: 'paragraph',
      text: 'The mistake is using one for all three. An agency on your most important workflow leaves you renting your own operations. A consultancy on your plumbing costs a fortune and produces a document.',
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'Forward deployed engineer vs consultant, in full →', href: '/forward-deployed-engineer-vs-consultant' },
        { label: 'Twelve questions before you sign →', href: '/guides/twelve-questions-before-you-sign' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'Agency, consultant, or forward deployed engineer',
      description: 'Three genuinely different trades for buying automation work, and how to tell which you are being sold.',
      section: 'Guides',
    }),
  ],
  related: [
    { label: 'Forward deployed engineer vs consultant', href: '/forward-deployed-engineer-vs-consultant' },
    { label: 'Twelve questions before you sign', href: '/guides/twelve-questions-before-you-sign' },
    { label: 'Who owns the system', href: '/guides/who-owns-the-system' },
  ],
};
