import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-24 pt-12 border-t border-white/10 relative z-10">
      <div className="px-[6vw]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img src="/logo-ikonic.webp" alt="ikonic303" style={{ height: '48px', width: 'auto' }} />
            </div>
            <p className="text-offwhite-dark text-sm">
              Forward deployed engineering for operating companies of 50 to 500 people. We measure
              what one workflow costs you, build the software into your stack, and stay to run it.
            </p>
          </div>

          {/* What we build */}
          <div>
            <h4 className="text-offwhite font-medium mb-4">What we build</h4>
            <ul className="space-y-2">
              {[
                { label: 'AI agents & automation', href: '/services/ai-agents-and-automation' },
                { label: 'CRM & sales systems', href: '/services/crm-and-sales-systems' },
                { label: 'Internal tools & dashboards', href: '/services/internal-tools-and-dashboards' },
                { label: 'Marketing systems', href: '/services/marketing-systems' },
                { label: 'All services', href: '/services' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="text-offwhite-dark text-sm hover:text-mint transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-offwhite font-medium mb-4">The engagement</h4>
            <ul className="space-y-2">
              {[
                { label: 'What is a forward deployed engineer?', href: '/forward-deployed-engineering' },
                { label: 'How an engagement runs', href: '/how-we-work' },
                { label: 'What it costs', href: '/what-it-costs' },
                { label: 'Who we work with', href: '/who-we-work-with' },
                { label: 'About', href: '/about' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="text-offwhite-dark text-sm hover:text-mint transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + cross-site */}
          <div>
            <h4 className="text-offwhite font-medium mb-4">Get in touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:solutions@ikonic303.dev" className="text-offwhite-dark hover:text-mint transition-colors">
                  solutions@ikonic303.dev
                </a>
              </li>
              <li className="text-offwhite-dark">Colorado · working with clients nationwide</li>
            </ul>

            <div className="mt-6 p-4 bg-charcoal-light border border-white/10 rounded-xl">
              <p className="text-xs text-offwhite-dark mb-1">Looking for signage or window film?</p>
              <a
                href="https://ikonic303.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-mint text-sm font-medium hover:gap-2 transition-all"
              >
                Visit our sister site, ikonic303.com
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-offwhite-dark text-sm">
            © {new Date().getFullYear()} ikonic303. Forward deployed engineering for operating companies.
          </p>
        </div>
      </div>
    </footer>
  );
}
