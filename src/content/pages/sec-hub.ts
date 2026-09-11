import type { PageContent } from '../types';
import { ORIGIN, crumbs } from './_shared';

const slug = '/security';

// Service + OfferCatalog for the external security assessment lane. Provider legal name
// per technical/schema/service-security.json in the Addendum B bundle (2026-09-09).
// No address, no phone, no sameAs, no certification/insurance claim — see LEGAL / SCHEMA
// NOTES in pages/security/00-security-hub.md.
const serviceSecuritySchema: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${ORIGIN}${slug}#service`,
  serviceType: 'External security assessment',
  name: 'Security assessment',
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
    'External security assessment: the attack surface a stranger can reach is mapped from public records, the client confirms ownership, and testing begins only under a signed scope. Findings are triaged by hand and delivered with evidence, the exact fix, what the fix can break, how to verify it and how to roll it back. One re-test after remediation is included. Systems the client does not own are never tested.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Security',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Attack surface mapping', url: `${ORIGIN}/security/attack-surface` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Email authentication (SPF, DKIM, DMARC)', url: `${ORIGIN}/security/email-spoofing` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web hardening and security headers', url: `${ORIGIN}/security/website-headers` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Security questionnaire support', url: `${ORIGIN}/security/security-questionnaires` } },
    ],
  },
};

export const securityHub: PageContent = {
  slug,
  seo: {
    title: 'Security Assessment For Operating Companies | ikonic303',
    description:
      "We map what an attacker can already see, test what matters, kill the false positives, and hand your team the exact fix. Signed scope first, always. No rate card.",
  },
  breadcrumb: crumbs({ name: 'Security', href: slug }),
  eyebrow: 'SECURITY',
  h1: "Find out where you're exposed — before somebody else does",
  answer:
    'Most security reports hand you three hundred findings and no idea which three matter. We map everything an attacker can reach, test what is worth testing, kill the false positives ourselves, and hand you a ranked list your developer can act on the same afternoon. The report is the product. The scan is just how we get it.',
  sections: [
    { type: 'ctaRow', links: [
      { label: 'Ask for a scoping call →', href: '/contact' },
      { label: 'Run the free exposure report →', href: '/exposure' },
    ] },

    { type: 'heading', level: 2, text: 'Why this sits next to the engineering practice' },
    {
      type: 'paragraph',
      text: 'We did not arrive at security through a certification course. We arrived at it the way most operators do: we build systems that hold other companies’ data, and at some point you either take that seriously in writing or you are pretending.',
    },
    {
      type: 'paragraph',
      text: 'So the security lane is run on exactly the same rule as the engineering lane. **Measure first. Publish the method. Never claim a result you cannot show.** The difference is only in what gets measured — instead of what a workflow costs you per year, it is what a stranger can already reach.',
    },
    {
      type: 'paragraph',
      text: 'That also means we will tell you when there is nothing here worth buying. A ten-person company with one website and Google Workspace does not need an assessment; it needs four DNS records and an afternoon, and we will say that rather than sell you a document.',
    },

    { type: 'heading', level: 2, text: 'The three ways in, in the order they actually get used' },
    {
      type: 'paragraph',
      text: 'Almost every incident at an operating company of this size arrives through one of three doors. None of them is exotic, and the first one is not a hack at all.',
    },
    { type: 'heading', level: 3, text: "1. Your name, on someone else's email" },
    {
      type: 'paragraph',
      text: 'If your domain does not publish enforced SPF, DKIM and DMARC, anyone on earth can put your company in the `From:` line of an invoice. There is no break-in, no malware and nothing to detect on your side — the damage lands on your customer, your bookkeeper and your reputation, and you may never find out it happened. It costs nothing to fix and it is the single most common thing we find open. [How email spoofing works, and the fix in order →](/security/email-spoofing)',
    },
    { type: 'heading', level: 3, text: '2. The host nobody is watching' },
    {
      type: 'paragraph',
      text: 'Attackers do not start at your front door. They start at `staging.`, `vpn.`, `old-portal.` — hosts that skipped the hardening production got, run older code, and frequently hold a copy of real data because that is what makes testing realistic. Every one of them is a matter of public record the moment it gets a certificate, and there is no un-publishing it. [Your attack surface, and how a stranger draws it →](/security/attack-surface)',
    },
    { type: 'heading', level: 3, text: '3. A person, on a normal Tuesday' },
    {
      type: 'paragraph',
      text: 'The most reliable route into a company is still a convincing message to somebody who is busy. That is not a technology failure and no header will fix it — which is why testing it at all requires a signed scope, a named human on every send, and rules that we do not bend. [How we test, and what we will never do →](/security/how-we-test)',
    },

    { type: 'heading', level: 2, text: 'What an assessment gets you' },
    {
      type: 'list',
      items: [
        '**Your attack surface, mapped.** Every domain, host, certificate, login page and mail path a stranger can reach — including the ones nobody remembers owning. Drawn from public records first, so the map exists before anything of yours is touched.',
        '**A real test, not a scanner dump.** Web application, network, and cloud misconfiguration, checked by hand wherever a tool guesses. A tool cannot tell a directory listing on a marketing site from a directory listing on the box that holds your customer records. That judgement is the work.',
        '**The three that matter.** We remove the false positives ourselves and rank what is left by what it would actually cost you if it were used. You get a short list you can finish, not a long one you will abandon.',
        '**A report two different people can use.** One page in plain English for whoever signs things, then a ranked technical section where every finding carries evidence, the exact fix, what that fix can break, how to verify it landed, and how to undo it. Plus a section on what you are already doing right.',
        '**One free re-test.** Fix the findings, tell us, and we verify them once at no additional charge. A finding is not closed because you say it is closed; it is closed because it fails to reproduce.',
      ],
    },

    { type: 'heading', level: 2, text: 'The two levels' },
    { type: 'heading', level: 3, text: 'Assessment — external' },
    {
      type: 'paragraph',
      text: 'Everything above, from the outside, the way a real attacker starts. This is where every company should begin, and for most companies at this size it is the whole job.',
    },
    { type: 'heading', level: 3, text: 'Offensive — on scoped engagement' },
    {
      type: 'paragraph',
      text: 'Deeper adversary simulation: chaining findings, testing what an attacker could actually reach once inside, and simulated social engineering against your own people. Run only under a signed scope, with a named human operator on every single action, and never against anything you do not own. Ask on the call — we will tell you honestly whether you are at the stage where it is worth doing.',
    },

    { type: 'heading', level: 2, text: 'What it costs' },
    {
      type: 'paragraph',
      text: 'We publish the arithmetic, not a price. An assessment is scoped against two things: how much there is to test — your real surface, not your headcount — and what a miss would cost you, which depends on the data you hold and the revenue that runs through the systems holding it. Those differ enough between two companies of the same size that any published number would be wrong in both directions, and the wrong one is the one that makes you overpay.',
    },
    {
      type: 'paragraph',
      text: 'On the call we do the arithmetic out loud: what is actually in scope, what a comparable manual engagement from a large firm runs and how long it books out, and where this lands. Then you decide. Nothing is quoted before we know what is in scope, because a number quoted before that is a guess wearing a suit.',
    },
    { type: 'ctaRow', links: [{ label: 'Ask for a scoping call →', href: '/contact' }] },

    { type: 'heading', level: 2, text: 'Who this is for' },
    {
      type: 'paragraph',
      text: "Operating companies between fifty and five hundred people — usually with a clock already running: a customer's security questionnaire you cannot answer, a cyber-insurance renewal asking questions it did not ask last year, a SOC 2 or PCI or HIPAA deadline, or a scare that turned out to be nothing and made everyone realise nobody actually knows.",
    },
    {
      type: 'paragraph',
      text: 'If we are already talking about a workflow build, this is the natural companion — the systems we would be building are the systems that would be in scope. [Forward deployed engineering →](/forward-deployed-engineering)',
    },

    { type: 'heading', level: 2, text: 'What we will not do' },
    {
      type: 'paragraph',
      text: 'This section stays on the page. Buyers with a real security team read it first, and it is the reason they relax.',
    },
    {
      type: 'list',
      items: [
        '**Nothing is touched without a signed scope.** A verbal go is not authorisation. Neither is an email saying "sure, go ahead". This protects you more than it protects us.',
        "**We do not test what you do not own.** Your bank, your CRM vendor, your cloud provider's backplane, your upstream ISP — off limits, even when a wildcard in the scope appears to cover them, even one hop away. You cannot authorise a test against somebody else's system.",
        '**Proof of access, never damage.** We show the door is open with one redacted record. We do not take the table, we do not leave anything running, and every artifact we create is logged and removed — you get the cleanup log with the report.',
        "**No impersonation of a real third party.** Posing as a bank, a government agency or another company's brand is a crime that your signature does not make legal. A scope authorises testing your people as *you*; it never authorises a separate crime against an outsider.",
        '**We do not sell you fear.** If the honest answer is "you are fine, fix these two records", that is the answer you get.',
      ],
    },
  ],
  faqs: [
    {
      question: 'How is this different from a vulnerability scan?',
      answer:
        'A scan produces a list. We produce a decision — which findings are real, which of the real ones matter to your business, and exactly how to fix them. Anyone can run the tool; the triage is the job, and it is the part that cannot be automated honestly.',
    },
    {
      question: 'Will testing take something down?',
      answer:
        'No. Proof of access, never damage — it is written into the rules of engagement you sign, along with a window for anything with any risk attached and a named person on our side you can phone to stop it immediately.',
    },
    {
      question: 'Do you test our vendors — our CRM, our bank, our cloud provider?',
      answer:
        'No. We only test what you own and can lawfully authorise. A third party’s systems are off limits by rule, and a vendor that agrees to test them for you is telling you something about how they will treat your systems too.',
    },
    {
      question: 'How long does it take?',
      answer:
        'The external assessment runs in days rather than the weeks a large firm books out, because most of the collection is automated and the human time goes into triage and the report. Scoping and signature are usually the longest part, and that is as it should be.',
    },
    {
      question: 'What does it cost?',
      answer:
        'It is scoped per engagement against your real surface and your real exposure. We publish the arithmetic, not a price, and we will not quote a number before we know what is in scope.',
    },
    {
      question: 'Can we see a report before we sign anything?',
      answer:
        'Yes. We ran this exact assessment against our own infrastructure and we will show you the redacted result — the real format, the real findings, the real fixes. Proof of method beats a promise.',
    },
    {
      question: 'Do you need access to our systems?',
      answer:
        'Not for the external assessment. It runs from outside, with no credentials, exactly as an attacker would begin. If an engagement later needs authenticated testing, that is scoped and signed separately.',
    },
    {
      question: 'What happens to what you find?',
      answer:
        'It goes to you, and it stays with us in one place under the same rules as your systems, for as long as the engagement needs it and no longer. We do not publish client findings, name clients, or use what we find as marketing.',
    },
  ],
  schema: [serviceSecuritySchema],
  related: [
    { label: 'Your attack surface', href: '/security/attack-surface' },
    { label: 'How we test', href: '/security/how-we-test' },
    { label: 'The free exposure report, explained', href: '/security/exposure-report' },
    { label: 'Forward deployed engineering', href: '/forward-deployed-engineering' },
  ],
};
