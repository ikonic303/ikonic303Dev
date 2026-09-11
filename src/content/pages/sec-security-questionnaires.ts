import type { PageContent } from '../types';
import { crumbs } from './_shared';

const slug = '/security/security-questionnaires';

export const secSecurityQuestionnaires: PageContent = {
  slug,
  seo: {
    title: "Answering A Customer's Security Questionnaire | ikonic303",
    description:
      'A large customer sent a security questionnaire and it is holding up the deal. What they are really asking, what to fix before answering, and how to answer honestly.',
  },
  breadcrumb: crumbs(
    { name: 'Security', href: '/security' },
    { name: 'Security questionnaires', href: slug },
  ),
  eyebrow: 'SECURITY',
  h1: "The security questionnaire holding up your deal",
  answer:
    'A customer you want sent a spreadsheet with two hundred questions on it, half of which you do not understand, and the deal is sitting still until it comes back. This page is what that document is actually for, what to fix before you answer it, and how to answer the questions where the true answer is "no."',
  sections: [
    { type: 'heading', level: 2, text: 'What the questionnaire is really doing' },
    {
      type: 'paragraph',
      text: "It is not an exam and it is rarely scored. It is your customer's procurement and security teams answering one internal question: **if this vendor is breached, how bad is it for us, and can we show that we asked?**",
    },
    {
      type: 'paragraph',
      text: 'Two consequences follow, and both work in your favour once you understand them:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**A confident "no, and here is our plan and date" beats a vague yes.** Reviewers read hundreds of these. They can spot a padded answer instantly, and a padded answer that turns out to be false later is a contract problem, not an embarrassment.',
        '**They are usually looking for a reason to proceed, not a reason to stop.** The deal was already wanted by somebody on their side or you would not have received the document.',
      ],
    },

    { type: 'heading', level: 2, text: 'The questions that actually decide it' },
    {
      type: 'paragraph',
      text: 'Most questionnaires are long because they are generic. A handful of themes carry nearly all the weight:',
    },
    {
      type: 'list',
      items: [
        '**Access.** Do you have multi-factor authentication on email and on anything holding customer data? Who has administrator rights, and what happens to their access the day they leave? This is the single most-weighted theme and the cheapest to be genuinely good at.',
        '**Data.** What of ours would you hold, where does it physically live, who can see it, how long do you keep it, and what happens to it when we stop working together? If you cannot answer where the data lives, that is a finding about you, not about the question.',
        '**Your own vendors.** Whoever you use is now indirectly their supplier too. They want the list, and they want to know that somebody looked at it.',
        '**Incident response.** If something happens, who do you tell, how fast, and does anybody at your company have a written page describing what to do? A one-page plan that exists beats a sophisticated plan that does not.',
        '**Backups and recovery.** Not "do you back up" — everybody says yes. **When did you last restore one?** An untested backup is a hope, and reviewers know it.',
        '**Assessment.** Has an independent party tested you, when, and did you fix what they found? This is the one that routes people to a page like this.',
      ],
    },

    { type: 'heading', level: 2, text: 'What to fix before you answer, in order' },
    {
      type: 'paragraph',
      text: 'You will get further with a short list finished than a long list started.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Multi-factor authentication everywhere it can be turned on**, starting with email. It changes the answer to several questions at once and it is free.',
        '**Your email records — SPF, DKIM, DMARC — at enforcement.** Directly asked on most modern questionnaires, and independently the highest-value fix you can make. [The safe order →](/security/email-spoofing)',
        '**A written offboarding step for access.** One paragraph, followed consistently, beats a policy document nobody reads.',
        '**A one-page incident response plan.** Who is called, in what order, with what phone numbers, and who talks to customers. It fits on one page and answering "yes, here it is" is worth more than the page cost to write.',
        '**One restore test, documented.** Restore something real, write down the date and how long it took. Now your backup answer is a fact.',
        '**Your public exposure**, because part of your answer is verifiable from outside whether you mention it or not — mail records, certificate history, site headers, domain lock. [Check yours free →](/exposure)',
      ],
    },

    { type: 'heading', level: 2, text: 'How to answer the ones where the honest answer is no' },
    { type: 'paragraph', text: 'Use a consistent three-part shape, and never pad:' },
    {
      type: 'blockquote',
      text: '**No.** We do not currently have [the control]. **[What we do instead]** covers [the specific risk it addresses]. **We have scheduled [the specific work] for [a real date].**',
    },
    { type: 'paragraph', text: 'Three rules that go with it:' },
    {
      type: 'list',
      items: [
        '**Never claim a certification you do not hold.** SOC 2 in particular is a report from an auditor, not a self-assessment, and claiming it is the fastest way to end a deal permanently.',
        '**Never answer "yes" for something a person does sometimes.** If it is not a rule somebody follows, it is a "no, and here is the plan."',
        '**Answer as the company you are.** A forty-person operating company is not expected to have a security operations centre. It is expected to know where the data is and who can see it.',
      ],
    },

    { type: 'heading', level: 2, text: 'Where an assessment fits, honestly' },
    {
      type: 'paragraph',
      text: 'You do not need a penetration test to answer a questionnaire. You need it when one of three things is true:',
    },
    {
      type: 'list',
      items: [
        '**The customer asks for one specifically**, which enterprise customers increasingly do.',
        '**Your cyber-insurance renewal asks questions it did not ask last year**, which is a pattern worth reading as a warning rather than as paperwork.',
        '**You genuinely do not know what is exposed**, in which case answering the questionnaire honestly is not possible yet, and that is the real problem the document surfaced.',
      ],
    },
    {
      type: 'paragraph',
      text: 'If none of those is true, do the six things above and answer the document. We would rather tell you that than sell you an assessment you did not need — and if you want a second pair of eyes on the answers themselves, that is a shorter conversation and a cheaper one.',
    },
    { type: 'ctaRow', links: [{ label: 'Ask for a scoping call →', href: '/contact' }] },
  ],
  faqs: [
    {
      question: 'Can you fill the questionnaire in for us?',
      answer:
        'We can do the technical half and tell you exactly what to write for the rest — but the answers have to be true of your company, so somebody at your company signs them. A vendor who fills it in unsupervised is a vendor writing cheques your operations have to cash.',
    },
    {
      question: 'How long does the underlying work take?',
      answer:
        'The six items above are days of real work spread over a few weeks, mostly waiting on email reports. The questionnaire itself is usually a day once the facts exist.',
    },
    {
      question: 'They asked for SOC 2 and we do not have it. Is the deal dead?',
      answer:
        'Often not. Ask what specifically the report would answer for them, and offer the evidence that answers it directly — an independent assessment, your controls in writing, your incident plan. Sometimes the answer really is that they cannot proceed, and knowing that in week one is worth more than finding out in month four.',
    },
    {
      question: 'Does an assessment expire?',
      answer:
        'Practically, yes. Most customers and insurers treat one older than about a year as historical, and your estate has changed since then anyway.',
    },
  ],
  related: [
    { label: 'How we test', href: '/security/how-we-test' },
    { label: 'Your attack surface', href: '/security/attack-surface' },
    { label: 'Back to security', href: '/security' },
  ],
};
