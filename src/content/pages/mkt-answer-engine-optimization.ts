import type { PageContent } from '../types';
import { crumbs } from './_shared';

const slug = '/marketing/answer-engine-optimization';

export const mktAnswerEngineOptimization: PageContent = {
  slug,
  seo: {
    title: 'Answer Engine Optimisation — Getting Cited By AI',
    description:
      'Ranking and being cited are now two different jobs. What decides which sources an AI assistant reaches for, how to make your site legible to one, and how to measure it.',
  },
  breadcrumb: crumbs(
    { name: 'Marketing', href: '/marketing' },
    { name: 'Answer engine optimisation', href: slug },
  ),
  eyebrow: 'MARKETING',
  h1: 'Getting cited when the answer is written by a machine',
  answer:
    'A growing share of your buyers now ask an assistant instead of a search engine, and the answer names two or three companies. This page is what actually decides whether you are one of them — entity clarity, quotable structure, specificity, corroboration, machine legibility — and what to stop doing.',
  sections: [
    { type: 'heading', level: 2, text: 'The change, stated without hype' },
    {
      type: 'paragraph',
      text: 'Search engines return a list and let the reader choose. An answer engine returns a paragraph and makes the choice for them. Two consequences matter to an operating company:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Position ten is worth roughly nothing now**, because there is no page two in a paragraph. The distribution is far more winner-take-most than the old rankings were.',
        "**Being read is no longer the same as being cited.** A model can consume your page, use it to form the answer, and name a competitor — because your page was useful but not *quotable*, or because nothing else on the internet confirms who you are.",
      ],
    },
    {
      type: 'paragraph',
      text: 'The second point is the one that catches people. A page can be doing its job and still lose.',
    },

    { type: 'heading', level: 2, text: 'What actually decides whether you get named' },
    { type: 'heading', level: 3, text: '1. Entity clarity — does the machine know what you are?' },
    {
      type: 'paragraph',
      text: 'Before a model can recommend you it has to be confident about a small number of facts: what you sell, who you sell it to, where you operate, and what you do not do. Most company websites are ambiguous on at least two of those, usually because the site accreted rather than being written.',
    },
    {
      type: 'paragraph',
      text: "The fastest wins here are unglamorous: one consistent description of the business, the same name written the same way everywhere, a clear statement of who the customer is, and — this one gets skipped constantly — an explicit statement of what you **do not** sell. A model that cannot tell where your boundaries are will not risk putting you in an answer.",
    },
    { type: 'heading', level: 3, text: '2. Quotable structure — can a paragraph be lifted intact?' },
    {
      type: 'paragraph',
      text: 'Models assemble answers out of passages, not pages. A passage that survives the trip has a claim in its first sentence, the support immediately after it, and no dependency on the paragraph above it.',
    },
    {
      type: 'paragraph',
      text: 'That is a real editing discipline. It also happens to be the format a busy human reader prefers, which is why this rarely trades off against writing for people.',
    },
    { type: 'heading', level: 3, text: '3. Specificity — is there anything here worth quoting?' },
    {
      type: 'paragraph',
      text: 'Anything true of every company in your industry is worth nothing to a search engine and less than nothing to a model, because the model already has a thousand copies of it. **The content that gets cited is the content specific enough to be wrong** — a number, a threshold, an order of operations, a named trade-off, a case where the usual advice does not apply.',
    },
    {
      type: 'paragraph',
      text: 'This is where most marketing content fails, and it fails for an organisational reason rather than a creative one: specific claims require somebody who actually knows the work to sit down for an hour.',
    },
    { type: 'heading', level: 3, text: '4. Corroboration — does anything outside your site agree?' },
    {
      type: 'paragraph',
      text: 'A single self-published claim is weak evidence. The same facts appearing in a directory listing, a profile, an industry body, a supplier page or an interview turn an assertion into something a model will repeat. This is why the boring listings work matters more than it used to — not for the link, for the agreement.',
    },
    { type: 'heading', level: 3, text: '5. Machine legibility — can it read you at all?' },
    {
      type: 'paragraph',
      text: 'Structured data that matches what the page actually says. Text in the HTML rather than assembled by script after the fact. An `llms.txt` that states plainly what you do, who you serve, and what you do not sell. Crawlers not accidentally blocked. This part is technical, cheap, and frequently broken in a way nobody notices because the site looks fine to a human.',
    },

    { type: 'heading', level: 2, text: 'The one that is never mentioned: your own site contradicting you' },
    {
      type: 'paragraph',
      text: 'We have seen this cost more visibility than any ranking factor on the list. A site says it does not offer something the company sells. A retired service is still described in the schema. Two pages give different descriptions of the business. A file written for machines carries a denial nobody remembers writing.',
    },
    {
      type: 'paragraph',
      text: 'A model resolving a contradiction will nearly always choose the safe path, which is to leave you out of the answer. **Before optimising anything, read what your own site currently asserts about you as though you were a stranger** — including the machine-readable files. It is free and it is regularly the whole problem.',
    },

    { type: 'heading', level: 2, text: 'How it is measured' },
    {
      type: 'paragraph',
      text: 'Not with an "AI visibility score". With a named list of the questions your buyers actually ask, asked repeatedly, with the answers recorded:',
    },
    {
      type: 'list',
      items: [
        '**Does the answer name you?** Yes or no, per question.',
        '**If not, who does it name?** That list is your real competitive set, and it is frequently not the one you had in mind.',
        '**Is what it says about you correct?** Being named wrongly is its own problem and has its own fix.',
        '**Which source did it credit?** Sometimes a directory, a forum, or a supplier’s page — which tells you where the next hour of work belongs.',
      ],
    },
    {
      type: 'paragraph',
      text: 'It is an uncomfortable number in month one. That is what makes it worth having: it is one of the few marketing measurements that cannot be spun, and it moves in a direction you can see.',
    },

    { type: 'heading', level: 2, text: 'What we do about it, in order' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Fix the contradictions.** Read the site as a machine does; remove every denial and every stale claim. Frequently a week of work with a disproportionate effect.',
        '**Make the entity unambiguous.** One description, consistently, everywhere, including the places nobody edits.',
        '**Rewrite the pages that matter into passages that survive extraction** — claim first, support second, no orphan pronouns.',
        '**Publish content specific enough to be worth quoting**, sourced from your operators rather than from a summary of what is already ranking.',
        '**Build corroboration** where it is real: profiles, listings, industry bodies, supplier pages.',
        '**Track the named question list monthly**, and report which questions moved and which did not.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is this different from SEO?',
      answer:
        'It overlaps and it is not the same job. Traditional SEO optimises for a ranked list of links; this optimises for being the source quoted inside a written answer. The technical hygiene is shared; the content standard and the measurement are different.',
    },
    {
      question: 'How long does it take?',
      answer:
        'Contradictions and technical legibility can move within weeks because they are removing a blocker rather than building authority. Being cited for competitive questions is slower — a fair first read is around a quarter, and anyone promising a month is selling the report rather than the result.',
    },
    {
      question: 'Can you guarantee we get cited?',
      answer:
        'No, and nobody can. What we can do is name the questions, record where you stand today, and show what moved. Anyone offering a guarantee here is either not measuring or not telling you what they are measuring.',
    },
    {
      question: 'Does it help if we just publish more?',
      answer:
        'Usually not. Volume without specificity produces more of the material a model already has a thousand copies of. One page with a real number in it outperforms ten summaries.',
    },
  ],
  related: [
    { label: 'Search visibility', href: '/marketing/search-visibility' },
    { label: 'Content that earns citations', href: '/marketing/content' },
    { label: 'What we report', href: '/marketing/what-we-report' },
    { label: 'Back to marketing', href: '/marketing' },
  ],
};
