import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

// The four service categories for ikonic303.dev. Every page here is a normal SPA
// route (React Router), so these are <Link>s, not full page loads.
const serviceLinks = [
  { label: 'Forward Deployed Engineering', href: '/services/forward-deployed-engineering' },
  { label: 'AI & Automation', href: '/services/ai-automation' },
  { label: 'CRM & Sales Systems', href: '/services/crm-sales-systems' },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

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
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo-ikonic.webp"
              alt="ikonic303"
              style={{ height: '56px', width: 'auto' }}
              className="transition-all duration-300 group-hover:brightness-0 group-hover:invert-[.8] group-hover:sepia group-hover:saturate-[500%] group-hover:hue-rotate-[100deg]"
            />
            <span className="hidden sm:block text-offwhite font-display font-bold tracking-tight text-lg">
              ikonic<span className="text-mint">303</span>
              <span className="text-offwhite-dark font-mono text-[11px] font-medium">.dev</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-offwhite-dark hover:text-mint transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className="flex items-center gap-1 text-sm font-medium text-offwhite-dark hover:text-mint transition-colors"
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
                    to="/services"
                    className="block px-4 py-3 text-sm font-semibold text-mint hover:bg-mint/10 transition-colors border-b border-white/10"
                  >
                    All Services →
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

            <Link to="/how-we-work" className="text-sm font-medium text-offwhite-dark hover:text-mint transition-colors">
              How We Work
            </Link>

            <Link to="/about" className="text-sm font-medium text-offwhite-dark hover:text-mint transition-colors">
              About
            </Link>

            <Link to="/contact" className="text-sm font-medium text-offwhite-dark hover:text-mint transition-colors">
              Contact
            </Link>

            <Link to="/contact" className="btn-primary text-sm">
              Book a Strategy Call
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
        <div className="min-h-full flex flex-col items-center justify-center gap-5 px-6 pt-24 pb-12">
          <Link to="/" className="text-2xl font-display font-bold text-offwhite hover:text-mint transition-colors">
            Home
          </Link>

          <div className="text-center">
            <p className="text-mint text-sm mb-2">Services</p>
            <Link
              to="/services"
              className="block text-xl font-display font-bold text-mint hover:text-mint-light transition-colors py-1.5"
            >
              All Services →
            </Link>
            {serviceLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="block text-base font-display font-semibold text-offwhite-dark hover:text-mint transition-colors py-1.5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link to="/how-we-work" className="text-2xl font-display font-bold text-offwhite hover:text-mint transition-colors">
            How We Work
          </Link>
          <Link to="/about" className="text-2xl font-display font-bold text-offwhite hover:text-mint transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-2xl font-display font-bold text-offwhite hover:text-mint transition-colors">
            Contact
          </Link>
          <Link to="/contact" className="btn-primary mt-2">
            Book a Strategy Call
          </Link>
        </div>
      </div>
    </>
  );
}
