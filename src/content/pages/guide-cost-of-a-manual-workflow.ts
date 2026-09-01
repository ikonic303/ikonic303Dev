import type { PageContent } from '../types';
import { articleSchema, crumbs, howToSchema } from './_shared';

const slug = '/guides/cost-of-a-manual-workflow';

export const guideCostOfManualWorkflow: PageContent = {
  slug,
  seo: {
    title: 'What a Manual Workflow Actually Costs You Each Year',
    description:
      'Three lines: labour, rework, leakage. Most owners guess low by half because they use the salary rate and never count the third line at all.',
  },
  breadcrumb: crumbs(
    { name: 'Guides', href: '/guides' },
    { name: 'Cost of a manual workflow', href: slug },
  ),
  eyebrow: 'GUIDE',
  h1: 'What a manual workflow actually costs you',
  answer:
    'Add three lines: labour, rework, and leakage. Labour is people × hours × loaded rate × 52. Rework is incidents × hours to fix × loaded rate × 12. Leakage is everything the process loses that never appears on a P&L — lost quotes, mis-priced jobs, missed follow-ups. Most owners guess low by roughly half, because they use the salary rate instead of the loaded rate and never count leakage at all.',
  sections: [
    {
      type: 'paragraph',
      text: 'You can run this yourself this afternoon. It takes about two hours and you will use the number for years, whether or not you ever change anything.',
    },
    { type: 'heading', level: 2, text: 'Line A — Labour' },
    {
      type: 'codeblock',
      code: `   people doing it            ____
 × hours per week each        ____
 × loaded hourly rate         ____
 × 52
 = annual labour cost         ____`,
    },
    { type: 'paragraph', text: '**Two places this goes wrong.**' },
    {
      type: 'paragraph',
      text: 'The rate. Use the **loaded** rate — salary × roughly 1.3, though your controller has the real multiplier. Payroll taxes, benefits, equipment, software seats and floor space are genuine costs of that hour. Using the salary number undercounts by about a third, every time.',
    },
    {
      type: 'paragraph',
      text: 'The hours. Ask people and they will tell you the time it takes when it goes smoothly. Watch them and you get the true number, which includes the chasing, the re-checking, the finding of the thing, and the five minutes of re-orientation every time they get interrupted. **Watch. Don’t ask.**',
    },
    { type: 'heading', level: 2, text: 'Line B — Rework' },
    {
      type: 'codeblock',
      code: `   incidents per month        ____
 × hours to fix each          ____
 × loaded hourly rate         ____
 × 12
 = annual rework cost         ____`,
    },
    {
      type: 'paragraph',
      text: 'Rework is anything done twice: a re-quote, a corrected invoice, a re-dispatched truck, an order keyed wrong, a document re-issued.',
    },
    {
      type: 'paragraph',
      text: 'If nobody tracks these — and mostly nobody does — ask three people who touch the process how many happened last month. You will get three numbers within range of each other. That is enough. A conservative estimate you can defend beats a precise one you cannot get.',
    },
    {
      type: 'paragraph',
      text: '**Count the whole cost of one incident, not the obvious part.** A mis-keyed order line is not five minutes of picking. It is the return, the credit note, the re-ship, two phone calls, and the customer quietly getting a second quote next time.',
    },
    { type: 'heading', level: 2, text: 'Line C — Leakage, the one nobody counts' },
    {
      type: 'paragraph',
      text: 'This is usually the biggest number and there is no report for it, because leakage is made of absences.',
    },
    {
      type: 'list',
      items: [
        "**Quotes lost to slow response.** How many enquiries went cold? Average job value? Multiply. If you don’t know, compare close rates on quotes sent inside 24 hours against those sent after 72. Your own system knows both.",
        '**Jobs mis-priced** from stale numbers, delivered at or below cost.',
        '**Missed follow-ups** — quoted work simply never chased.',
        '**Overtime absorbing a peak** that a functioning process would have flattened.',
        '**Penalties and write-offs** from late or wrong delivery.',
      ],
    },
    {
      type: 'paragraph',
      text: 'You will not get leakage precisely. Get it approximately and mark it conservative. An under-counted leakage figure is still an honest figure, and it will still be larger than you expected.',
    },
    { type: 'codeblock', code: 'ANNUAL COST OF THE WORKFLOW = A + B + C' },
    { type: 'heading', level: 2, text: 'What to do with the number' },
    {
      type: 'paragraph',
      text: '**Under ~$75,000:** do not hire anybody to fix this. Buy software, or leave it alone. An embedded engagement will not pay for itself and anyone who tells you otherwise is selling.',
    },
    {
      type: 'paragraph',
      text: '**$75,000 to a few hundred thousand:** worth fixing properly. This is the range where a bounded engagement makes sense.',
    },
    {
      type: 'paragraph',
      text: '**Over that:** this is probably not one workflow. Split it and measure the pieces separately, or you will scope something unbuildable.',
    },
    { type: 'heading', level: 2, text: 'The second, harder question' },
    {
      type: 'paragraph',
      text: 'Not all of the number is removable. Be conservative — 50% if you are unsure, and write the percentage down before anyone quotes you anything. It is the figure both sides should be judged against, and it is the first thing an optimistic vendor will inflate.',
    },
    { type: 'heading', level: 2, text: 'What this exercise does to a room' },
    {
      type: 'paragraph',
      text: 'Something worth knowing before you run it: **the number changes the conversation more than any proposal will.** A workflow everybody agrees is annoying becomes a workflow that costs $139,000 a year, and the argument stops being about whether to fix it.',
    },
    {
      type: 'paragraph',
      text: 'That happens whether you hire anyone or not. Which is why the worksheet is public.',
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'How the number turns into a scope →', href: '/what-it-costs' },
        { label: 'Which workflow to measure first →', href: '/guides/which-workflow-to-automate-first' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'What a manual workflow actually costs you each year',
      description:
        'A three-line worksheet — labour, rework, leakage — for the annual cost of a manual business workflow.',
      section: 'Guides',
    }),
    howToSchema({
      slug,
      name: 'How to calculate the annual cost of a manual workflow',
      description: 'Labour plus rework plus leakage, then the share that is realistically removable.',
      totalTime: 'PT2H',
      steps: [
        {
          name: 'Calculate labour',
          text: 'People doing it × hours per week each × loaded hourly rate (salary × ~1.3) × 52. Use the loaded rate, and observe the hours rather than asking.',
        },
        {
          name: 'Calculate rework',
          text: 'Incidents per month where something is done twice × hours to fix each × loaded hourly rate × 12. Count the full cost of an incident, not the obvious part.',
        },
        {
          name: 'Estimate leakage',
          text: 'Quotes lost to slow response, jobs mis-priced from stale numbers, missed follow-ups, peak overtime, penalties and write-offs. Get it approximately and mark it conservative.',
        },
        {
          name: 'Add the three lines',
          text: 'Labour + rework + leakage is the annual cost. Under about $75,000, buy software instead of hiring anyone.',
        },
        {
          name: 'Decide what is removable',
          text: 'Multiply by a conservative removable percentage — 50% if unsure — and write it down before anyone quotes you.',
        },
      ],
    }),
  ],
  related: [
    { label: 'How the number turns into a scope', href: '/what-it-costs' },
    { label: 'Which workflow to automate first', href: '/guides/which-workflow-to-automate-first' },
    { label: 'Measuring the return on an automation', href: '/guides/measuring-automation-roi' },
  ],
};
