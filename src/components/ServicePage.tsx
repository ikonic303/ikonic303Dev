import { useRef, useLayoutEffect, type ComponentType } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Check, Phone, ArrowRight } from 'lucide-react';
import Navigation from './Navigation';
import MatrixBackground from './MatrixBackground';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import PageSEO from './PageSEO';
import FaqSection, { type FaqItem } from './FaqSection';

gsap.registerPlugin(ScrollTrigger);

export interface ServicePageProps {
  seo: { title: string; description: string; canonical: string };
  breadcrumbLabel: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  /** Left column: what we build / capabilities */
  capabilities: { icon: ComponentType<{ className?: string }>; title: string; desc: string }[];
  /** Checklist of concrete deliverables */
  deliverables: string[];
  /** Outcome tiles */
  outcomes: { value: string; label: string }[];
  faqs?: FaqItem[];
}

export default function ServicePage({
  seo,
  breadcrumbLabel,
  eyebrow,
  title,
  titleAccent,
  intro,
  capabilities,
  deliverables,
  outcomes,
  faqs = [],
}: ServicePageProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-charcoal min-h-screen">
      <PageSEO title={seo.title} description={seo.description} canonical={seo.canonical} />
      <MatrixBackground />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-[6vw] relative z-10">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            crumbs={[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: breadcrumbLabel, href: seo.canonical },
            ]}
          />
        </div>
        <div ref={heroRef} className="max-w-4xl mx-auto text-center">
          <p className="text-micro text-mint mb-4">{eyebrow}</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite mb-6 leading-tight">
            {title}
            <br />
            <span className="text-mint">{titleAccent}</span>
          </h1>
          <p className="text-lg text-offwhite-dark max-w-2xl mx-auto mb-8">{intro}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Book a Strategy Call
            </Link>
            <Link to="/services" className="btn-outline">
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-[6vw] bg-charcoal-light/80 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-offwhite mb-4 text-center">
            What we <span className="text-mint">build</span>
          </h2>
          <p className="text-offwhite-dark text-center mb-12 max-w-2xl mx-auto">
            Designed, built, integrated with your stack, and deployed to production.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="bg-charcoal border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6 text-mint" />
                </div>
                <h3 className="font-display text-lg font-bold text-offwhite mb-2">{c.title}</h3>
                <p className="text-offwhite-dark text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + outcomes */}
      <section className="py-20 px-[6vw] relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl font-bold text-offwhite mb-6">
              What you get <span className="text-mint">delivered</span>
            </h2>
            <ul className="space-y-4">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-mint/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-mint" />
                  </div>
                  <span className="text-offwhite">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-mint/20 to-mint/5 border border-mint/30 rounded-2xl p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-offwhite mb-6">Outcomes we target</h3>
            <div className="grid grid-cols-2 gap-4">
              {outcomes.map((o) => (
                <div key={o.label} className="text-center p-4 bg-charcoal rounded-lg">
                  <p className="text-2xl font-bold text-mint">{o.value}</p>
                  <p className="text-offwhite-dark text-sm mt-1">{o.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <FaqSection items={faqs} title={`${breadcrumbLabel} FAQ`} subtitle="Common questions about scope, tools, and timelines." />
      )}

      {/* CTA */}
      <section className="py-20 px-[6vw] bg-charcoal-light/80 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-offwhite mb-6">Ready to deploy this?</h2>
          <p className="text-offwhite-dark mb-8">
            Book a call or get a free automation audit. We'll scope it and show you what we'd build first.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
            Book a Strategy Call
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
