import { Bot, PhoneCall, Filter, CalendarClock, MessageSquare, Repeat } from 'lucide-react';
import ServicePage from '../components/ServicePage';

export default function AIAutomation() {
  return (
    <ServicePage
      seo={{
        title: 'AI Automation & AI Agents | AI Receptionist & Lead Qualification | ikonic303',
        description:
          'AI agents and assistants that qualify leads, answer customers, book appointments, and automate repetitive work — deployed into your CRM and phone/website channels.',
        canonical: '/services/ai-automation',
      }}
      breadcrumbLabel="AI & Automation"
      eyebrow="AI & AUTOMATION"
      title="Deploy AI into your"
      titleAccent="day-to-day workflows"
      intro="AI agents and assistants that handle conversations, qualify leads, book appointments, and take repetitive work off your team — wired into the CRM, phone, and website you already use."
      capabilities={[
        { icon: Bot, title: 'AI agents / assistants', desc: 'Task-focused agents that handle a defined job end to end, with guardrails.' },
        { icon: PhoneCall, title: 'AI front office / receptionist', desc: 'Answers calls and chats 24/7, routes or books, and escalates only what needs a human.' },
        { icon: Filter, title: 'AI lead qualification', desc: 'Scores and qualifies inbound leads so your team only talks to ready buyers.' },
        { icon: CalendarClock, title: 'Appointment booking automation', desc: 'Books directly onto calendars with confirmations and reminders.' },
        { icon: MessageSquare, title: 'Customer support automation', desc: 'Deflects common questions and drafts responses from your knowledge base.' },
        { icon: Repeat, title: 'Business process automation', desc: 'Automate the repeatable back-office steps between systems and people.' },
      ]}
      deliverables={[
        'AI agent(s) scoped to a specific job, with prompts and guardrails',
        'Integration into your CRM, phone, and website channels',
        'Automated follow-up across email and SMS',
        'Human escalation paths and fallback handling',
        'Transcripts, logging, and a review loop to improve responses',
        'Documentation and tuning support after launch',
      ]}
      outcomes={[
        { value: '< 60s', label: 'Lead response time' },
        { value: '24/7', label: 'Coverage' },
        { value: 'More', label: 'Appointments booked' },
        { value: 'Less', label: 'Repetitive work' },
      ]}
      faqs={[
        {
          question: 'Will the AI sound like a robot to my customers?',
          answer:
            'We tune tone and scope to your business and keep interactions short and useful. Anything outside the agent’s defined job is handed to a person with full context.',
        },
        {
          question: 'Where does the AI live?',
          answer:
            'In the channels you already use — your phone line, website chat, and CRM. We integrate rather than send customers to a separate tool.',
        },
        {
          question: 'How do you keep it accurate?',
          answer:
            'Agents are scoped to a defined task and backed by your own content. We log conversations and run a review loop to correct and improve responses over time.',
        },
      ]}
    />
  );
}
