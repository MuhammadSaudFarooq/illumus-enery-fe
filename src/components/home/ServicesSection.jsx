import { Link } from 'react-router-dom';
import { Lightbulb, Wrench, Building, ArrowRight } from 'lucide-react';
import { services } from '../../data/services';
import { useInView } from '../../hooks/useInView';

const iconMap = { Lightbulb, Wrench, Building };

export default function ServicesSection() {
  const [headerRef, headerInView] = useInView();
  const [gridRef, gridInView] = useInView();

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="section-label">What We Do</p>
          <h2 className="section-heading mb-4">
            Core Service <span className="text-accent-500">Offerings</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Every service is purpose-built for commercial and industrial clients
            who need scale, compliance, and zero tolerance for downtime.
          </p>
        </div>

        {/* 3-column grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon];
            return (
              /* Entrance animation wrapper */
              <div
                key={service.id}
                style={{ transitionDelay: gridInView ? `${idx * 120}ms` : '0ms' }}
                className={`transition-[opacity,transform] duration-700 ease-out ${
                  gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Card — light by default, dark navy on hover */}
                <div className="group relative rounded-sm p-8 flex flex-col h-full cursor-default
                  bg-white border border-slate-200
                  transition-[background-color,border-color,box-shadow] duration-300
                  hover:bg-navy-900 hover:border-transparent hover:shadow-xl hover:shadow-navy-900/30
                  hover:ring-2 hover:ring-accent-500"
                >
                  {/* Top accent bar — appears on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-500 to-accent-400 rounded-t-sm
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-6
                    transition-[background-color,color] duration-300
                    bg-slate-100 text-navy-800
                    group-hover:bg-accent-500 group-hover:text-navy-900"
                  >
                    {Icon && <Icon className="w-6 h-6" strokeWidth={2} />}
                  </div>

                  {/* Flagship badge */}
                  {service.highlighted && (
                    <span className="text-accent-600 group-hover:text-accent-400 text-xs font-bold uppercase tracking-[0.15em] mb-2 transition-colors duration-300">
                      Flagship Service
                    </span>
                  )}

                  <h3 className="text-xl font-bold mb-3 transition-colors duration-300 text-navy-900 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 transition-colors duration-300 text-slate-500 group-hover:text-slate-300">
                    {service.description}
                  </p>

                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest
                      transition-all duration-300
                      text-navy-800 hover:gap-2.5
                      group-hover:text-accent-400"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 ease-out ${
          gridInView ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-4'
        }`}>
          <Link to="/services" className="btn-primary">
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
