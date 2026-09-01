import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/guides/what-ten-weeks-looks-like';

export const guideWhatTenWeeksLooksLike: PageContent = {
  slug,
  seo: {
    title: 'What Ten Weeks of a Deployment Actually Looks Like',
    description:
      'Week by week, including the weeks where nothing appears to happen and the week where everything you built meets someone who does not want it.',
  },
  breadcrumb: crumbs(
    { name: 'Guides', href: '/guides' },
    { name: 'What ten weeks looks like', href: slug },
  ),
  eyebrow: 'GUIDE',
  h1: 'What ten weeks actually looks like',
  answer:
    'Two weeks watching, two weeks measuring and scoping, four weeks building, two weeks deploying — then an operating period. The two weeks that feel like nothing is happening are the two that decide whether the other eight work.',
  sections: [
    {
      type: 'paragraph',
      text: 'Published so you know what to expect, and so you can tell when someone is skipping a phase.',
    },
    { type: 'heading', level: 2, text: 'Weeks 1–2 — Watching' },
    {
      type: 'paragraph',
      text: '**What it looks like:** somebody sitting with your team, following jobs end to end, timing things, asking the same question to five different people.',
    },
    {
      type: 'paragraph',
      text: '**What it feels like:** slow, and slightly uncomfortable. Nothing is being built. Your team is being observed, which nobody enjoys for the first two days.',
    },
    {
      type: 'paragraph',
      text: '**What is actually happening:** finding the gap between the documented process and the real one. That gap is where the money is and it is invisible from a meeting room.',
    },
    {
      type: 'paragraph',
      text: '**The most useful question asked in this phase:** “What is the part of this that makes you want to quit?” People will not tell you what is inefficient. They will absolutely tell you what is infuriating, and those turn out to be the same thing surprisingly often.',
    },
    { type: 'heading', level: 2, text: 'Weeks 3–4 — Measuring and scoping' },
    {
      type: 'paragraph',
      text: '**What it looks like:** payroll numbers, system exports, timestamps, and a lot of arithmetic.',
    },
    {
      type: 'paragraph',
      text: '**What comes out:** one number — what the workflow costs a year — plus a written percentage of it that is realistically removable, plus a scope.',
    },
    {
      type: 'callout',
      text: '⚠️ This phase can end the engagement. If the number is small, the honest answer is to buy software or leave it alone. That should be a normal outcome, not a catastrophe, and if a vendor has never had one you should wonder why.',
    },
    {
      type: 'paragraph',
      text: '**What is needed from you:** the real numbers, and someone senior in the room when they are presented. The number is only useful if the person who can act on it believes it.',
    },
    { type: 'heading', level: 2, text: 'Weeks 5–8 — Building' },
    {
      type: 'paragraph',
      text: '**What it looks like:** mostly remote, with a weekly session against real data and one of your operators in it.',
    },
    {
      type: 'paragraph',
      text: '**What is being built:** the integrations, the logic, the interfaces, and — taking most of the time — the exception handling. The clean path is usually a fraction of the work.',
    },
    {
      type: 'paragraph',
      text: '**What is needed from you:** roughly two hours a week from one person who actually does the job. Not a steering committee. One operator, consistently, ideally the one who complains most.',
    },
    {
      type: 'paragraph',
      text: '**The recurring surprise:** something in your existing systems does not behave as documented. Every project has at least one. It is the reason the build phase is four weeks and not two.',
    },
    { type: 'heading', level: 2, text: 'Weeks 9–10 — Deploying' },
    {
      type: 'paragraph',
      text: '**What it looks like:** on site, standing next to people while they use it on real work.',
    },
    {
      type: 'paragraph',
      text: '**What it feels like:** the tensest fortnight of the project. Things surface. Someone has a job type nobody mentioned. Someone does not want to change.',
    },
    {
      type: 'paragraph',
      text: '**This is normal and it is the point.** First contact with production is where you learn what you got wrong, and it is why the people who built it should be in the room rather than on a support queue.',
    },
    {
      type: 'paragraph',
      text: '**Exit condition:** the team runs a full cycle through the new system, unassisted.',
    },
    { type: 'heading', level: 2, text: 'After — Operating' },
    { type: 'paragraph', text: '**Weeks 11–16 are where it is actually won or lost.**' },
    {
      type: 'paragraph',
      text: 'A system rarely fails loudly. Someone hits an edge case, reverts to the old way for that one job, tells a colleague, and two months later everyone is back on the spreadsheet while the dashboard still shows green.',
    },
    {
      type: 'paragraph',
      text: 'So the operating period watches **usage**, not uptime: what people actually do, what makes them avoid it, and the seasonal cases invisible in week one.',
    },
    {
      type: 'paragraph',
      text: '**Handover is an event, not a drift.** Documentation, training, credentials in your names, and a written statement of what will break it.',
    },
    { type: 'heading', level: 2, text: 'What can make it longer' },
    { type: 'paragraph', text: 'Honestly, so nobody is surprised:' },
    {
      type: 'list',
      items: [
        '**Access.** If the people who do the work are unavailable, week one stretches indefinitely.',
        '**Undocumented systems.** A custom integration nobody remembers building adds time.',
        '**Scope creep during build.** “While you’re in there” is how a ten-week project becomes a six-month one.',
        '**A frozen process.** If nothing may change, the whole thing shrinks in value and stretches in argument.',
      ],
    },
    { type: 'heading', level: 2, text: 'What should make you suspicious' },
    {
      type: 'list',
      items: [
        '**A quote before any measurement.** A number produced from a conversation is a guess in a suit.',
        '**No watching phase.** Anyone jumping to solutions in week one is building for the documented process.',
        '**The engagement ending at go-live.** Adoption is then your problem and the risk transferred to you at exactly the wrong moment.',
        '**“Two weeks.”** That is a prototype. Prototypes are fine — just do not confuse them with production.',
      ],
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'How an engagement runs →', href: '/how-we-work' },
        { label: 'Why pilots die →', href: '/guides/why-ai-pilots-die' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'What ten weeks of a deployment actually looks like',
      description: 'Watch, measure, build, deploy, operate — week by week, including the quiet weeks that decide the rest.',
      section: 'Guides',
    }),
  ],
  related: [
    { label: 'How an engagement runs', href: '/how-we-work' },
    { label: 'Why AI pilots die', href: '/guides/why-ai-pilots-die' },
    { label: 'Measuring the return on an automation', href: '/guides/measuring-automation-roi' },
  ],
};
