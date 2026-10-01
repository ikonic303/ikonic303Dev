import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/guides/how-to-read-an-automation-quote';

export const guideHowToReadAnAutomationQuote: PageContent = {
  slug,
  seo: {
    title: 'How to Read an Automation Quote Before You Sign',
    description:
      'Five things to find in any automation or AI quote: what it is priced against, the last deliverable, the recurring costs, who owns it, and what is excluded.',
  },
  breadcrumb: crumbs(
    { name: 'Guides', href: '/guides' },
    { name: 'How to read an automation quote', href: slug },
  ),
  eyebrow: 'GUIDE',
  h1: 'How to read an automation quote',
  answer:
    'Skip the total and read five things first: what the price is anchored to, what the last deliverable is, which costs recur, whose accounts it runs on, and what is excluded. Then put every quote on a three-year total against the annual cost of the workflow. Most quotes look very different after that.',
  sections: [
    { type: 'heading', level: 2, text: 'Read it in this order' },
    {
      type: 'paragraph',
      text: 'The total is on the first page because it is the number the vendor wants you to react to. Turn to the back. The five things below are usually spread across the scope, the assumptions and the terms, and each one changes what the total actually means.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**What the price is anchored to** — hours, a fixed scope, or the value of the workflow.',
        '**The last deliverable** — what exists on the final day of the engagement.',
        '**The recurring lines** — everything you keep paying after the build.',
        '**Ownership** — whose accounts, whose credentials, whose code.',
        '**The exclusions** — what the quote quietly assumes you will do.',
      ],
    },

    { type: 'heading', level: 2, text: '1. What the price is anchored to' },
    {
      type: 'paragraph',
      text: 'Every quote is built from something. Find out what, because it tells you what the vendor is rewarded for.',
    },
    {
      type: 'table',
      headers: ['Priced on', 'What it rewards', 'What to check'],
      rows: [
        [
          'Hours × rate',
          'More hours',
          'Is there a cap? Who decides when the estimate is exceeded?',
        ],
        [
          'Fixed fee for a scope',
          'Doing exactly the scope, and charging for anything else',
          'How tightly the scope is written, and the rate for change requests',
        ],
        [
          'Proportion of measured value',
          'The workflow actually getting cheaper',
          'Whether the measurement exists yet, and who did it',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: '**None of these is wrong on its own.** The problem is a quote that does not say. If you cannot tell from the document how the number was produced, it was most likely produced from a rate card and then justified backwards.',
    },
    {
      type: 'paragraph',
      text: 'The other check: **was anything measured before the price was written?** A quote issued after one call has not seen your workflow. It is a guess with a currency sign in front of it, however precise the figure looks.',
    },

    { type: 'heading', level: 2, text: '2. The last deliverable' },
    {
      type: 'paragraph',
      text: 'Find the final line of the deliverables list. It tells you where the vendor’s responsibility stops, and therefore where yours starts.',
    },
    {
      type: 'list',
      items: [
        '**“Documentation and handover”** — the build is theirs, getting people to use it is yours.',
        '**“Training session”** — same, with a one-hour meeting in between.',
        '**“Go-live”** — they are there on the day it switches on, and gone during the weeks when it breaks.',
        '**“A system in daily use, operated by your team”** — the vendor carries the adoption risk.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Automation projects rarely fail in the build. They fail in the weeks after go-live, when the old way of working is still available and nobody is there to fix the first edge case. A quote that ends at go-live has priced the easy part.',
    },

    { type: 'heading', level: 2, text: '3. The recurring lines' },
    {
      type: 'paragraph',
      text: 'This is where two quotes with the same headline price turn out to be very different. List everything you will pay after the build, including what you pay to other companies because of it:',
    },
    {
      type: 'list',
      items: [
        '**Software licences** — per seat, per account, per location.',
        '**Usage charges** — automation tasks or runs, AI model usage, text messages, phone minutes. These scale with volume, so ask what they come to at your busiest month, not your average one.',
        '**Hosting and infrastructure**, if anything is built outside an off-the-shelf platform.',
        '**Support or retainer** — and exactly what it covers. “Support” that excludes changes is a monitoring fee.',
        '**Change requests** — the hourly rate for anything outside the scope. You will use it.',
      ],
    },
    { type: 'paragraph', text: 'Then put it on one line:' },
    {
      type: 'codeblock',
      code: `   build / deployment fee          ____
 + year-one recurring costs        ____
 + years two and three recurring   ____
 + expected change requests        ____   ← if unsure, 15% of the build
 = THREE-YEAR COST                 ____`,
    },
    {
      type: 'paragraph',
      text: 'Three years, because that is roughly how long a workflow system runs before someone wants it rebuilt. A quote that is cheap to build and expensive to keep can easily cost more over three years than one that is the other way round.',
    },

    { type: 'heading', level: 2, text: '4. Ownership' },
    {
      type: 'paragraph',
      text: 'Most quotes do not mention ownership, which is itself the answer. Look for these, and ask for them in writing if they are missing:',
    },
    {
      type: 'list',
      items: [
        '**Accounts** — is the platform licensed and billed to you, or to the vendor’s agency account?',
        '**Credentials** — do they sit in your password manager, or does the vendor “manage that for you”?',
        '**Code and configuration** — if anything is custom, who owns it, and where is it stored?',
        '**Data** — can you export all of it, and has anyone tested that the export is complete?',
      ],
    },
    {
      type: 'paragraph',
      text: 'A system running on the vendor’s accounts is not a cheaper version of the same thing. It is a different product: you are renting it, and the renewal price will reflect how hard it is to leave. [The full ownership checklist →](/guides/who-owns-the-system)',
    },

    { type: 'heading', level: 2, text: '5. The exclusions' },
    {
      type: 'paragraph',
      text: 'The assumptions section is the most important page in most quotes and the one people read last. Phrases to look for, and what they usually mean:',
    },
    {
      type: 'table',
      headers: ['The quote says', 'What it usually means'],
      rows: [
        ['“Client to provide clean data”', 'Cleaning the data is your job, and it is often the largest job.'],
        ['“Subject to API availability”', 'Nobody has checked whether the integration is possible yet.'],
        ['“Client to provide a project lead”', 'Someone on your side for several hours a week. Who?'],
        ['“Standard configuration”', 'Anything specific to how you work is a change request.'],
        ['“Up to N revisions”', 'Fine — check N against how many people will have opinions.'],
        ['“Excludes third-party fees”', 'The recurring lines in section 3 are not in this number.'],
      ],
    },
    {
      type: 'paragraph',
      text: 'None of these is unreasonable. A vendor cannot be responsible for data it has never seen. But each one moves cost from the quote onto you, and you should add that cost back before comparing.',
    },

    { type: 'heading', level: 2, text: 'Comparing two quotes' },
    {
      type: 'paragraph',
      text: 'Put them side by side on the same rows. If a quote does not answer a row, write “not stated” — that is a finding, not a blank.',
    },
    {
      type: 'table',
      headers: ['', 'Quote A', 'Quote B'],
      rows: [
        ['Priced on', '', ''],
        ['Measured before pricing?', '', ''],
        ['Last deliverable', '', ''],
        ['Three-year cost', '', ''],
        ['Runs on whose accounts', '', ''],
        ['Exclusions you will have to cover', '', ''],
        ['Outcome committed to in writing', '', ''],
      ],
    },
    {
      type: 'paragraph',
      text: 'Then compare the three-year cost to what the workflow costs you each year today. If you have not worked that out, do it first — [the worksheet takes about two hours](/guides/cost-of-a-manual-workflow). **If the three-year cost is larger than the value you can realistically remove over three years, the right answer is neither quote.**',
    },

    { type: 'heading', level: 2, text: 'How we write ours' },
    { type: 'paragraph', text: 'Fair to say, since we wrote the list.' },
    {
      type: 'paragraph',
      text: 'Our quotes are written after the measurement, not before, and priced as a proportion of the measured annual value: a deployment fee for the build and an ongoing fee for operating it. The percentage of cost we expect to remove is in the scope document. The last deliverable is a system in daily use, with an operating period after go-live inside the scope. Everything runs on your accounts with credentials in your names. And if the measured cost of the workflow is too small to justify an engagement, the quote is a recommendation not to buy one.',
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'What it costs →', href: '/what-it-costs' },
        { label: 'Twelve questions before you sign →', href: '/guides/twelve-questions-before-you-sign' },
        { label: 'Start with the measurement →', href: '/contact' },
      ],
    },
  ],
  faqs: [
    {
      question: 'What should an automation quote include?',
      answer:
        'How the price was calculated, the final deliverable, every recurring cost after the build (licences, usage charges, hosting, support and the change-request rate), whose accounts and credentials the system runs on, and a written list of assumptions and exclusions.',
    },
    {
      question: 'Why do two automation quotes for the same work differ so much?',
      answer:
        'Usually because they cover different things. One may end at go-live while the other includes an operating period; one may exclude data cleanup or third-party fees. Compare them on a three-year total with exclusions added back, not on the headline figure.',
    },
    {
      question: 'Is a fixed-price automation quote safer than an hourly one?',
      answer:
        'Only if the scope is written tightly. A fixed price moves the overrun risk to the vendor for what is in scope and back to you for everything else, at the change-request rate. Check the scope and that rate before treating fixed as safer.',
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'How to read an automation quote',
      description:
        'The five things to find in an automation or AI quote before signing, a three-year cost worksheet, and a side-by-side template for comparing quotes.',
      section: 'Guides',
    }),
  ],
  related: [
    { label: 'Twelve questions to ask before you sign', href: '/guides/twelve-questions-before-you-sign' },
    { label: 'Who owns the system when it is built for you', href: '/guides/who-owns-the-system' },
    { label: 'What a manual workflow costs you', href: '/guides/cost-of-a-manual-workflow' },
  ],
};
