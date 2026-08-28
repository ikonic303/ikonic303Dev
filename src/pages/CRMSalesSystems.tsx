import { Database, GitPullRequestArrow, Mail, Workflow, BarChart3, Users } from 'lucide-react';
import ServicePage from '../components/ServicePage';

export default function CRMSalesSystems() {
  return (
    <ServicePage
      seo={{
        title: 'CRM & Sales Systems | GoHighLevel Setup & Automation | ikonic303',
        description:
          'GoHighLevel setup and optimization, sales pipeline automation, lead nurturing, and email/SMS sequences so every lead is tracked, followed up, and reported on.',
        canonical: '/services/crm-sales-systems',
      }}
      breadcrumbLabel="CRM & Sales Systems"
      eyebrow="CRM & SALES SYSTEMS"
      title="A CRM your team"
      titleAccent="actually trusts"
      intro="We set up and optimize GoHighLevel — pipelines, automations, and email/SMS sequences — so leads are captured, nurtured, and followed up without anyone remembering to, and you can see exactly what's working."
      capabilities={[
        { icon: Database, title: 'GoHighLevel setup & management', desc: 'Full build or rebuild — accounts, calendars, forms, numbers, and automations.' },
        { icon: GitPullRequestArrow, title: 'Sales pipeline development', desc: 'Stages that match how you actually sell, with automation on every transition.' },
        { icon: Workflow, title: 'Lead management systems', desc: 'Capture from forms, ads, and calls into one place with instant routing.' },
        { icon: Mail, title: 'Email & SMS sequences', desc: 'Nurture and re-engagement campaigns triggered by behavior, not guesswork.' },
        { icon: Users, title: 'Lead nurturing', desc: 'Long-term follow-up that reactivates aged leads automatically.' },
        { icon: BarChart3, title: 'Reporting dashboards', desc: 'Lead source, pipeline value, conversion, and cost — visible at a glance.' },
      ]}
      deliverables={[
        'A configured GoHighLevel account built around your sales process',
        'Sales pipeline with automation on every stage',
        'Lead capture wired from every source into one system',
        'Email and SMS nurture + re-engagement sequences',
        'Reporting dashboards for pipeline, conversion, and lead cost',
        'Team training and documentation',
      ]}
      outcomes={[
        { value: 'Every', label: 'Lead followed up' },
        { value: 'Higher', label: 'Conversion rate' },
        { value: 'Full', label: 'CRM visibility' },
        { value: 'Less', label: 'Manual data entry' },
      ]}
      faqs={[
        {
          question: 'Do you only work in GoHighLevel?',
          answer:
            'GoHighLevel is our default for small and medium businesses because it combines CRM, automation, and messaging in one place. We also integrate with other CRMs when that’s what you already run.',
        },
        {
          question: 'We already have a CRM that’s a mess. Can you fix it?',
          answer:
            'Yes — rebuilds are common. We audit what’s there, redesign the pipeline and automations, migrate cleanly, and train the team on the new setup.',
        },
        {
          question: 'Will this connect to our other tools?',
          answer:
            'Yes. CRM work is usually paired with integrations so scheduling, billing, forms, and your website all feed the same system.',
        },
      ]}
    />
  );
}
