import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/guides/measuring-automation-roi';

export const guideMeasuringAutomationRoi: PageContent = {
  slug,
  seo: {
    title: 'How to Measure the Return on an Automation',
    description:
      'Set the baseline before you build, define success as usage rather than delivery, and never claim a saving that does not appear in a real number somewhere.',
  },
  breadcrumb: crumbs(
    { name: 'Guides', href: '/guides' },
    { name: 'Measuring automation ROI', href: slug },
  ),
  eyebrow: 'GUIDE',
  h1: 'Measuring the return on an automation',
  answer:
    'Capture the baseline before anything is built, define success as a number that already exists in a system you have, and count only savings that show up somewhere real. An hour saved is not money until it becomes fewer hours paid, more work done, or a job that would have been lost.',
  sections: [
    {
      type: 'paragraph',
      text: 'Most automation ROI claims are unfalsifiable. That is not usually dishonesty — it is that nobody wrote down the baseline, so afterwards everyone reasons backwards from the outcome they hoped for.',
    },
    { type: 'heading', level: 2, text: 'Step 1 — Capture the baseline before you build' },
    {
      type: 'paragraph',
      text: 'Once the system is live, the old numbers are gone. Nobody remembers what quote turnaround was in March.',
    },
    { type: 'paragraph', text: 'Capture, at minimum:' },
    {
      type: 'list',
      items: [
        '**Volume** — how many of these per week',
        '**Time** — how long each takes, observed rather than reported',
        '**People** — who touches it, and for how long',
        '**Errors** — how many need doing again, and what one costs fully loaded',
        '**The outcome number** — turnaround, close rate, days-to-invoice: whatever the process is supposed to affect',
      ],
    },
    {
      type: 'paragraph',
      text: '**Take a screenshot of the report. Export the data.** In four months the argument will be about the baseline and whoever has the export wins it.',
    },
    { type: 'heading', level: 2, text: 'Step 2 — Pick a metric that already exists' },
    {
      type: 'paragraph',
      text: 'The best success metric is one your systems already produce, for two reasons: you get history for free, and nobody can accuse you of designing the measurement to flatter the result.',
    },
    {
      type: 'paragraph',
      text: 'Good: median quote turnaround. Days from job complete to invoice sent. Second-visit rate. Percentage of enquiries answered within an hour.',
    },
    {
      type: 'paragraph',
      text: 'Bad: “efficiency.” “Productivity.” Anything requiring a new measurement built specially — you will spend the project arguing about the instrument instead of the result.',
    },
    { type: 'heading', level: 2, text: 'Step 3 — Define success as usage' },
    { type: 'paragraph', text: '**Delivery is not success. Usage is.**' },
    {
      type: 'paragraph',
      text: 'State it as a number and a date: “By week eight, 90% of jobs go through the new system.”',
    },
    {
      type: 'paragraph',
      text: 'A system that is live and unused reports as a win and delivers nothing, and this is by far the most common way an automation project quietly fails. Measuring usage makes that failure visible in week six, when it is still fixable.',
    },
    { type: 'heading', level: 2, text: 'Step 4 — Count only savings that land somewhere' },
    {
      type: 'paragraph',
      text: 'This is where most ROI claims fall apart. **An hour saved is not money.** It becomes money in exactly three ways:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Fewer hours paid** — headcount reduced, overtime removed, a vacancy not filled.',
        '**More output from the same people** — measurable, if volume actually went up.',
        '**Revenue that would otherwise have been lost** — the quote that landed because it went out same day.',
      ],
    },
    {
      type: 'paragraph',
      text: 'If a saved hour does none of those, it was absorbed. That is a real benefit — the team is less miserable, capacity exists for growth — but **it is not a number you get to put in a business case**, and claiming it is why finance departments distrust automation projects.',
    },
    { type: 'heading', level: 2, text: 'Step 5 — Measure again at three and six months' },
    {
      type: 'paragraph',
      text: 'The three-month number is usually worse than the launch number. That is normal — the novelty passes and the awkward cases arrive.',
    },
    {
      type: 'paragraph',
      text: 'The six-month number is the true one. If it holds, it holds. If it decayed, find out why: a process changed, a person left, an integration broke quietly. **Decay is the default state of an unowned system.**',
    },
    { type: 'heading', level: 2, text: 'An honest ROI statement' },
    { type: 'paragraph', text: 'What one looks like when it is real:' },
    {
      type: 'blockquote',
      text: "Before: median quote turnaround 61 hours, measured across 340 quotes, Jan–Mar. After: 4 hours, measured across 380 quotes, Jul–Sep. Close rate on quotes under 24 hours was 34%; over 72 hours, 19% — from our own CRM, both periods. Applied to the 210 quotes that moved from the slow band to the fast band, at an average job value of $8,400. Two admins' time reduced by roughly 18 hours a week; one vacancy was not filled.",
    },
    {
      type: 'paragraph',
      text: "Every line traceable to a system somebody can open. That is the standard — and if a vendor's ROI claim cannot be written this way, it is not a claim, it is a hope.",
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'The cost worksheet →', href: '/guides/cost-of-a-manual-workflow' },
        { label: 'What it costs →', href: '/what-it-costs' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'How to measure the return on an automation',
      description: 'Baseline first, usage as the success metric, and only savings that land in a real number.',
      section: 'Guides',
    }),
  ],
  related: [
    { label: 'What a manual workflow costs you', href: '/guides/cost-of-a-manual-workflow' },
    { label: 'Speed to quote', href: '/guides/speed-to-quote' },
    { label: 'What it costs', href: '/what-it-costs' },
  ],
};
