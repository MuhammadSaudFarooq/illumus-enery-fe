import { Zap, ShieldCheck, Clock } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const reasons = [
  {
    icon: Zap,
    title: 'High-Voltage Capability',
    description:
      'Equipped and certified for complex industrial systems — from 480V three-phase distribution panels to large-scale transformer installations.',
  },
  {
    icon: ShieldCheck,
    title: 'Business Compliance',
    description:
      'Fully licensed, bonded, and insured for commercial property. Every project includes as-built drawings, permit pulls, and final inspections.',
  },
  {
    icon: Clock,
    title: 'After-Hours Work',
    description:
      'We work when your business is closed to eliminate disruption. Weekend and overnight scheduling available for retail and warehouse clients.',
  },
];

export default function WhyCommercialSection() {
  const [leftRef, leftInView] = useInView();
  const [rightRef, rightInView] = useInView();

  return (
    <section className="py-20 lg:py-28 bg-navy-900 relative overflow-hidden">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Accent glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div
            ref={leftRef}
            className={`transition-all duration-700 ease-out ${
              leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="section-label">Why Choose Us</p>
            <h2 className="section-heading-light mb-6">
              Specialized{' '}
              <span className="text-accent-500">for Scale.</span>
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-8">
              Commercial electrical work demands more than a journeyman's
              license. It demands experience with high-stakes environments, tight
              deadlines, and zero-tolerance for code violations.
            </p>
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-sm px-4 py-2.5">
              <ShieldCheck className="w-4 h-4 text-accent-500" />
              <span className="text-xs text-slate-300 font-medium tracking-wide">
                NECA Member · IBEW Certified Workforce
              </span>
            </div>
          </div>

          {/* Right: reason cards */}
          <div ref={rightRef} className="space-y-4">
            {reasons.map(({ icon: Icon, title, description }, idx) => (
              <div
                key={title}
                style={{ transitionDelay: rightInView ? `${idx * 120}ms` : '0ms' }}
                className={`transition-[opacity,transform] duration-700 ease-out ${
                  rightInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                }`}
              >
                <div className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-sm p-6 hover:bg-white/8 hover:border-accent-500/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-accent-500/15 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
