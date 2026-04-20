import { Link } from 'react-router-dom';
import { Users, Award, MapPin, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const team = [
  { name: 'Marcus Reid', role: 'Founder & Master Electrician', years: '22 yrs exp.' },
  { name: 'Sandra Vo', role: 'Commercial Project Manager', years: '14 yrs exp.' },
  { name: 'Derek Ashford', role: 'Lead Industrial Technician', years: '18 yrs exp.' },
];

const milestones = [
  { year: '2008', event: 'Founded in Houston, TX' },
  { year: '2012', event: 'Expanded to multi-state commercial projects' },
  { year: '2017', event: 'Achieved NECA membership & LEED certification' },
  { year: '2022', event: '500th commercial project completed' },
  { year: '2025', event: 'Launched 24/7 service contract division' },
];

export default function About() {
  const [missionRef, missionInView] = useInView();
  const [teamHeaderRef, teamHeaderInView] = useInView();
  const [teamGridRef, teamGridInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-navy-900/90" />
        <div className="absolute top-0 inset-x-0 h-1 bg-accent-500" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-up flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-accent-500 flex-shrink-0" />
            <p className="section-label mb-0">Our Story</p>
          </div>
          <h1 className="animate-fade-up-d1 section-heading-light mb-5 max-w-2xl">
            Built on Commercial Expertise,{' '}
            <span className="text-accent-500">Driven by Results.</span>
          </h1>
          <p className="animate-fade-up-d2 text-slate-400 text-lg max-w-xl leading-relaxed">
            Since 2008, Illumus Energy has been the trusted electrical partner for
            retail chains, logistics warehouses, and corporate campuses across the
            Gulf Coast.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div
          ref={missionRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          <div className={`transition-all duration-700 ease-out ${missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="section-label">Mission</p>
            <h2 className="section-heading mb-6">Why We're Strictly Commercial</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Residential electrical work and commercial electrical work are
              fundamentally different disciplines. Commercial projects demand
              expertise in high-voltage distribution, NEC commercial code
              compliance, and coordination with general contractors under tight
              deadlines.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By focusing exclusively on B2B clients, we've built a team, tooling,
              and processes that residential contractors simply can't match at the
              commercial scale.
            </p>
          </div>

          {/* Timeline */}
          <div className={`transition-all duration-700 ease-out delay-150 ${missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="section-label">Timeline</p>
            <div className="relative pl-6 border-l-2 border-slate-100 space-y-6">
              {milestones.map(({ year, event }) => (
                <div key={year} className="relative">
                  <div className="absolute -left-[29px] top-0.5 w-3.5 h-3.5 rounded-full bg-accent-500 border-2 border-white shadow" />
                  <span className="text-accent-600 text-xs font-bold uppercase tracking-widest">{year}</span>
                  <p className="text-navy-900 font-medium mt-0.5">{event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={teamHeaderRef}
            className={`text-center mb-12 transition-all duration-700 ease-out ${
              teamHeaderInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="section-label">Leadership</p>
            <h2 className="section-heading">The Team Behind the Work</h2>
          </div>
          <div ref={teamGridRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map(({ name, role, years }, idx) => (
              <div
                key={name}
                style={{ transitionDelay: teamGridInView ? `${idx * 120}ms` : '0ms' }}
                className={`bg-white border border-slate-200 rounded-sm p-7 text-center
                  hover:shadow-md hover:border-accent-500/30 transition-all duration-300
                  [transition:opacity_700ms_ease-out,transform_700ms_ease-out,box-shadow_300ms,border-color_300ms] ${
                  teamGridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="w-16 h-16 bg-navy-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-7 h-7 text-accent-400" />
                </div>
                <h3 className="text-navy-900 font-bold mb-1">{name}</h3>
                <p className="text-slate-500 text-sm mb-2">{role}</p>
                <span className="inline-block bg-accent-500/10 text-accent-600 text-xs font-semibold px-3 py-1 rounded-sm">{years}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-center">
        <div
          ref={ctaRef}
          className={`max-w-xl mx-auto px-4 transition-all duration-700 ease-out ${
            ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-slate-400 mb-8">Contact our commercial estimation team for a project consultation.</p>
          <Link to="/contact" className="btn-primary">
            Request a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
