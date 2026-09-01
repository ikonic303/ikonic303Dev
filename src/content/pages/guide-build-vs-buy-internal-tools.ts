import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/guides/build-vs-buy-internal-tools';

export const guideBuildVsBuy: PageContent = {
  slug,
  seo: {
    title: 'Build or Buy? A Decision Rule for Internal Tools',
    description:
      'Buy for anything that is not specific to you. Build only where the way you do it is the reason customers choose you. Everything else is detail.',
  },
  breadcrumb: crumbs(
    { name: 'Guides', href: '/guides' },
    { name: 'Build or buy an internal tool', href: slug },
  ),
  eyebrow: 'GUIDE',
  h1: 'Build or buy an internal tool',
  answer:
    'Buy anything that is not specific to your business. Build only where the way you do it is genuinely part of why customers choose you. Accounting is not that. Payroll is not that. Your quoting logic, your dispatch rules and the way you handle exceptions usually are.',
  sections: [
    {
      type: 'paragraph',
      text: 'The build-vs-buy argument is normally conducted as a cost comparison, which is the wrong axis and why it never resolves. The right question is: **is this process a source of advantage, or is it plumbing?**',
    },
    { type: 'heading', level: 2, text: 'The decision rule, in order' },
    { type: 'heading', level: 3, text: '1. Is there an off-the-shelf product that does 80% of it?' },
    {
      type: 'paragraph',
      text: 'If yes, buy it, and change your process to fit the remaining 20%. The 20% you are protecting is usually habit rather than advantage, and the cost of defending it is a permanent maintenance obligation.',
    },
    {
      type: 'paragraph',
      text: '**The exception that matters:** if that 20% is the part your customers actually notice, do not compromise it. Now you are in build territory — or in “buy the product and build the 20% around it,” which is often the best answer of all.',
    },
    { type: 'heading', level: 3, text: '2. Is this a source of advantage or is it plumbing?' },
    {
      type: 'paragraph',
      text: 'Plumbing: accounting, payroll, email, storage, HR, expenses. Buy. Never build. Buying the boring thing is not a compromise; it is the correct allocation of your engineering attention.',
    },
    {
      type: 'paragraph',
      text: 'Advantage: how you quote, how you dispatch, how you decide what a job is worth, how you handle the exceptions your competitors handle badly. If you built it and it worked, would a competitor be at a disadvantage? Then it might be worth building.',
    },
    { type: 'heading', level: 3, text: '3. Will it need to change often?' },
    {
      type: 'paragraph',
      text: 'Bought software changes on the vendor’s schedule. If this process changes every quarter because your market does, you will spend your life fighting a product roadmap that is not yours.',
    },
    { type: 'heading', level: 3, text: '4. How many people, how critical?' },
    {
      type: 'paragraph',
      text: 'Two people, once a week, easily redone by hand if it breaks — a spreadsheet is fine and building would be indulgent.',
    },
    {
      type: 'paragraph',
      text: 'Forty people, every day, and the business stops if it breaks — that is an application, whether or not it currently looks like one.',
    },
    { type: 'heading', level: 2, text: 'The hidden option most companies miss' },
    { type: 'paragraph', text: '**Buy the platform, build the thin layer on top.**' },
    {
      type: 'paragraph',
      text: 'Buy the CRM. Build the quoting logic that sits on it. Buy the accounting package. Build the reconciliation that removes eight hours a week.',
    },
    {
      type: 'paragraph',
      text: 'You get the vendor’s maintenance, security and updates for the plumbing, and your own logic where it matters. This is the right answer far more often than either pure option, and it is the one that rarely gets proposed — because a product vendor wants you to buy everything and a dev shop wants to build everything.',
    },
    { type: 'heading', level: 2, text: 'What people get wrong about the cost' },
    {
      type: 'paragraph',
      text: '**Buying is not cheaper than building. It has a different cost shape.** Buy: predictable, forever, rising, and you never own it. Build: high upfront, then low but never zero — because “we built it once” ignores that someone has to maintain it in year three when the person who wrote it has left.',
    },
    {
      type: 'paragraph',
      text: 'Whatever you build, budget maintenance. An internal tool with no maintenance owner becomes the spreadsheet you were trying to replace, but harder to change.',
    },
    { type: 'heading', level: 2, text: 'The question that resolves most arguments' },
    {
      type: 'paragraph',
      text: '**“If this system disappeared tomorrow, what would we lose that a competitor could not also buy?”**',
    },
    {
      type: 'paragraph',
      text: 'Nothing — buy it. Something real — that is the thing worth building, and probably only that thing.',
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'Internal tools and dashboards →', href: '/services/internal-tools-and-dashboards' },
        { label: 'Who owns the system →', href: '/guides/who-owns-the-system' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'Build or buy an internal tool',
      description: 'Buy the plumbing, build only what is a genuine source of advantage — and consider the layer in between.',
      section: 'Guides',
    }),
  ],
  related: [
    { label: 'Internal tools and dashboards', href: '/services/internal-tools-and-dashboards' },
    { label: 'Who owns the system', href: '/guides/who-owns-the-system' },
    { label: 'You cannot automate a mess', href: '/guides/you-cannot-automate-a-mess' },
  ],
};
