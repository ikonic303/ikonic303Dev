import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Gauge, Timer, RefreshCw, Bot } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const outcomes = [
  { icon: Gauge, label: 'More qualified leads', value: 'Pipeline' },
  { icon: Timer, label: 'Lead response time', value: '< 60s' },
  { icon: RefreshCw, label: 'Repetitive tasks automated', value: 'Hours/wk' },
  { icon: Bot, label: 'Customer conversations handled by AI', value: '24/7' },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: contentRef.current, start: 'top 88%', once: true } }
      );
      gsap.fromTo(cardRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: cardRef.current, start: 'top 88%', once: true } }
      );
      const items = statsRef.current?.querySelectorAll('.stat-item');
      if (items) {
        gsap.fromTo(items,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: statsRef.current, start: 'top 88%', once: true } }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative bg-charcoal/90 backdrop-blur-sm py-24 lg:py-32 z-20">
      <div className="px-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Copy */}
          <div ref={contentRef}>
            <p className="text-micro text-mint mb-4">WHO WE ARE</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-offwhite mb-6 leading-tight">
              A technology &amp; growth partner<br />
              <span className="text-mint">that ships</span>
            </h2>

            <div className="space-y-4 text-offwhite-dark leading-relaxed">
              <p>
                ikonic303 helps businesses deploy the technology, automation, AI, CRM, and
                marketing infrastructure they need to generate leads, improve operations, and
                scale.
              </p>
              <p>
                We work like a forward deployed engineering team: we embed with your business,
                map how work actually flows, and build the systems that remove the manual steps —
                then integrate them with the tools you already run on.
              </p>
              <p>
                We don't simply provide advice. We design, build, integrate, and deploy the
                actual systems, and we measure them against business outcomes.
              </p>
            </div>

            <div className="mt-8 p-6 bg-charcoal-light border border-mint/30 rounded-xl">
              <h3 className="font-display text-lg font-bold text-mint mb-3">How we're different</h3>
              <p className="text-offwhite-dark text-sm">
                Consultancy + implementation team + growth partner in one. Fixed scope, deployed
                to production, documented, and handed over — with support while it beds in.
              </p>
            </div>
          </div>

          {/* Outcomes card */}
          <div ref={cardRef} className="relative">
            <div className="absolute -inset-4 bg-mint/10 blur-3xl rounded-full" />
            <div className="relative bg-charcoal-light border border-white/10 rounded-2xl p-8">
              <p className="text-micro text-mint mb-6">MEASURED ON OUTCOMES</p>
              <ul className="space-y-4">
                {[
                  'Faster lead response and better follow-up',
                  'Higher conversion rates and CRM visibility',
                  'Automated repetitive, manual admin work',
                  'AI-powered customer communication',
                  'Better local and online visibility',
                  'Integrated business systems, one source of truth',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-offwhite">
                    <div className="w-1.5 h-1.5 bg-mint rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Outcome tiles */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {outcomes.map((stat) => (
            <div key={stat.label} className="stat-item bg-charcoal-light border border-white/10 rounded-xl p-6 text-center hover:border-mint/30 transition-colors">
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
  );
}
