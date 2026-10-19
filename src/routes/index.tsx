import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Eyebrow, TextLink, ContactCTA, HeroCarousel, type Slide } from '@/components/site/shared';
import { pageHead, featuredProjects, expertise, images, partners, type Project } from '@/lib/company';

export const Route = createFileRoute('/')({ 
  head: () => pageHead('Building and Infrastructure Consultancy', 'Response Spectrum Trading PLC — architectural design, structural engineering, construction supervision, and contract administration in Ethiopia.'), 
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
    imageAlt: 'Modern building architecture (illustrative)' 
  },
  { 
    label: 'Engineering and Infrastructure', 
    title: 'Engineering Beyond Buildings.', 
    text: 'Engineering consultancy experience across complex structures, infrastructure, and water-related projects.', 
    cta: 'Discover Our Expertise', 
    to: '/about', 
    image: images.omoriaSC, 
    imageAlt: 'Dam and spillway (illustrative)' 
  },
  { 
    label: 'Construction Management and Supervision', 
    title: 'From Design to Delivery.', 
    text: 'Professional construction management, supervision, and contract administration to support quality project delivery.', 
    cta: 'View Our Projects', 
    to: '/projects', 
    image: images.slidepicapartment, 
    imageAlt: 'Construction site supervision (illustrative)' 
  },
  { 
    label: 'Our Project Experience', 
    title: 'Built on Experience. Driven by Excellence.', 
    text: 'Explore selected building, commercial, institutional, and infrastructure projects associated with RST.', 
    cta: 'Explore Projects', 
    to: '/projects', 
    image: images.slide7, 
    imageAlt: 'National Oil Ethiopia headquarters'
  },
  { 
    label: 'Structural Excellence', 
    title: 'Robust Structures for Lasting Safety.', 
    text: 'Rigorous structural engineering solutions ensuring safety, durability, and compliance with high international standards.', 
    cta: 'Explore Our Services', 
    to: '/services', 
    image: images.hero, 
    imageAlt: 'Civic structure engineering (illustrative)' 
  },
  { 
    label: 'Urban Planning', 
    title: 'Shaping Modern Ethiopian Cities.', 
    text: 'Comprehensive master planning and urban development consultancy designed for sustainable community growth.', 
    cta: 'View Our Projects', 
    to: '/projects', 
    image: images.slide5, 
    imageAlt: 'Urban development complex (illustrative)' 
  }
];

function Home() { 
  const featured = featuredProjects(); 
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      {/* 1. HERO CAROUSEL */}
      <HeroCarousel slides={slides}/>

      {/* 2. ENHANCED TRUSTED BY / PARTNER SECTION */}
      <section className="border-y border-border/60 bg-muted/30 py-16 sm:py-20 overflow-hidden">
        <div className="site-container mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary/80">
            Trusted Experience
          </p>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Trusted by Leading Organizations & Development Partners
          </h3>
        </div>
        
        {/* Infinite Sliding Container */}
        <div className="relative w-full overflow-hidden flex py-4">
          <div className="animate-marquee flex items-center gap-10 sm:gap-14">
            {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`} 
                className="group relative flex h-32 w-32 sm:h-36 sm:w-36 shrink-0 items-center justify-center rounded-full border border-border/80 bg-background p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="h-full w-full object-contain grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
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
              <h2 className="section-title mt-2">Selected Projects</h2>
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
                    alt={project.imageAlt || project.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />

                  <div className="absolute top-3 right-3 z-10">
                    <span className={`rounded-full px-3 py-1 text-[10px] font-black tracking-wider uppercase shadow-md backdrop-blur-md border ${
                      project.photo === 'verified'
                        ? 'bg-emerald-600 text-white border-emerald-500'
                        : 'bg-background/90 text-foreground border-border/80'
                    }`}>
                      {project.photo === 'verified' ? '✓ Verified Site' : 'Illustrative'}
                    </span>
                  </div>
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

          <p className="mt-10 text-xs text-muted-foreground">
            * Cards marked “Illustrative” use architectural placeholder images until site photographs are supplied.
          </p>
        </div>
      </section>

      {/* 4. EXPERTISE SECTION */}
      <section className="section bg-secondary py-20">
        <div className="site-container">
          <Eyebrow>Our Expertise</Eyebrow>
          <h2 className="section-title mb-10">Building and Infrastructure Consultancy</h2>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map(e => (
              <article key={e.title} className="group">
                <div className="overflow-hidden rounded-2xl border border-border/60 bg-background">
                  <img src={e.image} alt="" aria-hidden width={1600} height={1008} loading="lazy" className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
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
            <Eyebrow>About RST</Eyebrow>
            <h2 className="section-title">Engineering Knowledge. Practical Solutions.</h2>
            <p className="body-copy mb-7 mt-6 leading-relaxed">
              Response Spectrum Trading PLC is an Ethiopian building consulting company bringing together architectural, structural, and multidisciplinary engineering expertise. RST supports projects through design, construction supervision, and contract administration, with a focus on quality, coordination, and client requirements.
            </p>
            <TextLink to="/about">About Us</TextLink>
          </div>
          <img className="about-image rounded-3xl shadow-lg object-cover" src={images.civic} alt="Contemporary civic architecture (illustrative)" width={1536} height={1024} loading="lazy"/>
        </div>
      </section>

      {/* --- QUICK DETAILS MODAL OVERLAY --- */}
    {/* --- HIGH-END ARCHITECTURAL SHOWCASE MODAL OVERLAY --- */}
    {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-lg transition-all animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-border/80 bg-background shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md backdrop-blur-md transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105 border border-border/60"
            >
              ✕
            </button>

            {/* Hero Image Frame */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-muted">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              
              <div className="absolute top-5 left-5 z-20">
                <span className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[10px] font-black tracking-widest uppercase shadow-lg backdrop-blur-md border ${
                  selectedProject.photo === 'verified'
                    ? 'bg-emerald-600/90 text-white border-emerald-500'
                    : 'bg-background/90 text-foreground border-border/80'
                }`}>
                  {selectedProject.photo === 'verified' ? '✓ Verified Site Project' : 'Illustrative Architectural Study'}
                </span>
              </div>

              <div className="absolute bottom-4 left-6 right-6 z-20 hidden sm:block">
                <span className="text-xs font-black uppercase tracking-widest text-primary bg-background/90 px-3 py-1 rounded-md backdrop-blur-md border border-border/40">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 sm:p-10">
              <span className="text-[11px] font-black uppercase tracking-widest text-primary sm:hidden">
                {selectedProject.category}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-foreground mt-1 sm:mt-0">
                {selectedProject.name}
              </h2>

             {/* --- PROMINENT ASSIGNMENT & RESPONSIBILITY HIGHLIGHT BAR --- */}
             <div className="mt-6 rounded-2xl bg-primary/10 border-2 border-primary/30 p-5 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                      Official RST Consultancy Assignment
                    </span>
                    <p className="text-base sm:text-lg font-black text-foreground mt-0.5">
                      {selectedProject.assignment || 
                        (selectedProject.description.includes('Assignment:')
                          ? selectedProject.description.split('Assignment:')[1].trim()
                          : 'Design, Structural Engineering & Consultancy')}
                    </p>
                  </div>
                  
                  {/* Visual Scope Tags */}
                  <div className="flex flex-wrap gap-1.5 shrink-0">
                    {(selectedProject.assignmentTags || ['Design', 'Supervision', 'Contract Admin', 'Structural Work']
                      .filter(scope => selectedProject.description.toLowerCase().includes(scope.toLowerCase().split(' ')[0])))
                      .map((tag) => (
                        <span key={tag} className="rounded-lg bg-primary text-primary-foreground px-2.5 py-1 text-[10px] font-black uppercase tracking-wider shadow-sm">
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              {/* Key Specifications Grid */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-2xl bg-muted/40 p-5 border border-border/60">
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground/80">
                    Project Sector
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-foreground mt-1 block">
                    {selectedProject.category.split(' ')[0]}
                  </span>
                </div>

                <div>
                  <span className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground/80">
                    Project Status
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-emerald-600 dark:text-emerald-400 mt-1 block">
                    {selectedProject.status || 'Verified Project'}
                  </span>
                </div>

                <div>
                  <span className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground/80">
                    Investment Value
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-foreground mt-1 block">
                    {selectedProject.cost || 'Consultancy Record'}
                  </span>
                </div>

                <div>
                  <span className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground/80">
                    Scale / Capacity
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-foreground mt-1 block">
                    {selectedProject.size || 'Custom Engineering'}
                  </span>
                </div>
              </div>

              {/* Full Description & Scope Details */}
              <div className="mt-6 rounded-2xl border border-border/60 bg-background p-6 shadow-sm">
                <h4 className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">
                  Project Description & Background
                </h4>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-foreground/90 font-medium">
                  {selectedProject.description}
                </p>
              </div>

              {/* Action Footer */}
              <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-6">
                <span className="text-xs font-semibold text-muted-foreground">
                  Response Spectrum Trading PLC · Grade One Building Consultancy
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-xl bg-primary px-7 py-3 text-xs font-black uppercase tracking-widest text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
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