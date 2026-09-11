import type { PageContent } from '../types';
import { crumbs } from './_shared';

const slug = '/marketing/what-we-report';

export const mktWhatWeReport: PageContent = {
  slug,
  seo: {
    title: 'What We Report, And What We Refuse To Report',
    description:
      'A marketing report should be checkable without us. The numbers we report, the ones we refuse to lead with, and why the baseline is recorded before any work starts.',
  },
  breadcrumb: crumbs(
    { name: 'Marketing', href: '/marketing' },
    { name: 'What we report', href: slug },
  ),
  eyebrow: 'MARKETING',
  h1: 'What we report, and what we refuse to report',
  answer:
    'An agency retainer is unusually easy to fake. Traffic went up, reach went up, engagement went up — none of those are money. This page is the specific answer to that problem, published before you ask.',
  sections: [
    { type: 'heading', level: 2, text: 'Rule one: the baseline is recorded before anything is touched' },
    {
      type: 'paragraph',
      text: 'Whatever is measurable on day one gets written down on day one — response times, enquiry counts, positions on the named query list, what the profile says, what the site asserts about itself.',
    },
    {
      type: 'paragraph',
      text: '**Without a before, there is no honest after.** A baseline reconstructed later is not a baseline; it is a number chosen with the benefit of knowing what happened. We will not reconstruct one and we will not accept one that was reconstructed.',
    },
    {
      type: 'paragraph',
      text: 'The practical consequence is that the first report is not flattering to anybody, including us. That is the report that makes every subsequent one worth reading.',
    },

    { type: 'heading', level: 2, text: 'Rule two: you can check every number without asking us' },
    {
      type: 'paragraph',
      text: 'Every figure we report comes from a system **you** own — your analytics, your CRM, your ad accounts, your profile, your inbox. If you want to pull it yourself at 11pm on a Sunday, you can, and nothing we send should ever be the only place a number exists.',
    },
    {
      type: 'paragraph',
      text: 'A vendor whose reporting can only be produced by the vendor has created a dependency and called it a service.',
    },

    { type: 'heading', level: 2, text: 'What we report' },
    {
      type: 'list',
      items: [
        '**The number we agreed matters.** Named at the start of the engagement — usually enquiries or booked work, occasionally something narrower like speed to quote. Reported first, every month, against the baseline.',
        '**Lead handling.** Median time to first human response, share receiving more than one follow-up, share landing in a system, and close rate by response-time band. These move fastest and they are the ones that turn marketing spend into money. [Lead response →](/marketing/lead-response)',
        '**Search position on a named list of queries.** Chosen for intent, agreed with you, and reported per query — including the ones that did not move, and the ones we now think were the wrong target.',
        '**Answer-engine share.** Of the questions your buyers actually ask, which answers name you, which name a competitor, and whether what is said about you is correct. [How that works →](/marketing/answer-engine-optimization)',
        "**Paid, if it is running:** spend, cost per enquiry, cost per customer where it is knowable, and the platform's claimed attribution shown next to the business's own numbers — with the disagreement called out rather than smoothed over.",
        '**What we did, and what we did not get to.** Including the things that turned out to be a dead end. A report with no misses in it is a report that has been edited.',
      ],
    },

    { type: 'heading', level: 2, text: 'What we refuse to lead with' },
    {
      type: 'list',
      items: [
        '**Impressions and reach.** Diagnostics, not results. Leading with them is the oldest way to make a flat quarter look busy.',
        '**Rankings for queries nobody searches.** Trivial to manufacture and the reason many owners stopped believing search reporting altogether.',
        '**Follower counts.** Almost entirely unrelated to revenue for an operating company.',
        '**A proprietary score.** Any single number a vendor invented and only that vendor can calculate is a number that goes up when they need it to.',
        '**Deliverable counts.** Posts published, emails sent, hours logged. That is a description of our activity, not of your outcome. If a month’s honest answer is "the work did not move it", we would rather write that sentence than pad the page.',
      ],
    },

    { type: 'heading', level: 2, text: 'What we say when it did not work' },
    {
      type: 'paragraph',
      text: 'We say it did not work, in the first paragraph, with what we think the reason is and what we intend to do differently. Two things follow from that:',
    },
    {
      type: 'list',
      items: [
        '**Some months the honest report is short.** Search and answer-engine position are slow enough that several months in a row can be unglamorous. Reporting them honestly is the only way the eventual movement means anything.',
        '**If we cannot name the number a month of work was supposed to move, we should not be billing you for that month.** That is the whole standard, and it is the reason there is no long contract — a retainer that needs a contract to survive stopped being worth buying.',
      ],
    },

    { type: 'heading', level: 2, text: 'The cadence' },
    {
      type: 'paragraph',
      text: '**Monthly**, against the baseline, in a document — not a dashboard you have to interpret. Plus a conversation if you want one.',
    },
    {
      type: 'paragraph',
      text: '**Quarterly**, a longer look at whether the number we chose at the start is still the right number. Occasionally it is not, and changing it deliberately in the open is legitimate. Changing it quietly because the old one stopped looking good is not.',
    },
  ],
  faqs: [
    {
      question: 'Do we get a dashboard?',
      answer:
        'You get the underlying accounts, which you own, and a written monthly report that interprets them. A dashboard nobody interprets is a screensaver.',
    },
    {
      question: 'What if we do not have a baseline because nothing was ever measured?',
      answer:
        'Then month one is measurement, and we will say so rather than pretend the first month’s numbers are a result. That is a completely normal starting point.',
    },
    {
      question: 'Who owns the data and the accounts?',
      answer:
        'You do. Everything runs on your accounts and your stack, documented as it is built. If we stop working together, none of it stops.',
    },
    {
      question: 'Can we see a sample report?',
      answer:
        'Ask. We will show you the format with a real structure and the specifics removed — we do not publish or repurpose a client’s numbers.',
    },
  ],
  related: [
    { label: 'Lead response', href: '/marketing/lead-response' },
    { label: 'Ask what we would measure first', href: '/contact' },
    { label: 'Back to marketing', href: '/marketing' },
  ],
};
