import type { PageContent } from '../types';
import { articleSchema, crumbs, howToSchema } from './_shared';

const slug = '/how-we-work';

export const howWeWork: PageContent = {
  slug,
  seo: {
    title: 'How an Engagement Runs — Five Phases, Ten Weeks',
    description:
      'Watch, measure, build, deploy, run. What happens in each phase, what we need from you, and what has to be true before we move to the next one.',
  },
  breadcrumb: crumbs({ name: 'How we work', href: slug }),
  eyebrow: 'HOW WE WORK',
  h1: 'How an engagement runs',
  answer:
    'Five phases over roughly ten weeks, then an ongoing operating period. Each phase has a written exit condition, and we do not start the next one until it is met. The first phase can end the engagement — if the workflow does not cost you enough to justify fixing, we say so and stop.',
  sections: [
    {
      type: 'paragraph',
      text: 'Publishing this is deliberate. You can run most of it yourself, and if you do, that was a good outcome.',
    },
    { type: 'heading', level: 2, text: 'Phase 1 — Watch (weeks 1–2)' },
    {
      type: 'paragraph',
      text: '**On site, with the people who do the work.** Not the people who describe the work — the difference between those two is usually where the money is.',
    },
    {
      type: 'paragraph',
      text: 'What happens: we sit with the team, time the steps, follow a job end to end, and read the systems. We ask everyone the same question — “what’s the part of this that makes you want to quit?” — because frustration is a reliable indicator of unmeasured cost.',
    },
    {
      type: 'paragraph',
      text: 'What we need from you: access to the people, access to the systems, and one senior person who can say out loud that the process is allowed to change.',
    },
    {
      type: 'paragraph',
      text: '**Exit condition:** we can draw the actual workflow on one page and the team agrees that is what really happens.',
    },
    {
      type: 'callout',
      text: '⚠️ The most common failure of this phase is going too fast. The documented process and the real process diverged years ago. Anyone who skips to solutions in week one is building for a process that does not exist.',
    },
    { type: 'heading', level: 2, text: 'Phase 2 — Measure (weeks 3–4)' },
    {
      type: 'paragraph',
      text: '**One number: what this workflow costs you a year.** Built from observation and your own payroll and system data, never from an estimate in a meeting — including your estimate. Owners routinely guess low by a factor of two on labour and miss leakage entirely.',
    },
    { type: 'paragraph', text: 'Three lines:' },
    {
      type: 'codeblock',
      code: `A. LABOUR    people × hours/week × loaded hourly rate × 52
             (loaded = salary × ~1.3 for burden — get it from your controller)
B. REWORK    incidents/month × hours to fix × loaded rate × 12
C. LEAKAGE   quotes lost to slow response, jobs mis-priced, missed follow-ups,
             overtime absorbing a peak, penalties, write-offs`,
    },
    {
      type: 'paragraph',
      text: 'Then, conservatively, **how much of that number is realistically removable** — and that percentage goes in the scope document, because it becomes the thing both sides are judged on later. A number chosen to justify a price is worthless to everyone including us.',
    },
    {
      type: 'paragraph',
      text: '**Exit condition:** you have the number, you believe it, and you would defend it to your CFO.',
    },
    {
      type: 'paragraph',
      text: '**This is where an engagement can honestly end.** If A + B + C is small, the right advice is to buy a tool or leave it alone. You keep the measurement either way — it is yours, and it is useful.',
    },
    { type: 'ctaRow', links: [{ label: 'The full worksheet →', href: '/what-it-costs' }] },
    { type: 'heading', level: 2, text: 'Phase 3 — Build (weeks 5–8)' },
    {
      type: 'paragraph',
      text: '**Into your stack, on your accounts.** Your CRM, your ERP, your scheduler, your phone system. Not our platform, not our tenant, not our API keys.',
    },
    { type: 'paragraph', text: 'What gets built varies. What is constant:' },
    {
      type: 'list',
      items: [
        '**It handles the exceptions**, because the exceptions are the workflow. A system that works for the clean 80% and dumps the rest on a human has moved the bottleneck, not removed it.',
        '**It fails visibly.** Silent failure is worse than no automation — people trust it, it stops, and nobody notices for a fortnight.',
        '**It is documented as it is built**, not written up afterwards from memory.',
      ],
    },
    {
      type: 'paragraph',
      text: 'What we need from you: one person from the team who will actually use it, available for about two hours a week. Not a steering committee. One operator.',
    },
    {
      type: 'paragraph',
      text: '**Exit condition:** it runs the real workflow on real data, including the ugly cases.',
    },
    { type: 'heading', level: 2, text: 'Phase 4 — Deploy (weeks 9–10)' },
    {
      type: 'paragraph',
      text: '**Standing next to people while they use it for real.** This is the phase most vendors have already invoiced past.',
    },
    {
      type: 'paragraph',
      text: 'Expect the first week to surface things nobody predicted. That is not a failure of the build — it is the first honest contact with production, and it is why we are still in the building for it.',
    },
    {
      type: 'paragraph',
      text: 'What we need from you: permission to change the process, not just the software. Almost every deployment turns up one step that should stop existing rather than be automated.',
    },
    {
      type: 'paragraph',
      text: '**Exit condition:** the team is doing the work through the new system, unassisted, for a full cycle.',
    },
    { type: 'heading', level: 2, text: 'Phase 5 — Run (ongoing)' },
    {
      type: 'paragraph',
      text: '**The six weeks after launch decide whether any of this was worth it.**',
    },
    {
      type: 'paragraph',
      text: 'A system does not usually fail loudly. It gets quietly worked around — someone hits an edge case, goes back to the old way for that one job, tells a colleague, and eight weeks later everybody is back on the spreadsheet and the dashboard still shows green.',
    },
    {
      type: 'paragraph',
      text: 'So the operating period is about usage, not uptime: watching what people actually do, fixing what makes them avoid it, and handling the seasonal cases that were not visible in week one.',
    },
    {
      type: 'paragraph',
      text: '**Handover is a real event, not a drift.** Documentation, training, credentials in your names, and a written statement of what breaks it. The test we build to: if we stopped answering the phone tomorrow, does this keep running?',
    },
    { type: 'heading', level: 2, text: 'What we need from you, in total' },
    { type: 'paragraph', text: 'Honestly short, and this list is the whole thing:' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Access** to the people who do the work and the systems they do it in.',
        '**One senior person** who can authorise a change to how the work is done.',
        '**One operator**, roughly two hours a week from week five.',
        '**Real numbers** — payroll, job records, whatever the measurement needs.',
        '**Tolerance for a hard answer in week four**, including “this is not worth fixing.”',
      ],
    },
    { type: 'heading', level: 2, text: 'What we will not do' },
    {
      type: 'list',
      items: [
        'Run a pilot designed to justify a bigger phase.',
        'Build on our platform so that leaving us is expensive.',
        'Present a number we did not measure.',
        'Take a third concurrent engagement. **Hard cap of two.** Embedded work stops being embedded when it is spread thin, and capacity is the constraint that keeps the work good.',
      ],
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'What it costs, and how the number is arrived at →', href: '/what-it-costs' },
        { label: 'Start with the measurement →', href: '/contact' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'How an engagement runs',
      description:
        'Five phases over roughly ten weeks — watch, measure, build, deploy, run — each with a written exit condition.',
      section: 'Forward Deployed Engineering',
    }),
    howToSchema({
      slug,
      name: 'How a forward deployed engineering engagement runs',
      description:
        'The five phases of an embedded engagement, from on-site measurement to operating the deployed system with the client team.',
      totalTime: 'P10W',
      steps: [
        {
          name: 'Watch (weeks 1–2)',
          text: 'On site with the people who do the work. Time the steps, follow a job end to end, read the systems. Exit condition: the actual workflow can be drawn on one page and the team agrees it is accurate.',
        },
        {
          name: 'Measure (weeks 3–4)',
          text: 'Turn observation into one number — annual cost of the workflow in labour, rework and leakage — from payroll and system data, then a conservative removable percentage in writing. Exit condition: the client believes the number and would defend it to their CFO. The engagement can honestly end here.',
        },
        {
          name: 'Build (weeks 5–8)',
          text: 'Build into the client stack on the client accounts. Handle the exceptions, fail visibly, document as built. Exit condition: it runs the real workflow on real data including the ugly cases.',
        },
        {
          name: 'Deploy (weeks 9–10)',
          text: 'Stand next to people using it on real work; change the process, not just the software. Exit condition: the team runs a full cycle through the new system unassisted.',
        },
        {
          name: 'Run (ongoing)',
          text: 'Operate the workflow through the first six weeks after launch — watch usage, fix what makes people avoid it, handle seasonal cases. Handover is a real event: documentation, training, credentials in the client names.',
        },
      ],
    }),
  ],
  related: [
    { label: 'What it costs', href: '/what-it-costs' },
    { label: 'Who we work with', href: '/who-we-work-with' },
    { label: 'What is a forward deployed engineer?', href: '/forward-deployed-engineering' },
  ],
};
