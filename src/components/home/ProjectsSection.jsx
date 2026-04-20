import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, TrendingDown, Building2 } from 'lucide-react';
import { projects } from '../../data/projects';
import { useInView } from '../../hooks/useInView';

const beforeAfterImages = {
  'retail-led': {
    before: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    after:  'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80',
  },
  'warehouse-wiring': {
    before: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=800&q=80',
    after:  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
  },
};

function ProjectCard({ project }) {
  const [showAfter, setShowAfter] = useState(false);
  const images = beforeAfterImages[project.id];

  return (
    <div className="bg-white rounded-sm shadow-md border border-slate-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
      {/* Image toggle */}
      <div className="relative overflow-hidden h-56">
        <img
          src={showAfter ? images.after : images.before}
          alt={showAfter ? project.afterLabel : project.beforeLabel}
          className="w-full h-full object-cover transition-all duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />

        {/* Before/After label */}
        <div
          className={`absolute top-3 left-3 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm ${
            showAfter
              ? 'bg-accent-500 text-navy-900'
              : 'bg-navy-900/80 text-slate-300 border border-white/20'
          }`}
        >
          {showAfter ? '✓ After' : 'Before'}
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setShowAfter((s) => !s)}
          className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-sm hover:bg-accent-500 hover:text-navy-900 hover:border-accent-500 transition-all"
        >
          {showAfter ? (
            <><ChevronLeft className="w-3.5 h-3.5" /> See Before</>
          ) : (
            <>See After <ChevronRight className="w-3.5 h-3.5" /></>
          )}
        </button>
      </div>

      {/* Card body */}
      <div className="p-6">
        <div className="mb-1">
          <span className="text-accent-600 text-xs font-bold uppercase tracking-widest">
            {project.subtitle}
          </span>
        </div>
        <h3 className="text-xl font-bold text-navy-900 mb-2">{project.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {project.stats.map(({ label, value }) => (
            <div key={label} className="text-center bg-slate-50 rounded-sm p-3">
              <div className="text-lg font-black text-navy-900">{value}</div>
              <div className="text-xs text-slate-500 leading-tight mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-400 flex items-center gap-1.5">
          <Building2 className="w-3.5 h-3.5 text-accent-500" />
          {project.location}
        </p>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [headerRef, headerInView] = useInView();
  const [gridRef, gridInView] = useInView();

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14
            transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <p className="section-label">Portfolio</p>
            <h2 className="section-heading">
              Trusted by <span className="text-accent-500">Industry Leaders.</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
            Real results from real commercial projects. Toggle “Before &amp; After”
            on each card to see the transformation.
          </p>
        </div>

        {/* Project cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              style={{ transitionDelay: gridInView ? `${idx * 150}ms` : '0ms' }}
              className={`transition-[opacity,transform] duration-700 ease-out ${
                gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 ease-out ${
          gridInView ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-4'
        }`}>
          <Link to="/case-studies" className="btn-primary">
            See Our Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
