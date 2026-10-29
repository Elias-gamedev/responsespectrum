import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Eyebrow, ContactCTA } from '@/components/site/shared';
import { pageHead, projects, categories, images, type Category, type Project } from '@/lib/company';

export const Route = createFileRoute('/projects')({
  head: () => pageHead('Our Projects & Portfolios', 'Explore building, commercial, institutional, and infrastructure projects associated with Response Spectrum Trading PLC.'),
  component: ProjectsPage,
});

const categoryDetails: Record<Exclude<Category, 'All Projects'>, { subtitle: string; description: string; image: string; highlights: string[] }> = {
    'Commercial and Office Buildings': {
      subtitle: 'Commercial & High-Rise Architecture',
      description: 'Iconic commercial towers, corporate headquarters, shopping malls, and multi-functional complexes engineered for maximum urban impact.',
      image: images.noc,
      highlights: ['NOC Head Office', 'Golden Star Mall', 'Nyala Insurance HQ', 'Samket Mall'],
    },
    'Residential and Mixed-Use Buildings': {
      subtitle: 'Residential Living & Apartments',
      description: 'Multi-family apartment developments, high-end real estate complexes, neighborhood master planning, and bespoke interior fit-outs.',
      image: images.slidepicapartment || images.residential,
      highlights: ['Tinsae Real Estate', 'MATTS Real Estate', 'Genzebe Dibaba Apartments', 'Interior Design'],
    },
    'Institutional Buildings': {
      subtitle: 'Civic & Public Infrastructure',
      description: 'State-of-the-art media broadcasting complexes, judicial courts, municipal administration centers, and public service buildings.',
      image: images.oromiaMedia,
      highlights: ['Oromia Media Complex', 'Oromia Supreme Court', 'Sebeta Municipality', 'Administration Complex'],
    },
    'Industrial Projects': {
      subtitle: 'Industrial Facilities & Plant Design',
      description: 'Advanced industrial structures, heavy manufacturing factories, wood processing plants, and specialized fuel station engineering.',
      image: images.industrial,
      highlights: ['Bright Paints Factory', 'Hangtong Wood Processing', 'Water Bottling Plant', 'Fuel Stations'],
    },
    'Infrastructure and Water Projects': {
      subtitle: 'Heavy Engineering & Water Structures',
      description: 'Specialized structural engineering for major dams, intake towers, spillway systems, bridge consultancy, and civil works.',
      image: images.dam,
      highlights: ['Gidabo Dam Project', 'Kesem & Tendaho Works', 'Bridges Consultancy', 'Minjar Maryam Works'],
    },
    'Religious and Cultural Projects': {
      subtitle: 'Sacred Architecture & Heritage',
      description: 'Structural engineering, architectural design, and construction supervision for churches, cathedrals, and cultural monuments.',
      image: images.construction,
      highlights: ['Arerti St. Mary Church', 'Minjar Maryam Works', 'Gojam Medhanealem Church', 'Fitche St. Gebriel Proposal'],
    },
  };

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Exclude<Category, 'All Projects'> | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterableCategories = categories.filter((c): c is Exclude<Category, 'All Projects'> => c !== 'All Projects');

  const filteredProjects = activeCategory
    ? projects.filter((p) => p.category === activeCategory)
    : [];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-border/60 bg-muted/30 py-16 sm:py-24">
        <div className="site-container relative z-10">
          <div className="max-w-3xl">
            <Eyebrow>RST Engineering Portfolio</Eyebrow>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              {activeCategory ? activeCategory : 'Architectural & Engineering Excellence'}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {activeCategory
                ? categoryDetails[activeCategory]?.description
                : 'Explore our documented legacy of structural engineering, architectural consultancy, and construction supervision across Ethiopia.'}
            </p>

            {/* ACTION NAV BACK */}
            {activeCategory && (
              <div className="mt-8">
                <button
                  onClick={() => setActiveCategory(null)}
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-xs font-bold uppercase tracking-widest text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  <span className="transition-transform group-hover:-translate-x-1">←</span> All Sectors
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* MAIN VIEW CONTAINER */}
      <section className="section py-16 sm:py-24">
        <div className="site-container">
          
          {/* VIEW 1: CATEGORY SECTOR CARDS */}
          {!activeCategory ? (
            <div className="grid gap-10 lg:grid-cols-2">
              {filterableCategories.map((cat, idx) => {
                const meta = categoryDetails[cat];
                const isFeaturedLarge = idx === 0;

                return (
                  <div
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-border/80 bg-background shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-2xl ${
                      isFeaturedLarge ? 'lg:col-span-2' : ''
                    }`}
                  >
                    <div className={`grid ${isFeaturedLarge ? 'lg:grid-cols-2' : 'grid-cols-1'} h-full`}>
                      <div className={`relative overflow-hidden bg-muted ${isFeaturedLarge ? 'h-72 lg:h-full' : 'h-64 sm:h-72'} w-full`}>
                        <img
                          src={meta.image}
                          alt={cat}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <span className="absolute top-4 left-4 rounded-full bg-background/80 px-4 py-1.5 text-[11px] font-black uppercase tracking-wider backdrop-blur-md border border-border/60 shadow-sm">
                          {meta.subtitle}
                        </span>
                      </div>

                      <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                        <div>
                          <span className="hidden lg:inline-block text-[11px] font-black uppercase tracking-widest text-primary mb-3">
                            {meta.subtitle}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground transition-colors group-hover:text-primary">
                            {cat}
                          </h3>
                          <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                            {meta.description}
                          </p>

                          <div className="mt-8 pt-6 border-t border-border/60">
                            <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-3">
                              Key Portfolio References:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {meta.highlights.map((item) => (
                                <span 
                                  key={item} 
                                  className="rounded-lg bg-muted px-3 py-1.5 text-xs font-bold text-foreground/80 border border-border/40"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-10 flex items-center justify-between pt-4 border-t border-border/40">
                          <span className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                            Explore Collection <span>→</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            
            /* VIEW 2: HIGH-IMPACT CLICKABLE PROJECT SHOWCASE GRID */
            <div>
              <div className="mb-12 rounded-3xl border border-border bg-muted/40 p-8 sm:p-10">
                <span className="text-xs font-black uppercase tracking-widest text-primary">
                  Active Portfolio Showcase
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-black text-foreground">
                  {activeCategory}
                </h2>
                <p className="mt-3 text-base text-muted-foreground max-w-2xl">
                  Click on any project below to view its full architectural details and documented scope.
                </p>
              </div>

              {/* 2-COLUMN CLICKABLE GRID */}
              <div className="grid gap-10 lg:grid-cols-2">
                {filteredProjects.map((project) => (
                  <div 
                    key={project.slug} 
                    onClick={() => setSelectedProject(project)}
                    className="group relative cursor-pointer flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-background shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-2xl"
                  >
                    {/* PHOTO FRAME */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.imageAlt || project.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" /> 
                    </div>

                    {/* CLEAN CONTENT (SOURCE/CREDIT REMOVED FROM MAIN GRID) */}
                    <div className="flex flex-1 flex-col justify-between p-8 -mt-6 relative z-10">
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-widest text-primary">
                          {project.category}
                        </span>
                        <h3 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-foreground transition-colors group-hover:text-primary">
                          {project.name}
                        </h3>
                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                        <span className="text-xs font-bold text-primary group-hover:underline">
                          View Project Details & Scope →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* --- DETAILED PROJECT SHOWCASE MODAL OVERLAY --- */}
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

      <ContactCTA />
    </div>
  );
}