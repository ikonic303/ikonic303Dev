import { Link } from 'react-router-dom';
import { ArrowUpRight, Facebook, Instagram } from 'lucide-react';

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
              Forward Deployed Engineering, AI automation, CRM, and digital marketing systems —
              designed, built, integrated, and deployed for growing businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-offwhite font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { label: 'Forward Deployed Engineering', href: '/services/forward-deployed-engineering' },
                { label: 'AI & Automation', href: '/services/ai-automation' },
                { label: 'CRM & Sales Systems', href: '/services/crm-sales-systems' },
                { label: 'Digital Marketing', href: '/services/digital-marketing' },
                { label: 'All Services', href: '/services' },
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
            <h4 className="text-offwhite font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: 'How We Work', href: '/how-we-work' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Careers', href: '/careers' },
                { label: 'Insights', href: '/blogs' },
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
                <a href="tel:+17206791230" className="text-offwhite-dark hover:text-mint transition-colors">
                  (720) 679-1230
                </a>
              </li>
              <li>
                <a href="mailto:solutions@ikonic303.dev" className="text-offwhite-dark hover:text-mint transition-colors">
                  solutions@ikonic303.dev
                </a>
              </li>
              <li className="text-offwhite-dark">Denver, CO · working with clients nationwide</li>
            </ul>

            <div className="mt-6 p-4 bg-charcoal-light border border-white/10 rounded-xl">
              <p className="text-xs text-offwhite-dark mb-1">Looking for signage or window film?</p>
              <a
                href="https://ikonic303.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-mint text-sm font-medium hover:gap-2 transition-all"
              >
                Visit ikonic303.com
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-6">
              <p className="text-sm text-offwhite-dark mb-3">Follow</p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/ikonic303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-charcoal-light border border-white/10 rounded-lg flex items-center justify-center hover:border-mint/30 hover:bg-mint/10 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-offwhite" />
                </a>
                <a
                  href="https://www.instagram.com/ikonic_303/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-charcoal-light border border-white/10 rounded-lg flex items-center justify-center hover:border-mint/30 hover:bg-mint/10 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-offwhite" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-offwhite-dark text-sm">
            © {new Date().getFullYear()} ikonic303. Forward Deployed Engineering &amp; growth systems.
          </p>
        </div>
      </div>
    </footer>
  );
}
