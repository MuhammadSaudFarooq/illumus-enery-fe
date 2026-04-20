import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

export default function FooterCTA() {
  const [ref, inView] = useInView();

  return (
    <section className="py-20 lg:py-24 bg-accent-500 relative overflow-hidden">
      {/* Decorative background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="text-[20vw] font-black text-navy-900/5 uppercase tracking-tighter leading-none">
          LIGHT UP
        </span>
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center
          transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-navy-900/60 text-xs font-bold uppercase tracking-[0.2em] mb-4">
          Start a Project
        </p>
        <h2 className="text-4xl sm:text-5xl font-black text-navy-900 mb-5 leading-tight">
          Ready to Light Up<br className="hidden sm:block" /> Your Business?
        </h2>
        <p className="text-navy-800 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Discuss your commercial project with our estimation team. We provide
          detailed scopes and transparent pricing — no residential inquiries,
          please.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-900 text-white font-semibold rounded-sm text-sm uppercase tracking-widest hover:bg-navy-800 transition-colors shadow-lg shadow-navy-900/30"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+18005551234"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-navy-900/40 text-navy-900 font-semibold rounded-sm text-sm uppercase tracking-widest hover:border-navy-900 transition-colors"
          >
            <Phone className="w-4 h-4" />
            1-800-555-1234
          </a>
        </div>
      </div>
    </section>
  );
}
