import type { PageContent } from '../types';
import { ORIGIN, crumbs } from './_shared';

const slug = '/marketing';

// Service + OfferCatalog for the marketing retainer lane. Provider legal name per
// technical/schema/service-marketing.json in the Addendum B bundle (2026-09-09).
// No address, no phone, no sameAs — same address-freeze rule as the organization schema.
const serviceMarketingSchema: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${ORIGIN}${slug}#service`,
  serviceType: 'Marketing retainer',
  name: 'Marketing retainers',
  url: `${ORIGIN}${slug}`,
  provider: {
    '@id': `${ORIGIN}/#organization`,
    legalName: 'Unicorn Ventures LLC dba ikonic 303',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'BusinessAudience',
    name: 'Operating companies with 50 to 500 employees',
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 50, maxValue: 500 },
  },
  description:
    'Marketing run on a monthly retainer against a baseline recorded before the work starts: search and answer-engine visibility, content, business profile and listings, paid acquisition once lead handling is sound, and the lead capture, routing and follow-up system underneath it. Everything runs on the client’s own accounts and stack.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Marketing',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Answer engine optimisation', url: `${ORIGIN}/marketing/answer-engine-optimization` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Search visibility', url: `${ORIGIN}/marketing/search-visibility` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content', url: `${ORIGIN}/marketing/content` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lead response systems', url: `${ORIGIN}/marketing/lead-response` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paid acquisition', url: `${ORIGIN}/marketing/paid-acquisition` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business profile and listings', url: `${ORIGIN}/marketing/business-profile` } },
    ],
  },
};

export const marketingHub: PageContent = {
  slug,
  seo: {
    title: 'Marketing, Run As A System — Retainers | ikonic303',
    description:
      'Marketing on a monthly retainer for operating companies: search and answer-engine visibility, content, and the lead system underneath. Measured, not reported.',
  },
  breadcrumb: crumbs({ name: 'Marketing', href: slug }),
  eyebrow: 'MARKETING',
  h1: 'Marketing, run the way we run everything else',
  answer:
    "Most marketing retainers sell activity and report it back as progress. Ours starts with the same question the engineering work starts with: what is the number, and can you check it yourself? If we can't name what a month of work is supposed to move, we shouldn't be billing you for that month.",
  sections: [
    {
      type: 'paragraph',
      text: 'Most marketing retainers sell you activity and report it back to you as progress. Ours starts with the same question the engineering work starts with: **what is the number, and can you check it yourself?**',
    },
    {
      type: 'blockquote',
      text: "If we can't name the number a month of work is supposed to move, we shouldn't be billing you for that month. That is the whole standard.",
    },
    { type: 'ctaRow', links: [{ label: "Ask what we'd measure first →", href: '/contact' }] },

    { type: 'heading', level: 2, text: 'The problem, stated honestly' },
    { type: 'heading', level: 3, text: 'Nobody has ever been fired for reporting impressions' },
    {
      type: 'paragraph',
      text: 'An agency retainer is unusually easy to fake. Traffic went up. Reach went up. Engagement went up. None of those are money, and the ones that are money — enquiries, booked work, closed revenue — usually sit in a system the agency does not touch and cannot see.',
    },
    {
      type: 'paragraph',
      text: 'So the report is honest and the business is no better off. The gap is not dishonesty. It is that most retainers are scoped to produce *marketing*, and the thing that decides whether marketing pays is the handler underneath it: where the enquiry lands, how fast a human answers, whether anyone follows up twice, and whether any of it ends up in a system rather than an inbox.',
    },
    {
      type: 'paragraph',
      text: '**That is why the marketing lane and the engineering lane live in the same practice.** We do not sell campaigns into a machine we are not allowed to look at.',
    },

    { type: 'heading', level: 2, text: 'What the retainer actually covers' },
    { type: 'heading', level: 3, text: 'Search and answer-engine visibility' },
    {
      type: 'paragraph',
      text: "Ranking in Google is now half the job. The other half is being the source an AI assistant reaches for when someone asks it your category's question — and that is a different discipline, with different inputs: entity clarity, quotable structure, an `llms.txt` that tells a model what you do and do not sell, and content specific enough to be worth citing.",
    },
    {
      type: 'paragraph',
      text: 'We track a named list of the questions your buyers actually ask, and report **which of them name you and which name a competitor.** It is an uncomfortable number the first month. That is the point of it.',
    },
    { type: 'heading', level: 3, text: 'Content that is specific enough to be wrong' },
    {
      type: 'paragraph',
      text: 'Anything true of every company in your industry is worth nothing to a search engine and less than nothing to a model. We write from your operators, your constraints, your numbers — teaching one thing a reader could use today without hiring anyone.',
    },
    { type: 'heading', level: 3, text: 'Local and profile presence, where it applies' },
    {
      type: 'paragraph',
      text: 'Business profile, categories, services, questions, reviews, and the listings that decide whether your name, address and phone agree with each other across the internet. Unglamorous, and it is frequently the single cheapest ranking fix available.',
    },
    { type: 'heading', level: 3, text: 'Paid acquisition, once the handler is fixed' },
    {
      type: 'paragraph',
      text: 'Not before. Spending more to generate enquiries into a leaky handler increases waste in exact proportion to the spend. We will say so rather than take the budget.',
    },
    { type: 'heading', level: 3, text: 'The lead system underneath all of it' },
    {
      type: 'paragraph',
      text: 'Capture from every channel an enquiry can arrive on, routing by rule, first response in minutes, follow-up that does not depend on anyone remembering. Built on **your** accounts, in **your** stack, documented, with your team trained on it — the same rule as every engagement we run.',
    },

    { type: 'heading', level: 2, text: 'How it is different from an agency' },
    {
      type: 'table',
      headers: ['', 'A typical retainer', 'This'],
      rows: [
        ['What is sold', 'Deliverables per month', 'A number, and what moved it'],
        ['Where the work lives', "The agency's tools and tenant", 'Your accounts, your stack, your credentials'],
        ['Reporting', 'Their dashboard', 'Numbers you can pull yourself, without asking us'],
        ['Lead handling', 'Out of scope', 'In scope, and usually the first thing we fix'],
        ['If you stop', 'The system stops with them', 'It keeps running. Documented and handed over'],
      ],
    },
    {
      type: 'paragraph',
      text: 'The last row is the one worth reading twice. A vendor whose work only functions while you keep paying has priced their leverage into your renewal. We would rather be kept because the work is good.',
    },

    { type: 'heading', level: 2, text: 'Who this is for, and who it is not' },
    {
      type: 'paragraph',
      text: '**It fits** an operating company with a real sales motion, someone senior who can authorise changing a process, and an appetite for being told the honest version of their own numbers.',
    },
    {
      type: 'paragraph',
      text: '**It does not fit** a business looking for volume — more posts, more emails, more impressions — with no interest in what happens after an enquiry arrives. We would take the money and neither of us would be happy at month six.',
    },
    { type: 'paragraph', text: 'We cap what we take on. If we are full, we will say that instead of stretching.' },

    { type: 'heading', level: 2, text: 'How it starts' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**A conversation about which number matters.** Usually enquiries or booked work, occasionally something narrower like speed to quote.',
        '**A baseline.** Whatever is measurable today, recorded before we touch anything — because without a before, there is no honest after, and we will not reconstruct one later.',
        '**The first month is repair, not campaigns.** Almost always the handler, the profile, and the things the site says about itself.',
        '**Monthly, against the baseline.** Including the months it did not move, and why.',
      ],
    },
    { type: 'ctaRow', links: [{ label: "Ask what we'd measure first →", href: '/contact' }] },

    { type: 'heading', level: 2, text: 'Go deeper' },
    {
      type: 'paragraph',
      text: 'Each link below is the lane’s depth — what gets cited, and what a buyer reads before they contact anybody.',
    },
    {
      type: 'list',
      items: [
        '**[Answer engine optimisation →](/marketing/answer-engine-optimization)** — what actually decides whether an AI assistant names you in an answer, and how we measure it.',
        '**[Search visibility →](/marketing/search-visibility)** — the technical floor, the architecture problem most sites lose to, and how queries get chosen.',
        '**[Content →](/marketing/content)** — the publishing standard: one usable idea, specific enough to be wrong, sourced from your own operators.',
        '**[Lead response →](/marketing/lead-response)** — the four numbers that decide whether any of this pays, and how to get them this week.',
        '**[Paid acquisition →](/marketing/paid-acquisition)** — the five conditions that must be true before we will spend your money.',
        '**[Business profile and listings →](/marketing/business-profile)** — the least glamorous work in marketing and frequently the highest return per hour.',
        '**[What we report →](/marketing/what-we-report)** — the numbers we report, and the ones we refuse to lead with.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Do you require a long contract?',
      answer:
        'No. A retainer that needs a contract to survive is a retainer that stopped being worth buying.',
    },
    {
      question: 'How long before it shows?',
      answer:
        'Lead-handling fixes show in days, because response time is measurable immediately. Search and answer-engine position is slower — a fair first read is roughly one quarter, and anyone promising a month is selling you the report, not the result.',
    },
    {
      question: 'What does it cost?',
      answer:
        'It depends on what we would be running, and we would rather scope it than quote a number to a stranger. Ask, and you will get a straight answer quickly.',
    },
    {
      question: 'Do you also do the engineering?',
      answer:
        'Yes — it is the same practice. Marketing is one of the lanes; the others are AI agents and automation, CRM and sales systems, and internal tools. Frequently the marketing conversation turns into an engineering one once we see where the enquiries actually die.',
    },
    {
      question: 'Who owns what you build?',
      answer: 'You do. Your accounts, your credentials, your data, documented as it is built.',
    },
  ],
  schema: [serviceMarketingSchema],
  related: [
    { label: 'Marketing systems (the engineering side)', href: '/services/marketing-systems' },
    { label: 'CRM and sales systems', href: '/services/crm-and-sales-systems' },
    { label: 'What a manual workflow costs you', href: '/guides/cost-of-a-manual-workflow' },
    { label: 'Start with the measurement', href: '/contact' },
  ],
};
