import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/guides/which-workflow-to-automate-first';

export const guideWhichWorkflowFirst: PageContent = {
  slug,
  seo: {
    title: 'How to Choose Which Workflow to Automate First',
    description:
      'Not the most annoying one and not the easiest one. Score candidates on four things, and pick the highest — even if it is the scary one.',
  },
  breadcrumb: crumbs(
    { name: 'Guides', href: '/guides' },
    { name: 'Which workflow first', href: slug },
  ),
  eyebrow: 'GUIDE',
  h1: 'How to choose which workflow to automate first',
  answer:
    'Score each candidate on four things: what it costs you a year, how well-defined it is, whether someone senior will let the process change, and whether the people who do it want it fixed. Pick the highest total. It is usually not the most annoying workflow, and it is almost never the easiest one.',
  sections: [
    {
      type: 'paragraph',
      text: 'Most companies choose wrong in one of two directions: the loudest complaint, or the easiest win. Both are understandable and both waste the first engagement, which is the one that determines whether you ever get a second.',
    },
    { type: 'heading', level: 2, text: 'The four criteria' },
    { type: 'heading', level: 3, text: '1. Annual cost — weight this heaviest' },
    {
      type: 'paragraph',
      text: 'Run the worksheet on each candidate. Labour, rework, leakage. [The worksheet →](/guides/cost-of-a-manual-workflow)',
    },
    {
      type: 'paragraph',
      text: 'This alone reorders the list at most companies, because **frustration and cost are only loosely related.** The thing everybody complains about is often a two-hour weekly irritation. The thing nobody mentions — quotes going out three days late — is $70,000 a year.',
    },
    { type: 'heading', level: 3, text: '2. Definition' },
    {
      type: 'paragraph',
      text: 'Can you draw it on one page and get agreement that this is what really happens?',
    },
    {
      type: 'paragraph',
      text: 'If three people describe it three different ways, that is not a bad sign about the people; it means the process has drifted and nobody has looked. **Fixable, but it is week one’s work.** An undefined workflow is not un-automatable — it is just not ready to be scoped.',
    },
    { type: 'heading', level: 3, text: '3. Permission to change' },
    {
      type: 'paragraph',
      text: 'Is there one senior person who can say “yes, the process itself may change”?',
    },
    {
      type: 'paragraph',
      text: 'Without it you get to automate the current steps exactly as they are, which typically recovers a fifth of the available value. **This criterion is binary, not a score.** A workflow where the process is frozen should be crossed off the list entirely, regardless of how expensive it is.',
    },
    { type: 'heading', level: 3, text: '4. Appetite from the people who do it' },
    {
      type: 'paragraph',
      text: 'Do the people doing the work want it fixed, or do they think this is about replacing them?',
    },
    {
      type: 'paragraph',
      text: 'That question decides adoption, and adoption decides whether any of it counts. A workflow where the team is desperate for help is worth far more than a slightly more expensive one where the team is defensive.',
    },
    {
      type: 'paragraph',
      text: '**And this is the one thing you can change before you start.** Ask them what they would fix. Build that. The politics of the whole project change.',
    },
    { type: 'heading', level: 2, text: 'A scoring sheet you can actually use' },
    {
      type: 'paragraph',
      text: 'Score 1–5 on each. Multiply cost by 2 — it matters more than the rest.',
    },
    {
      type: 'table',
      headers: ['Workflow', 'Annual cost (×2)', 'Definition', 'Permission', 'Appetite', 'Total'],
      rows: [
        ['Quote-to-invoice', '5 → 10', '4', '5', '4', '**23**'],
        ['Order entry', '3 → 6', '5', '3', '5', '**19**'],
        ['Onboarding', '2 → 4', '2', '5', '3', '**14**'],
      ],
    },
    {
      type: 'paragraph',
      text: 'Then apply the veto: **any workflow scoring 1 or 2 on Permission is off the list**, regardless of total. There is no point building something the business will not allow to work.',
    },
    { type: 'heading', level: 2, text: 'Three tie-breakers' },
    {
      type: 'paragraph',
      text: '**Prefer the one with a measurable output.** If success can be stated as a number that already exists in a system — quote turnaround, second-visit rate, days to invoice — you will be able to prove the result. If success requires a new measurement, you will spend the whole engagement arguing about the baseline.',
    },
    {
      type: 'paragraph',
      text: '**Prefer the one that touches revenue over the one that touches cost.** Same value on paper, but a revenue result is believed and a cost saving is debated.',
    },
    {
      type: 'paragraph',
      text: '**Prefer the one whose people you can actually get access to.** A better workflow whose team is unavailable for ten weeks is a worse project.',
    },
    { type: 'heading', level: 2, text: 'What not to pick first' },
    {
      type: 'list',
      items: [
        '**The company-wide one.** Cross-functional projects fail on politics, not engineering. Not first.',
        '**The one an executive is attached to but nobody uses.** You will succeed technically and fail visibly.',
        '**The one that is currently mid-change.** Wait for the new system to settle or you are building on sand.',
        '**The cheap easy one, “to prove the concept.”** You will prove that easy things are easy, spend real money doing it, and be no closer to the decision that matters.',
      ],
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'The measurement worksheet →', href: '/what-it-costs' },
        { label: 'Why pilots die →', href: '/guides/why-ai-pilots-die' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'How to choose which workflow to automate first',
      description: 'Score candidates on annual cost, definition, permission to change, and team appetite.',
      section: 'Guides',
    }),
  ],
  related: [
    { label: 'What a manual workflow costs you', href: '/guides/cost-of-a-manual-workflow' },
    { label: 'You cannot automate a mess', href: '/guides/you-cannot-automate-a-mess' },
    { label: 'How an engagement runs', href: '/how-we-work' },
  ],
};
