import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/guides/you-cannot-automate-a-mess';

export const guideYouCannotAutomateAMess: PageContent = {
  slug,
  seo: {
    title: 'You Cannot Automate a Mess — Fix This Order',
    description:
      'Automation applied to a broken process produces a faster broken process. What has to be true before you automate, and how to get there quickly.',
  },
  breadcrumb: crumbs(
    { name: 'Guides', href: '/guides' },
    { name: 'You cannot automate a mess', href: slug },
  ),
  eyebrow: 'GUIDE',
  h1: 'You cannot automate a mess',
  answer:
    'Automation applied to a broken process produces a broken process at higher speed and lower visibility. Before automating, three things must be true: the process is defined, the data it runs on is trustworthy, and someone owns the outcome. Getting there is usually two weeks of work, not a transformation programme.',
  sections: [
    {
      type: 'paragraph',
      text: 'The phrase gets used to justify unlimited delay — endless cleanup before anything useful ships. That is also wrong. Here is the practical version.',
    },
    { type: 'heading', level: 2, text: 'The three prerequisites' },
    { type: 'heading', level: 3, text: '1. The process is defined' },
    {
      type: 'paragraph',
      text: 'Not documented. **Defined** — you can draw what really happens on one page and the people who do it agree.',
    },
    {
      type: 'paragraph',
      text: 'The test: ask three people who touch it to describe it separately. Three different answers means the process has drifted and nobody has looked in years. Normal, and about a week to fix by watching rather than by workshopping.',
    },
    {
      type: 'paragraph',
      text: "**What you do not need:** a process improvement programme, a swim-lane diagram, or a consultant's map. One page. Agreement.",
    },
    { type: 'heading', level: 3, text: '2. The data is trustworthy where it matters' },
    {
      type: 'paragraph',
      text: 'Not clean everywhere. Trustworthy **in the fields the automation depends on**.',
    },
    {
      type: 'paragraph',
      text: 'If the system will match orders to customers, customer records must be reliable. Whether every contact has a job title is irrelevant. **Scope the cleanup to the fields in the path**, which turns a six-month data project into a two-week one.',
    },
    {
      type: 'paragraph',
      text: 'The test: pick 20 records at random and check the fields that matter. If more than two are wrong, fix before building. Fewer than two, build and handle it as an exception.',
    },
    { type: 'heading', level: 3, text: '3. Someone owns the outcome' },
    {
      type: 'paragraph',
      text: 'One named person who is accountable for the workflow working — not for the software, for the **outcome**.',
    },
    {
      type: 'paragraph',
      text: 'Without this the automation has no owner, so when it drifts nobody notices, and when it fails everyone assumes somebody else is handling it. **This is the prerequisite people skip and it is the one that determines whether the system exists in a year.**',
    },
    { type: 'heading', level: 2, text: 'What is NOT a prerequisite' },
    {
      type: 'paragraph',
      text: 'Worth saying, because these get used to stall projects indefinitely:',
    },
    {
      type: 'list',
      items: [
        '**Perfect data everywhere.** Only the path matters.',
        '**A new CRM.** Migrating before fixing entry habits reproduces the mess in a nicer interface, later, more expensively.',
        '**Full documentation.** One page.',
        '**Everyone agreeing.** You need one authoriser and one operator. Universal consensus is not achievable and waiting for it is a decision to do nothing.',
        '**A finished digital transformation strategy.** Fix one workflow. Learn. Then decide.',
      ],
    },
    { type: 'heading', level: 2, text: 'The two-week version' },
    {
      type: 'paragraph',
      text: 'If you fail the prerequisites, this is usually the whole remedy:',
    },
    {
      type: 'list',
      items: [
        '**Days 1–4:** watch the process. Not interviews — sit with people. Draw the real one.',
        '**Days 5–6:** show the drawing to everyone who touches it. Fix it until they agree.',
        '**Days 7–8:** sample 20 records for the fields in the path. Count errors.',
        '**Days 9–10:** fix the sampled field problems, or design around them.',
        "**Day 11:** name the owner. Out loud, in a meeting, with their manager present.",
        '**Days 12–14:** decide what should stop existing rather than be automated. There is always at least one.',
      ],
    },
    { type: 'paragraph', text: 'That is it. Two weeks, no programme.' },
    { type: 'heading', level: 2, text: 'The exception worth respecting' },
    {
      type: 'paragraph',
      text: "**If the process is broken because two departments are in conflict, stop.** Automation makes that measurably worse — it encodes one department's version of reality into software and hands the other side a permanent grievance.",
    },
    {
      type: 'paragraph',
      text: 'That is a management problem and it must be solved by management first. It is the one situation where “you cannot automate a mess” should genuinely stop a project rather than delay it two weeks.',
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'Which workflow to automate first →', href: '/guides/which-workflow-to-automate-first' },
        { label: 'CRM and sales systems →', href: '/services/crm-and-sales-systems' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'You cannot automate a mess',
      description:
        'The three prerequisites before automating — defined process, trustworthy data in the path, a named owner — and the two-week way to get there.',
      section: 'Guides',
    }),
  ],
  related: [
    { label: 'Which workflow to automate first', href: '/guides/which-workflow-to-automate-first' },
    { label: 'CRM and sales systems', href: '/services/crm-and-sales-systems' },
    { label: 'Why AI pilots die', href: '/guides/why-ai-pilots-die' },
  ],
};
