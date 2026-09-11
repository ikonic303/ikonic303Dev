import type { PageContent } from '../types';
import { crumbs } from './_shared';

const slug = '/marketing/lead-response';

export const mktLeadResponse: PageContent = {
  slug,
  seo: {
    title: 'Lead Response: The Number Most Companies Never Measure',
    description:
      'Four numbers decide whether your marketing pays, and most companies have none of them. How to measure your lead handler this week, and what to fix in what order.',
  },
  breadcrumb: crumbs(
    { name: 'Marketing', href: '/marketing' },
    { name: 'Lead response', href: slug },
  ),
  eyebrow: 'MARKETING',
  h1: 'Measure the handler before you fund the top',
  answer:
    'Most companies at this size do not have a lead generation problem. They have a lead handling problem: enquiries arrive and die in the gap between arriving and somebody dealing with them. Spending more on campaigns to feed a leaky handler is the most expensive mistake in marketing.',
  sections: [
    { type: 'heading', level: 2, text: 'The four numbers, and how to get them this week' },
    {
      type: 'paragraph',
      text: 'You do not need a tool for this. You need somebody to go through the last ninety days by hand once. It takes an afternoon and it changes the conversation in the room permanently.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Median time from enquiry to first human response.** Median, not average — the average is dragged around by the overnight ones and by the one somebody answered in nine seconds. Measure from when it arrived, not from when it was assigned.',
        '**Percentage of enquiries that receive more than one follow-up attempt.** Usually shockingly low. Nearly every company discovers that a single unanswered first attempt is the end of the road for a large share of their pipeline.',
        "**Percentage that end up in a system at all**, rather than in one person's inbox, one person's phone, or one person's memory. Anything outside a system is invisible, unassignable, and gone when that person is on leave.",
        '**Close rate by response-time band.** Under an hour, under a day, over a day. Your own data, your own answer. This is the number that ends the argument, because it is yours and nobody can claim it does not apply to your industry.',
      ],
    },
    {
      type: 'paragraph',
      text: 'If those four numbers are poor, more traffic increases waste in exact proportion to the spend. Fix the handler first: it is faster, it is cheaper, and it makes every future campaign worth more.',
    },

    { type: 'heading', level: 2, text: 'Why enquiries die, in the order we usually find it' },
    {
      type: 'list',
      items: [
        '**Nobody owns it.** A shared inbox is an arrangement where responsibility evaporates. Everyone assumes somebody has it; on a busy Thursday nobody does.',
        '**It arrives on a channel nobody watches.** The form goes to an address, the phone goes to a voicemail, the marketplace message goes to an app on one person’s phone, the chat goes nowhere at weekends. Each channel is fine alone; together they are a colander.',
        '**The first response is not useful.** An automated "thanks, we will be in touch" buys nothing. A useful first response either answers the question or asks the one question that moves it forward.',
        '**Follow-up depends on memory.** A person intending to follow up on Tuesday is not a process. Everything that depends on remembering fails first under load — which is to say, exactly when you are winning.',
        '**Nothing is recorded, so nothing can be improved.** Without a record there is no median response time, no close rate by band, and no way to tell whether last quarter was better or worse.',
      ],
    },

    { type: 'heading', level: 2, text: 'What we build' },
    {
      type: 'list',
      items: [
        '**Capture from every channel an enquiry can arrive on** — form, phone, email, chat, marketplace, referral — into one place, with the source preserved so you can tell later what was worth doing.',
        '**Routing by rule, immediately.** Not a daily digest. Not a shared inbox. A named owner within minutes, with an escalation if they do not pick it up.',
        '**A first response in minutes, in the channel it came in on**, that is actually useful to the person who sent it.',
        '**Follow-up on rails.** A defined sequence, in the channels the person accepted, that runs whether or not anyone remembers, and stops immediately when a human takes over.',
        '**A record of everything, so the four numbers become a report** rather than an afternoon of manual counting.',
        '**Attribution that survives contact with reality** — which is usually less precise than dashboards claim. Being honest about that is more useful than a confident wrong number, and it stops you killing the channel that quietly feeds the one you can measure.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Everything is built on **your** accounts, in **your** stack, documented as it is built, and handed over with your team trained on it. If we stop working together, it keeps running.',
    },

    { type: 'heading', level: 2, text: 'Where this sits relative to campaigns' },
    {
      type: 'paragraph',
      text: 'This is the plumbing, not the creative. It is the system a campaign runs through, and it is deliberately the first thing we look at in a marketing retainer — because it is the cheapest place to find money that is already yours.',
    },
    {
      type: 'paragraph',
      text: 'If your handler is genuinely sound and you need more at the top, that is a different piece of work and we will say so rather than take the budget. [Paid acquisition →](/marketing/paid-acquisition)',
    },
  ],
  faqs: [
    {
      question: "We already have a CRM. Isn't this solved?",
      answer:
        'A CRM is a filing cabinet. Whether enquiries reach it, how fast someone responds, and whether follow-up happens without being remembered are all outside it unless somebody built that. Most of the CRMs we open are used as a place to type after the fact.',
    },
    {
      question: 'How fast is fast enough?',
      answer:
        "Fast enough that you are the first response they get. Rather than adopt somebody else's benchmark, measure your own close rate by response-time band — the answer will be specific to your business and impossible to argue with.",
    },
    {
      question: 'Will automation make us feel like a call centre?',
      answer:
        'Only if it is used to replace the human rather than to get the human there sooner. The goal is that a person responds quickly with something useful, not that a robot has a conversation.',
    },
    {
      question: 'Is this marketing or engineering?',
      answer:
        'Both, which is the point. It is why the marketing lane and the engineering lane are the same practice — we do not sell campaigns into a machine we are not allowed to look at.',
    },
  ],
  related: [
    { label: 'Marketing systems (the engineering side)', href: '/services/marketing-systems' },
    { label: 'Forward deployed engineering', href: '/forward-deployed-engineering' },
    { label: 'What we report', href: '/marketing/what-we-report' },
    { label: 'Ask what we would measure first', href: '/contact' },
  ],
};
