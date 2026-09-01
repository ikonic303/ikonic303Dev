import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/guides/twelve-questions-before-you-sign';

export const guideTwelveQuestions: PageContent = {
  slug,
  seo: {
    title: 'Twelve Questions to Ask Before Signing an AI Vendor',
    description:
      'Print this and take it to the meeting. Twelve questions, what a good answer sounds like, and what each bad answer is actually telling you.',
  },
  breadcrumb: crumbs(
    { name: 'Guides', href: '/guides' },
    { name: 'Twelve questions before you sign', href: slug },
  ),
  eyebrow: 'GUIDE',
  h1: 'Twelve questions to ask before you sign',
  answer:
    'Print this. Take it to the meeting. Twelve questions with what a good answer sounds like next to each one — including for us. If a vendor is uncomfortable with the list, that is itself the answer.',
  sections: [
    { type: 'heading', level: 2, text: 'On the work' },
    { type: 'heading', level: 3, text: '1. “How will you measure what this workflow costs us today?”' },
    {
      type: 'list',
      items: [
        '**Good:** observation on site, plus payroll and system data.',
        '**Bad:** a workshop, a questionnaire, or “we’ll scope it together.”',
        '**What bad means:** they are going to price off their rate card and reverse-engineer a justification.',
      ],
    },
    {
      type: 'heading',
      level: 3,
      text: '2. “What percentage of that cost do you expect to remove, and will you put it in writing?”',
    },
    {
      type: 'list',
      items: [
        '**Good:** a conservative number, in the scope document, with reasoning.',
        '**Bad:** “significant efficiencies.”',
        '**What bad means:** nothing will be measurable afterwards, which is convenient for exactly one of you.',
      ],
    },
    { type: 'heading', level: 3, text: '3. “What is the last thing you deliver?”' },
    {
      type: 'list',
      items: [
        '**Good:** a system in daily use, with your team running it.',
        '**Bad:** a report, a handover pack, a training session.',
        '**What bad means:** the engagement ends before the risky part, and the risky part becomes yours.',
      ],
    },
    { type: 'heading', level: 3, text: '4. “What happens in the six weeks after go-live?”' },
    {
      type: 'list',
      items: [
        '**Good:** a defined operating period, in scope, with them present.',
        '**Bad:** “support is available.”',
        '**What bad means:** adoption is your problem, and adoption is where these fail.',
      ],
    },
    { type: 'heading', level: 2, text: 'On ownership' },
    { type: 'heading', level: 3, text: '5. “Whose accounts does this run on?”' },
    {
      type: 'list',
      items: [
        '**Good:** yours, billed to you, you as owner.',
        '**Bad:** theirs, their agency licence, their tenant.',
        '**What bad means:** leaving is expensive, and they know that when they price the renewal.',
      ],
    },
    { type: 'heading', level: 3, text: '6. “Who holds the credentials, and can I see them?”' },
    {
      type: 'list',
      items: [
        '**Good:** in your password manager, documented.',
        '**Bad:** “we manage that for you.”',
      ],
    },
    { type: 'heading', level: 3, text: '7. “Can I export everything, and can we do it during the engagement?”' },
    {
      type: 'list',
      items: [
        '**Good:** yes, and let’s run one in week six so you have seen the file.',
        '**Bad:** “there’s an export function.”',
        '**What bad means:** nobody has tested it and it will be a CSV of one table.',
      ],
    },
    { type: 'heading', level: 3, text: '8. “If you stopped answering the phone tomorrow, what happens?”' },
    {
      type: 'list',
      items: [
        "**Good:** it keeps running; you'd need someone technical for changes.",
        '**Bad:** discomfort, then a long answer.',
      ],
    },
    { type: 'ctaRow', links: [{ label: 'More on ownership →', href: '/guides/who-owns-the-system' }] },
    { type: 'heading', level: 2, text: 'On them' },
    { type: 'heading', level: 3, text: '9. “Tell me about a deployment that failed.”' },
    {
      type: 'list',
      items: [
        '**Good:** a specific one, what they got wrong, what they changed.',
        '**Bad:** “we haven’t had one.”',
        '**What bad means:** either a very short history or a very selective memory. Anyone who has put real systems into production has one.',
      ],
    },
    { type: 'heading', level: 3, text: '10. “Who exactly will be on site, and how often?”' },
    {
      type: 'list',
      items: [
        '**Good:** named people, specific weeks.',
        '**Bad:** “our delivery team.”',
        '**What bad means:** you met the seniors in the pitch and you will get somebody else.',
      ],
    },
    { type: 'heading', level: 3, text: '11. “How many other engagements are you running right now?”' },
    {
      type: 'list',
      items: [
        '**Good:** a small number, and a stated cap.',
        '**Bad:** an impressively large number.',
        '**What bad means:** embedded work does not survive being spread thin, and you will be the one that gets thin.',
      ],
    },
    { type: 'heading', level: 3, text: '12. “What would make you tell us not to do this?”' },
    {
      type: 'list',
      items: [
        '**Good:** a real threshold — a cost floor, a missing authoriser, a process nobody may change.',
        '**Bad:** “we can always find value.”',
        '**What bad means:** they have never turned down work, so their assessment of your project is worth nothing.',
      ],
    },
    { type: 'heading', level: 2, text: 'The one to ask if you only ask one' },
    { type: 'paragraph', text: '**Number 12.**' },
    {
      type: 'paragraph',
      text: 'A vendor who has never said no has no standard, and their yes therefore carries no information. Everything else on this list is checkable later. That one tells you what you are dealing with in the first meeting.',
    },
    { type: 'heading', level: 2, text: 'Our own answers' },
    { type: 'paragraph', text: 'Fair to publish them, since we wrote the list.' },
    {
      type: 'paragraph',
      text: 'Measurement is on site with payroll and system data. The removable percentage goes in the scope document. The last deliverable is a system in daily use. The operating period is in scope. Everything runs on your accounts with credentials in your names. We cap at two concurrent engagements. And we tell people not to proceed when the measured cost of the workflow is too small to justify it — which happens, and is the reason the engagements we do take are worth taking.',
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'How an engagement runs →', href: '/how-we-work' },
        { label: 'What it costs →', href: '/what-it-costs' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'Twelve questions to ask before signing an AI vendor',
      description: 'Twelve questions, a good answer for each, and what the bad answer is really telling you.',
      section: 'Guides',
    }),
  ],
  related: [
    { label: 'Who owns the system', href: '/guides/who-owns-the-system' },
    { label: 'Agency, consultant, or forward deployed engineer', href: '/guides/agency-vs-consultant-vs-fde' },
    { label: 'How an engagement runs', href: '/how-we-work' },
  ],
};
