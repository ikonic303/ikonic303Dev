import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Check, Search, PencilRuler, Rocket, LifeBuoy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import MatrixBackground from '../components/MatrixBackground';
import Footer from '../components/Footer';
import PageSEO from '../components/PageSEO';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Search,
    step: '1',
    title: 'Audit & map',
    description:
      'We look at how work actually flows — your tools, your lead sources, and where time and leads leak. You get a prioritized list of the highest-leverage systems to build.',
  },
  {
    icon: PencilRuler,
    step: '2',
    title: 'Design the system',
    description:
      'We scope one system at a time: what it does, what it connects to, and the outcome it moves. Fixed scope, agreed before we build.',
  },
  {
    icon: Rocket,
    step: '3',
    title: 'Build & deploy',
    description:
      'We build it, integrate it with your stack, and deploy it to production — with monitoring, error handling, and documentation, not a handoff doc.',
  },
  {
    icon: LifeBuoy,
    step: '4',
    title: 'Support & iterate',
    description:
      'We stay while the system beds into your operations, tune it against real usage, and move to the next highest-leverage build.',
  },
];

const principles = [
  'We deploy working systems, not recommendations',
  'One system at a time, with a fixed scope agreed up front',
  'Integrated with the tools you already run on',
  'Everything is documented and handed over',
  'Measured against a business outcome, from day one',
  'You own the accounts, the code, and the data',
];

export default function HowWeWork() {
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
        title="How We Work | Forward Deployed Engineering Process | ikonic303"
        description="How ikonic303 scopes and ships: audit and map your operations, design one system at a time, build and deploy to production, then support and iterate. Fixed scope, full handover."
        canonical="/how-we-work"
      />
      <MatrixBackground />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-[6vw] relative z-10">
        <div ref={heroRef} className="max-w-4xl mx-auto text-center">
          <p className="text-micro text-mint mb-4">HOW WE WORK</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite mb-6 leading-tight">
            Scoped, built,<br />
            <span className="text-mint">deployed, supported</span>
          </h1>
          <p className="text-lg text-offwhite-dark max-w-2xl mx-auto mb-8">
            We work like a forward deployed engineering team: embed with your business, find the
            highest-leverage automation, and ship it into production — one system at a time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Get a Free Automation Audit
            </Link>
            <Link to="/services" className="btn-outline">
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="py-20 px-[6vw] bg-charcoal-light/80 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-offwhite mb-6 text-center">
            Why most "automation" projects <span className="text-mint">stall</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Advice and audits that never get implemented',
              'Tools bought but never wired into the workflow',
              'Automations built once, then break silently',
              'Five disconnected apps and no source of truth',
              'No owner, no documentation, no handover',
              'Nothing measured, so nobody knows if it worked',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-charcoal rounded-lg">
                <div className="w-6 h-6 bg-red-500/20 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-red-400 text-sm">✕</span>
                </div>
                <span className="text-offwhite-dark">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The way we work */}
      <section className="py-20 px-[6vw] relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-offwhite mb-6 text-center">
            The <span className="text-mint">ikonic303</span> way
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-charcoal-light rounded-lg border border-mint/30">
                <div className="w-6 h-6 bg-mint/20 rounded flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-mint" />
                </div>
                <span className="text-offwhite">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-[6vw] bg-charcoal-light/80 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-offwhite mb-4 text-center">
            The <span className="text-mint">process</span>
          </h2>
          <p className="text-offwhite-dark text-center mb-12 max-w-2xl mx-auto">
            Four steps from first call to a system running in production.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-charcoal border border-white/10 rounded-xl p-6 text-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-mint rounded-full flex items-center justify-center text-charcoal font-bold text-lg">
                  {s.step}
                </div>
                <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center mx-auto mb-4 mt-4">
                  <s.icon className="w-6 h-6 text-mint" />
                </div>
                <h3 className="font-display text-lg font-bold text-offwhite mb-3">{s.title}</h3>
                <p className="text-offwhite-dark text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="py-20 px-[6vw] relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-offwhite mb-4 text-center">
            Who we <span className="text-mint">work with</span>
          </h2>
          <p className="text-offwhite-dark text-center mb-12 max-w-2xl mx-auto">
            Small and medium businesses that need better systems to grow.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Contractors',
              'Home service businesses',
              'Construction companies',
              'Salons & spas',
              'Professional services',
              'Healthcare & wellness',
              'Local service businesses',
              'Startups & growing teams',
            ].map((business) => (
              <div key={business} className="bg-charcoal-light border border-white/10 rounded-lg p-4 text-center">
                <span className="text-offwhite text-sm">{business}</span>
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
            Book a strategy call or get a free automation audit — no commitment.
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
