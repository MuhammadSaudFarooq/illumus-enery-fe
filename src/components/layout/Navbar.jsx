import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Zap, Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900 shadow-lg shadow-black/30' : 'bg-navy-900/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-8 h-8 bg-accent-500 rounded-sm flex items-center justify-center group-hover:bg-accent-400 transition-colors">
              <Zap className="w-5 h-5 text-navy-900" strokeWidth={2.5} />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Illumus<span className="text-accent-500"> Energy</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-colors rounded-sm ${
                    isActive
                      ? 'text-accent-500'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+18005551234"
              className="flex items-center gap-2 text-slate-300 hover:text-accent-500 text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              1-800-555-1234
            </a>
            <Link to="/contact" className="btn-primary text-xs py-2 px-5">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden text-white p-2 rounded-sm hover:bg-white/10 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="bg-navy-800 border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `block px-4 py-3 text-sm font-medium rounded-sm transition-colors ${
                  isActive
                    ? 'text-accent-500 bg-white/5'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:+18005551234"
              className="flex items-center gap-2 text-slate-300 text-sm px-4"
            >
              <Phone className="w-4 h-4 text-accent-500" />
              1-800-555-1234
            </a>
            <Link to="/contact" className="btn-primary justify-center w-full">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
