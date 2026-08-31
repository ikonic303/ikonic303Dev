import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/fractional-forward-deployed-engineer';

export const fractionalFde: PageContent = {
  slug,
  seo: {
    title: 'Fractional Forward Deployed Engineer: What It Means to Buy',
    description:
      'Embedded engineering without the headcount — what a fractional forward deployed engineer actually does, when it works, and when it is the wrong shape.',
  },
  breadcrumb: crumbs(
    { name: 'Forward deployed engineering', href: '/forward-deployed-engineering' },
    { name: 'fractional', href: slug },
  ),
  eyebrow: 'CATEGORY',
  h1: 'Fractional forward deployed engineer',
  answer:
    'A fractional forward deployed engineer is embedded engineering bought by the engagement instead of by the headcount: someone who sits inside one of your workflows, builds the system that removes most of its cost, and stays to operate it — without becoming a permanent salary line. It works when you have a small number of expensive, well-defined workflows. It does not work as a general-purpose engineering resource.',
  sections: [
    { type: 'heading', level: 2, text: 'Why the word "fractional" is doing real work here' },
    {
      type: 'paragraph',
      text: 'Fractional CFOs and CMOs proved the model: a senior capability most mid-size companies need some of, priced so they do not have to buy all of it.',
    },
    {
      type: 'paragraph',
      text: 'Embedded engineering has the same shape and a sharper version of the same problem. You need someone who can build production software and redesign a process and hold a room of skeptical operators — and you need that maybe twice a year. Nobody senior enough to do it well wants a job where they do it twice a year.',
    },
    {
      type: 'paragraph',
      text: '**The fractional model resolves that by concentrating the work.** The engagement is dense — full attention on one workflow for ten weeks — and then it stops. That is a better shape for the work than a permanent role where the same person spends most of their year on maintenance.',
    },
    { type: 'heading', level: 2, text: 'What "fractional" must not mean' },
    { type: 'paragraph', text: 'The word gets abused, so here is the boundary we hold:' },
    {
      type: 'table',
      headers: ['Fractional means', 'Fractional does not mean'],
      rows: [
        ['Full attention on one workflow, for a defined period', 'A few hours a week spread across everything'],
        ['On site for the phases that require it', 'Permanently remote, permanently Slack'],
        ['Accountable for a production outcome', 'Available for questions'],
        ['Bounded scope, written down', 'An open retainer that absorbs whatever arrives'],
      ],
    },
    {
      type: 'paragraph',
      text: '**A fractional engineer who is not accountable for a system in production is a contractor.** That is a legitimate thing to buy — it is just a different thing, at a different price, and you should know which you are getting.',
    },
    { type: 'heading', level: 2, text: 'When it fits' },
    {
      type: 'list',
      items: [
        'Two to four workflows worth fixing, not twenty.',
        'One of them is clearly the most expensive and everybody already knows which.',
        'You have systems in place; the problem lives in the seams between them.',
        'Someone senior can authorise a change to how the work is done.',
      ],
    },
    { type: 'heading', level: 2, text: 'When it does not fit' },
    {
      type: 'list',
      items: [
        '**You need ongoing feature development.** Hire developers. This is the wrong instrument.',
        '**The scope cannot be bounded.** If the engagement has to absorb whatever comes up, it is staffing.',
        '**The workflow is cheap.** Under roughly $75,000 a year all-in, the arithmetic does not work. Buy a tool. [Here is the arithmetic, run it yourself →](/what-it-costs)',
        '**You want it managed rather than built.** Different job.',
      ],
    },
    { type: 'heading', level: 2, text: 'What the ongoing period is actually for' },
    {
      type: 'paragraph',
      text: 'The part people misunderstand. After the system is live, the fractional engagement continues — not as maintenance, but as **operating**.',
    },
    {
      type: 'paragraph',
      text: "The distinction: maintenance means the code still runs. Operating means the workflow still runs — the edge cases that only appear in month three get handled, the team's real usage patterns get designed for, the thing degrades gracefully when a supplier changes a file format at 6am.",
    },
    {
      type: 'paragraph',
      text: 'A system nobody operates does not fail loudly. It quietly stops being used, and six months later someone mentions that everybody went back to the spreadsheet.',
    },
    {
      type: 'ctaRow',
      links: [{ label: 'How an engagement runs, phase by phase →', href: '/how-we-work' }],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'Fractional forward deployed engineer',
      description:
        'Embedded engineering bought by the engagement rather than by the headcount — when it fits and when it does not.',
      section: 'Forward Deployed Engineering',
    }),
  ],
  related: [
    { label: 'What is a forward deployed engineer?', href: '/forward-deployed-engineering' },
    { label: 'Hire one or buy an engagement', href: '/forward-deployed-engineer-vs-hiring' },
    { label: 'How an engagement runs', href: '/how-we-work' },
    { label: 'What it costs', href: '/what-it-costs' },
  ],
};
