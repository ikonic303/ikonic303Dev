import type { PageContent } from '../types';
import { crumbs } from './_shared';

const slug = '/security/how-we-test';

export const secHowWeTest: PageContent = {
  slug,
  seo: {
    title: 'How We Test — Rules Of Engagement | ikonic303',
    description:
      'Signed scope before anything is touched, a named human on every action, proof of access never damage, and a cleanup log with the report. The full rules, published.',
  },
  breadcrumb: crumbs(
    { name: 'Security', href: '/security' },
    { name: 'How we test', href: slug },
  ),
  eyebrow: 'SECURITY',
  h1: 'How we test, and what we will never do',
  answer:
    'This page is our rules of engagement, published before you ask for them. If you have a security team, hand it to them. If you do not, it is the list of questions you should be asking every firm that offers to do this, including us.',
  sections: [
    { type: 'heading', level: 2, text: 'Rule 1 — Signed scope, or nothing happens' },
    {
      type: 'paragraph',
      text: 'No scan, no probe, no recon, no packet, no call, no email, no click against any asset that is not on a signed, in-scope, unexpired authorisation on file.',
    },
    {
      type: 'paragraph',
      text: '**A verbal go is not authorisation. Neither is "sure, go ahead" in an email.** Not because we distrust you, but because the person who says it may not be the person who can grant it, and if anything goes sideways the only thing that protects either of us is a document naming what was allowed and when.',
    },
    {
      type: 'paragraph',
      text: 'The scope document names: every asset in bounds, every asset explicitly out, the test window, what techniques are permitted, who may authorise a change to it, and a named person on each side who can stop everything with one phone call.',
    },
    { type: 'heading', level: 2, text: 'Rule 2 — A human finger on every trigger' },
    {
      type: 'paragraph',
      text: 'Our tooling measures, catalogues, drafts and reports. **A named human launches every act of exploitation, every simulated phishing message, every payload.** Nothing that could knock over a production system, and nothing that lands in front of a real person, ever runs unattended or on a schedule.',
    },
    {
      type: 'paragraph',
      text: 'This is why we do not sell continuous automated exploitation. Anything that fires without a person watching it is a system you are trusting with your uptime on a Sunday.',
    },
    { type: 'heading', level: 2, text: 'Rule 3 — We do not test what you do not own' },
    {
      type: 'paragraph',
      text: 'Your bank. Your CRM vendor. Your cloud provider’s backplane. Your upstream ISP. Your payment processor. All off limits — **even when a wildcard in the scope appears to cover them, and even one hop away.**',
    },
    {
      type: 'paragraph',
      text: "You cannot authorise a test against somebody else's systems, and a firm that agrees to do it anyway is telling you exactly how it will treat your systems when a different client asks.",
    },
    { type: 'heading', level: 2, text: 'Rule 4 — Proof of access, never damage' },
    {
      type: 'paragraph',
      text: 'When we find a way in, we prove it with **one redacted record**, not the table. We do not exfiltrate your data, we do not leave anything running, and we do not test destructive techniques against production to see what happens.',
    },
    {
      type: 'paragraph',
      text: 'Every artifact we create — a file, an account, a record, a rule — is logged as it is made and removed at the end. **You get the cleanup log with the report**, so you can verify for yourself that nothing of ours is still there.',
    },
    { type: 'heading', level: 2, text: 'Rule 5 — No impersonation of a real third party' },
    {
      type: 'paragraph',
      text: 'Posing as a bank, a government agency, law enforcement, or another company’s brand is a crime that your signature does not make legal. A signed scope authorises testing **your** people as **you** — it never authorises committing a separate offence against an outsider.',
    },
    {
      type: 'paragraph',
      text: 'Where a social-engineering test is in scope, the pretext is one that only involves your own organisation, and it is agreed in writing before it is sent.',
    },
    { type: 'heading', level: 2, text: 'Rule 6 — What we do with what we find' },
    {
      type: 'paragraph',
      text: 'Findings go to you. Our copy lives in one place, under the same handling rules we would apply to your systems, for as long as the engagement needs it and no longer.',
    },
    {
      type: 'paragraph',
      text: '**We do not publish client findings, name clients, or use anything we find as marketing.** If we ever show you a sample report, it is our own infrastructure or a lab target — never somebody who trusted us.',
    },

    { type: 'heading', level: 2, text: 'What an engagement actually looks like' },
    { type: 'heading', level: 3, text: '1. Scoping call' },
    {
      type: 'paragraph',
      text: 'What is worth testing, what is definitely out, what you are actually worried about, and what would constitute a useful answer. Frequently this call ends with us saying the honest thing about sequencing — that fixing three records is worth more this month than any assessment.',
    },
    { type: 'heading', level: 3, text: '2. Scope and rules of engagement, signed' },
    { type: 'paragraph', text: 'The document above. Both sides sign. Nothing before this.' },
    { type: 'heading', level: 3, text: '3. Passive collection' },
    {
      type: 'paragraph',
      text: 'Public records only — certificate logs, DNS, registration data — plus what your own site returns to an ordinary request. No traffic that a normal visitor would not generate. This produces the map, and we bring it back to you to confirm what is genuinely yours before anything else happens.',
    },
    { type: 'heading', level: 3, text: '4. Assessment' },
    {
      type: 'paragraph',
      text: 'The in-scope testing, inside the agreed window, with a named operator. Anything with any risk attached is scheduled rather than improvised, and you have a phone number that stops it.',
    },
    { type: 'heading', level: 3, text: '5. Triage' },
    {
      type: 'paragraph',
      text: 'The part a tool cannot do. False positives removed by hand. What remains is ranked by what it would cost you if it were used — not by the severity score a scanner printed, which knows nothing about your business.',
    },
    { type: 'heading', level: 3, text: '6. Report and walkthrough' },
    {
      type: 'paragraph',
      text: 'One page for whoever signs things, then a ranked technical section where each finding carries evidence, the exact fix, what that fix can break, how to verify it worked, and how to roll it back. Plus what you are already doing right. We walk your team through it rather than emailing a PDF and disappearing.',
    },
    { type: 'heading', level: 3, text: '7. Cleanup log, then one free re-test' },
    {
      type: 'paragraph',
      text: 'Everything we created, removed and listed. Then, once you have fixed things, we re-test the findings once at no extra charge — because a finding is closed when it fails to reproduce, not when somebody says it is closed.',
    },

    { type: 'heading', level: 2, text: 'Questions worth asking any security firm, including us' },
    {
      type: 'list',
      ordered: true,
      items: [
        'What exactly will you touch, and what have you written down as out of bounds?',
        'Who authorises a change to the scope mid-engagement, and how is it recorded?',
        'Who can I phone to stop it, and how fast do they answer?',
        'Will you test anything I do not own? (The only acceptable answer is no.)',
        'What will you do to prove access, and what will you deliberately not do?',
        'Will I get a list of everything you created and removed?',
        'What do you do with my findings after the engagement ends?',
        'Is the re-test included, or is it a second invoice?',
        'Who writes the report — the person who did the testing, or a template?',
        'What would you tell me if the honest answer is that I do not need this yet?',
      ],
    },
    {
      type: 'paragraph',
      text: 'A firm that answers all ten without hedging is one you can hand the keys to. That is the entire point of publishing ours.',
    },
  ],
  faqs: [
    {
      question: 'Can you start this week?',
      answer:
        'Scoping can start immediately; testing starts when the scope is signed. We do not shorten that step to hit a date, because the signed scope is the only thing that makes the rest of it lawful.',
    },
    {
      question: 'What if we need something outside these rules?',
      answer:
        'Then it does not happen. These are not preferences that a large enough engagement can move. They are the reason a buyer’s security team can say yes to us.',
    },
    {
      question: 'Do you carry insurance?',
      answer:
        'Ask on the call and you will get the precise answer in the policy’s own words rather than a marketing sentence. We would rather under-claim here than over-claim.',
    },
    {
      question: 'Do you do the offensive side?',
      answer:
        'Deeper adversary simulation runs only under a signed scope with a named operator on every action. We will tell you honestly on the call whether your situation warrants it or whether the external assessment is the whole job — which, at this size, it usually is.',
    },
  ],
  related: [
    { label: 'What an assessment covers', href: '/security' },
    { label: 'Your attack surface', href: '/security/attack-surface' },
    { label: 'Ask for a scoping call', href: '/contact' },
  ],
};
