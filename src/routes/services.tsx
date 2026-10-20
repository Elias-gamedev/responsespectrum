import { createFileRoute, Link } from '@tanstack/react-router';
import { pageHead } from '@/lib/company';

export const Route = createFileRoute('/services')({
  head: () =>
    pageHead(
      'Our Services',
      'Architectural design, structural engineering, facade engineering, construction supervision, contract administration, and infrastructure consultancy by Response Spectrum Trading PLC.'
    ),
  component: Services,
});

const services = [
  {
    id: '01',
    title: 'Architectural Design',
    badge: 'Core Specialty',
    description:
      'Comprehensive architectural planning and building design for residential, commercial, office, mixed-use, and institutional developments.',
    features: [
      'Conceptual Design & 3D Visualization',
      'Spatial Planning & Space Optimization',
      'Permit & Regulatory Approval Sets',
      'Interior & Exterior Detail Work',
    ],
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: '02',
    title: 'Structural Engineering',
    badge: 'Technical Authority',
    description:
      'Advanced structural design, design revisions, coordination, and integrity investigations for complex multi-story and high-rise developments.',
    features: [
      'Reinforced Concrete & Steel Design',
      'Post-Tension Slab System Design',
      'Structural Safety Audit & Revisions',
      'Foundation & Substructure Engineering',
    ],
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'Facade Design & Supervision',
    badge: 'Specialized Service',
    description:
      'From concept to design development and finally to installation and delivery. Dedicated exterior envelope engineering ensuring high performance and safety.',
    features: [
      'Conceptual Exterior Architectural Design',
      'Curtain Wall & Cladding System Engineering',
      'Design Development & Detail Documentation',
      'On-Site Installation Supervision & Closeout',
    ],
    highlight: true,
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h3a1 1 0 011 1v6a1 1 0 01-1 1h-3a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    id: '04',
    title: 'Construction Supervision',
    badge: 'Quality Control',
    description:
      'Rigorous on-site technical supervision guaranteeing that physical construction precisely matches engineering specs and safety standards.',
    features: [
      'Daily/Weekly Technical Site Inspections',
      'Material Quality Verification',
      'Structural Work Sign-Off',
      'Contractor Compliance Management',
    ],
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: '05',
    title: 'Contract Administration',
    badge: 'Project Governance',
    description:
      'Professional management of construction agreements, certification of work progress, variation reviews, and dispute prevention.',
    features: [
      'Progress Payment Certificate Certification',
      'Contractor Variation & Claim Reviews',
      'Time Extension & Schedule Assessment',
      'Final Snagging & Project Handover',
    ],
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: '06',
    title: 'Infrastructure Engineering',
    badge: 'Specialized Civil Works',
    description:
      'Specialized engineering consultancy for water infrastructure, dam intake towers, spillways, and major municipal developments.',
    features: [
      'Water Infrastructure Structural Works',
      'Public & Institutional Facilities',
      'Inter-Agency Technical Coordination',
      'Environmental & Site Condition Audits',
    ],
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

function Services() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 border-b border-border/60 bg-gradient-to-b from-muted/50 via-background to-background overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-primary border border-primary/20">
            Grade One Building Consultancy
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight text-foreground">
            Our Technical Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground font-medium leading-relaxed">
            From initial architectural concepts and structural engineering to installation supervision and contract administration. Delivering engineering precision across Ethiopia.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative flex flex-col justify-between rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                service.highlight
                  ? 'border-primary/50 bg-gradient-to-b from-primary/5 via-background to-background shadow-lg'
                  : 'border-border/80 bg-card hover:border-primary/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    {service.icon}
                  </div>
                  <span className="text-2xl font-black text-muted-foreground/40 group-hover:text-primary transition-colors">
                    {service.id}
                  </span>
                </div>

                <div className="mt-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                    {service.badge}
                  </span>
                  <h3 className="text-xl font-extrabold text-foreground mt-1 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-border/60 pt-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs font-semibold text-foreground/90 gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:underline"
                >
                  Consult on this Service →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Callout Banner */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary p-8 sm:p-12 text-primary-foreground shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-black uppercase tracking-widest opacity-80">
              Need Direct Technical Advice?
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight mt-1">
              Have a Project in Mind?
            </h2>
            <p className="mt-2 text-sm sm:text-base font-medium opacity-90 max-w-xl">
              Talk directly with our senior structural and architectural consultants to discuss project requirements, design revisions, or contract management.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 rounded-2xl bg-background px-8 py-4 text-xs font-black uppercase tracking-widest text-foreground shadow-lg transition-transform hover:scale-105"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}