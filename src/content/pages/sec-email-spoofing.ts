import type { PageContent } from '../types';
import { crumbs } from './_shared';

const slug = '/security/email-spoofing';

export const secEmailSpoofing: PageContent = {
  slug,
  seo: {
    title: 'Stop People Sending Email As Your Company — SPF DKIM DMARC',
    description:
      'Anyone can put your company in the From line of an invoice unless three DNS records say otherwise. Here is what each one does, the safe order, and how to enforce.',
  },
  breadcrumb: crumbs(
    { name: 'Security', href: '/security' },
    { name: 'Email spoofing', href: slug },
  ),
  eyebrow: 'SECURITY',
  h1: 'Stop people sending email as your company',
  answer:
    'Three DNS records, in this order: SPF, DKIM, DMARC — then tighten DMARC until forgeries are refused. That combination tells every mail server on earth which senders are really you. It costs nothing, it is usually an afternoon, and it is the most commonly open door we find.',
  sections: [
    { type: 'heading', level: 2, text: 'Why this one comes first' },
    {
      type: 'paragraph',
      text: "Impersonating your own domain is the cheapest attack that exists against a company your size. It requires no hacking at all. Your domain's records are public; if they say nothing, a forged message is technically indistinguishable from a real one, and the receiving mail server has no basis to treat it differently.",
    },
    {
      type: 'paragraph',
      text: 'Three things follow from that, and they are the reason this sits above everything else on the list:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**The victim is usually not you.** It is your customer paying a forged invoice, or your bookkeeper actioning a request that looks like it came from the owner.',
        '**There is nothing to detect on your side.** No login, no malware, no alert. The attacker never touches your systems.',
        '**You may never find out.** The first signal is often a customer asking why they were invoiced twice — months later, with the money gone.',
      ],
    },

    { type: 'heading', level: 2, text: 'The three records, and what each one actually does' },
    { type: 'heading', level: 3, text: 'SPF — who is allowed to send' },
    {
      type: 'paragraph',
      text: 'A TXT record on your domain listing the servers and services permitted to send mail as you. Your mail provider publishes the exact `include:` line; every other sending tool you use — the CRM, the invoicing system, the newsletter, the booking form — has its own.',
    },
    { type: 'codeblock', code: 'v=spf1 include:_spf.example-provider.com ~all' },
    {
      type: 'paragraph',
      text: 'The ending matters. `~all` is a soft fail: "anything else is probably not us." `-all` is a hard fail: "anything else is not us." You start at `~all` and you finish at `-all`, and the gap between them is where the work is.',
    },
    {
      type: 'paragraph',
      text: '**The trap:** SPF has a hard limit of ten DNS lookups. Every `include:` costs at least one. Companies that have accumulated eight sending tools frequently break SPF by adding a ninth, and the failure is silent — the record simply stops being evaluated, and you are back to no protection with a record that looks fine.',
    },
    { type: 'heading', level: 3, text: 'DKIM — a signature that proves it' },
    {
      type: 'paragraph',
      text: 'A cryptographic signature added to every message you send, with the public half published in DNS. **You cannot copy this one from a guide.** Your mail provider generates the key in its own admin console and hands you the record to publish. Turn it on there first, then publish what it gives you.',
    },
    { type: 'paragraph', text: 'DKIM survives forwarding, which SPF frequently does not. That is why both exist.' },
    { type: 'heading', level: 3, text: 'DMARC — the instruction, and the reporting' },
    {
      type: 'paragraph',
      text: 'A TXT record at `_dmarc.yourdomain.com` that ties the other two together, tells receiving servers what to do with mail that fails, and asks them to report what they saw.',
    },
    { type: 'codeblock', code: 'v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com' },
    {
      type: 'table',
      headers: ['Policy', 'What a receiving server does with a forgery', 'What it risks'],
      rows: [
        ['`p=none`', 'delivers it, and reports it to you', 'nothing — the safe first step'],
        ['`p=quarantine`', 'puts it in the spam folder', 'a legitimate sender you forgot lands in spam'],
        ['`p=reject`', 'refuses it outright', 'a legitimate sender you forgot bounces'],
      ],
    },
    {
      type: 'paragraph',
      text: '**`p=none` means you are watching people forge your email, not stopping them.** It is the correct place to start and the wrong place to stay. Most domains that reach `p=none` never move past it, and at `p=none` an invoice-fraud campaign against your customers succeeds exactly as well as it would if you had published nothing at all.',
    },
    {
      type: 'paragraph',
      text: '**A DMARC record with no `rua=` is monitoring into a void.** You take the whole risk profile of `p=none` and receive none of the benefit that justifies it.',
    },

    { type: 'heading', level: 2, text: 'The safe order, and why the waiting is not optional' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**SPF with `~all`, and DKIM switched on.** Neither of these can break existing mail. Do both.',
        '**DMARC at `p=none`, with a reporting address.** Still cannot break existing mail. You are now collecting evidence.',
        '**Read the reports for two to four weeks.** They arrive as XML; any free DMARC report reader turns them into a plain list of "who is sending as you, and whether it passed." This step is where you discover the four sending services nobody remembered.',
        '**Fix each legitimate sender that fails** — add it to SPF, or enable DKIM inside that tool.',
        '**Move to `p=quarantine`.** Watch for a couple of weeks.',
        '**Move to `p=reject`, and change SPF’s `~all` to `-all`.**',
      ],
    },
    {
      type: 'paragraph',
      text: 'Step 6 is the one that stops the attack. Steps 1 to 5 exist so that step 6 does not bounce a real invoice. **Anyone who tells you to publish `p=reject` today is giving you advice that is correct in theory and expensive in practice** — and the expense lands on your own sales team when their quotes stop arriving.',
    },

    { type: 'heading', level: 2, text: 'The one nobody checks: who is allowed to receive your reports' },
    {
      type: 'paragraph',
      text: 'If your DMARC record sends reports to an address at a **different** domain — an agency, a monitoring vendor, a consultant — that other domain has to publish a record authorising it. Without that authorisation most large receivers simply stop sending the reports.',
    },
    {
      type: 'paragraph',
      text: 'The failure is completely silent. The record looks correct, the dashboard is empty, and everyone concludes there is nothing to see. Then enforcement gets turned on with no evidence behind it.',
    },

    { type: 'heading', level: 2, text: 'What this does not fix, said plainly' },
    {
      type: 'paragraph',
      text: "**A lookalike domain.** If somebody registers `yourcompany-invoices.com` and mails your customers from it, your DMARC policy has no say — it is not your domain, and no record you publish reaches it. That is handled by watching for registrations that resemble yours, and by telling your customers in advance what you will and will not ever ask for by email.",
    },
    {
      type: 'paragraph',
      text: 'A compromised mailbox. If an attacker is sending from inside your real mail account, every check on this page passes, because the mail genuinely is you. That is an authentication and monitoring problem, not a DNS one.',
    },
    {
      type: 'paragraph',
      text: 'Being honest about those two limits is the difference between a fix and a false sense of one.',
    },
  ],
  faqs: [
    {
      question: 'We already have SPF. Are we protected?',
      answer:
        'Probably not. SPF alone tells a receiving server what to think but not what to do, and it commonly fails on forwarded mail. Without DMARC at an enforcing policy, the decision is left to each receiver’s own guesswork, which is where a forgery gets through.',
    },
    {
      question: 'Will p=reject bounce our real email?',
      answer:
        'It will bounce any legitimate sender that is not yet passing — which is exactly why the two to four weeks of reports at p=none come first. Done in order, enforcement is uneventful. Done on day one, it is an incident.',
    },
    {
      question: 'How long does the whole thing take?',
      answer:
        'The records take an afternoon. The safe path to enforcement takes about a month, and almost all of that is waiting on reports rather than working.',
    },
    {
      question: 'Can you just do it for us?',
      answer:
        'Yes, as part of an engagement, on your accounts with your access — and the reason it is worth doing properly rather than quickly is that the mistake in this area does not look like a security failure, it looks like your invoices stopped arriving.',
    },
    {
      question: 'How do we see what our domain publishes right now?',
      answer:
        'The free exposure report reads it from public records in about ten seconds and grades it, with the records written out for you.',
    },
  ],
  related: [
    { label: 'Your attack surface', href: '/security/attack-surface' },
    { label: 'Run the free exposure report', href: '/exposure' },
    { label: 'Ask for a scoping call', href: '/contact' },
  ],
};
