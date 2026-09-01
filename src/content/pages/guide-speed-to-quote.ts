import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/guides/speed-to-quote';

export const guideSpeedToQuote: PageContent = {
  slug,
  seo: {
    title: 'Speed to Quote: The Number Most Companies Never Measure',
    description:
      'You know your close rate. You probably do not know your median quote turnaround — or your close rate split by it. That split is the finding.',
  },
  breadcrumb: crumbs(
    { name: 'Guides', href: '/guides' },
    { name: 'Speed to quote', href: slug },
  ),
  eyebrow: 'GUIDE',
  h1: 'Speed to quote',
  answer:
    'Almost every company can tell you its close rate. Very few can tell you median quote turnaround, and almost none can tell you close rate split by turnaround band. That split is one of the most valuable numbers in a mid-size business and it is sitting in systems you already own.',
  sections: [
    { type: 'heading', level: 2, text: 'Pull it this week' },
    { type: 'paragraph', text: 'You need two things, both of which you have:' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**When the enquiry arrived** — inbox timestamp, CRM created date, call log.',
        '**When the quote went out** — sent date on the document or email.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Take the last 200 quotes. Compute hours between. Then split by outcome:',
    },
    {
      type: 'table',
      headers: ['Turnaround', 'Quotes sent', 'Won', 'Close rate'],
      rows: [
        ['Under 1 hour', '', '', ''],
        ['1–24 hours', '', '', ''],
        ['24–72 hours', '', '', ''],
        ['Over 72 hours', '', '', ''],
      ],
    },
    {
      type: 'paragraph',
      text: '**Use the median, not the mean.** The mean is dragged around by one quote that took three weeks.',
    },
    { type: 'heading', level: 2, text: 'What you are looking for' },
    { type: 'paragraph', text: 'Two things.' },
    {
      type: 'paragraph',
      text: '**The gradient.** If close rate falls as turnaround rises, you have quantified something real, in your own data, with no assumptions borrowed from anybody’s study. That is worth more than any industry benchmark because nobody in the room can argue with it.',
    },
    {
      type: 'paragraph',
      text: '**The tail.** What percentage of quotes take more than three days? That group is where recoverable revenue concentrates — and the reason is almost never that the quote was hard. It is that it sat.',
    },
    { type: 'heading', level: 2, text: 'The correction you must apply' },
    {
      type: 'paragraph',
      text: '**Fast quotes and easy quotes are not the same thing, and the raw split overstates the effect.**',
    },
    {
      type: 'paragraph',
      text: 'Simple jobs go out fast and close well because they are simple. If you do not control for that, you will conclude that speed causes closes and over-invest.',
    },
    {
      type: 'paragraph',
      text: 'Fix it by segmenting: compare turnaround-to-close **within one job type and size band**. If the gradient survives that, it is real. If it disappears, your problem was never speed and you have saved yourself a project.',
    },
    {
      type: 'paragraph',
      text: 'Most companies who run this find the gradient survives, but smaller than the raw number suggested. Say the honest version out loud, because the inflated version will get challenged by your CFO and then nothing happens.',
    },
    { type: 'heading', level: 2, text: 'Where the delay actually is' },
    {
      type: 'paragraph',
      text: 'When you look at slow quotes individually, the time is almost never in producing the quote. It is in:',
    },
    {
      type: 'list',
      items: [
        '**Waiting for information** from the customer, from the field, from a supplier.',
        '**Waiting for a person** who is the only one who can price this type.',
        '**Queue time** — it was not started for two days because nothing said it needed to be.',
        '**Approval** — sitting in someone’s inbox for a signature.',
        '**Re-gathering** — the details were collected at enquiry and then lost, so someone collects them again.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Notice that **producing the quote is not on the list.** This is why “quote faster” as an instruction to the team achieves nothing: nobody is slow at the part they control.',
    },
    { type: 'heading', level: 2, text: 'What actually moves it' },
    {
      type: 'list',
      items: [
        '**Capture everything at enquiry, once**, in a structure — so nobody re-gathers.',
        '**Make the queue visible.** A list with ages on it, where old items are obvious. Half the tail is simply invisibility.',
        '**Route by type immediately** so it lands with the person who can price it.',
        '**Remove the approval** for anything below a threshold, or make it one tap on a phone.',
        '**Send a partial answer fast.** A same-day response with a range and a date beats a perfect quote in four days — because the enquiry is competing with two other firms, and the first real response frames the whole conversation.',
      ],
    },
    {
      type: 'paragraph',
      text: 'That last one is often the cheapest and largest single change available.',
    },
    { type: 'heading', level: 2, text: 'And measure it forever' },
    {
      type: 'paragraph',
      text: 'Median quote turnaround belongs on a weekly report next to revenue. It is a leading indicator; revenue is a lagging one. When turnaround drifts, revenue follows about a quarter later, and by then the cause is no longer obvious.',
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'Marketing systems →', href: '/services/marketing-systems' },
        { label: 'The cost worksheet →', href: '/guides/cost-of-a-manual-workflow' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'Speed to quote',
      description: 'Median quote turnaround, close rate split by turnaround band, and the correction to apply before you believe it.',
      section: 'Guides',
    }),
  ],
  related: [
    { label: 'Marketing systems', href: '/services/marketing-systems' },
    { label: 'What a manual workflow costs you', href: '/guides/cost-of-a-manual-workflow' },
    { label: 'Measuring the return on an automation', href: '/guides/measuring-automation-roi' },
  ],
};
