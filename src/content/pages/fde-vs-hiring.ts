import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/forward-deployed-engineer-vs-hiring';

export const fdeVsHiring: PageContent = {
  slug,
  seo: {
    title: 'Hire a Forward Deployed Engineer, or Buy the Engagement?',
    description:
      'Hiring gives you the capability forever. Most mid-size companies have two or three deployments worth doing — an awkward amount to hire against.',
  },
  breadcrumb: crumbs(
    { name: 'Forward deployed engineering', href: '/forward-deployed-engineering' },
    { name: 'hire or buy', href: slug },
  ),
  eyebrow: 'COMPARISON',
  h1: 'Should you hire a forward deployed engineer or buy an engagement?',
  answer:
    'Hire when you have a continuous pipeline of deployments and can wait out a long search for a scarce hybrid skill set. Buy an engagement when you have two or three workflows worth fixing and need the first one running this quarter. The deciding variable is not cost — it is how much of this work you will still have in eighteen months.',
  sections: [
    { type: 'heading', level: 2, text: 'The case for hiring' },
    {
      type: 'paragraph',
      text: 'It is a real case and it is stronger than most outsourced vendors will admit.',
    },
    {
      type: 'list',
      items: [
        '**The capability compounds.** Someone permanent accumulates context about your business that no external engagement can match by month six.',
        '**They are there for the small stuff.** Most value in an automated workflow leaks away through small degradations — a form field changed, a supplier changed a file format. Someone in-house notices.',
        '**It is cheaper per deployment at volume.** If you genuinely have eight of these queued, hire.',
        '**No dependency.** The argument that matters most to a lot of owners, and it is fair.',
      ],
    },
    { type: 'heading', level: 2, text: 'Why it is hard in practice' },
    { type: 'paragraph', text: 'Two frictions, and neither is about money.' },
    {
      type: 'paragraph',
      text: '**The pool is small.** Christian & Timbers estimate roughly 17,000 forward deployed engineers in the United States, of whom about 2,000 have repeatedly delivered what they classify as significant enterprise value — a tier they define as multiple enterprise AI deployments generating at least $10 million in revenue or savings. Their caveat: it is an estimate, not a labour statistic, and the title is still fluid. Source: [Dice, 19 August 2026](https://www.dice.com/career-advice/forward-deployed-engineer-shortage-is-holding-back-enterprise-ai-roi).',
    },
    {
      type: 'paragraph',
      text: '**You are competing for them against companies whose entire product is this.** A candidate with a production record has options at AI companies who will pay for the record and give them ten deployments a year. You are offering two.',
    },
    {
      type: 'paragraph',
      text: 'There is also a quieter problem: **you may not be able to interview for it.** Assessing someone who has to be strong at production engineering and process redesign and executive communication is genuinely hard if nobody on your panel has done the job.',
    },
    { type: 'heading', level: 2, text: 'The case for buying the engagement' },
    {
      type: 'list',
      items: [
        '**The first system is running in about ten weeks**, not after a six-month search plus onboarding.',
        '**You find out whether the workflow was worth fixing** before committing to a permanent headcount.',
        '**The measurement comes first.** A good engagement starts by telling you what the workflow costs — a number you keep whether or not you proceed.',
        '**It is a fixed, bounded commitment.**',
      ],
    },
    {
      type: 'paragraph',
      text: 'And the real cost, stated plainly: **when the engagement ends, the capability leaves.** The system stays, the documentation stays, your team is trained — but the person who could design the next one is gone. That is the trade, and anybody who tells you otherwise is selling.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The sequence most mid-size companies should actually run',
    },
    { type: 'paragraph', text: 'Not one or the other. In order:' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Buy one engagement** on the workflow everybody already complains about.',
        '**Use the measurement** to find out whether workflows two and three are worth similar money. Now you have real internal data instead of a hypothesis.',
        '**If the pipeline is real, hire** — and hire off a much better job description, because you have watched the work happen inside your own building.',
        "**If it isn't, stop.** You fixed the expensive one. That was the point.",
      ],
    },
    {
      type: 'paragraph',
      text: 'Buying first is a cheaper way to learn what to hire for than hiring first and learning what you needed.',
    },
    { type: 'heading', level: 2, text: 'What we do, and what we do not' },
    {
      type: 'paragraph',
      text: 'We take one workflow at a time, embed, measure, build, and run it with you. **Two concurrent engagements, hard cap** — that constraint exists because embedded work stops being embedded the moment it is spread thin.',
    },
    {
      type: 'paragraph',
      text: 'We are not a staffing firm and we do not place engineers. If the answer for you is hiring, we will say so during the first conversation, and that conversation is free.',
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'Who we work with →', href: '/who-we-work-with' },
        { label: 'What an engagement looks like →', href: '/how-we-work' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'Hire a forward deployed engineer, or buy the engagement?',
      description:
        'When to hire a forward deployed engineer permanently versus buy a bounded engagement, and the honest trade-off of each.',
      section: 'Forward Deployed Engineering',
    }),
  ],
  related: [
    { label: 'What is a forward deployed engineer?', href: '/forward-deployed-engineering' },
    { label: 'Forward deployed engineer vs consultant', href: '/forward-deployed-engineer-vs-consultant' },
    { label: 'Fractional forward deployed engineer', href: '/fractional-forward-deployed-engineer' },
    { label: 'Who we work with', href: '/who-we-work-with' },
  ],
};
