import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award, Zap } from 'lucide-react';

const trustBadges = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '15+',  label: 'Years Experience' },
  { value: '100%', label: 'Code Compliant' },
  { value: '24/7', label: 'Emergency Response' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-900">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80')`,
        }}
        role="img"
        aria-label="Large-scale industrial electrical facility"
      />
      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/92 to-navy-900/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
      {/* Top accent stripe */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent-500 via-accent-400 to-transparent" />
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-[55%] w-[700px] h-[700px] bg-accent-500/4 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left: headline + CTAs */}
          <div>
            <div className="animate-fade-up flex items-center gap-3 mb-7">
              <div className="h-px w-10 bg-accent-500 flex-shrink-0" />
              <span className="section-label mb-0 text-accent-400">
                Commercial Electrical Contractor
              </span>
            </div>

            <h1 className="animate-fade-up-d1 text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.06] mb-6 tracking-tight">
              Commercial Electrical Solutions for{' '}
              <span className="text-accent-500">High-Volume</span>{' '}
              Businesses
            </h1>

            <p className="animate-fade-up-d2 text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-lg">
              Specializing in Lighting Systems, Maintenance, and Installations
              for Retail, Warehouses, and Corporate Facilities — on time and
              up to code.
            </p>

            <div className="animate-fade-up-d3 flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/services" className="btn-primary">
                View Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline border-white/25 text-white hover:bg-white hover:text-navy-900"
              >
                Request a Quote
              </Link>
            </div>

            <div className="animate-fade-in [animation-delay:0.7s] inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-sm px-4 py-3">
              <ShieldCheck className="w-4 h-4 text-accent-500 flex-shrink-0" />
              <span className="text-xs text-slate-300 font-medium tracking-wide uppercase">
                Strictly B2B &amp; Commercial Only — No Residential Projects
              </span>
            </div>
          </div>

          {/* Right: trust panel (desktop only) */}
          <div className="hidden xl:flex flex-col gap-4 animate-fade-up [animation-delay:0.4s]">
            <div className="grid grid-cols-2 gap-3">
              {trustBadges.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-5 text-center hover:border-accent-500/40 hover:bg-white/8 transition-all"
                >
                  <div className="text-3xl font-black text-accent-500 mb-1 leading-none">
                    {value}
                  </div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-5 flex items-center gap-4 hover:border-accent-500/30 transition-all">
              <div className="w-11 h-11 bg-accent-500/15 rounded-sm flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-accent-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-snug">
                  NECA Member · IBEW Certified Workforce
                </p>
                <p className="text-slate-400 text-xs mt-0.5">
                  Fully Licensed &amp; Insured · All Commercial Permits Managed
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <div className="flex-1 h-px bg-white/10" />
              <div className="flex items-center gap-2 text-slate-500 text-xs">
                <Zap className="w-3.5 h-3.5 text-accent-500/60" />
                <span className="uppercase tracking-widest">Serving Gulf Coast &amp; Beyond</span>
              </div>
              <div className="flex-1 h-px bg-white/10" />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <div className="w-px h-10 bg-gradient-to-b from-accent-500 to-transparent animate-pulse" />
        <span className="text-[10px] text-slate-400 uppercase tracking-[0.25em]">Scroll</span>
      </div>
    </section>
  );
}
