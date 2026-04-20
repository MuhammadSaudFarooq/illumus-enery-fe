import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowRight, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const beforeAfterImages = {
  'retail-led': {
    before: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
    after:  'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=900&q=80',
  },
  'warehouse-wiring': {
    before: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=900&q=80',
    after:  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
  },
};

function CaseStudyCard({ project }) {
  const [showAfter, setShowAfter] = useState(false);
  const images = beforeAfterImages[project.id];

  return (
    <article className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={showAfter ? images.after : images.before}
          alt={showAfter ? project.afterLabel : project.beforeLabel}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
        <div className={`absolute top-3 left-3 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm ${showAfter ? 'bg-accent-500 text-navy-900' : 'bg-navy-900/80 text-slate-300 border border-white/20'}`}>
          {showAfter ? '✓ After' : 'Before'}
        </div>
        <button
          onClick={() => setShowAfter((s) => !s)}
          className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-sm hover:bg-accent-500 hover:text-navy-900 hover:border-accent-500 transition-all"
        >
          {showAfter ? <><ChevronLeft className="w-3.5 h-3.5" /> Before</> : <>After <ChevronRight className="w-3.5 h-3.5" /></>}
        </button>
      </div>

      <div className="p-8">
        <span className="text-accent-600 text-xs font-bold uppercase tracking-widest">{project.subtitle}</span>
        <h2 className="text-2xl font-bold text-navy-900 mt-1 mb-3">{project.title}</h2>
        <p className="text-slate-600 leading-relaxed mb-6">{project.description}</p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {project.stats.map(({ label, value }) => (
            <div key={label} className="bg-slate-50 rounded-sm p-4 text-center">
              <div className="text-xl font-black text-navy-900">{value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-400 flex items-center gap-1.5">
          <Building2 className="w-3.5 h-3.5 text-accent-500" />
          {project.location}
        </p>
      </div>
    </article>
  );
}

function CaseStudiesGrid() {
  const [gridRef, gridInView] = useInView();
  return (
    <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {projects.map((project, idx) => (
        <div
          key={project.id}
          style={{ transitionDelay: gridInView ? `${idx * 150}ms` : '0ms' }}
          className={`transition-[opacity,transform] duration-700 ease-out ${
            gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <CaseStudyCard project={project} />
        </div>
      ))}
    </div>
  );
}

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-navy-900/90" />
        <div className="absolute top-0 inset-x-0 h-1 bg-accent-500" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-up flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-accent-500 flex-shrink-0" />
            <p className="section-label mb-0">Portfolio</p>
          </div>
          <h1 className="animate-fade-up-d1 section-heading-light mb-5 max-w-2xl">
            Real Projects.{' '}
            <span className="text-accent-500">Measurable Results.</span>
          </h1>
          <p className="animate-fade-up-d2 text-slate-400 text-lg max-w-xl leading-relaxed">
            Each project demonstrates our capacity for large-scale commercial
            electrical work and our commitment to delivering ROI for our clients.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Your Facility Could Be Next</h2>
          <p className="text-slate-400 mb-8">Reach out for a complimentary commercial site assessment.</p>
          <Link to="/contact" className="btn-primary">
            Request a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
