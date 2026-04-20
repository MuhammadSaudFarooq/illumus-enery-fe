import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock, BadgeCheck } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const stats = [
  { icon: TrendingUp, value: '500+', label: 'Commercial Projects' },
  { icon: Clock, value: '15+', label: 'Years in Business' },
  { icon: BadgeCheck, value: '100%', label: 'Licensed & Insured' },
];

export default function IntroSection() {
  const [leftRef, leftInView] = useInView();
  const [rightRef, rightInView] = useInView();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div
            ref={leftRef}
            className={`transition-all duration-700 ease-out ${
              leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="section-label">Who We Are</p>
            <h2 className="section-heading mb-6">
              More Than Just Electricians –{' '}
              <span className="text-accent-500">We Are Business Partners.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              For a facility manager, electrical failure means lost revenue. We
              understand the high stakes of commercial operations. Whether it's a
              retail lighting retrofit or warehouse wiring, we deliver on time and
              up to code.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Every project is assigned a dedicated commercial project manager who
              coordinates with your team from estimation through commissioning —
              minimizing disruption and keeping your business operational.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-accent-600 font-semibold hover:gap-3 transition-all text-sm uppercase tracking-widest"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: stats + image */}
          <div
            ref={rightRef}
            className={`space-y-6 transition-all duration-700 ease-out delay-150 ${
              rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="bg-slate-50 border border-slate-100 rounded-sm p-5 text-center"
                >
                  <Icon className="w-5 h-5 text-accent-500 mx-auto mb-2" />
                  <div className="text-2xl font-black text-navy-900 mb-1">{value}</div>
                  <div className="text-xs text-slate-500 font-medium leading-tight">{label}</div>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="relative rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
                alt="Commercial electricians working on a large industrial panel"
                className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 bg-accent-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm">
                  Certified Commercial Contractors
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
