import type { PageContent } from '../types';
import { crumbs } from './_shared';

/**
 * Homepage content. Rendered with a bespoke layout in src/pages/Home.tsx (hero +
 * extraction blockquote above the fold, then these sections), and emitted verbatim
 * for crawlers by the build-time prerender. Both read this module — no drift.
 */
export const home: PageContent = {
  slug: '/',
  seo: {
    title: 'Forward Deployed Engineering for Operating Companies',
    description:
      "We embed with your team, measure what one workflow actually costs you, build the software into your stack, and stay to run it. Not a deck. Not a pilot.",
  },
  breadcrumb: crumbs(),
  eyebrow: 'FORWARD DEPLOYED ENGINEERING',
  h1: "We don't hand you a strategy. We move in and build the thing.",
  answer:
    'Forward deployed engineering for companies between 50 and 500 people. We sit inside one of your workflows until we understand what it truly costs you, build software that removes most of that cost, put it into production alongside your team, and stay long enough that it still works after we stop watching it.',
  sections: [
    {
      type: 'blockquote',
      text: "Every engagement starts with one number: what that workflow costs you today, measured on site with your people. If we can't measure it, there's no engagement — and we'll tell you that for free.",
    },
    {
      type: 'heading',
      level: 2,
      text: 'You do not have an AI problem. You have a production problem.',
    },
    {
      type: 'paragraph',
      text: "You have probably already bought AI. Someone ran a pilot. It demoed well. It is not in anyone's daily workflow eleven months later.",
    },
    {
      type: 'paragraph',
      text: "That gap is the whole industry's open secret, and it is not because the models are weak. It is because the distance between a thing that works in a demo and a thing that works on a Tuesday, at 4pm, when the person using it is behind and annoyed is engineering work — process redesign, integration into systems nobody has documented, error handling for the cases your ops team knows about and never wrote down, and the political work of getting a team to actually change how they do their job.",
    },
    {
      type: 'paragraph',
      text: 'Consultants stop at the recommendation. Agencies stop at the deliverable. Software vendors ship you a product and leave the fitting to you.',
    },
    { type: 'paragraph', text: '**Somebody has to move in.** That is the job.' },
    { type: 'heading', level: 2, text: 'What we actually do' },
    { type: 'paragraph', text: 'Three sentences, no adjectives.' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**We measure.** On site, with your people, for as long as it takes: how many hours, how many people, how much rework, how much leaks out the side in lost quotes and missed follow-ups. Real observation and real payroll numbers — never an estimate from a meeting.',
        '**We build.** Software into your existing stack. Your CRM, your ERP, your spreadsheets, your phone system. Agents that do work rather than chat about it. Dashboards your people will actually open.',
        '**We stay.** Through the part everyone else skips: the six weeks after launch where the real edge cases surface and the team either adopts it or quietly goes back to the spreadsheet.',
      ],
    },
    {
      type: 'paragraph',
      text: '**What we do not do:** strategy decks, maturity assessments, roadmaps, or pilots designed to justify the next phase. If the measurement says there is nothing worth building, we say so and stay in touch.',
    },
    {
      type: 'heading',
      level: 2,
      text: '50 to 500 people, and one workflow that everybody knows is broken',
    },
    { type: 'paragraph', text: 'You are the right fit if:' },
    {
      type: 'list',
      items: [
        'You are an **operating company** — you build, install, deliver, distribute, or service something real.',
        'Somewhere between **50 and 500 people**.',
        'There is **one workflow everybody complains about** — quote-to-invoice, dispatch, intake, RFQ response, claims, onboarding — and it has been broken for years.',
        'You have **the systems already** (a CRM, an ERP, a scheduler), and the problem is the seams between them, not the absence of them.',
        'Somebody in the room can **authorize a real number** without a committee.',
      ],
    },
    {
      type: 'paragraph',
      text: 'You are probably the wrong fit if you want a pilot, want a strategy document, want it fixed in three weeks, or want the cheapest quote. All four are honest reasons to work with somebody else, and we would rather say it now.',
    },
    {
      type: 'ctaRow',
      links: [{ label: 'More on who we work with →', href: '/who-we-work-with' }],
    },
    { type: 'heading', level: 2, text: 'Your four options, with the trade-offs named' },
    {
      type: 'table',
      headers: ['', 'What you get', 'What it costs you'],
      rows: [
        [
          '**Hire in-house**',
          'Permanent capability, full control',
          'A senior hire, a long search, and an onboarding curve — for a role where the US talent pool is genuinely thin',
        ],
        [
          '**Big consulting firm**',
          'Brand safety, a thorough document',
          'Discovery billed by the month, and a recommendation you still have to build',
        ],
        [
          '**Automation agency**',
          'Fast, cheap, ships something',
          'Built on their platform, on their account, and it degrades the week they stop touching it',
        ],
        [
          '**Forward deployed engineering**',
          'Someone who builds it and owns whether it works in production',
          'You have to let an outsider genuinely inside one part of your business',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: "That last row's cost is real. It is the actual trade. We put it on the homepage because you are going to think it anyway.",
    },
    {
      type: 'ctaRow',
      links: [
        {
          label: 'Forward deployed engineer vs consultant →',
          href: '/forward-deployed-engineer-vs-consultant',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'We publish the arithmetic. We do not publish a price.',
    },
    {
      type: 'paragraph',
      text: 'Every engagement is priced off what the workflow costs you today — measured, not guessed. That number is different at every company, so a price list would be a lie in both directions.',
    },
    {
      type: 'paragraph',
      text: 'What you can see before you talk to anyone is **exactly how the number is arrived at**: the labour line, the rework line, the leakage line, and the percentage of it we think we can realistically remove. The whole worksheet is on the page below, and you are welcome to run it yourself and never call us.',
    },
    {
      type: 'ctaRow',
      links: [{ label: 'How the number is arrived at →', href: '/what-it-costs' }],
    },
  ],
  faqs: [
    {
      question: 'What is a forward deployed engineer?',
      answer:
        'An engineer who embeds with the team that has the problem and owns the work from discovery through production — combining software engineering with process redesign and stakeholder management, rather than stopping at a recommendation or a prototype.',
    },
    {
      question: 'How is this different from hiring a consultant?',
      answer:
        "A consultant's deliverable is the recommendation. Ours is the running system, and we are judged on whether it is still in use six months later.",
    },
    {
      question: 'How long does an engagement take?',
      answer:
        'Roughly ten weeks from first measurement to a system running in production, then an ongoing period where we operate it with your team.',
    },
    {
      question: 'Do we own what you build?',
      answer:
        'Yes. It runs on your accounts, in your stack, documented, with your team trained on it. If we walked away it would keep running — that is the test we build to.',
    },
    {
      question: 'What does it cost?',
      answer:
        'Priced per engagement against what the workflow costs you today. We publish the arithmetic, not a price.',
    },
    {
      question: 'Do you work outside Colorado?',
      answer:
        'Yes. The measurement phase is on site wherever you are; the build is remote; we come back for launch.',
    },
  ],
  related: [
    { label: 'What is a forward deployed engineer?', href: '/forward-deployed-engineering' },
    { label: 'How an engagement runs', href: '/how-we-work' },
    { label: 'What it costs', href: '/what-it-costs' },
    { label: 'Who we work with', href: '/who-we-work-with' },
  ],
};
