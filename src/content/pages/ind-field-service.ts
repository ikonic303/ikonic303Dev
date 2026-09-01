import type { PageContent } from '../types';
import { articleSchema, crumbs } from './_shared';

const slug = '/industries/field-service';

export const indFieldService: PageContent = {
  slug,
  seo: {
    title: 'Automation for Field Service and Dispatch Operations',
    description:
      'Intake, dispatch, the second visit that should not have happened, and the invoice that goes out a week late. Where field service money actually leaks.',
  },
  breadcrumb: crumbs(
    { name: 'Who we work with', href: '/who-we-work-with' },
    { name: 'Field service', href: slug },
  ),
  eyebrow: 'INDUSTRY',
  h1: 'Forward deployed engineering for field service',
  answer:
    'In field service the expensive workflow is intake-to-dispatch-to-invoice, and the largest single leakage line is usually the return visit: the job that needed a part nobody knew about, so a truck went out twice for one payment.',
  sections: [
    { type: 'heading', level: 2, text: 'The pattern' },
    {
      type: 'list',
      items: [
        'Intake is a phone call, and what gets captured depends on who answered.',
        "Dispatch is a whiteboard, a spreadsheet, or one person's head — and that person cannot take holiday.",
        'The tech arrives without the part, or without the history, or both.',
        'Job notes are written that evening, or not at all.',
        'The invoice goes out days later, from notes, missing the parts actually used.',
        'Nobody knows profitability per job type until somebody builds a spreadsheet for a meeting.',
      ],
    },
    { type: 'heading', level: 2, text: 'What gets measured' },
    {
      type: 'table',
      headers: ['Question', 'Source'],
      rows: [
        [
          'What percentage of jobs require a second visit, and what does one cost fully loaded?',
          'dispatch records + payroll',
        ],
        ['How long from job completion to invoice issued?', "your system's timestamps"],
        ['How much invoiced work is missing parts or time actually used?', 'compare tech notes to invoices on 20 jobs'],
        ['How many calls a day are customers asking where the tech is?', 'the phones'],
        ['How much of dispatch is one irreplaceable person?', 'ask what happens when they are off'],
      ],
    },
    {
      type: 'paragraph',
      text: '**Run the second-visit number first.** It is nearly always larger than owners expect and it is nearly always caused by intake, not by the tech.',
    },
    { type: 'heading', level: 2, text: 'What typically gets built' },
    {
      type: 'list',
      items: [
        '**Structured intake** that captures what dispatch actually needs, regardless of who answers.',
        '**Dispatch that accounts for parts and skills**, not just geography and time.',
        '**Capture at the job**, in a form a tech will genuinely use with dirty hands in the rain — which is a serious design constraint, not a detail.',
        '**Invoice assembly from job data**, same day.',
        '**Automatic customer status**, which removes a large share of inbound calls.',
      ],
    },
    { type: 'heading', level: 2, text: 'The design constraint that decides this' },
    {
      type: 'paragraph',
      text: 'If the technician will not use it, none of it works. Field tools fail for boring reasons: too many taps, no signal in a basement, unusable in gloves, needing a login the tech does not remember.',
    },
    {
      type: 'paragraph',
      text: 'So the field-facing part gets built with a tech in the room, tested in a real van on a real job, before anything else is finished. A dispatch system with perfect logic and no field adoption is a spreadsheet with a bigger invoice.',
    },
    {
      type: 'ctaRow',
      links: [
        { label: 'The measurement worksheet →', href: '/what-it-costs' },
        { label: 'How an engagement runs →', href: '/how-we-work' },
      ],
    },
  ],
  schema: [
    articleSchema({
      slug,
      headline: 'Forward deployed engineering for field service',
      description: 'Intake, dispatch, the cost of second visits, same-day invoicing.',
      section: 'Industries',
    }),
  ],
  related: [
    { label: 'Who we work with', href: '/who-we-work-with' },
    { label: 'How an engagement runs', href: '/how-we-work' },
    { label: 'What a manual workflow costs you', href: '/guides/cost-of-a-manual-workflow' },
  ],
};
