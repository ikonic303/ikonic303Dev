import type { PageContent } from '../types';
import { crumbs } from './_shared';

const slug = '/security/attack-surface';

export const secAttackSurface: PageContent = {
  slug,
  seo: {
    title: 'Your Attack Surface: What A Stranger Already Sees',
    description:
      'Everything an attacker can learn about your company before touching it — subdomains, certificates, mail records, logins — where it comes from, and what to do about it.',
  },
  breadcrumb: crumbs(
    { name: 'Security', href: '/security' },
    { name: 'Attack surface', href: slug },
  ),
  eyebrow: 'SECURITY',
  h1: 'What a stranger can already see about your company',
  answer:
    'Before anybody attacks you, they read about you. All of it is public, none of it requires a single packet aimed at your servers, and it takes about a minute. This page is what they find, where it comes from, and which parts of it you can actually change.',
  sections: [
    { type: 'heading', level: 2, text: 'The map exists whether you drew it or not' },
    {
      type: 'paragraph',
      text: 'Your attack surface is not a document you own. It is the set of things of yours that a stranger can reach or learn about without permission, and it grows every time somebody launches a site, spins up a staging box, connects a SaaS tool to your mail, or lets a domain renew on autopilot.',
    },
    {
      type: 'paragraph',
      text: 'The uncomfortable part is that the person outside your company usually has a **more current** map than the person inside it. Their map is generated from public infrastructure; yours is generated from memory.',
    },

    { type: 'heading', level: 2, text: 'Where the map comes from' },
    { type: 'heading', level: 3, text: 'Certificate Transparency logs' },
    {
      type: 'paragraph',
      text: 'Every TLS certificate issued for your domain by any public authority is published in a permanent, searchable, public log. Browsers require this, and it is genuinely a good thing — it is how the world catches an authority issuing a certificate it should not have.',
    },
    {
      type: 'paragraph',
      text: 'The side effect is that the moment `staging.yourcompany.com` gets a certificate, its existence is a matter of public record forever. There is no un-publishing it. A single query returns the list, and it is frequently the first thing an attacker runs.',
    },
    {
      type: 'paragraph',
      text: '**What it does not contain:** any content, any traffic, any keys. Just names, issuers and dates. That is enough to draw the map.',
    },
    { type: 'heading', level: 3, text: 'DNS' },
    {
      type: 'paragraph',
      text: 'Your public records say more than most people expect. Mail records name your mail provider and every service allowed to send as you. TXT records left behind by verification steps name tools you signed up for years ago. A missing DNSSEC signature says whether your records can be tampered with in transit. All of it is readable by anyone.',
    },
    { type: 'heading', level: 3, text: 'Domain registration data' },
    {
      type: 'paragraph',
      text: 'Registration and expiry dates, the registrar, and — importantly — whether the domain carries a **transfer lock**. An unlocked domain is a live risk of a different class from everything else on this page: lose the domain and you lose the mail, the site, and every password reset that runs through either.',
    },
    { type: 'heading', level: 3, text: "Your own website's response" },
    {
      type: 'paragraph',
      text: 'The headers your site returns say which platform you run, sometimes which version, and whether certain browser-side protections are switched on. A version number in a header is a shortcut: an attacker can look up the known issues for that exact release rather than probing to find out.',
    },
    { type: 'heading', level: 3, text: 'Your people' },
    {
      type: 'paragraph',
      text: 'Names, roles, email format, who just started, who has admin in their title. Public by design, and the raw material for the message that works. Nothing here is fixable by configuration; it is fixable by what your team expects and verifies.',
    },

    { type: 'heading', level: 2, text: 'The part that actually gets people: the host nobody is watching' },
    {
      type: 'paragraph',
      text: 'Attackers do not start at the front door, because the front door is where the attention is. They start where the attention is not:',
    },
    {
      type: 'list',
      items: [
        '**Staging and development environments** skip the hardening production gets, because they are temporary — and then they are not temporary.',
        '**They run older code**, which frequently means running the bug that production has already patched.',
        '**They often hold a copy of real data**, because that is what makes testing realistic. The security controls around that copy are usually a fraction of the ones around the original.',
        '**Nobody reads their logs.** An attacker can take their time.',
        '**Decommissioned in spirit, not in DNS.** The project ended, the box stayed, the record still points at it, and now something is listening on an address nobody owns any more.',
      ],
    },
    {
      type: 'paragraph',
      text: 'The list of these hosts is not secret. It is in the certificate logs, and it is one query away.',
    },
    { type: 'heading', level: 3, text: 'What to do about it' },
    {
      type: 'paragraph',
      text: 'You cannot remove anything from the logs, so the goal is to make the map worthless rather than to hide it:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Inventory first.** Pull the full list of names ever certificated for your domain and mark each one: live, retired, or unknown. "Unknown" is the interesting column and it is usually not empty.',
        '**Remove the DNS record for anything retired**, not just the server. A name that resolves to something you no longer control is worse than a name that does not resolve at all — that is how a subdomain gets taken over and used to send mail or host a phishing page under your brand.',
        '**Put non-production behind authentication** — a VPN, an IP allow list, or at minimum a login in front of the whole environment. If it is reachable by anyone who knows the name, assume it is reached.',
        '**Stop copying production data into it.** This is the expensive habit and the hardest to break, and it is the reason a staging box is a real incident rather than an embarrassing one.',
        '**Use a wildcard certificate for non-production** if you want new internal hostnames to stop announcing themselves individually. It changes what future logs reveal; it changes nothing about the past.',
      ],
    },

    { type: 'heading', level: 2, text: 'What we do with the map' },
    {
      type: 'paragraph',
      text: 'We build it before we touch anything. The first pass is entirely public-record: certificate logs, DNS, registration data. That produces a candidate list of everything of yours that exists, which we bring back to you — because roughly every time, some of it is a surprise.',
    },
    {
      type: 'paragraph',
      text: 'You confirm what is yours. This is not a formality. Testing something you do not own is the one mistake in this business that cannot be walked back, and companies routinely have names in their own certificate logs that belong to a partner, a former subsidiary, or a vendor.',
    },
    {
      type: 'paragraph',
      text: 'Then, and only then, and only under a signed scope, we test what is in bounds. Everything before that point is reading public records. Everything after it needs your signature.',
    },

    { type: 'heading', level: 2, text: 'The free version of step one' },
    {
      type: 'paragraph',
      text: 'The passive half of this — public records, plus one ordinary request to your homepage, which is less traffic than one visit from a browser — is available to you for free, right now, without talking to anybody. It reads your mail records, your certificate history, your hostname list, your domain lock status and your site’s headers, grades what it finds and gives you the fixes.',
    },
    {
      type: 'paragraph',
      text: 'It is not a scan of your systems and it is not a penetration test. It is the same first pass we run, and for a lot of companies it turns out to be the only thing they needed.',
    },
    { type: 'ctaRow', links: [{ label: 'Run the free exposure report →', href: '/exposure' }] },
  ],
  faqs: [
    {
      question: 'Can I get my subdomains removed from the certificate logs?',
      answer:
        'No. The logs are append-only by design and browsers depend on that. The realistic goal is to make the list boring: retire what is dead, authenticate what is not, and stop putting real data in places that were built to be temporary.',
    },
    {
      question: 'Is looking at any of this legal?',
      answer:
        'Reading public records is reading public records — certificate logs and DNS are published infrastructure. Sending traffic at a system you do not own to see how it responds is a different act with a different answer, which is why nothing in an engagement happens before a signed scope.',
    },
    {
      question: "We are behind Cloudflare. Doesn't that hide us?",
      answer:
        "It hides your origin's address from a casual look, and it is worth having. It does not hide your hostnames from the certificate logs, your mail records from DNS, or a staging box that was never put behind it in the first place.",
    },
    {
      question: 'How often does this need redoing?',
      answer:
        'The map changes when your estate changes. In practice: when you launch something, when a project ends, when a vendor is swapped, and once on a schedule to catch what nobody mentioned.',
    },
  ],
  related: [
    { label: 'How email spoofing works', href: '/security/email-spoofing' },
    { label: 'Ask for a scoping call', href: '/contact' },
    { label: 'Back to security', href: '/security' },
  ],
};
