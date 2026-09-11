import type { PageContent } from '../types';
import { crumbs } from './_shared';

const slug = '/marketing/paid-acquisition';

export const mktPaidAcquisition: PageContent = {
  slug,
  seo: {
    title: 'Paid Acquisition, After The Handler Is Fixed',
    description:
      'Paid media is the fastest way to buy attention and the fastest way to multiply a broken process. What has to be true first, and how we run it when it is.',
  },
  breadcrumb: crumbs(
    { name: 'Marketing', href: '/marketing' },
    { name: 'Paid acquisition', href: slug },
  ),
  eyebrow: 'MARKETING',
  h1: 'Paid acquisition, once the handler is fixed',
  answer:
    'Paid media is the only channel that produces demand on the day you switch it on. It is also the only channel that scales your mistakes at the same speed. Everything on this page is arranged around that single trade-off.',
  sections: [
    { type: 'heading', level: 2, text: 'What has to be true before we will spend your money' },
    {
      type: 'paragraph',
      text: 'These are conditions, not recommendations. If they are not met, spending increases waste in exact proportion to the budget.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'The handler works. Enquiries reach a named owner in minutes, get more than one follow-up attempt, and land in a system. Paid traffic arriving into a leaky handler is the most expensive mistake in marketing, and it is the most common one. [Measure it first →](/marketing/lead-response)',
        'Conversions are tracked accurately, and we agree what counts. Not page views. Not "leads" that include the recruiter and the SEO spam. If the platform is being told the wrong thing is success, its optimisation will pursue that thing with great efficiency.',
        'Somebody can say what a customer is worth. Roughly is fine — first order value, repeat rate, gross margin. Without it there is no way to tell a good cost per enquiry from a bad one, and every conversation about performance becomes an argument about feelings.',
        'The page they land on answers the ad. A click sent to a homepage is a click asked to start its own search. This is usually the cheapest single improvement available in a paid account.',
        'There is enough budget to learn. Every platform needs a volume of conversions before its optimisation is doing anything but guessing. A budget too small to reach that is a budget spent producing noise, and the honest advice is to spend it elsewhere until the number is real.',
      ],
    },

    { type: 'heading', level: 2, text: 'How we run it' },
    {
      type: 'list',
      items: [
        '**Start narrow, on intent.** The searches and audiences closest to buying, first. Broad reach is something you earn once the narrow version is profitable — not the place to begin.',
        '**One clear job per campaign.** A campaign asked to do brand awareness and lead generation at once does neither, and the reporting from it cannot be interpreted.',
        '**Creative tested against a control, not swapped on a hunch.** With enough volume to draw a conclusion and the discipline to leave the winner alone.',
        '**Negative lists maintained like an asset.** In search, the money saved by excluding the wrong queries usually exceeds the money made by adding the right ones.',
        '**Landing pages built for the promise in the ad**, on your site, in your stack.',
        '**A weekly hand on the account.** Budgets drift, competitors change, platform defaults quietly opt you into things you did not choose. Paid media is not a thing you set up.',
      ],
    },

    { type: 'heading', level: 2, text: 'What we will tell you that most agencies will not' },
    {
      type: 'list',
      items: [
        '**Sometimes the answer is to spend less.** If cost per customer exceeds what a customer is worth, scaling is scaling a loss. We will say so, even though the fee is usually attached to the spend.',
        '**Sometimes the answer is a different channel.** Paid is fast and rented. Search position, content and reputation are slow and owned. A business with no owned position and a large paid budget has a cash flow problem waiting for the day it pauses.',
        '**Attribution is less precise than the dashboards claim.** Platforms count their own contribution generously; some of what paid claims would have arrived anyway. We report the platform’s numbers and the business’s numbers side by side, and we tell you where they disagree.',
        '**We do not report impressions and reach as results.** They are diagnostics. If a monthly report leads with them, it is a report about activity.',
      ],
    },

    { type: 'heading', level: 2, text: 'Where it fits in a retainer' },
    {
      type: 'paragraph',
      text: 'Rarely first. The usual order is repair the handler, fix what the site says about itself, take the free positions that are being left on the table, and then buy attention — because at that point every pound spent lands on a machine that converts it.',
    },
    {
      type: 'paragraph',
      text: 'If you are already spending and it is not working, the first thing we do is an audit of the account and the handler behind it, and we will tell you which of the two is the problem.',
    },
  ],
  faqs: [
    {
      question: 'Which platform should we be on?',
      answer:
        'Where your buyers already express intent. For most operating companies that is search first, because someone typing the problem is closer to buying than someone scrolling past you. Social and video are for demand you have to create rather than capture, and they need different creative and a different patience.',
    },
    {
      question: 'How much should we spend?',
      answer:
        'Enough that the platform gets sufficient conversions to optimise, and not more than your cost per customer justifies. Those two constraints usually define a fairly narrow range once we know what a customer is worth.',
    },
    {
      question: 'Can we just boost posts?',
      answer: 'It is cheap and it is not a channel. It optimises for engagement, which is not what you sell.',
    },
    {
      question: 'Do we own the ad accounts?',
      answer:
        'Yes — always. They are opened in your name, on your billing, and you keep the account, the history and the audiences whether or not we work together. An agency holding your ad account holds your history hostage, and the history is the valuable part.',
    },
    {
      question: 'Do you require a long contract to run paid?',
      answer: 'No. A retainer that needs a contract to survive is a retainer that stopped being worth buying.',
    },
  ],
  related: [
    { label: 'Lead response', href: '/marketing/lead-response' },
    { label: 'What we report', href: '/marketing/what-we-report' },
    { label: 'Back to marketing', href: '/marketing' },
  ],
};
