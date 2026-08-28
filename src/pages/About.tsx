import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Rocket, Timer, RefreshCw, LineChart, Target, Boxes, ShieldCheck, Handshake } from 'lucide-react';
import Navigation from '../components/Navigation';
import MatrixBackground from '../components/MatrixBackground';
import Footer from '../components/Footer';
import PageSEO from '../components/PageSEO';

gsap.registerPlugin(ScrollTrigger);

const outcomes = [
  { icon: Rocket, label: 'More qualified leads', value: 'Pipeline' },
  { icon: Timer, label: 'Faster lead response', value: '< 60s' },
  { icon: RefreshCw, label: 'Repetitive work automated', value: 'Hours/wk' },
  { icon: LineChart, label: 'CRM & marketing visibility', value: 'Full' },
];

const values = [
  { icon: Boxes, title: 'We ship systems', desc: 'Every engagement ends with something running in production — not a report.' },
  { icon: Target, title: 'Outcome-first', desc: 'We scope to a business result and measure against it from day one.' },
  { icon: ShieldCheck, title: 'You own it', desc: 'Your accounts, your code, your data — documented and handed over.' },
  { icon: Handshake, title: 'Partner, not vendor', desc: 'We stay while the system beds in and move to the next highest-leverage build.' },
];

export default function About() {
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
        title="About ikonic303 | Technology & Growth Partner for Growing Businesses"
        description="ikonic303 is a Forward Deployed Engineering, AI, automation, CRM, and digital marketing partner. We design, build, integrate, and deploy the systems small and medium businesses need to scale."
        canonical="/about"
      />
      <MatrixBackground />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-[6vw] relative z-10">
        <div ref={heroRef} className="max-w-4xl mx-auto text-center">
          <p className="text-micro text-mint mb-4">ABOUT IKONIC303</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite mb-6 leading-tight">
            Your technology &amp;<br />
            <span className="text-mint">growth partner</span>
          </h1>
          <p className="text-lg text-offwhite-dark max-w-2xl mx-auto">
            ikonic303 helps businesses deploy the technology, automation, AI, CRM, and marketing
            infrastructure they need to generate leads, improve operations, and scale.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-[6vw] bg-charcoal-light/80 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-offwhite mb-6 text-center">
            What we <span className="text-mint">do</span>
          </h2>
          <div className="space-y-6 text-offwhite-dark">
            <p>
              We're a Forward Deployed Engineering team for small and medium businesses. We embed
              with your company, map how work actually flows, and build the systems that remove
              the manual steps — then integrate them with the tools you already run on.
            </p>
            <p>
              That covers four connected practices: custom engineering and integrations, AI
              agents and automation, CRM and sales systems, and digital marketing built as a
              lead-generation system. Most clients start with one and expand as it pays off.
            </p>
            <p>
              We don't simply provide advice. We design, build, integrate, and deploy the actual
              systems, document them, and hand them over — with support while they bed into your
              operations.
            </p>
          </div>
        </div>
      </section>

      {/* Standard */}
      <section className="py-20 px-[6vw] relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-offwhite mb-6">
                Our <span className="text-mint">standard</span>
              </h2>
              <p className="text-offwhite-dark mb-6">
                One system at a time, with a fixed scope agreed before we build. Deployed to
                production with monitoring and error handling. Documented and handed over so your
                team can run it without us.
              </p>
              <p className="text-offwhite-dark">
                And measured — every build maps to an outcome: more qualified leads, faster
                follow-up, less manual admin, higher conversion, or better visibility.
              </p>
            </div>
            <div className="bg-gradient-to-br from-mint/20 to-mint/5 border border-mint/30 rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-offwhite mb-4">What makes us different</h3>
              <ul className="space-y-3">
                {[
                  'Consultancy + implementation team + growth partner in one',
                  'Systems deployed to production, not recommendations',
                  'Integrated with the tools you already use',
                  'Fixed scope, full documentation, clean handover',
                  'You own the accounts, code, and data',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-offwhite">
                    <div className="w-1.5 h-1.5 bg-mint rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-[6vw] bg-charcoal-light/80 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-offwhite mb-4 text-center">
            How we <span className="text-mint">operate</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-charcoal border border-white/10 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-mint" />
                </div>
                <h3 className="font-display text-lg font-bold text-offwhite mb-2">{value.title}</h3>
                <p className="text-offwhite-dark text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 px-[6vw] relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-offwhite mb-4 text-center">
            What we're <span className="text-mint">measured on</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {outcomes.map((stat) => (
              <div key={stat.label} className="bg-charcoal-light border border-white/10 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-mint" />
                </div>
                <p className="text-2xl font-bold text-offwhite mb-1">{stat.value}</p>
                <p className="text-offwhite-dark text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[6vw] bg-charcoal-light/80 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-offwhite mb-6">Ready to work with us?</h2>
          <p className="text-offwhite-dark mb-8">
            Book a strategy call and we'll map the highest-leverage system to build first.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
            Book a Strategy Call
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
