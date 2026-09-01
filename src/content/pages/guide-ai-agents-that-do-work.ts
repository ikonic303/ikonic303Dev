import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/guides/ai-agents-that-do-work';

export const guideAiAgentsThatDoWork: PageContent = {
  slug,
  seo: {
    title: 'AI Agents That Do Work, Not Chatbots That Discuss It',
    description:
      'Four properties separate an agent that gets used from a demo that gets abandoned. Bounded job, real input and output, confidence boundary, audit trail.',
  },
  breadcrumb: crumbs(
    { name: 'Guides', href: '/guides' },
    { name: 'AI agents that do work', href: slug },
  ),
  eyebrow: 'GUIDE',
  h1: 'AI agents that do work',
  answer:
    'A useful business agent takes a defined input, performs a defined job, produces a defined output into a system people already use, and hands off visibly when it is not confident. Most business AI fails all four — it is a chat window bolted to a knowledge base, which is a search box that sometimes makes things up.',
  sections: [
    { type: 'heading', level: 2, text: 'The four properties' },
    { type: 'heading', level: 3, text: '1. A bounded job' },
    {
      type: 'paragraph',
      text: '**Good:** “Read the inbound RFQ email, extract the line items, match them to catalogue SKUs, flag anything it cannot match with confidence.”',
    },
    { type: 'paragraph', text: '**Bad:** “Help the sales team.”' },
    {
      type: 'paragraph',
      text: 'The bounded version can be tested, measured and improved. The unbounded version can only be demoed. If you cannot write the job as one sentence with a verb and an object, it is not ready to build.',
    },
    { type: 'heading', level: 3, text: '2. Real input, real output, existing systems' },
    {
      type: 'paragraph',
      text: 'If someone has to open a new tab to get the value, the value is optional. Optional things get skipped in week three when everyone is busy.',
    },
    {
      type: 'paragraph',
      text: 'The agent should be triggered by something that already happens — an email arriving, a job closing, a form submitted — and should put its output where the work already lives.',
    },
    { type: 'heading', level: 3, text: '3. A confidence boundary' },
    { type: 'paragraph', text: '**The single most important property, and the one most often missing.**' },
    {
      type: 'paragraph',
      text: 'The agent must know what it does not know, stop, and hand to a human — visibly, with the reason attached.',
    },
    {
      type: 'paragraph',
      text: 'A system that handles 95% correctly and silently guesses the other 5% is **worse than the person it replaced**, because those errors are now invisible until they reach a customer. The person it replaced would have asked.',
    },
    {
      type: 'paragraph',
      text: "Design rule: it is always better to escalate than to guess. The cost of an unnecessary escalation is thirty seconds of somebody's attention. The cost of a silent wrong answer is a customer.",
    },
    { type: 'heading', level: 3, text: '4. An audit trail' },
    {
      type: 'paragraph',
      text: 'In month four something will be wrong and you will need to know what the agent did and why. If it cannot show its inputs, its decision and its output for a specific record on a specific day, you cannot debug it and you cannot defend it.',
    },
    { type: 'heading', level: 2, text: 'Where agents genuinely earn their keep' },
    {
      type: 'list',
      items: [
        '**Unstructured to structured** — turning email, PDFs and phone notes into records. The strongest use case there is.',
        '**Triage** — deciding what a human needs to see, and giving them the context alongside it.',
        '**Extraction** at volume from documents arriving in a dozen formats.',
        '**First drafts** of repetitive documents, for a human to approve.',
        '**Watching** — noticing the thing nobody has time to check, like quotes with no follow-up in ten days.',
      ],
    },
    { type: 'heading', level: 2, text: 'Where they do not belong' },
    {
      type: 'list',
      items: [
        '**Irreversible or expensive decisions with invisible errors.** Final pricing, compliance, commitments. A design rule, not a technology limit.',
        '**Anywhere a rule already works.** If an `if` statement solves it, use the `if` statement — it is cheaper, faster, testable, and it does not drift.',
        '**As a substitute for fixing a process.** Automating a bad workflow makes it faster and harder to see.',
        '**As a general assistant nobody was asked about.** Adoption is not a rollout email.',
      ],
    },
    { type: 'heading', level: 2, text: 'The failure mode to design against' },
    {
      type: 'paragraph',
      text: '**Silent degradation.** Deterministic code breaks loudly — errors, alerts, someone gets paged. Model-driven steps do not break. They get slightly worse. Nobody notices for weeks, and by then a hundred records are subtly wrong.',
    },
    { type: 'paragraph', text: 'So build in:' },
    {
      type: 'list',
      items: [
        '**A measure of its own output quality**, sampled continuously.',
        '**A threshold** at which it stops and asks rather than continuing to be quietly wrong.',
        '**A human sampling routine** — someone checks twenty outputs a week. Boring, cheap, and it is the control that actually catches drift.',
      ],
    },
    { type: 'heading', level: 2, text: 'How to start' },
    {
      type: 'paragraph',
      text: 'Pick one job. Bounded, high-volume, currently done by a person who resents it, where being wrong is recoverable and visible. Build that. Measure the exception rate and the error rate honestly.',
    },
    {
      type: 'paragraph',
      text: "**Then decide whether to do a second one** — with real data from your own business rather than from a vendor's slide.",
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'AI agents and automation →', href: '/services/ai-agents-and-automation' },
        { label: 'Why pilots die →', href: '/guides/why-ai-pilots-die' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'AI agents that do work, not chatbots',
      description: 'Bounded job, real input and output, a confidence boundary, an audit trail — and the drift to design against.',
      section: 'Guides',
    }),
  ],
  related: [
    { label: 'AI agents and automation', href: '/services/ai-agents-and-automation' },
    { label: 'Why AI pilots die', href: '/guides/why-ai-pilots-die' },
    { label: 'Measuring the return on an automation', href: '/guides/measuring-automation-roi' },
  ],
};
