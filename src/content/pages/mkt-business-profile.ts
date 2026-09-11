import type { PageContent } from '../types';
import { crumbs } from './_shared';

const slug = '/marketing/business-profile';

export const mktBusinessProfile: PageContent = {
  slug,
  seo: {
    title: 'Business Profile And Listings — The Unglamorous Fix',
    description:
      'Your profile and your listings decide more of your visibility than most content does, and they are usually wrong. What to fix, in order, and what actually moves it.',
  },
  breadcrumb: crumbs(
    { name: 'Marketing', href: '/marketing' },
    { name: 'Business profile and listings', href: slug },
  ),
  eyebrow: 'MARKETING',
  h1: 'Profiles and listings: the cheapest fix nobody does',
  answer:
    "A business profile and a consistent set of listings routinely decide more of a company's local visibility than a year of content does. They are also, almost universally, out of date. This is the least glamorous work in marketing and frequently the highest return per hour.",
  sections: [
    { type: 'heading', level: 2, text: 'Why it matters more than it sounds' },
    {
      type: 'paragraph',
      text: 'Search engines and answer engines are both trying to establish the same thing: **is this a real business, and are we confident about its facts?** Every place your details appear is either evidence for that or evidence against it.',
    },
    {
      type: 'paragraph',
      text: 'When the details disagree — an old phone number here, a former address there, a name written three ways — the disagreement itself is the signal. A machine resolving conflicting facts about you will usually be conservative, which means leaving you out of the answer rather than risking a wrong one.',
    },
    { type: 'paragraph', text: 'There is no clever version of fixing this. There is a list, and somebody has to work through it.' },

    { type: 'heading', level: 2, text: 'The profile, in order of what actually moves it' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Categories.** The primary category does more than anything else on the profile, and it is the field most often set once, wrongly, at creation. It should be the thing you most want to be found for, not the broadest description that technically covers you.',
        '**Services and products, entered properly.** Every service listed individually, described in the words a customer would use. Empty fields are unclaimed ground.',
        '**Photographs, added continuously.** Real ones, of the actual work, added on a schedule rather than once in a batch. Freshness is part of the signal, and stock imagery is worth roughly nothing.',
        '**Reviews, and — the part people skip — the replies.** Reviews are the most-read thing about your business, and your reply to a bad one is read more carefully than the review. A calm, specific, non-defensive reply sells better than five good reviews. Never argue, never explain the customer’s motives, and offer to fix it in public.',
        '**Questions and answers.** You may ask and answer your own. Most businesses leave the section empty and let a stranger’s guess be the only thing there.',
        '**Posts and updates.** Modest direct effect, real indirect one: it demonstrates the profile is actively maintained, which is exactly what the "is this real" test is looking for.',
        '**Hours, including the exceptions.** Wrong holiday hours generate the review that is hardest to recover from, because the customer is right.',
      ],
    },

    { type: 'heading', level: 2, text: 'Listings: consistency beats quantity' },
    {
      type: 'paragraph',
      text: 'The goal is not to be listed in as many places as possible. It is that **every place you appear says the same thing**.',
    },
    {
      type: 'list',
      items: [
        '**One canonical version of your details**, decided in writing, and used everywhere without variation. Including punctuation and suite numbers.',
        '**Find the old entries.** Former addresses, previous trading names, a number that used to ring a desk that no longer exists. These are the ones actively doing damage.',
        '**Claim before you create.** Duplicates are harder to remove than to prevent, and a duplicate splits your evidence in half.',
        '**The industry-specific places matter more than the general ones.** A trade body, a supplier’s dealer locator, a professional register — high trust, frequently unclaimed, and read by both search engines and answer engines as corroboration.',
        '**Then leave it alone**, and check on a schedule. Constant editing of a profile is not a strategy.',
      ],
    },

    { type: 'heading', level: 2, text: 'When the details are changing' },
    {
      type: 'paragraph',
      text: 'If your address, name or phone number is in flux, **stop and sequence it** rather than updating whatever you happen to be looking at. A half-finished change across an ecosystem of listings is worse than either the old state or the new one, because for months the internet holds two versions of you and cannot tell which is current.',
    },
    {
      type: 'paragraph',
      text: 'The right shape is: decide the final details, write them down, then change everything in one pass, starting with the profile and the site and working outward through the listings. Anything that cannot be changed in that pass gets a date and an owner.',
    },

    { type: 'heading', level: 2, text: 'What we do' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Audit what exists** — every listing, every version of your details, every duplicate, including the ones on sites you have never heard of.',
        '**Fix the profile properly**: categories, services, hours, photographs, questions.',
        '**Get the review process running** so requests happen as part of the work rather than in occasional pushes, and every review gets a reply.',
        '**Correct the listings in one sweep**, starting with the ones that carry weight.',
        '**Then maintain it**: photographs, posts, replies, and a check that nothing has drifted.',
      ],
    },
    {
      type: 'paragraph',
      text: 'None of this is complicated. All of it is somebody’s job, and in most companies it is nobody’s.',
    },
  ],
  faqs: [
    {
      question: 'Does this matter if we do not sell locally?',
      answer:
        'The profile matters less; the consistency matters just as much. Corroboration across independent sources is what turns a claim about your company into a fact a machine will repeat.',
    },
    {
      question: 'Should we pay a service to submit us everywhere?',
      answer:
        'Sometimes, for the mechanical part. It does not replace the audit, because the damage is usually in the old entries a bulk submission tool will not find and cannot remove.',
    },
    {
      question: 'How do we get more reviews without being a nuisance?',
      answer:
        'Ask every customer once, immediately after the work, in the channel you already use with them, and make it one tap. Volume comes from it being part of the process rather than from asking harder.',
    },
    {
      question: 'What about a bad review that is unfair?',
      answer:
        'Reply once, calmly, with the specific facts and an offer to fix it, and stop. The reply is for the next reader, not for the reviewer. Nothing on a profile damages a business like a defensive owner.',
    },
  ],
  related: [
    { label: 'Answer engine optimisation', href: '/marketing/answer-engine-optimization' },
    { label: 'Search visibility', href: '/marketing/search-visibility' },
    { label: 'What we report', href: '/marketing/what-we-report' },
  ],
};
