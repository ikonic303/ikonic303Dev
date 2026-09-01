import type { PageContent } from '../types';
import { crumbs } from './_shared';

const slug = '/guides';

export const guidesIndex: PageContent = {
  slug,
  seo: {
    title: 'Guides — Measuring, Choosing and Deploying',
    description:
      'Twelve guides on measuring what a workflow costs, choosing what to automate first, and not getting locked into whoever builds it.',
  },
  breadcrumb: crumbs({ name: 'Guides', href: slug }),
  eyebrow: 'GUIDES',
  h1: 'Guides',
  answer:
    'Everything here is written so you can act on it without hiring anyone. Several of these guides end by telling you not to. That is deliberate — if the arithmetic says your workflow is not expensive enough to fix, we would rather you found that out here than four weeks into an engagement.',
  sections: [
    { type: 'heading', level: 2, text: 'Start here' },
    {
      type: 'list',
      items: [
        '**[What a manual workflow actually costs you](/guides/cost-of-a-manual-workflow)** — Three lines: labour, rework, leakage. Most owners guess low by half. Two hours to run, and you will use the number for years.',
        '**[How to choose which workflow to automate first](/guides/which-workflow-to-automate-first)** — Score four things and pick the highest. It is usually not the most annoying one.',
        '**[You cannot automate a mess](/guides/you-cannot-automate-a-mess)** — The three prerequisites, the things that are not prerequisites, and the two-week version of getting ready.',
      ],
    },
    { type: 'heading', level: 2, text: 'Before you buy' },
    {
      type: 'list',
      items: [
        '**[Agency, consultant, or forward deployed engineer](/guides/agency-vs-consultant-vs-fde)** — Three genuinely different trades. All three are right for somebody.',
        '**[Twelve questions to ask before you sign](/guides/twelve-questions-before-you-sign)** — Print it, take it to the meeting. Our own answers are at the bottom.',
        '**[Who owns the system when it is built for you](/guides/who-owns-the-system)** — Accounts, credentials, code, data, knowledge. Vendors answer confidently about one of the five.',
        '**[Build or buy an internal tool](/guides/build-vs-buy-internal-tools)** — Buy anything that is not specific to you. There is a third option most people miss.',
      ],
    },
    { type: 'heading', level: 2, text: 'Doing the work' },
    {
      type: 'list',
      items: [
        '**[What ten weeks actually looks like](/guides/what-ten-weeks-looks-like)** — Week by week, including the two where nothing appears to be happening.',
        '**[Why AI pilots die before production](/guides/why-ai-pilots-die)** — Five reasons, and the one thing they have in common.',
        '**[AI agents that do work, not chatbots](/guides/ai-agents-that-do-work)** — Four properties. Most business AI fails all four.',
      ],
    },
    { type: 'heading', level: 2, text: 'Measuring it' },
    {
      type: 'list',
      items: [
        '**[Measuring the return on an automation](/guides/measuring-automation-roi)** — Baseline first, usage as the success metric, and only count savings that land somewhere real.',
        '**[Speed to quote](/guides/speed-to-quote)** — The number most companies never pull — and the correction you must apply before you believe it.',
      ],
    },
  ],
  related: [
    { label: 'What is a forward deployed engineer?', href: '/forward-deployed-engineering' },
    { label: 'How an engagement runs', href: '/how-we-work' },
    { label: 'What it costs', href: '/what-it-costs' },
  ],
};
