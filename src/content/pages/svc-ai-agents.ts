import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/services/ai-agents-and-automation';

export const aiAgents: PageContent = {
  slug,
  seo: {
    title: 'AI Agents That Do Work, Not Chatbots That Discuss It',
    description:
      'Most business AI is a chat window nobody opens. Useful agents take an input, do a job, and hand off cleanly when unsure. What that means in practice.',
  },
  breadcrumb: crumbs(
    { name: 'Services', href: '/services' },
    { name: 'AI agents and automation', href: slug },
  ),
  eyebrow: 'SERVICES',
  h1: 'AI agents and automation',
  answer:
    'A useful business agent takes an input, does a defined job, and hands off cleanly when it is not confident. Most of what gets sold as "AI for business" is a chat interface bolted onto a knowledge base — which is a search box that sometimes lies, and it is why so much of it goes unused.',
  sections: [
    { type: 'heading', level: 2, text: 'What a working agent looks like' },
    { type: 'paragraph', text: 'Four properties. Miss any one and it degrades into a demo.' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**A bounded job.** “Read the inbound RFQ, extract the line items, match them to catalogue SKUs, flag what it cannot match.” Not “help with sales.”',
        '**A real input and a real output**, in systems people already use. If someone has to open a new tab to get value, the value is optional and will be skipped.',
        '**A confidence boundary.** It knows what it does not know and escalates, visibly, with the reason. An agent that guesses silently is a liability with a subscription.',
        '**An audit trail.** When something goes wrong in month four, you need to see what it did and why.',
      ],
    },
    { type: 'heading', level: 2, text: 'Where they work well' },
    {
      type: 'list',
      items: [
        '**Intake and triage** — turning unstructured inbound into structured records',
        '**Extraction** — pulling data out of documents that arrive in twelve formats',
        '**Follow-up** — the sequence that happens whether or not anyone remembers',
        '**Exception routing** — deciding what a human needs to see and giving them the context with it',
        '**Drafting** — the first version of a repetitive document, for a human to approve',
      ],
    },
    { type: 'heading', level: 2, text: 'Where they do not' },
    {
      type: 'list',
      items: [
        '**Anything where being wrong is expensive and the error is invisible.** Pricing, compliance, irreversible commitments. Not a technology limit — a design rule.',
        '**Anywhere a deterministic rule already works.** If an `if` statement solves it, use the `if` statement. It is cheaper, faster, and it does not drift.',
        '**As a replacement for a broken process.** Automating a bad workflow makes the bad workflow faster.',
      ],
    },
    { type: 'heading', level: 2, text: 'The failure mode nobody warns you about' },
    {
      type: 'paragraph',
      text: '**Silent degradation.** A deterministic script breaks loudly — an error, a red light, someone gets paged. A model-driven step does not break. It gets slightly worse, and nobody notices for weeks, and by then a hundred records are subtly wrong.',
    },
    {
      type: 'paragraph',
      text: 'So everything we build carries a measurement of its own output quality, and a threshold at which it stops and asks for a human rather than continuing to be quietly wrong.',
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'What gets built and when →', href: '/how-we-work' },
        { label: 'All services →', href: '/services' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'AI agents and automation',
      description:
        'Agents with a bounded job, a confidence boundary, and an audit trail — not chat interfaces.',
      section: 'Services',
    }),
  ],
  related: [
    { label: 'CRM and sales systems', href: '/services/crm-and-sales-systems' },
    { label: 'Internal tools and dashboards', href: '/services/internal-tools-and-dashboards' },
    { label: 'All services', href: '/services' },
  ],
};
