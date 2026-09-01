import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

// The four things ikonic303 builds. Every page here is a normal SPA route
// (React Router), so these are <Link>s, not full page loads.
const serviceLinks = [
  { label: 'AI agents & automation', href: '/services/ai-agents-and-automation' },
  { label: 'CRM & sales systems', href: '/services/crm-and-sales-systems' },
  { label: 'Internal tools & dashboards', href: '/services/internal-tools-and-dashboards' },
  { label: 'Marketing systems', href: '/services/marketing-systems' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);
  const deskCls = (href: string) =>
    `text-sm font-medium transition-colors whitespace-nowrap ${
      isActive(href) ? 'text-mint' : 'text-offwhite-dark hover:text-mint'
    }`;
  const mobCls = (href: string) =>
    `text-xl font-display font-bold transition-colors ${
      isActive(href) ? 'text-mint' : 'text-offwhite hover:text-mint'
    }`;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled ? 'bg-charcoal/95 backdrop-blur-md py-3 border-b border-white/5' : 'bg-transparent py-5'
        }`}
      >
        <div className="px-[6vw] flex items-center justify-between">
          {/* Logo — Home */}
          <Link to="/" className="flex items-center group" aria-label="ikonic303 home">
            <img
              src="/logo-ikonic.webp"
              alt="ikonic303"
              style={{ height: '56px', width: 'auto' }}
              className="transition-all duration-300 group-hover:brightness-0 group-hover:invert-[.8] group-hover:sepia group-hover:saturate-[500%] group-hover:hue-rotate-[100deg]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5">
            <Link to="/" className={deskCls('/')}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className={`flex items-center gap-1 ${deskCls('/services')}`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-72 bg-charcoal border border-white/10 rounded-lg shadow-xl overflow-hidden"
                >
                  <Link
                    to="/forward-deployed-engineering"
                    className="block px-4 py-3 text-sm font-semibold text-mint hover:bg-mint/10 transition-colors border-b border-white/10"
                  >
                    What is a forward deployed engineer? →
                  </Link>
                  <Link
                    to="/services"
                    className="block px-4 py-3 text-sm font-semibold text-mint hover:bg-mint/10 transition-colors border-b border-white/10"
                  >
                    What we build →
                  </Link>
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="block px-4 py-3 text-sm text-offwhite-dark hover:bg-mint/10 hover:text-mint transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/how-we-work" className={deskCls('/how-we-work')}>
              How We Work
            </Link>

            <Link to="/what-it-costs" className={deskCls('/what-it-costs')}>
              What It Costs
            </Link>

            <Link to="/who-we-work-with" className={deskCls('/who-we-work-with')}>
              Who We Work With
            </Link>

            <Link to="/guides" className={deskCls('/guides')}>
              Guides
            </Link>

            <Link to="/about" className={deskCls('/about')}>
              About
            </Link>

            <Link to="/contact" className="btn-primary text-sm whitespace-nowrap">
              Start with the measurement
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-offwhite"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-charcoal z-[99] transition-transform duration-300 lg:hidden overflow-y-auto overscroll-contain ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* min-h-full + m-auto on the inner block: vertically centered when it fits,
            scrolls from the top (no clipped items) when it doesn't. */}
        <div className="min-h-full flex flex-col px-6 py-24">
          <div className="m-auto w-full flex flex-col items-center gap-4 text-center">
            <Link to="/" className={mobCls('/')}>
              Home
            </Link>

            <Link to="/forward-deployed-engineering" className={mobCls('/forward-deployed-engineering')}>
              Forward Deployed Engineering
            </Link>

            <div>
              <p className="text-mint text-xs uppercase tracking-wide mb-1">What we build</p>
              <Link
                to="/services"
                className={`block py-1 text-lg font-display font-bold transition-colors ${
                  isActive('/services') ? 'text-mint-light' : 'text-mint hover:text-mint-light'
                }`}
              >
                All Services →
              </Link>
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`block py-1 text-sm font-display font-semibold transition-colors ${
                    isActive(link.href) ? 'text-mint' : 'text-offwhite-dark hover:text-mint'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link to="/how-we-work" className={mobCls('/how-we-work')}>
              How We Work
            </Link>
            <Link to="/what-it-costs" className={mobCls('/what-it-costs')}>
              What It Costs
            </Link>
            <Link to="/who-we-work-with" className={mobCls('/who-we-work-with')}>
              Who We Work With
            </Link>
            <Link to="/guides" className={mobCls('/guides')}>
              Guides
            </Link>
            <Link to="/about" className={mobCls('/about')}>
              About
            </Link>
            <Link to="/contact" className="btn-primary mt-2">
              Start with the measurement
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
