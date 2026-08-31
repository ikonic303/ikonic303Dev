import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/forward-deployed-engineering';

export const pillar: PageContent = {
  slug,
  seo: {
    title: "What Is a Forward Deployed Engineer? A Buyer's Guide",
    description:
      "A forward deployed engineer embeds with your team and owns an AI or automation deployment from discovery to production. What that means when you're buying.",
  },
  breadcrumb: crumbs({ name: 'Forward deployed engineering', href: slug }),
  eyebrow: 'FORWARD DEPLOYED ENGINEERING',
  h1: 'What is a forward deployed engineer?',
  answer:
    'A forward deployed engineer is a software engineer who embeds directly with the team that has the problem, and owns the work from problem discovery all the way through to production. The role combines software engineering with process redesign, stakeholder management and organisational change — rather than stopping at a recommendation or a prototype.',
  sections: [
    {
      type: 'paragraph',
      text: 'The title came out of Palantir and spread through the AI industry as companies discovered the same thing over and over: the model was never the hard part. Getting it into a workflow that real people use under real pressure is the hard part, and it needs someone who can write production code and sit in a warehouse for a week working out why dispatch actually does it that way.',
    },
    { type: 'heading', level: 2, text: 'Why the role exists at all' },
    {
      type: 'paragraph',
      text: 'Enterprises have access to extremely capable AI models. Most of them still cannot get those models into daily operation.',
    },
    {
      type: 'paragraph',
      text: 'The gap is not technical capability. It is that a deployment requires four things at once, and they almost never live in one person:',
    },
    {
      type: 'list',
      items: [
        '**Production engineering** — testing, security, observability, data integration, reliability. The boring disciplines that decide whether a thing survives contact with Tuesday.',
        '**Model and system evaluation** — knowing what the thing is actually good at, where it fails, and how you would detect the failure in production.',
        '**Process redesign** — the workflow you automate is almost never the workflow as documented. Someone has to map the real one.',
        '**Change management** — a system nobody adopts has zero value regardless of how well it works.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Hand any three of those to a team and the fourth kills the project. That is why the role is a hybrid, and why it is scarce.',
    },
    { type: 'heading', level: 2, text: 'How scarce, with a real source' },
    {
      type: 'paragraph',
      text: 'An executive search firm, Christian & Timbers, estimates that roughly **17,000 forward deployed engineers work in the United States**, but only about **2,000** have repeatedly delivered what they classify as significant enterprise value — a tier they define as engineers who have completed multiple enterprise AI deployments generating at least **$10 million in revenue or savings**.',
    },
    {
      type: 'paragraph',
      text: 'Their own caveat, and it matters: that is not a federal labour count, and the title itself is still fluid across the industry.',
    },
    {
      type: 'paragraph',
      text: 'Source: Nathan Eddy, [“Forward-Deployed Engineer Shortage Is Holding Back Enterprise AI ROI”](https://www.dice.com/career-advice/forward-deployed-engineer-shortage-is-holding-back-enterprise-ai-roi), Dice, 19 August 2026.',
    },
    {
      type: 'paragraph',
      text: "Take the ratio for what it is — one firm's estimate, not a census. But the shape of it matches what buyers report: plenty of people with the title, far fewer with a record of getting something into production and keeping it there.",
    },
    {
      type: 'heading',
      level: 2,
      text: 'What a forward deployed engineer actually does, week by week',
    },
    {
      type: 'paragraph',
      text: 'Not a job description. What the work looks like from your side of the table.',
    },
    {
      type: 'list',
      items: [
        '**Weeks 1–2 — watching.** On site. Sitting with the people who do the work, not the people who describe it. Timing the steps. Pulling the real numbers out of your systems. Finding out that the documented process and the actual process diverged four years ago.',
        '**Weeks 3–4 — measuring and scoping.** Turning observation into one number: what this costs you a year, in labour, in rework, and in what leaks out the sides. Then deciding, conservatively, how much of that number is realistically removable. That percentage goes in writing, because it becomes the thing both sides get judged on.',
        '**Weeks 5–8 — building.** Into your stack, on your accounts. Integrations, agents, interfaces, the error handling for the twelve edge cases your ops lead mentioned in passing during week one.',
        '**Weeks 9–10 — deploying.** Real users, real work, standing next to them. This is where most projects discover what they got wrong, and where a vendor who has already invoiced has stopped answering.',
        '**After — running it.** The six weeks after launch are where adoption is actually won or lost. A system that is technically live and quietly unused is a failed deployment that shows up as a success in the report.',
      ],
    },
    { type: 'heading', level: 2, text: 'Forward deployed engineer vs. the alternatives' },
    {
      type: 'paragraph',
      text: 'Short version here; the long versions are their own pages.',
    },
    {
      type: 'paragraph',
      text: '**vs. a management consultant.** The consultant’s deliverable is a recommendation; the FDE’s deliverable is a running system. As JC Christian of Christian & Timbers puts it: “Without the technical skills, professionals will operate more like consultants from years past, and without the business transformation piece, professionals will struggle to translate their technical expertise into business outcomes.” [Full comparison →](/forward-deployed-engineer-vs-consultant)',
    },
    {
      type: 'paragraph',
      text: '**vs. hiring one.** A permanent FDE gives you the capability forever, which is genuinely better if you have a continuous pipeline of deployments. Most 50-to-500-person companies have two or three worth doing, which is an awkward amount of work to hire against. [Full comparison →](/forward-deployed-engineer-vs-hiring)',
    },
    {
      type: 'paragraph',
      text: '**vs. an automation agency.** The agency ships faster and cheaper. The trade is that it typically lives on their platform and their accounts, and it decays when they stop touching it. [Full comparison →](/guides/agency-vs-consultant-vs-fde)',
    },
    { type: 'heading', level: 2, text: 'When you do NOT need one' },
    {
      type: 'paragraph',
      text: 'Worth saying plainly, because it is most companies.',
    },
    {
      type: 'list',
      items: [
        '**The workflow is small.** If the whole thing costs you under roughly $75,000 a year all-in, the engagement will not pay for itself. Buy a tool.',
        '**An off-the-shelf product already does it.** If a $200/month SaaS solves 80% of it, buy the SaaS. Embedded engineering is for the parts of your business that are genuinely yours.',
        '**You cannot name the workflow.** “We want to use AI” is not a project. If nobody can point at one process and say that one, the first job is not engineering.',
        '**Nobody senior will change how the work is done.** No amount of engineering survives a team that has been told they do not have to adopt it.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'How to tell a real one from someone using the title',
    },
    { type: 'paragraph', text: 'Five questions. The answers are diagnostic.' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**“How will you measure what this workflow costs us today?”** — If the answer is a workshop or a questionnaire rather than observation and payroll data, they are guessing.',
        '**“What percentage of that cost will you remove, and will you put it in writing?”** — A number in the scope document means they expect to be held to it.',
        '**“Whose accounts does it run on?”** — Yours. Any other answer is a lock-in you will discover later.',
        '**“What happens in the six weeks after launch?”** — If the engagement ends at go-live, adoption is your problem and their success metric is already met.',
        '**“Tell me about a deployment that failed.”** — Anyone who has genuinely put systems into production has one. A clean record means a short one.',
      ],
    },
    {
      type: 'ctaRow',
      links: [
        {
          label: 'The longer version — twelve questions before you sign →',
          href: '/guides/twelve-questions-before-you-sign',
        },
      ],
    },
  ],
  faqs: [
    {
      question: 'Is "forward deployed engineer" just a rebranded consultant?',
      answer:
        'No, though the market is filling up with consultants using the title. The distinction is what they are accountable for: a consultant is accountable for the quality of the advice, a forward deployed engineer is accountable for whether the system is running and used.',
    },
    {
      question: 'Is it the same as a solutions architect or a sales engineer?',
      answer:
        'Related but different. A solutions architect designs; a sales engineer supports the sale. An FDE stays past the point where both of those roles hand off, and owns production.',
    },
    {
      question: 'Do we need one if we already have a development team?',
      answer:
        'Often not. If your engineers can be embedded with the operations team for ten weeks and are allowed to redesign the process rather than just automate it, you may already have the capability. The usual reason companies go outside is that internal teams cannot be pulled off the roadmap for that long.',
    },
    {
      question: 'How long does a deployment take?',
      answer:
        'Roughly ten weeks to production for one well-chosen workflow, then an ongoing operating period. Anything promising two weeks is describing a prototype.',
    },
    {
      question: 'What size company does this make sense for?',
      answer:
        'Broadly 50 to 500 people. Below that, the workflows usually are not expensive enough. Above that, you have the budget to hire the capability permanently — and probably should.',
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'What is a forward deployed engineer?',
      description:
        'A forward deployed engineer embeds with the team that has the problem and owns an AI or automation deployment from discovery through production.',
      section: 'Forward Deployed Engineering',
    }),
  ],
  related: [
    { label: 'Forward deployed engineer vs consultant', href: '/forward-deployed-engineer-vs-consultant' },
    { label: 'Hire one or buy an engagement', href: '/forward-deployed-engineer-vs-hiring' },
    { label: 'Fractional forward deployed engineer', href: '/fractional-forward-deployed-engineer' },
    { label: 'How an engagement runs', href: '/how-we-work' },
  ],
};
