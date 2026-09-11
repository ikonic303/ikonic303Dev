import type { PageContent } from '../types';
import { crumbs } from './_shared';

const slug = '/marketing/search-visibility';

export const mktSearchVisibility: PageContent = {
  slug,
  seo: {
    title: 'Search Visibility For Operating Companies | ikonic303',
    description:
      'SEO for companies that sell something real: the technical floor, the pages that earn intent, and why most sites lose to their own architecture rather than to rivals.',
  },
  breadcrumb: crumbs(
    { name: 'Marketing', href: '/marketing' },
    { name: 'Search visibility', href: slug },
  ),
  eyebrow: 'MARKETING',
  h1: 'Search visibility, for companies that sell something real',
  answer:
    'Most mid-size companies do not lose search to a better competitor. They lose it to their own site — buried pages, a technical fault nobody sees, content written to fill a calendar. This is the order we work in and why.',
  sections: [
    { type: 'heading', level: 2, text: 'The floor: things that must be true before anything else is worth doing' },
    {
      type: 'paragraph',
      text: 'There is no point competing for a query while one of these is broken, and each one is checkable in an afternoon.',
    },
    {
      type: 'list',
      items: [
        '**Every page you care about actually gets indexed.** Not "is in the sitemap" — indexed. Sites routinely carry a rule, a tag or a header that excludes an entire section, and it survives because nothing visibly breaks.',
        '**Redirects go one hop to a live page.** Chains and loops are where authority quietly evaporates. We have seen a whole site where every URL but the homepage looped, styles and all — and the homepage still looked perfect because it was being served from a cache.',
        '**One canonical version of the site.** With or without `www`, with or without a trailing slash, one protocol. Two versions of every page is a self-inflicted competition.',
        '**The content is in the HTML.** If the words only appear after script runs, you are relying on a renderer you do not control. Assume the crawler that matters most is the least patient one.',
        '**The page is fast enough on a phone on a normal connection**, which is not the same as fast on your laptop on office wifi.',
        '**The structured data matches the page.** Marking up something the page does not say is worse than no markup at all.',
      ],
    },

    { type: 'heading', level: 2, text: 'Architecture beats individual pages' },
    {
      type: 'paragraph',
      text: 'The biggest single lever at this size is usually not a page — it is the shape of the site.',
    },
    {
      type: 'list',
      items: [
        '**One page per thing you actually sell.** If a service does not have a page, it does not exist to a search engine, and "it is mentioned on the services page" is not a page. This sounds obvious and it is the most common structural fault we find.',
        '**Stop competing with yourself.** Four thin pages about variations of the same subject split the signals four ways and none of them ranks. One authoritative page, with the variations as sections, beats all four.',
        '**Depth where the money is, not where it is easy to write.** Most sites have forty posts about general topics and one thin page about the thing that actually pays the bills.',
        '**Internal links pointing at the pages that convert.** A page nothing links to is a page you have told the search engine not to care about. Your own linking is the cheapest ranking signal you control outright.',
        '**Retire what you no longer sell — with a redirect, not a delete.** A site full of pages for discontinued services teaches search engines and answer engines the wrong thing about you, and it takes months to unteach.',
      ],
    },

    { type: 'heading', level: 2, text: 'Which queries are worth the effort' },
    {
      type: 'paragraph',
      text: 'Volume is the least useful number on the list, and it is the one most reporting leads with.',
    },
    {
      type: 'paragraph',
      text: '**Intent first.** Somebody searching how to do the thing themselves is not a buyer. Somebody searching for a comparison, a cost, a standard, a supplier or a fix at 4pm on a weekday is.',
    },
    {
      type: 'paragraph',
      text: '**Winnability second.** If the first page is entirely national directories and manufacturers, a mid-size company will not displace them with a blog post, and pretending otherwise burns a quarter. Pick the queries where the page that ranks is the kind of page you can credibly write.',
    },
    { type: 'paragraph', text: '**Then volume.** Ten searches a month by somebody about to buy beats a thousand by students.' },
    {
      type: 'paragraph',
      text: 'And the ones nobody tracks: your own name plus a qualifier — reviews, alternatives, complaints, pricing, "is X any good". Those results are often the last thing a buyer reads before they contact you, and they are frequently owned entirely by third parties.',
    },

    { type: 'heading', level: 2, text: 'What we actually do' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Crawl and measure the site as it is**, including the machine-readable files, and produce the list of things that are simply broken. This is week one and it is usually the highest-yield week.',
        '**Fix the floor.** Indexation, redirects, canonicals, speed, structured data.',
        '**Fix the architecture.** A page for each thing sold, consolidation of the duplicates, internal links pointed at the pages that convert, retirement of what is no longer offered.',
        '**Publish depth where intent is**, not where writing is easy.',
        '**Build corroboration** — profiles, listings, industry bodies, real relationships. Slowly, because the fast version of this is the version that causes problems later.',
        '**Report against the baseline recorded before we started**, per query, including the ones that did not move. [What we report →](/marketing/what-we-report)',
      ],
    },

    { type: 'heading', level: 2, text: 'What we will not do' },
    {
      type: 'list',
      items: [
        '**Buy links.** The upside is temporary and the downside lands on your domain, not on ours.',
        '**Publish volume for its own sake.** Twenty generic posts a month is a cost pretending to be an asset, and it now actively harms you with answer engines.',
        '**Report rankings for queries nobody searches.** It is the oldest way to make a flat quarter look busy, and it is the reason so many owners stopped believing search reporting.',
        '**Take the budget while the handler is broken.** If enquiries currently die between arriving and somebody dealing with them, more traffic multiplies the waste. [Lead response →](/marketing/lead-response)',
      ],
    },
  ],
  faqs: [
    {
      question: 'How long before search work shows?',
      answer:
        'Technical and architectural fixes can move within weeks because they remove a blocker. Competitive positions are a quarter or more. The honest answer is that the first month is repair and you should expect to see the repair, not the ranking.',
    },
    {
      question: 'Do we need a blog?',
      answer:
        'You need depth on what you sell and answers to what your buyers ask. Sometimes that lives in a blog; often it belongs on the service pages themselves, where the intent already is.',
    },
    {
      question: 'What about AI answers?',
      answer:
        'Related, and a separate discipline with its own measurement. See answer engine optimisation.',
    },
    {
      question: 'Can you work with our existing site and team?',
      answer:
        'Yes — and that is the default. Everything runs on your accounts, in your stack, documented as it is built, so it keeps working whether or not we are still here.',
    },
  ],
  related: [
    { label: 'Answer engine optimisation', href: '/marketing/answer-engine-optimization' },
    { label: 'Ask what we would measure first', href: '/contact' },
    { label: 'Back to marketing', href: '/marketing' },
  ],
};
