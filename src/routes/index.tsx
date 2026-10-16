import { createFileRoute } from '@tanstack/react-router';
import { Eyebrow, TextLink, ProjectTile, ContactCTA, HeroCarousel, type Slide } from '@/components/site/shared';
import { pageHead, featuredProjects, expertise, images, partners } from '@/lib/company';

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
    imageAlt: 'National Oil Ethiopia headquarters', 
    credit: 'NOC Head Office · Photo: LESSO Ethiopia' 
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
  return <>
    {/* 1. HERO CAROUSEL */}
    <HeroCarousel slides={slides}/>

   {/* --- ENHANCED TRUSTED BY / PARTNER SECTION --- */}
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
      {/* Repeat array 4 times to ensure seamless infinite looping with 4 logos */}
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

    {/* 3. SELECTED PROJECTS SECTION */}
    <section className="section">
      <div className="site-container">
        <div className="mb-10 grid items-end gap-5 sm:grid-cols-[1fr_auto]">
          <div>
            <Eyebrow>Portfolio</Eyebrow>
            <h2 className="section-title">Selected Projects</h2>
          </div>
          <TextLink to="/projects">All projects</TextLink>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p,i) => (
            <div key={p.slug} className={i===0||i===5?'sm:col-span-2':''}>
              <ProjectTile project={p}/>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">Cards marked “Illustrative” use placeholder images until site photographs are supplied.</p>
      </div>
    </section>

    {/* 4. EXPERTISE SECTION */}
    <section className="section bg-secondary">
      <div className="site-container">
        <Eyebrow>Our Expertise</Eyebrow>
        <h2 className="section-title mb-10">Building and Infrastructure Consultancy</h2>
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map(e => (
            <article key={e.title}>
              <div className="overflow-hidden">
                <img src={e.image} alt="" aria-hidden width={1600} height={1008} loading="lazy" className="aspect-[3/2] w-full object-cover"/>
              </div>
              <h3 className="mt-5 text-lg">{e.title}</h3>
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
    <section className="section">
      <div className="site-container grid items-center gap-12 md:grid-cols-2">
        <div>
          <Eyebrow>About RST</Eyebrow>
          <h2 className="section-title">Engineering Knowledge. Practical Solutions.</h2>
          <p className="body-copy mb-7 mt-6">
            Response Spectrum Trading PLC is an Ethiopian building consulting company bringing together architectural, structural, and multidisciplinary engineering expertise. RST supports projects through design, construction supervision, and contract administration, with a focus on quality, coordination, and client requirements.
          </p>
          <TextLink to="/about">About Us</TextLink>
        </div>
        <img className="about-image" src={images.civic} alt="Contemporary civic architecture (illustrative)" width={1536} height={1024} loading="lazy"/>
      </div>
    </section>

    <ContactCTA/>
  </>; 
}