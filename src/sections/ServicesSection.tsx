import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Terminal, Bot, Database, LineChart, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Terminal,
    title: 'Forward Deployed Engineering',
    description:
      'We embed with your team and build the custom systems your business actually runs on — API integrations, internal tools, and automation deployed into production, not slide decks.',
    features: ['Custom business systems', 'API & workflow integrations', 'Internal tools & dashboards', 'Automation deployment'],
    link: '/services/forward-deployed-engineering',
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    description:
      'AI agents and assistants that qualify leads, answer customers, book appointments, and handle repetitive work — wired into the tools you already use.',
    features: ['AI receptionist / front office', 'AI lead qualification', 'Automated follow-up', 'Business process automation'],
    link: '/services/ai-automation',
  },
  {
    icon: Database,
    title: 'CRM & Sales Systems',
    description:
      'GoHighLevel setup and optimization, pipeline design, and email/SMS sequences so every lead is tracked, nurtured, and followed up automatically.',
    features: ['GoHighLevel setup & management', 'Pipeline development', 'Email/SMS sequences', 'Reporting dashboards'],
    link: '/services/crm-sales-systems',
  },
  {
    icon: LineChart,
    title: 'Digital Marketing',
    description:
      'Websites, funnels, local SEO, AEO, Google Business Profile, and paid ads — built to generate qualified leads and measured end to end.',
    features: ['Website & funnel development', 'Local SEO / SEO / AEO', 'Google Business Profile', 'Paid ads & lead generation'],
    link: '/services/digital-marketing',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: headerRef.current, start: 'top 88%', once: true } }
      );
      const cards = cardsRef.current?.querySelectorAll('.service-card');
      if (cards) {
        gsap.fromTo(cards,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: cardsRef.current, start: 'top 88%', once: true } }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative bg-charcoal/90 backdrop-blur-sm py-24 lg:py-32 z-20">
      <div className="px-[6vw]">
        <div ref={headerRef} className="text-center mb-16">
          <p className="text-micro text-mint mb-4">WHAT WE DO</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-offwhite mb-6">
            Four ways we deploy technology<br />
            <span className="text-mint">into your operations</span>
          </h2>
          <p className="text-lg text-offwhite-dark max-w-3xl mx-auto">
            A technology consultancy, implementation team, and growth partner in one. We design
            the system, build it, integrate it with your stack, and stay until it's running.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card group bg-charcoal-light border border-white/10 rounded-xl p-6 sm:p-8 hover:border-mint/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,255,157,0.12)]"
            >
              <div className="w-14 h-14 bg-mint/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-mint/20 transition-colors">
                <service.icon className="w-7 h-7 text-mint" />
              </div>

              <h3 className="font-display text-xl font-bold text-offwhite mb-4">{service.title}</h3>
              <p className="text-offwhite-dark text-sm leading-relaxed mb-6">{service.description}</p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-offwhite-dark">
                    <div className="w-1.5 h-1.5 bg-mint rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to={service.link} className="inline-flex items-center gap-2 text-mint text-sm font-medium hover:gap-3 transition-all">
                Explore this service
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-offwhite-dark mb-6">
            Not sure where to start? We'll audit your current stack and show you the highest-leverage automation first.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get a Free Automation Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
