import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Clock, 
  MapPin, 
  Check
} from 'lucide-react';
import Navigation from '../components/Navigation';
import MatrixBackground from '../components/MatrixBackground';
import Footer from '../components/Footer';
import PageSEO from '../components/PageSEO';

gsap.registerPlugin(ScrollTrigger);

const whatYoullDo = [
  'Build automations and integrations across CRM, forms, scheduling, and billing tools',
  'Configure and optimize GoHighLevel — pipelines, sequences, reporting',
  'Design and deploy AI agents for lead qualification and front-office tasks',
  'Ship internal tools and dashboards clients run their business from',
  'Embed with clients to map workflows and scope the next system',
  'Write documentation and run handover walkthroughs'
];

const whoWereLookingFor = [
  'Comfortable with APIs, webhooks, and no-code / low-code automation platforms',
  'Some scripting (JavaScript / TypeScript / Python) or a willingness to learn fast',
  'Clear communicator — you can explain a system to a non-technical owner',
  'Bias to ship: you finish and deploy, not just prototype',
  'GoHighLevel, Zapier/Make, or CRM experience a plus, not required',
  'Reliable and organized across multiple client engagements'
];

const whyJoin = [
  {
    icon: Clock,
    title: 'Real Impact',
    description: 'Small clients, direct access, fast feedback. The systems you build change how a business runs within weeks.'
  },
  {
    icon: TrendingUp,
    title: 'Broad Surface Area',
    description: 'Engineering, AI, CRM, and marketing systems across many industries — you learn a lot, quickly.'
  },
  {
    icon: DollarSign,
    title: 'Grow Your Scope',
    description: 'Move from building automations to leading client engagements and owning a practice area as you level up.'
  }
];

export default function Careers() {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );
    });

    return () => ctx.revert();
  }, []);

  const scrollToApply = () => {
    const applySection = document.getElementById('apply');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-charcoal min-h-screen">
      <PageSEO
        title="Careers at ikonic303 | Automation Engineers & Growth Systems Builders"
        description="Join ikonic303. We're hiring forward deployed engineers, automation and CRM builders, and growth-systems specialists who like shipping systems into real businesses."
        canonical="/careers"
      />
      <MatrixBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-[6vw] relative z-10">
        <div ref={heroRef} className="max-w-4xl mx-auto text-center">
          <p className="text-micro text-mint mb-4">CAREERS AT IKONIC303</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite mb-6 leading-tight">
            Join <span className="text-mint">ikonic303</span><br />
            Build Systems That Ship
          </h1>
          <p className="text-lg text-offwhite-dark max-w-2xl mx-auto mb-8">
            We're growing our team of forward deployed engineers and automation builders —
            people who like deploying AI, CRM, and marketing systems into real businesses.
          </p>
          <div className="flex items-center justify-center gap-2 text-offwhite-dark mb-10">
            <MapPin className="w-4 h-4 text-mint" />
            <span>Denver, CO • Remote-friendly</span>
          </div>
          <button 
            onClick={scrollToApply}
            className="btn-primary inline-flex items-center gap-2"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-[6vw] bg-charcoal-light/80 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-micro text-mint mb-4 text-center">WHO WE ARE</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-offwhite mb-6 text-center">
            A team that <span className="text-mint">ships systems</span>
          </h2>
          <p className="text-offwhite-dark text-center max-w-2xl mx-auto mb-6">
            ikonic303 builds Forward Deployed Engineering, AI, automation, CRM, and digital
            marketing systems for small and medium businesses.
          </p>
          <p className="text-offwhite-dark text-center max-w-2xl mx-auto">
            We design, build, integrate, and deploy — every engagement ends with something
            running in production. We build the team around that standard.
          </p>
        </div>
      </section>

      {/* What You'll Sell Section */}
      <section className="py-20 px-[6vw] relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl font-bold text-offwhite mb-6">
                What You'll Be Doing
              </h2>
              <p className="text-offwhite-dark mb-8">
                Hands-on systems work — building, integrating, and deploying. We'll help you go
                deep on the tools; you bring judgment and a bias to ship.
              </p>
              <h3 className="font-display text-xl font-bold text-mint mb-4">
                The Work
              </h3>
              <ul className="space-y-3">
                {whatYoullDo.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-offwhite-dark">
                    <Check className="w-5 h-5 text-mint flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-mint/20 to-mint/5 border border-mint/30 rounded-2xl p-8">
              <DollarSign className="w-12 h-12 text-mint mb-6" />
              <h3 className="font-display text-2xl font-bold text-offwhite mb-4">
                Pay &amp; Setup
              </h3>
              <p className="text-mint font-medium mb-4">
                Competitive, With Room to Grow
              </p>
              <p className="text-offwhite-dark text-sm mb-6">
                Full-time, Denver-based or remote, working across multiple client engagements at
                once.
              </p>
              <ul className="space-y-2 text-sm text-offwhite-dark">
                <li>• Competitive salary, based on experience</li>
                <li>• Raises tied to scope — engineering, AI, CRM, and marketing systems</li>
                <li>• Paths to lead engineer or practice owner</li>
                <li>• Paid time to learn new tools and platforms</li>
                <li>• Modern tooling and a real deployment stack</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who We're Looking For Section */}
      <section className="py-20 px-[6vw] bg-charcoal-light/80 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-offwhite mb-6 text-center">
            Who We're Looking For
          </h2>
          <p className="text-offwhite-dark text-center mb-10">
            You don't need a decade of experience — you need to be technical, a clear
            communicator, and someone who ships.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whoWereLookingFor.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 bg-charcoal border border-white/10 rounded-lg"
              >
                <Users className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                <p className="text-offwhite text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 px-[6vw] relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-offwhite mb-4 text-center">
            Why Join ikonic303?
          </h2>
          <p className="text-offwhite-dark text-center mb-12">
            Build systems that change how real businesses run
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyJoin.map((item, index) => (
              <div 
                key={index}
                className="bg-charcoal-light border border-white/10 rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-mint" />
                </div>
                <h3 className="font-display text-lg font-bold text-offwhite mb-3">
                  {item.title}
                </h3>
                <p className="text-offwhite-dark text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 px-[6vw] bg-charcoal-light/80 backdrop-blur-sm relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-offwhite mb-4">
              Ready to Join the Crew?
            </h2>
            <p className="text-offwhite-dark">
              Send us your info and a bit about any hands-on work you've done. We'll be in touch.
            </p>
          </div>
          
          <div className="bg-charcoal border border-white/10 rounded-2xl p-3 md:p-4">
            <iframe
              src="https://crm.ikonic303.com/widget/form/dd8OOBPO2eKjd0XxtMZu"
              style={{width:'100%', height:'1994px', border:'none', borderRadius:'3px'}}
              id="inline-dd8OOBPO2eKjd0XxtMZu"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Apply to join ikonic303"
              data-height="1994"
              data-layout-iframe-id="inline-dd8OOBPO2eKjd0XxtMZu"
              data-form-id="dd8OOBPO2eKjd0XxtMZu"
              title="Apply to join ikonic303"
            />
            <script src="https://crm.ikonic303.com/js/form_embed.js"></script>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
