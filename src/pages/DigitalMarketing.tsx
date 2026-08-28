import { Globe, Filter, MapPin, Search, Megaphone, LineChart } from 'lucide-react';
import ServicePage from '../components/ServicePage';

export default function DigitalMarketing() {
  return (
    <ServicePage
      seo={{
        title: 'Digital Marketing | Websites, Funnels, Local SEO & Paid Ads | ikonic303',
        description:
          'Website development, sales funnels, local SEO, SEO/AEO, Google Business Profile optimization, paid ads, and marketing analytics — built to generate qualified leads and tracked end to end.',
        canonical: '/services/digital-marketing',
      }}
      breadcrumbLabel="Digital Marketing"
      eyebrow="DIGITAL MARKETING"
      title="Marketing built as a"
      titleAccent="lead-generation system"
      intro="Websites, funnels, local search, and paid ads designed to generate qualified leads — connected to your CRM and measured end to end, so you know what every lead costs."
      capabilities={[
        { icon: Globe, title: 'Website development', desc: 'Fast, conversion-focused sites that feed leads straight into your CRM.' },
        { icon: Filter, title: 'Landing pages & sales funnels', desc: 'Purpose-built pages for each campaign and offer, with tracking baked in.' },
        { icon: MapPin, title: 'Local SEO & Google Business Profile', desc: 'Rank in the map pack for the services you want to be found for.' },
        { icon: Search, title: 'SEO / AEO optimization', desc: 'Optimized for search engines and AI answer engines that cite sources.' },
        { icon: Megaphone, title: 'Paid ads & lead generation', desc: 'Google and Meta campaigns targeted to intent and measured on cost per lead.' },
        { icon: LineChart, title: 'Marketing analytics & tracking', desc: 'Lead-source attribution and dashboards so spend maps to results.' },
      ]}
      deliverables={[
        'A conversion-focused website or set of landing pages / funnels',
        'Local SEO and Google Business Profile optimization',
        'On-page SEO and AEO for search and AI answer engines',
        'Paid ad campaigns set up, targeted, and tracked',
        'Analytics and lead-source attribution wired to your CRM',
        'A reporting dashboard tying spend to qualified leads',
      ]}
      outcomes={[
        { value: 'More', label: 'Qualified leads' },
        { value: 'Better', label: 'Local visibility' },
        { value: 'Higher', label: 'Conversion rate' },
        { value: 'Clear', label: 'Cost per lead' },
      ]}
      faqs={[
        {
          question: 'Is this a monthly retainer?',
          answer:
            'It can be. Website and funnel builds are usually project-based; local SEO, ads, and analytics are typically ongoing. We scope it to what you need.',
        },
        {
          question: 'How is this different from a typical agency?',
          answer:
            'We build marketing as a system connected to your CRM and automations, and we report on qualified leads and cost per lead — not impressions and vanity metrics.',
        },
        {
          question: 'What is AEO?',
          answer:
            'Answer Engine Optimization — structuring your site and content so AI answer engines and search assistants can find, understand, and cite your business.',
        },
      ]}
    />
  );
}
