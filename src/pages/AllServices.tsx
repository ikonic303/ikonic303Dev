import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, Bot, Database, LineChart, ArrowRight, Phone, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import MatrixBackground from '../components/MatrixBackground';
import Footer from '../components/Footer';
import PageSEO from '../components/PageSEO';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Terminal,
    title: 'Forward Deployed Engineering',
    description:
      'We embed with your team and build the systems your business runs on — then deploy them to production.',
    features: [
      'Custom internal business systems',
      'API integrations',
      'Zapier / workflow integrations',
      'Internal tools & dashboards',
      'CRM integrations',
      'Technical problem solving & implementation',
    ],
    link: '/services/forward-deployed-engineering',
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    description:
      'AI agents and assistants that handle conversations, qualify leads, and remove repetitive work.',
    features: [
      'AI agents / AI assistants',
      'AI front office / AI receptionist',
      'AI lead qualification',
      'Automated follow-up & booking',
      'Customer support automation',
      'Business process automation',
    ],
    link: '/services/ai-automation',
  },
  {
    icon: Database,
    title: 'CRM & Sales Systems',
    description:
      'GoHighLevel setup and optimization, pipelines, and sequences so no lead slips through.',
    features: [
      'GoHighLevel setup & management',
      'CRM setup & optimization',
      'Sales pipeline automation',
      'Lead nurturing',
      'Email & SMS automation',
      'Reporting dashboards',
    ],
    link: '/services/crm-sales-systems',
  },
  {
    icon: LineChart,
    title: 'Digital Marketing',
    description:
      'Websites, funnels, and local search built to generate qualified leads — and tracked end to end.',
    features: [
      'Website development',
      'Landing pages & sales funnels',
      'Local SEO / SEO / AEO',
      'Google Business Profile optimization',
      'Paid ads & lead generation',
      'Marketing analytics & tracking',
    ],
    link: '/services/digital-marketing',
  },
];

export default function AllServices() {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-charcoal min-h-screen">
      <PageSEO
        title="Services — Forward Deployed Engineering, AI, CRM & Marketing | ikonic303"
        description="ikonic303 services: Forward Deployed Engineering, AI & automation, CRM & sales systems, and digital marketing. We design, build, integrate, and deploy the systems growing businesses need."
        canonical="/services"
      />
      <MatrixBackground />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-[6vw] relative z-10">
        <div ref={heroRef} className="max-w-4xl mx-auto text-center">
          <p className="text-micro text-mint mb-4">OUR SERVICES</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite mb-6 leading-tight">
            The systems we<br />
            <span className="text-mint">build and deploy</span>
          </h1>
          <p className="text-lg text-offwhite-dark max-w-2xl mx-auto mb-8">
            Four connected practices — engineering, AI, CRM, and marketing — delivered as working
            systems inside your business, not recommendations.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Book a Strategy Call
          </Link>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-[6vw] bg-charcoal-light/80 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-charcoal border border-white/10 rounded-xl p-6 sm:p-8 hover:border-mint/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-mint/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-mint" />
                </div>
                <h2 className="font-display text-xl font-bold text-offwhite mb-3">{service.title}</h2>
                <p className="text-offwhite-dark text-sm mb-6">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-offwhite-dark">
                      <Check className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-mint text-sm font-medium hover:gap-3 transition-all"
                >
                  Explore this service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 px-[6vw] relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-offwhite mb-4 text-center">
            Why work with <span className="text-mint">ikonic303</span>
          </h2>
          <p className="text-offwhite-dark text-center mb-12 max-w-2xl mx-auto">
            A technology consultancy, implementation team, and growth partner in one.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'We deploy, not just advise', desc: 'Every engagement ends with a system running in production and documented — not a report.' },
              { title: 'Integrated with your stack', desc: 'We connect the tools you already use so there is one source of truth, not five disconnected apps.' },
              { title: 'Measured on outcomes', desc: 'More qualified leads, faster response, less manual work, higher conversion — tracked from day one.' },
            ].map((item) => (
              <div key={item.title} className="bg-charcoal-light border border-white/10 rounded-xl p-6 text-center">
                <h3 className="font-display text-lg font-bold text-offwhite mb-3">{item.title}</h3>
                <p className="text-offwhite-dark text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[6vw] bg-charcoal-light/80 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-offwhite mb-6">See how we can automate your business</h2>
          <p className="text-offwhite-dark mb-8">
            Book a call or request a free automation audit — we'll map the highest-leverage system to build first.
          </p>
          <a href="tel:+17206791230" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
            <Phone className="w-5 h-5" />
            Call (720) 679-1230
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
