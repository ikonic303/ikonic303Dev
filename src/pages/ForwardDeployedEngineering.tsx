import { Code2, Plug, Wrench, GitBranch, Boxes, ShieldCheck } from 'lucide-react';
import ServicePage from '../components/ServicePage';

export default function ForwardDeployedEngineering() {
  return (
    <ServicePage
      seo={{
        title: 'Forward Deployed Engineering | Custom Systems & Integrations | ikonic303',
        description:
          'We embed with your team and build the custom business systems, API integrations, internal tools, and automation your company runs on — deployed to production, not slide decks.',
        canonical: '/services/forward-deployed-engineering',
      }}
      breadcrumbLabel="Forward Deployed Engineering"
      eyebrow="FORWARD DEPLOYED ENGINEERING"
      title="Engineers embedded"
      titleAccent="in your operations"
      intro="We work alongside your team, map how work actually flows, and build the systems that remove the manual steps — custom tools, integrations, and automation deployed into production and handed over documented."
      capabilities={[
        { icon: Boxes, title: 'Custom business systems', desc: 'Internal apps and workflows built around how your business actually operates.' },
        { icon: Plug, title: 'API integrations', desc: 'Connect your CRM, forms, scheduling, billing, and data sources into one system.' },
        { icon: GitBranch, title: 'Zapier / workflow integrations', desc: 'Automations across the tools you already use, built to be reliable and observable.' },
        { icon: Wrench, title: 'Internal tools & dashboards', desc: 'Admin panels and reporting views your team can actually run the business from.' },
        { icon: Code2, title: 'CRM integrations', desc: 'GoHighLevel and other CRMs wired into the rest of your stack, both directions.' },
        { icon: ShieldCheck, title: 'Automation deployment', desc: 'Shipped to production with monitoring, error handling, and documentation.' },
      ]}
      deliverables={[
        'A working system deployed to production — not a recommendation',
        'API and workflow integrations across your existing tools',
        'Internal tools, admin panels, and dashboards your team uses daily',
        'Technical documentation and a handover walkthrough',
        'Monitoring and error handling so failures surface, not hide',
        'Support while the system beds into your operations',
      ]}
      outcomes={[
        { value: 'Hours/wk', label: 'Manual admin removed' },
        { value: '1', label: 'Source of truth' },
        { value: 'Fewer', label: 'Handoffs & errors' },
        { value: 'Faster', label: 'Internal cycle time' },
      ]}
      faqs={[
        {
          question: 'What does "forward deployed" mean here?',
          answer:
            'We embed with your team for the engagement — learning your process, building against real workflows, and deploying the system into your environment rather than delivering a spec for someone else to implement.',
        },
        {
          question: 'Do you work with our existing tools?',
          answer:
            'Yes. Most engagements integrate the tools you already run on — CRM, forms, scheduling, billing, spreadsheets, and internal databases — rather than replacing them.',
        },
        {
          question: 'What happens after delivery?',
          answer:
            'You get documentation, a handover walkthrough, and a support window while the system beds in. We can also stay on for ongoing iteration.',
        },
      ]}
    />
  );
}
