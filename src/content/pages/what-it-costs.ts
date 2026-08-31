import type { PageContent } from '../types';
import { articleSchema, crumbs, howToSchema } from './_shared';

const slug = '/what-it-costs';

export const whatItCosts: PageContent = {
  slug,
  seo: {
    title: 'What Does a Deployment Cost? Here Is the Arithmetic',
    description:
      'We price against what the workflow costs you today, measured on site. Here is the full worksheet, so you can run the numbers yourself before calling anyone.',
  },
  breadcrumb: crumbs({ name: 'What it costs', href: slug }),
  eyebrow: 'WHAT IT COSTS',
  h1: 'What it costs — and how that number is arrived at',
  answer:
    'Engagements are priced against what the workflow costs you today, measured on site with your people. Because that number is different at every company, a price list would be wrong in both directions — so instead we publish the arithmetic. Run it yourself. If the number comes out small, do not hire anyone.',
  sections: [
    { type: 'heading', level: 2, text: 'Step 1 — What the workflow costs you today' },
    {
      type: 'paragraph',
      text: 'Three lines. Do them in this order, because the third is the one nobody has counted.',
    },
    { type: 'heading', level: 3, text: 'A. Labour' },
    {
      type: 'codeblock',
      code: `   people doing it            ____
 × hours per week each        ____
 × loaded hourly rate         ____   ← salary × ~1.3 for burden. Ask your controller.
 × 52
 = annual labour cost         ____`,
    },
    {
      type: 'paragraph',
      text: 'Use the **loaded** rate, not the salary rate. Payroll taxes, benefits, equipment and overhead are real costs of that hour. Most owners use the salary number and undercount by about a third.',
    },
    { type: 'heading', level: 3, text: 'B. Rework' },
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
      text: '“Incidents” means anything done twice: a re-quote, a corrected invoice, a re-dispatched truck, an order entered wrong. If nobody tracks these, that is itself a finding — ask three people for last month’s and you will get within range fast.',
    },
    { type: 'heading', level: 3, text: 'C. Leakage — the expensive one' },
    {
      type: 'paragraph',
      text: 'The costs that never appear on a P&L line because they are absences:',
    },
    {
      type: 'list',
      items: [
        '**Quotes lost to slow response.** How many enquiries went cold because nobody got back in time? What is your average job worth? Multiply.',
        '**Jobs mis-priced.** Work quoted from bad numbers and delivered at a loss.',
        '**Missed follow-ups.** Quoted work that simply was never chased.',
        '**Overtime absorbing a peak** that a functioning process would have flattened.',
        '**Penalties and write-offs** from late or wrong delivery.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Leakage is usually the biggest of the three and the hardest to get, because there is no report for it. Get what you can and mark it conservative — an under-counted leakage number is still an honest one.',
    },
    { type: 'codeblock', code: 'ANNUAL COST OF THE WORKFLOW = A + B + C' },
    { type: 'heading', level: 2, text: 'Step 2 — What can honestly be removed' },
    {
      type: 'paragraph',
      text: 'Not all of it. Anyone who says all of it is selling.',
    },
    {
      type: 'codeblock',
      code: `   annual cost of workflow   ____
 × realistic % removed       ____   ← be conservative. If unsure, use 50%.
 = ANNUAL VALUE              ____`,
    },
    {
      type: 'paragraph',
      text: 'That percentage goes in the scope document in writing. It is what the engagement gets judged against, which is exactly why it should not be inflated to justify a price.',
    },
    { type: 'heading', level: 2, text: 'Step 3 — A worked example' },
    {
      type: 'callout',
      text: '⚠️ Fictional company, illustrating the method. This is not a quote, a price, or a client.',
    },
    {
      type: 'paragraph',
      text: 'A 180-person contractor. The workflow: quote-to-invoice — the handoff between the estimator, the field, and the office.',
    },
    {
      type: 'codeblock',
      code: `A  2 admins × 15 hrs/wk × $38 loaded × 52         = $59,280
B  9 rework incidents/mo × 2.5 hrs × $38 × 12     = $10,260
C  observed: quotes lost to slow response,
   plus jobs priced off stale numbers             = $70,000
                                                   ---------
   ANNUAL COST OF THE WORKFLOW                     = $139,540

   × 70% realistically removable
   ANNUAL VALUE                                    =  $97,678`,
    },
    {
      type: 'paragraph',
      text: 'That is a company where the arithmetic clearly supports an engagement. **The same worksheet at a 30-person firm often comes out under $75,000 — and at that point the honest advice is to buy a tool and keep your money.** We would rather tell you that in week four than take the work.',
    },
    { type: 'heading', level: 2, text: 'Step 4 — Where the price comes from' },
    {
      type: 'paragraph',
      text: 'The engagement is priced as a proportion of that annual value: a deployment fee for the build, and an ongoing fee for operating it. **Both are quoted per engagement, against your measured number, and never before the measurement exists.**',
    },
    {
      type: 'paragraph',
      text: 'That is not evasion, it is the actual mechanism. A price quoted before Step 1 is a guess dressed up as a number, and you should treat any vendor who gives you one accordingly.',
    },
    { type: 'heading', level: 2, text: 'Step 5 — Compare it to your real alternative' },
    {
      type: 'paragraph',
      text: 'The comparison that matters is not against agency rates. It is against what you would otherwise do:',
    },
    {
      type: 'list',
      items: [
        '**Hire the capability permanently** — a senior hybrid engineer, a long search in a thin market, and an onboarding curve. [The full comparison →](/forward-deployed-engineer-vs-hiring)',
        '**Engage a consulting firm** — discovery billed by the month, and a recommendation you still have to build. [The full comparison →](/forward-deployed-engineer-vs-consultant)',
        '**Do nothing** — the number you calculated in Step 1. Every year. Forever.',
      ],
    },
    {
      type: 'paragraph',
      text: 'That last row is the one people skip. Doing nothing is not free; it is the most expensive option on the list and it is the one most companies choose by default.',
    },
    { type: 'heading', level: 2, text: 'Why we will not put a number on this page' },
    { type: 'paragraph', text: 'Three reasons, and only the first is about you:' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**It would be wrong.** The same workflow at two companies produces genuinely different numbers.',
        '**It would anchor the conversation on our cost instead of yours** — which is the wrong way round.',
        '**We would end up defending a price instead of a measurement**, and the measurement is the part that is actually worth something to you.',
      ],
    },
    {
      type: 'paragraph',
      text: 'If you want the number, the first conversation is the measurement. It is free, and you keep it.',
    },
    { type: 'ctaRow', links: [{ label: 'Start with the measurement →', href: '/contact' }] },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'What it costs — and how that number is arrived at',
      description:
        'The worksheet for calculating the annual cost of a manual workflow (labour + rework + leakage) and how an engagement is priced against it.',
      section: 'Forward Deployed Engineering',
    }),
    howToSchema({
      slug,
      name: 'How to calculate what a manual workflow costs your company each year',
      description:
        'A three-line worksheet for measuring the annual cost of a manual business workflow: labour, rework, and leakage.',
      totalTime: 'PT2H',
      steps: [
        {
          name: 'Calculate annual labour cost',
          text: 'Count the people doing the work, multiply by hours per week each, by the loaded hourly rate (salary times roughly 1.3 for burden), by 52. Use the loaded rate, not the salary rate.',
        },
        {
          name: 'Calculate annual rework cost',
          text: 'Count incidents per month where something has to be done twice — a re-quote, a corrected invoice, a re-dispatched truck, an order entered wrong. Multiply by hours to fix each, by the loaded hourly rate, by 12.',
        },
        {
          name: 'Estimate annual leakage',
          text: 'Add the costs that never appear as a P&L line because they are absences: quotes lost to slow response, jobs mis-priced from stale numbers, missed follow-ups, overtime absorbing a peak, and penalties or write-offs. Leakage is usually the largest of the three.',
        },
        {
          name: 'Add the three lines',
          text: 'Labour plus rework plus leakage is the annual cost of the workflow. If that total is under roughly $75,000, an embedded engineering engagement is unlikely to pay for itself and off-the-shelf software is the better answer.',
        },
        {
          name: 'Decide what can honestly be removed',
          text: 'Multiply the annual cost by a conservative estimate of the proportion realistically removable. Use 50 percent if unsure. Put that percentage in writing in the scope document, because it becomes the figure both parties are judged against.',
        },
      ],
    }),
  ],
  related: [
    { label: 'How an engagement runs', href: '/how-we-work' },
    { label: 'Hire one or buy an engagement', href: '/forward-deployed-engineer-vs-hiring' },
    { label: 'Forward deployed engineer vs consultant', href: '/forward-deployed-engineer-vs-consultant' },
  ],
};
