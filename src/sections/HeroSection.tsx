import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Workflow, Database, Rocket } from 'lucide-react';

// Static hero — no scroll-pin, paints instantly.
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-charcoal/80 backdrop-blur-sm z-10 flex items-start lg:items-center min-h-[100svh] pt-28 pb-16 lg:py-16"
    >
      <div className="relative z-20 w-full px-[6vw] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left — copy */}
        <div className="min-w-0 max-w-2xl">
          <p className="text-micro text-mint mb-5">FORWARD DEPLOYED ENGINEERING · AI · GROWTH SYSTEMS</p>

          <h1 className="space-y-1 mb-6">
            <div className="text-headline text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-offwhite leading-[1.05] break-words">
              WE BUILD &amp; DEPLOY
            </div>
            <div className="text-headline text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-[1.05] break-words">
              <span className="text-mint drop-shadow-[0_0_15px_rgba(0,255,157,0.7)]">THE SYSTEMS</span>
            </div>
            <div className="text-headline text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-offwhite leading-[1.05] break-words">
              YOUR BUSINESS NEEDS TO GROW
            </div>
          </h1>

          <p className="text-base md:text-lg xl:text-xl text-offwhite-dark leading-relaxed mb-8 max-w-xl">
            AI automation, CRM and sales infrastructure, and marketing systems for growing
            businesses. We don't just advise — we design, build, integrate, and deploy the
            technology into your day-to-day operations.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary flex items-center gap-2">
              Book a Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-outline">
              Get a Free Automation Audit
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-offwhite-dark">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-mint rounded-full" /> More qualified leads</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-mint rounded-full" /> Faster lead response</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-mint rounded-full" /> Less manual work</span>
          </div>
        </div>

        {/* Right — system diagram */}
        <div className="hidden lg:flex min-w-0 justify-center items-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-6 bg-mint/10 blur-3xl rounded-full animate-glow" />
            <div className="relative bg-charcoal-light/90 border border-white/10 rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-mint/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="ml-2 font-mono text-xs text-offwhite-dark">ikonic303 · deployment</span>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Rocket, label: 'Lead capture', meta: 'forms · ads · calls' },
                  { icon: Bot, label: 'AI qualification & reply', meta: '< 60s response' },
                  { icon: Database, label: 'CRM + pipeline', meta: 'GoHighLevel' },
                  { icon: Workflow, label: 'Follow-up automation', meta: 'email · SMS · tasks' },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-charcoal/60 px-3 py-2.5">
                    <div className="w-9 h-9 rounded-md bg-mint/10 flex items-center justify-center flex-shrink-0">
                      <row.icon className="w-4 h-4 text-mint" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-offwhite text-sm font-medium leading-tight">{row.label}</p>
                      <p className="text-offwhite-dark font-mono text-[11px]">{row.meta}</p>
                    </div>
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-[11px] text-offwhite-dark">status</span>
                <span className="font-mono text-[11px] text-mint">● deployed &amp; running</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
