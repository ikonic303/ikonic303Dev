import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/guides/why-ai-pilots-die';

export const guideWhyAiPilotsDie: PageContent = {
  slug,
  seo: {
    title: 'Why AI Pilots Die Before They Reach Production',
    description:
      'The pilot worked. Eleven months later nobody uses it. Five reasons that happens, and the one thing they all have in common.',
  },
  breadcrumb: crumbs(
    { name: 'Guides', href: '/guides' },
    { name: 'Why AI pilots die', href: slug },
  ),
  eyebrow: 'GUIDE',
  h1: 'Why AI pilots die before production',
  answer:
    'Most AI pilots die not because the technology failed but because a pilot is optimised for the wrong thing. A pilot is designed to demonstrate that something is possible; production requires something to be reliable, integrated, exception-handling and adopted. Those are different projects, and success at the first predicts almost nothing about the second.',
  sections: [
    {
      type: 'paragraph',
      text: 'Enterprises have access to genuinely capable models. Most still cannot get them into daily operation. Here is where it actually breaks.',
    },
    { type: 'heading', level: 2, text: '1. The pilot ran on the clean 20%' },
    {
      type: 'paragraph',
      text: 'Pilots are built on tidy examples — the standard order, the well-formed document, the customer who filled the form in properly.',
    },
    {
      type: 'paragraph',
      text: 'Production is the other 80%. The scanned PDF at an angle. The order that says “same as last time.” The customer whose name is spelled three ways in your database. **The exceptions are not edge cases; they are the workflow.** A system that handles the clean cases and dumps the rest on a human has moved the bottleneck and called it a win.',
    },
    {
      type: 'paragraph',
      text: 'The tell: nobody can tell you the exception rate. If the answer to “what percentage does it not handle” is a shrug, the pilot has not met production.',
    },
    { type: 'heading', level: 2, text: '2. Nobody owned the integration' },
    {
      type: 'paragraph',
      text: 'The pilot ran standalone. Production means it lives inside a CRM someone configured in 2019, an ERP with a customisation nobody documented, and a scheduler with an API that returns HTTP 200 on failure.',
    },
    {
      type: 'paragraph',
      text: 'That work is unglamorous, hard to estimate, and routinely descoped because it does not demo. It is also where most of the actual engineering is.',
    },
    { type: 'heading', level: 2, text: '3. The process was automated instead of redesigned' },
    {
      type: 'paragraph',
      text: 'The workflow you automate is nearly always the workflow as it accumulated, not as anyone would design it. Three of its steps exist because of a system replaced in 2018.',
    },
    {
      type: 'paragraph',
      text: '**Automating a bad process makes the bad process faster.** Almost every deployment turns up at least one step that should stop existing rather than be automated — and finding it requires permission to change how the work is done, which a pilot never has.',
    },
    { type: 'heading', level: 2, text: '4. Nobody adopted it' },
    { type: 'paragraph', text: 'The quietest killer. The system is live. It works. People go round it.' },
    {
      type: 'paragraph',
      text: 'Usually for a mundane reason: it is slower for the person doing the job, even though it is faster for the company. It needs a login they do not have. It fails on one job type so they stopped trusting it. They were never asked and they resent it.',
    },
    {
      type: 'paragraph',
      text: '**A system that is technically live and quietly unused reports as a success and delivers nothing.**',
    },
    { type: 'heading', level: 2, text: '5. The vendor left at go-live' },
    {
      type: 'paragraph',
      text: 'The six weeks after launch are where deployments are decided — the seasonal case, the file format that changed, the person who joined and was never trained.',
    },
    {
      type: 'paragraph',
      text: "If the engagement ended at go-live, all of that is now your problem, and the vendor's success metric was met at the exact moment your risk began.",
    },
    { type: 'heading', level: 2, text: 'What they have in common' },
    {
      type: 'paragraph',
      text: 'Every one is a failure of **ownership across the boundary**. Someone was responsible for making the thing work, and someone else was responsible for it working in real life, and the gap between them is where projects die.',
    },
    {
      type: 'paragraph',
      text: 'That gap is the entire argument for embedding. Not because embedded people are cleverer, but because there is nobody to hand the hard part to.',
    },
    { type: 'heading', level: 2, text: 'How to avoid it, whoever you use' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Do not run a pilot.** Pick the smallest workflow that is genuinely valuable and take it all the way to production. A completed small thing teaches you more than a successful pilot of a big thing.',
        '**Make the exception rate a headline number**, tracked from day one.',
        '**Get permission to change the process** before anyone writes code.',
        '**Put one real operator in the build**, from the start, not at UAT.',
        '**Contract the six weeks after launch** into the engagement. Whoever built it should be there when it meets reality.',
        '**Define success as usage**, not as delivery. “Live” is not a metric. “Doing 90% of jobs through the new system in week eight” is.',
      ],
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'What the ten weeks look like →', href: '/guides/what-ten-weeks-looks-like' },
        { label: 'How an engagement runs →', href: '/how-we-work' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'Why AI pilots die before production',
      description: 'Five reasons pilots never reach daily use, and the ownership gap they all share.',
      section: 'Guides',
    }),
  ],
  related: [
    { label: 'What ten weeks looks like', href: '/guides/what-ten-weeks-looks-like' },
    { label: 'AI agents that do work', href: '/guides/ai-agents-that-do-work' },
    { label: 'How an engagement runs', href: '/how-we-work' },
  ],
};
