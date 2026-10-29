import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Eyebrow, TextLink, ContactCTA, HeroCarousel, type Slide } from '@/components/site/shared';
import { pageHead, featuredProjects, expertise, images, partners, type Project } from '@/lib/company';

export const Route = createFileRoute('/')({ 
  head: () => pageHead(
    'Response Spectrum Trading PLC (RST) | Grade One Building & Engineering Consultancy Ethiopia', 
    'Response Spectrum Trading PLC (RST) is a leading Grade One building and engineering consultancy in Ethiopia specializing in architectural design, structural engineering, facade engineering, construction supervision, and contract administration.'
  ), 
  component: Home 
});

const slides: Slide[] = [
  { 
    label: 'Building Design', 
    title: 'Designing Spaces. Shaping the Future.', 
    text: 'Architectural and engineering solutions for buildings designed around function, quality, and lasting value.', 
    cta: 'Explore Our Services', 
    to: '/services', 
    image: images.slide6, 
    imageAlt: 'Modern building architecture by Response Spectrum Trading PLC' 
  },
  { 
    label: 'Engineering and Infrastructure', 
    title: 'Engineering Beyond Buildings.', 
    text: 'Engineering consultancy experience across complex structures, infrastructure, and water-related projects.', 
    cta: 'Discover Our Expertise', 
    to: '/about', 
    image: images.omoriaSC, 
    imageAlt: 'Dam and spillway engineering works' 
  },
  { 
    label: 'Construction Management and Supervision', 
    title: 'From Design to Delivery.', 
    text: 'Professional construction management, supervision, and contract administration to support quality project delivery.', 
    cta: 'View Our Projects', 
    to: '/projects', 
    image: images.Oromiamediacomplex, 
    imageAlt: 'Construction site supervision and contract administration' 
  },
  { 
    label: 'Our Project Experience', 
    title: 'Built on Experience. Driven by Excellence.', 
    text: 'Explore selected building, commercial, institutional, and infrastructure projects associated with RST.', 
    cta: 'Explore Projects', 
    to: '/projects', 
    image: images.slide7, 
    imageAlt: 'National Oil Ethiopia headquarters project'
  },
  { 
    label: 'Structural Excellence', 
    title: 'Robust Structures for Lasting Safety.', 
    text: 'Rigorous structural engineering solutions ensuring safety, durability, and compliance with high international standards.', 
    cta: 'Explore Our Services', 
    to: '/services', 
    image: images.hero, 
    imageAlt: 'Civic structure engineering design' 
  },
  { 
    label: 'Urban Planning', 
    title: 'Shaping Modern Ethiopian Cities.', 
    text: 'Comprehensive master planning and urban development consultancy designed for sustainable community growth.', 
    cta: 'View Our Projects', 
    to: '/projects', 
    image: images.slide5, 
    imageAlt: 'Urban development complex in Ethiopia' 
  }
];

function Home() { 
  const featured = featuredProjects(); 
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      {/* 1. HERO CAROUSEL */}
      <HeroCarousel slides={slides}/>

     {/* --- TRUSTED BY / INTERNATIONAL PARTNERS MARQUEE --- */}
     <section className="border-y border-border/60 bg-muted/30 py-16 sm:py-20 overflow-hidden">
        <div className="site-container mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary/80">
            Global & Local Network
          </p>
          <h2 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Trusted by Leading Organizations, Enterprises & International Partners
          </h2>
        </div>
        
        {/* Infinite Sliding Container (Shows ~3 on Mobile, ~5 on Desktop in natural color) */}
        <div className="relative w-full overflow-hidden flex py-4">
          <div className="animate-marquee flex items-center gap-6 sm:gap-16">
            {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`} 
                className="group relative flex h-28 w-28 sm:h-44 sm:w-44 shrink-0 items-center justify-center rounded-2xl sm:rounded-3xl border border-border/80 bg-background p-4 sm:p-6 shadow-sm transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src={partner.image} 
                  alt={`${partner.name} - partner of Response Spectrum Trading PLC`} 
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CLEAN & BALANCED SELECTED PROJECTS GRID */}
      <section className="section py-20 sm:py-28">
        <div className="site-container">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-border/60 pb-6">
            <div>
              <Eyebrow>Milestone Portfolio</Eyebrow>
              <h2 className="section-title mt-2">Selected Engineering & Architectural Projects</h2>
            </div>
            <TextLink to="/projects">View All Projects Archive →</TextLink>
          </div>

          {/* Clean 3-Column Uniform Grid (Shows Exactly 6 Items) */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.slice(0, 6).map((project) => (
              <div
                key={project.slug}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-xl"
              >
                {/* Image Box */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.imageAlt || `${project.name} - Response Spectrum Trading project`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content Box */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary">
                      {project.category}
                    </span>
                    <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-border/60 pt-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-primary group-hover:underline">
                      View Project Specs →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPERTISE SECTION */}
      <section className="section bg-secondary py-20">
        <div className="site-container">
          <Eyebrow>Our Core Competencies</Eyebrow>
          <h2 className="section-title mb-10">Grade One Building & Engineering Consultancy Services</h2>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map(e => (
              <article key={e.title} className="group">
                <div className="overflow-hidden rounded-2xl border border-border/60 bg-background">
                  <img src={e.image} alt={`${e.title} consultancy by Response Spectrum Trading`} width={1600} height={1008} loading="lazy" className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                </div>
                <h3 className="mt-5 text-lg font-bold">{e.title}</h3>
                <p className="body-copy mt-2">{e.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <TextLink to="/services">View all services</TextLink>
          </div>
        </div>
      </section>

      {/* 5. ABOUT SECTION */}
      <section className="section py-20">
        <div className="site-container grid items-center gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>About Response Spectrum Trading PLC</Eyebrow>
            <h2 className="section-title">Engineering Knowledge. Practical Solutions.</h2>
            <p className="body-copy mb-7 mt-6 leading-relaxed">
              <strong>Response Spectrum Trading PLC (RST)</strong> is a premier Grade One building and engineering consultancy firm in Ethiopia. We bring together advanced architectural design, structural engineering, facade engineering, construction supervision, and contract administration expertise to deliver quality and long-lasting value for commercial, industrial, institutional, and infrastructure developments.
            </p>
            <TextLink to="/about">About Us</TextLink>
          </div>
          <img className="about-image rounded-3xl shadow-lg object-cover" src={images.civic} alt="Contemporary civic architecture and engineering by Response Spectrum Trading PLC" width={1536} height={1024} loading="lazy"/>
        </div>
      </section>

      {/* --- HIGH-END ARCHITECTURAL SHOWCASE MODAL OVERLAY --- */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-lg transition-all animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-border/80 bg-background shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md backdrop-blur-md transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105 border border-border/60"
            >
              ✕
            </button>

            {/* Hero Image Frame */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted rounded-t-3xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-6 z-20">
                <span className="text-xs font-black uppercase tracking-widest text-primary bg-background/90 px-3 py-1 rounded-md backdrop-blur-md border border-border/40">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Main Content Container */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
                  {selectedProject.name}
                </h3>
              </div>

              {/* Official RST Consultancy Assignment Banner */}
              <div className="rounded-2xl bg-primary/10 border-2 border-primary/30 p-5 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary block">
                      Official Response Spectrum Trading PLC Consultancy Assignment
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Specifications Metric Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-2xl bg-muted/40 p-4 border border-border/60">
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Project Sector
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-foreground mt-1 block">
                    {selectedProject.category.split(' ')[0]}
                  </span>
                </div>

                <div>
                  <span className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Project Status
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-emerald-600 dark:text-emerald-400 mt-1 block">
                    {selectedProject.status || 'Active Portfolio'}
                  </span>
                </div>

                <div>
                  <span className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Investment Value
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-foreground mt-1 block">
                    {selectedProject.cost || 'Consultancy Record'}
                  </span>
                </div>

                <div>
                  <span className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Scale / Capacity
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-foreground mt-1 block">
                    {selectedProject.size || 'Custom Scope'}
                  </span>
                </div>
              </div>

              {/* Full Project Description */}
              <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  Project Description & Background
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90 font-medium">
                  {selectedProject.description}
                </p>
              </div>

              {/* Action Footer */}
              <div className="flex items-center justify-between border-t border-border/60 pt-5">
                <span className="text-[11px] font-semibold text-muted-foreground">
                  Response Spectrum Trading PLC (RST) · Grade One Building Consultancy
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-xl bg-primary px-6 py-2.5 text-xs font-black uppercase tracking-widest text-primary-foreground shadow-md transition-all hover:bg-primary/90"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <ContactCTA/>
    </>
  ); 
}