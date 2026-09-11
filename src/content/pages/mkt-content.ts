import type { PageContent } from '../types';
import { crumbs } from './_shared';

const slug = '/marketing/content';

export const mktContent: PageContent = {
  slug,
  seo: {
    title: 'Content Specific Enough To Be Worth Quoting',
    description:
      'Most B2B content is a summary of what is already ranking. Here is the standard we write to, where the material comes from, and how it gets out of your operators.',
  },
  breadcrumb: crumbs(
    { name: 'Marketing', href: '/marketing' },
    { name: 'Content', href: slug },
  ),
  eyebrow: 'MARKETING',
  h1: 'Content specific enough to be wrong',
  answer:
    'There is more content than there has ever been and less of it is worth reading, because most of it is assembled from what already ranks. Here is the standard we write to instead, where the material comes from, and what it costs you in time.',
  sections: [
    { type: 'heading', level: 2, text: 'The standard: one idea, usable today, specific enough to be wrong' },
    { type: 'paragraph', text: 'Every piece has to pass four tests before it is worth publishing.' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**It teaches one thing the reader can use today without hiring anybody.** If the only action at the end is "contact us", it is a brochure. Brochures have a place; they do not earn attention and they never get cited.',
        '**It is specific enough to be wrong.** A number, a threshold, an order of operations, a named trade-off, a case where the standard advice does not apply. Anything that could be true of every company in your industry is worth nothing to a search engine and less than nothing to an answer engine, which already holds a thousand copies of it.',
        '**Every claim is honest.** If a statistic appears, it is cited to a source that was actually read. Nothing is invented, and no figure is repeated because it appears everywhere — most of the figures that appear everywhere trace back to nothing.',
        '**It teaches rather than hypes.** The reader should finish it better informed even if they never buy anything. That is the whole mechanism: expertise given away is the only advertising that survives contact with a sceptical buyer.',
      ],
    },

    { type: 'heading', level: 2, text: 'Where the material actually comes from' },
    { type: 'paragraph', text: 'Not from research on what is already ranking. From your company:' },
    {
      type: 'list',
      items: [
        '**Your operators.** An hour with the person who does the work produces material nobody outside your business has. The estimator knows why quotes get lost. The dispatcher knows what the second visit really costs. The bookkeeper knows which invoices get disputed and why. None of it is on the internet.',
        '**Your objections.** The five things buyers say before they say yes, answered properly. These pages convert better than anything else on a site, and they are the ones nobody writes because they feel like conceding something.',
        '**Your losses.** Why deals go the other way — including the times the honest answer is that the other option was right for them. Publishing that is disarming in a way no amount of positioning is.',
        '**Your numbers**, where you can publish them. Not revenue — thresholds, timings, tolerances, the arithmetic you use to make a decision. Numbers are what make a passage quotable.',
      ],
    },
    {
      type: 'paragraph',
      text: '**What it costs you:** roughly one hour of one knowledgeable person per piece. That is the real price of content that works, and it is why most companies end up with content that does not. We do the extraction, the writing, the editing and the publishing; the hour of expertise cannot be outsourced, and any agency telling you otherwise is describing the generic version.',
    },

    { type: 'heading', level: 2, text: 'How it is written, structurally' },
    {
      type: 'paragraph',
      text: 'Because passages are what get extracted, the format matters as much as the material:',
    },
    {
      type: 'list',
      items: [
        '**The claim in the first sentence**, support immediately after. Not a windup.',
        '**Sections that stand alone**, so a passage lifted out of the middle still makes sense — no orphan pronouns, no "as we said above".',
        '**Headings that are the question a person would actually ask**, not clever labels.',
        '**A table wherever there is a comparison**, because comparisons are what get quoted.',
        '**The limits stated in the piece itself.** What this does not fix, who this does not apply to. Stating a limit is the single most credible thing a piece of content can do, and almost nobody does it.',
      ],
    },

    { type: 'heading', level: 2, text: 'Volume, honestly' },
    {
      type: 'paragraph',
      text: '**Fewer, better, is not a slogan here — it is what the measurement supports.** Twenty generic posts a month costs money, produces nothing, and now actively damages you with answer engines by adding more of what they already have.',
    },
    {
      type: 'paragraph',
      text: "A realistic cadence for an operating company is a small number of substantial pieces a month, plus the depth work on the pages that already carry intent. If a vendor's proposal leads with how many posts you get, the proposal is describing its own production line rather than your outcome.",
    },

    { type: 'heading', level: 2, text: 'Distribution is part of the job, not an afterthought' },
    {
      type: 'paragraph',
      text: 'A piece nobody links to and nobody sees is a private document. So each piece ships with: the internal links pointing at it from pages that already have authority, the atomised versions for whichever channels your buyers actually use, and — where it fits — an addition to the machine-readable files so an answer engine knows the page exists and what question it settles.',
    },
    {
      type: 'paragraph',
      text: 'We do not publish the same paragraph to five channels and call it distribution. Each channel gets the version that suits it or it does not get one.',
    },
  ],
  faqs: [
    {
      question: 'Do you use AI to write it?',
      answer:
        'We use it the way any competent team now does — for structure, drafting and editing passes — and every factual claim is checked against a source, every number traced, and every piece read by a human who knows the subject before it publishes. What we will not do is generate volume, because volume is the failure mode, not the shortcut.',
    },
    {
      question: 'How much of our time does it take?',
      answer:
        'About an hour per piece from somebody who knows the work, usually as a recorded conversation rather than writing. Everything else is ours.',
    },
    {
      question: 'Can you write about our industry without knowing it?',
      answer:
        'We can write competently about anything after that hour, and we cannot write anything worth citing without it. That is the trade, stated up front.',
    },
    {
      question: 'What if we do not want to give away how we do it?',
      answer:
        'Almost always the wrong instinct. The method is not the moat — doing it reliably is. Publishing how it works is how a buyer decides you are the one who knows.',
    },
    {
      question: 'Who owns what you write?',
      answer: 'You do. It is your content, on your site, in your accounts, and it stays there whether or not we do.',
    },
  ],
  related: [
    { label: 'Answer engine optimisation', href: '/marketing/answer-engine-optimization' },
    { label: 'What we report', href: '/marketing/what-we-report' },
    { label: 'Back to marketing', href: '/marketing' },
  ],
};
