import { Link } from 'react-router-dom';
import { Lightbulb, Wrench, Building, CheckCircle, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

function ServiceSection({ service, isEven }) {
  const Icon = service.icon;
  const [ref, inView] = useInView();

  return (
    <section className={`py-20 lg:py-28 ${isEven ? 'bg-white' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
        >
          <div
            className={`${!isEven ? 'lg:order-2' : ''} transition-all duration-700 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-12 h-12 bg-accent-500/10 rounded-sm flex items-center justify-center mb-6">
              <Icon className="w-6 h-6 text-accent-600" />
            </div>
            {service.highlighted && (
              <span className="text-accent-600 text-xs font-bold uppercase tracking-[0.15em] mb-2 inline-block">
                Flagship Service
              </span>
            )}
            <h2 className="section-heading mb-5">{service.title}</h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">{service.description}</p>
            <Link to="/contact" className="btn-primary">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div
            className={`${!isEven ? 'lg:order-1' : ''} transition-all duration-700 ease-out delay-150 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-navy-900 rounded-sm p-8">
              <p className="text-accent-400 text-xs font-bold uppercase tracking-widest mb-5">
                Service Includes
              </p>
              <ul className="space-y-3">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const serviceDetails = [
  {
    icon: Lightbulb,
    title: 'Commercial Lighting Solutions',
    description:
      'From high-bay LED retrofits in warehouses to precision display lighting in luxury retail, we design and install systems that reduce energy costs while enhancing your customer experience.',
    features: [
      'LED retrofit & re-lamping programs',
      'Parking lot & exterior lighting',
      'Retail display & accent lighting',
      'Emergency & exit lighting systems',
      'Lighting control & automation (DALI, 0-10V)',
      'Energy audits & utility rebate management',
    ],
    highlighted: true,
  },
  {
    icon: Wrench,
    title: 'Maintenance & Service Contracts',
    description:
      'Prevent costly downtime with a tailored service agreement. Our certified technicians perform scheduled inspections and are on-call 24/7 for emergency response.',
    features: [
      'Monthly, quarterly, or annual inspection plans',
      '24/7 emergency dispatch',
      'Predictive maintenance reporting',
      'Panel & switchgear testing',
      'Thermal imaging surveys',
      'Dedicated account manager',
    ],
    highlighted: false,
  },
  {
    icon: Building,
    title: 'New Commercial Installs',
    description:
      'Turn-key electrical infrastructure for ground-up construction or major tenant improvements. We coordinate with GCs and manage all permits from start to final inspection.',
    features: [
      'Complete building wiring (LV & HV)',
      'Three-phase power distribution',
      'EV charging station infrastructure',
      'Data center & server room fit-outs',
      'Generator & UPS systems',
      'Permit management & inspections',
    ],
    highlighted: false,
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1565620731358-e8cb5b519c73?auto=format&fit=crop&w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-navy-900/90" />
        <div className="absolute top-0 inset-x-0 h-1 bg-accent-500" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-up flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-accent-500 flex-shrink-0" />
            <p className="section-label mb-0">What We Offer</p>
          </div>
          <h1 className="animate-fade-up-d1 section-heading-light mb-5 max-w-2xl">
            Commercial Electrical Services{' '}
            <span className="text-accent-500">Built for Scale.</span>
          </h1>
          <p className="animate-fade-up-d2 text-slate-400 text-lg max-w-xl leading-relaxed">
            Every service we offer is designed exclusively for commercial and
            industrial clients. No residential work — ever.
          </p>
        </div>
      </section>

      {/* Service detail sections */}
      {serviceDetails.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;
        return (
          <ServiceSection key={service.title} service={service} index={index} isEven={isEven} />
        );
      })}

      {/* CTA */}
      <section className="py-16 bg-accent-500 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-black text-navy-900 mb-4">Not sure which service fits your project?</h2>
          <p className="text-navy-800 mb-8">Our commercial estimation team will help you scope and budget accurately.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white font-semibold rounded-sm text-sm uppercase tracking-widest hover:bg-navy-800 transition-colors">
            Talk to an Estimator <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
