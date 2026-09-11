import type { PageContent } from '../types';
import { crumbs } from './_shared';

const slug = '/security/exposure-report';

export const secExposureReport: PageContent = {
  slug,
  seo: {
    title: 'The Free Exposure Report — What It Checks And Why',
    description:
      'A free, passive report of what a stranger can already learn about your company from public records. What it reads, what it deliberately does not do, and its limits.',
  },
  breadcrumb: crumbs(
    { name: 'Security', href: '/security' },
    { name: 'The free exposure report', href: slug },
  ),
  eyebrow: 'SECURITY',
  h1: 'The free exposure report, explained',
  answer:
    'Type a domain, confirm you own it, and about ten seconds later you get a graded report of what anyone on the internet can already learn about your company — starting with whether they can send email as you. It is free, it requires no account, and it does not touch your systems.',
  sections: [
    { type: 'ctaRow', links: [{ label: 'Run it →', href: '/exposure' }] },

    { type: 'heading', level: 2, text: 'What it reads' },
    {
      type: 'list',
      items: [
        '**Whether anyone can send email as you.** Your SPF, DKIM and DMARC records, read from DNS: whether they exist, whether they are at an enforcing policy or merely watching, whether reports are being collected at all, and whether the address collecting them is authorised to. [Full explanation →](/security/email-spoofing)',
        '**Your certificate history and hostname list.** Every name ever certificated for your domain, pulled from the public Certificate Transparency logs, split into what still resolves and what is historical — which is where the forgotten staging, admin and VPN boxes surface. [Why this matters →](/security/attack-surface)',
        '**Your certificate itself.** Validity, expiry, and how much time is left before a renewal that somebody has to remember.',
        '**HTTPS enforcement and security headers.** Whether plain HTTP is redirected, whether HSTS is present, whether clickjacking protection is set, and which of the standard headers are missing — read from one ordinary request to your homepage. [The headers, in order →](/security/website-headers)',
        '**Leaked software versions.** Whether your own responses announce which platform and which release you run, which turns an attacker’s guesswork into a lookup.',
        '**Domain-level controls.** Whether your domain carries a transfer lock, whether DNSSEC is signed, and whether a CAA record restricts which authorities may issue certificates for you.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Each finding comes with the exact fix in plain English, and the report includes a section on what you are already doing right.',
    },

    { type: 'heading', level: 2, text: 'What it deliberately does not do' },
    {
      type: 'paragraph',
      text: 'This is the part worth reading twice, because it is the difference between a tool you can point at your own company on a Tuesday afternoon and one you cannot.',
    },
    {
      type: 'paragraph',
      text: 'It does not scan you. Everything above comes from public records — DNS, Certificate Transparency, domain registration — plus **one** ordinary request to your homepage, the same request a browser makes when somebody visits. That is strictly less traffic than one visit from one person.',
    },
    {
      type: 'callout',
      text: 'No port scan. No crawl. No second page. No login. No parameter. No payload. No authenticated request. No header a browser would not send. No subdomain you did not type. No repeat on a schedule.',
    },
    { type: 'paragraph', text: 'It refuses IP addresses and ranges. Domain names only, on purpose.' },
    {
      type: 'paragraph',
      text: 'It logs the ownership confirmation you tick, verbatim, with the scan. That confirmation is weaker than a signature and we treat it as exactly that: it buys the handful of requests above and nothing more. Anything beyond them is a scoped engagement with a signed authorisation. [Our rules of engagement →](/security/how-we-test)',
    },
    {
      type: 'paragraph',
      text: 'The test we hold ourselves to for any future addition: **if a normal person opening your site in a browser would generate that traffic, it can be in the free tool. If it would not, it needs a signature.**',
    },

    { type: 'heading', level: 2, text: 'The limits, stated plainly' },
    {
      type: 'paragraph',
      text: '**A clean grade means your front door is tidy. It does not mean you are secure.** The report reads what is public. It knows nothing about your authentication, your internal network, your backups, your vendors, your code, or your people — and people are the most reliable route into a company of any size.',
    },
    {
      type: 'paragraph',
      text: 'It cannot see a lookalike domain registered by someone else to impersonate you, because that domain is not yours and nothing you publish governs it.',
    },
    {
      type: 'paragraph',
      text: 'It is a snapshot. It reflects what is public at the moment you run it. Certificates get issued, records get edited, and a tool somebody connected to your mail last week does not appear until it does something visible.',
    },
    {
      type: 'paragraph',
      text: 'Being specific about that is the point. A tool that implies a clean grade equals safety is selling you a feeling.',
    },

    { type: 'heading', level: 2, text: 'What to do with the result' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Fix the mail records first**, in the safe order. It is the highest-value item on almost every report we have run. [The order →](/security/email-spoofing)',
        '**Work through the hostname list** and mark each name live, retired or unknown. Retire the DNS for anything dead, authenticate anything non-production.',
        '**Ship the headers that break nothing**, then the ones that need testing. [In order →](/security/website-headers)',
        '**Lock the domain** if it is unlocked, at the registrar, in about a minute.',
        '**Re-run it afterwards.** The grade moving is the cheapest proof that the work landed.',
      ],
    },
    {
      type: 'paragraph',
      text: 'If the report comes back clean and you still need a real answer — because a customer asked, an insurer asked, or you hold data that would matter if it moved — that is the conversation an assessment is for.',
    },
    { type: 'ctaRow', links: [{ label: 'Ask for a scoping call →', href: '/contact' }] },
  ],
  faqs: [
    {
      question: 'Is it really free, and what is the catch?',
      answer:
        'It is free. The grade and the most serious findings are shown immediately; the full list with every fix is sent to an email address, and that address is how we would ever contact you. We do not sell it, and nothing about running it obliges you to talk to us.',
    },
    {
      question: 'Do I have to own the domain?',
      answer:
        'Yes, and you confirm it before it will run. The confirmation is stored with the scan. Please do not run it against somebody else’s company.',
    },
    {
      question: 'Will it set off our security alerts?',
      answer: 'It should not. From your side it looks like one visitor loading your homepage once.',
    },
    {
      question: 'Can you run it on a schedule and tell me when something changes?',
      answer:
        'Not from the free tool. Monitoring means repeatedly touching a system, which is a customer with an agreement rather than a stranger with a checkbox. Ask us about it if you want it.',
    },
    {
      question: 'Is this a penetration test?',
      answer:
        'No, and we will not describe it as one. It is a passive external exposure report — the first, cheapest step. A penetration test involves testing, testing involves touching your systems, and touching your systems requires a signed scope.',
    },
  ],
  related: [
    { label: 'Run the free exposure report', href: '/exposure' },
    { label: 'Back to security', href: '/security' },
  ],
};
