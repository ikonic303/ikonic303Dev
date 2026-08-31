import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/forward-deployed-engineer-vs-consultant';

export const fdeVsConsultant: PageContent = {
  slug,
  seo: {
    title: 'Forward Deployed Engineer vs Consultant: The Real Difference',
    description:
      'A consultant is accountable for the advice. A forward deployed engineer is accountable for whether the system runs six months later. What that changes.',
  },
  breadcrumb: crumbs(
    { name: 'Forward deployed engineering', href: '/forward-deployed-engineering' },
    { name: 'vs consultant', href: slug },
  ),
  eyebrow: 'COMPARISON',
  h1: 'Forward deployed engineer vs consultant',
  answer:
    'A consultant is accountable for the quality of the recommendation. A forward deployed engineer is accountable for whether the system is in production and being used. That single difference changes the contract, the timeline, the skill set, and who carries the risk when it does not work.',
  sections: [
    {
      type: 'paragraph',
      text: 'Both roles start the same way — someone from outside comes in, learns your business, and tells you something true about it. They diverge at the moment the analysis ends.',
    },
    { type: 'heading', level: 2, text: 'Where they actually differ' },
    {
      type: 'table',
      headers: ['', 'Management consultant', 'Forward deployed engineer'],
      rows: [
        ['**Deliverable**', 'Analysis, recommendation, roadmap', 'A system running in your production environment'],
        ['**Ends when**', 'The document is accepted', 'The system is in daily use and your team can run it'],
        ['**Core skill**', 'Structured problem-solving, communication', 'The same, plus shipping production software'],
        ['**Measured by**', 'Quality of thinking', 'Whether the number moved'],
        ['**Who builds it**', 'You, or a third party they recommend', 'Them'],
        ['**Risk if wrong**', 'You paid for a document', 'They are still standing there'],
        [
          '**Typical shape**',
          'Team, a few weeks to months, off site between sessions',
          'One or two people, embedded, on site for the parts that need it',
        ],
      ],
    },
    { type: 'heading', level: 2, text: 'The honest case for the consultant' },
    {
      type: 'paragraph',
      text: 'Not a straw man — there are real situations where the consultant is the right buy:',
    },
    {
      type: 'list',
      items: [
        '**The question is strategic, not operational.** Which markets, which acquisition, how to restructure. No amount of engineering answers that.',
        '**You need the brand.** A board or a lender sometimes needs a name on the cover. That is a legitimate business need even when it is not a technical one.',
        '**You already have the build capacity** and genuinely only lack the analysis.',
        '**The problem spans the whole company.** FDE work goes deep on one workflow. It is the wrong tool for a company-wide diagnostic.',
      ],
    },
    { type: 'heading', level: 2, text: 'Where the consultant model breaks down' },
    {
      type: 'paragraph',
      text: 'It breaks on the same thing every time: **the recommendation is not the hard part.**',
    },
    {
      type: 'paragraph',
      text: 'Ask anyone who has run an operations improvement project which phase killed it. It was almost never the analysis. It was the integration nobody scoped, the exception handling nobody knew about, the team that never adopted it, or the six months between the deck and anyone touching a keyboard.',
    },
    {
      type: 'paragraph',
      text: 'By the time those surface, the consulting engagement is over. The document was correct. The problem is still there. And nothing in the arrangement made anybody responsible for that outcome.',
    },
    { type: 'heading', level: 2, text: "The industry's own version of this distinction" },
    {
      type: 'paragraph',
      text: 'JC Christian, president of the executive search firm Christian & Timbers, drawing the line between an FDE and what came before:',
    },
    {
      type: 'blockquote',
      text: '“Without the technical skills, professionals will operate more like consultants from years past, and without the business transformation piece, professionals will struggle to translate their technical expertise into business outcomes.”',
    },
    {
      type: 'paragraph',
      text: 'Source: Nathan Eddy, [“Forward-Deployed Engineer Shortage Is Holding Back Enterprise AI ROI”](https://www.dice.com/career-advice/forward-deployed-engineer-shortage-is-holding-back-enterprise-ai-roi), Dice, 19 August 2026.',
    },
    {
      type: 'paragraph',
      text: 'Note what he is saying: **both halves are required.** Technical skill without business transformation produces something nobody uses. Business transformation without technical skill produces a consultant. The role is defined by the intersection, and that is why the pool is small.',
    },
    { type: 'heading', level: 2, text: 'How to tell which one you are actually being sold' },
    {
      type: 'paragraph',
      text: 'The title is not reliable — a lot of consultancies have relabelled their practice. Three questions cut through it:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**“Who writes the code?”** If the answer involves a partner, a subcontractor, or “your team, with our guidance,” you are buying consulting with an engineering wrapper.',
        '**“What is the last deliverable in the engagement?”** If it is a document, a training, or a handover pack, the engagement ends before production. If it is a system in use, it does not.',
        '**“What is your fee tied to?”** Time and materials rewards duration. An engagement priced against the measured cost of the workflow rewards removing it.',
      ],
    },
    { type: 'heading', level: 2, text: 'What we do' },
    {
      type: 'paragraph',
      text: 'We measure the workflow on site, price the engagement against that measured cost, build into your stack on your accounts, and stay through adoption. There is no document phase, and no phase that exists to justify the next phase.',
    },
    {
      type: 'paragraph',
      text: 'If the measurement says the workflow is not expensive enough to be worth fixing, we say so and there is no engagement. That happens, and it is the reason the ones we take are good.',
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'How the engagement runs →', href: '/how-we-work' },
        { label: 'How the number is arrived at →', href: '/what-it-costs' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'Forward deployed engineer vs consultant',
      description:
        'A consultant is accountable for the recommendation; a forward deployed engineer is accountable for whether the system is running and used.',
      section: 'Forward Deployed Engineering',
    }),
  ],
  related: [
    { label: 'What is a forward deployed engineer?', href: '/forward-deployed-engineering' },
    { label: 'Hire one or buy an engagement', href: '/forward-deployed-engineer-vs-hiring' },
    { label: 'How an engagement runs', href: '/how-we-work' },
  ],
};
