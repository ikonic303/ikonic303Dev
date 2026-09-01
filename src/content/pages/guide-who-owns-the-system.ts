import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/guides/who-owns-the-system';

export const guideWhoOwnsTheSystem: PageContent = {
  slug,
  seo: {
    title: 'Who Owns the System When Someone Builds It for You',
    description:
      'Accounts, credentials, code, data and knowledge. Ask about all five before you sign, because the answers only become expensive later.',
  },
  breadcrumb: crumbs(
    { name: 'Guides', href: '/guides' },
    { name: 'Who owns the system', href: slug },
  ),
  eyebrow: 'GUIDE',
  h1: 'Who owns the system when it is built for you',
  answer:
    'Ownership has five parts and vendors answer confidently about one of them. Accounts, credentials, code, data, and knowledge. You can own the code entirely and still be completely dependent — if it runs on their accounts, with their keys, and nobody on your side understands it.',
  sections: [
    {
      type: 'paragraph',
      text: 'Ask all five before you sign. Afterwards, every one of them is a negotiation you will lose.',
    },
    { type: 'heading', level: 2, text: '1. Accounts' },
    { type: 'paragraph', text: '**Whose name is on the subscriptions the system depends on?**' },
    {
      type: 'paragraph',
      text: 'The common pattern: an agency builds on their platform account, under their agency licence, sometimes at a rate you cannot get directly. It works well and costs less — until you want to leave, at which point the system does not travel and you are rebuilding from scratch.',
    },
    {
      type: 'paragraph',
      text: "**What good looks like:** every account in your company's name, billed to your card, with you as owner and them as a user you can remove.",
    },
    { type: 'heading', level: 2, text: '2. Credentials' },
    { type: 'paragraph', text: '**Who holds the API keys, and can you see them?**' },
    {
      type: 'paragraph',
      text: 'Even with accounts in your name, a system built with keys only the vendor has is a dependency. When they stop answering, nothing can be changed and nobody can even see what is connected to what.',
    },
    {
      type: 'paragraph',
      text: '**What good looks like:** every credential in your password manager, documented, with what it is for written next to it.',
    },
    { type: 'heading', level: 2, text: '3. Code and configuration' },
    { type: 'paragraph', text: '**Where does it live, and can you get at it without asking?**' },
    {
      type: 'paragraph',
      text: '“You own the IP” is a contractual statement that means little if the code is in the vendor’s repository and the configuration exists only in a UI you cannot log into.',
    },
    {
      type: 'paragraph',
      text: '**What good looks like:** code in a repository your company controls. Configuration exported or documented. You could hand it to another firm tomorrow.',
    },
    { type: 'heading', level: 2, text: '4. Data' },
    { type: 'paragraph', text: '**Can you get it all out, in a usable format, without asking?**' },
    {
      type: 'paragraph',
      text: 'The one people check, and still the one that catches them — because “we can export” often means a CSV of the main table and none of the relationships, history, or attachments.',
    },
    {
      type: 'paragraph',
      text: '**What good looks like:** a full export you have actually run once, during the engagement, and looked at. Not a promise. A file.',
    },
    { type: 'heading', level: 2, text: '5. Knowledge — the one that actually matters' },
    { type: 'paragraph', text: '**Does anyone on your side understand how it works?**' },
    {
      type: 'paragraph',
      text: 'You can own all four of the above and still be stuck, because the only person who knows why it does that thing on the fifteenth of the month has left.',
    },
    {
      type: 'paragraph',
      text: '**What good looks like:** documentation written as it was built. At least two of your people trained. A written statement of what will break it and what to do.',
    },
    { type: 'heading', level: 2, text: 'The test question' },
    {
      type: 'blockquote',
      text: '“If you stopped answering the phone tomorrow, what happens to this system?”',
    },
    { type: 'paragraph', text: 'The honest answers are:' },
    {
      type: 'list',
      items: [
        '“It keeps running. You’d need someone technical for changes.” — good.',
        '“It runs, but you couldn’t change it.” — acceptable, if you know that and priced it in.',
        '“It stops.” — you are renting your operations. That may still be a fine deal, but you should know you are doing it.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Ask it in the sales conversation. The response tells you a great deal, and how comfortable they are with the question tells you more than the answer.',
    },
    { type: 'heading', level: 2, text: 'The reasonable version of vendor lock-in' },
    {
      type: 'paragraph',
      text: 'Not all dependency is predatory. A vendor who hosts and maintains something is providing real value and charging for it. Software you buy is a dependency and nobody objects.',
    },
    {
      type: 'paragraph',
      text: 'The problem is **undisclosed** dependency: buying what you believe is an asset and discovering at renewal that it is a rental. That discovery always happens at the worst moment, because that is when you check.',
    },
    {
      type: 'paragraph',
      text: 'So ask the five questions early, write the answers into the agreement, and price the deal you are actually getting.',
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'What we build, and the rule underneath it →', href: '/services' },
        { label: 'Twelve questions before you sign →', href: '/guides/twelve-questions-before-you-sign' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'Who owns the system when it is built for you',
      description: 'Accounts, credentials, code, data and knowledge — the five parts of ownership to settle before signing.',
      section: 'Guides',
    }),
  ],
  related: [
    { label: 'Twelve questions before you sign', href: '/guides/twelve-questions-before-you-sign' },
    { label: 'Build or buy an internal tool', href: '/guides/build-vs-buy-internal-tools' },
    { label: 'What we build', href: '/services' },
  ],
};
