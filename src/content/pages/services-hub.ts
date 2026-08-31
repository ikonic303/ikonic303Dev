import type { PageContent } from '../types';
import { ORIGIN, crumbs } from './_shared';

const slug = '/services';

const serviceSchema: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${ORIGIN}/#service`,
  serviceType: 'Forward deployed engineering',
  provider: { '@id': `${ORIGIN}/#organization` },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'BusinessAudience',
    name: 'Operating companies with 50 to 500 employees',
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 50, maxValue: 500 },
  },
  description:
    "Embedded engineering engagements: on-site measurement of a single workflow's annual cost, followed by building and deploying software into the client's own stack, then operating it with their team.",
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'What we build',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI agents and automation',
          url: `${ORIGIN}/services/ai-agents-and-automation`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'CRM and sales systems',
          url: `${ORIGIN}/services/crm-and-sales-systems`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Internal tools and dashboards',
          url: `${ORIGIN}/services/internal-tools-and-dashboards`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Marketing systems',
          url: `${ORIGIN}/services/marketing-systems`,
        },
      },
    ],
  },
};

export const servicesHub: PageContent = {
  slug,
  seo: {
    title: 'What We Build — AI Agents, Systems and Internal Tools',
    description:
      'Four things we build, and the rule that governs all of them: it runs on your accounts, in your stack, and keeps running if we stop answering the phone.',
  },
  breadcrumb: crumbs({ name: 'Services', href: slug }),
  eyebrow: 'WHAT WE BUILD',
  h1: 'What we build',
  answer:
    'Four categories, one rule: everything runs on your accounts, inside your stack, documented, with your team trained on it. The test we build to is whether it would keep running if we stopped answering the phone tomorrow.',
  sections: [
    {
      type: 'paragraph',
      text: 'We do not decide what to build before the measurement. This page is what the work usually turns out to be, not a menu to order from.',
    },
    {
      type: 'heading',
      level: 3,
      text: '[AI agents and automation →](/services/ai-agents-and-automation)',
    },
    {
      type: 'paragraph',
      text: 'Software that does a job, not software that talks about one. Intake, triage, follow-up, document handling, exception routing — wired into the tools your team already has open.',
    },
    {
      type: 'heading',
      level: 3,
      text: '[CRM and sales systems →](/services/crm-and-sales-systems)',
    },
    {
      type: 'paragraph',
      text: 'The pipeline that reflects reality instead of the one people update on Fridays. Speed-to-response, follow-up that happens without anyone remembering, reporting that matches what the sales team believes.',
    },
    {
      type: 'heading',
      level: 3,
      text: '[Internal tools and dashboards →](/services/internal-tools-and-dashboards)',
    },
    {
      type: 'paragraph',
      text: 'The small applications that replace the spreadsheet everybody depends on and nobody owns. Built for the people who actually use them, which is why they get used.',
    },
    { type: 'heading', level: 3, text: '[Marketing systems →](/services/marketing-systems)' },
    {
      type: 'paragraph',
      text: 'Lead capture, routing, attribution and follow-up as engineering rather than as campaigns — so a lead never dies because a person was busy.',
    },
    { type: 'heading', level: 2, text: 'The rule underneath all four' },
    { type: 'paragraph', text: '**Your accounts. Your stack. Your credentials. Your data.**' },
    {
      type: 'paragraph',
      text: 'Not our tenant, not our platform, not an integration account you cannot see into. This is not generosity — it is the difference between buying a system and renting a dependency. A vendor whose work only functions while you keep paying them has priced their leverage into your renewal.',
    },
    {
      type: 'paragraph',
      text: 'Everything is documented as it is built and handed over as a real event: credentials in your names, your team trained, and a written statement of what will break it.',
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'How an engagement runs →', href: '/how-we-work' },
        { label: 'What it costs →', href: '/what-it-costs' },
      ],
    },
  ],
  schema: [serviceSchema],
  related: [
    { label: 'AI agents and automation', href: '/services/ai-agents-and-automation' },
    { label: 'CRM and sales systems', href: '/services/crm-and-sales-systems' },
    { label: 'Internal tools and dashboards', href: '/services/internal-tools-and-dashboards' },
    { label: 'Marketing systems', href: '/services/marketing-systems' },
  ],
};
