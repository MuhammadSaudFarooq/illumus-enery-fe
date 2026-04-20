import { Link } from 'react-router-dom';
import { Zap, Phone, Mail, MapPin } from 'lucide-react';

/* ── Inline brand SVG icons (lucide-react does not export these) ── */
function IconLinkedIn({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconFacebook({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconX({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  { href: 'https://linkedin.com', label: 'Follow Illumus Energy on LinkedIn', Icon: IconLinkedIn },
  { href: 'https://facebook.com', label: 'Follow Illumus Energy on Facebook', Icon: IconFacebook },
  { href: 'https://x.com',        label: 'Follow Illumus Energy on X',        Icon: IconX },
];

const footerLinks = {
  company: [
    { to: '/about',        label: 'About Us' },
    { to: '/services',     label: 'Services' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/contact',      label: 'Contact' },
  ],
  services: [
    { to: '/services', label: 'Commercial Lighting' },
    { to: '/services', label: 'Maintenance Contracts' },
    { to: '/services', label: 'New Commercial Installs' },
    { to: '/services', label: 'Energy Audits' },
  ],
  legal: [
    { to: '/privacy', label: 'Privacy Policy' },
    { to: '/terms',   label: 'Terms & Conditions' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-slate-300">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Brand column ── */}
          <div className="lg:col-span-1">
            {/* Site name — clickable with hover effect */}
            <Link to="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-8 h-8 bg-accent-500 rounded-sm flex items-center justify-center group-hover:bg-accent-400 transition-colors duration-200">
                <Zap className="w-5 h-5 text-navy-900" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-accent-400 transition-colors duration-200">
                Illumus<span className="text-accent-500 group-hover:text-accent-300 transition-colors duration-200"> Energy</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Commercial electrical contractor specializing in lighting systems,
              maintenance contracts, and large-scale installations. Strictly B2B.
            </p>

            {/* Social media icons */}
            <div className="flex gap-2.5">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center
                    text-slate-400 hover:bg-accent-500 hover:text-navy-900 hover:border-accent-500
                    transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Company links ── */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-slate-400 hover:text-accent-500 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Legal sub-section */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <h5 className="text-slate-500 font-semibold text-xs uppercase tracking-widest mb-3">
                Legal
              </h5>
              <ul className="space-y-3">
                {footerLinks.legal.map(({ to, label }) => (
                  <li key={label}>
                    <Link to={to} className="text-sm text-slate-400 hover:text-accent-500 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Services links ── */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-slate-400 hover:text-accent-500 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact info ── */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+18005551234" className="text-sm text-slate-400 hover:text-white transition-colors">
                  1-800-555-1234
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:commercial@illumusenergy.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                  commercial@illumusenergy.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-400">
                  1200 Commerce Dr, Suite 400<br />
                  Houston, TX 77001
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>&copy; {year} Illumus Energy LLC. All rights reserved.</p>
          <p className="text-accent-500/70 font-medium">Strictly B2B &amp; Commercial Only.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms"   className="hover:text-slate-300 transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
