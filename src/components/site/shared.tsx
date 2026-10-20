import { Link } from '@tanstack/react-router';
import { ArrowUpRight, ArrowRight, Menu, X, MapPin, Mail, Phone, ChevronLeft, ChevronRight, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import logo from '@/assets/rst-logo.png';
import { activeSocialLinks, company, contact, services, type Project } from '@/lib/company';

type To = '/' | '/about' | '/services' | '/projects' | '/contact';
const links = [{ to: '/', label: 'Home' }, { to: '/about', label: 'About Us' }, { to: '/services', label: 'Services' }, { to: '/projects', label: 'Projects' }, { to: '/contact', label: 'Contact Us' }] as const;
const socialIcons = { Facebook, LinkedIn: Linkedin, Instagram, YouTube: Youtube };

export function Header() { const [open, setOpen] = useState(false); return <header className="site-header"><div className="site-container grid h-full grid-cols-[minmax(0,1fr)_auto] items-center gap-5 md:flex md:justify-between"><Link to="/" aria-label="Response Spectrum Trading home" onClick={() => setOpen(false)}><img className="brand-logo" src={logo} width={388} height={265} alt="Response Spectrum Trading" /></Link><div className="hidden items-center gap-10 md:flex"><nav className="flex gap-8" aria-label="Main navigation">{links.slice(0,4).map(link => <Link key={link.to} to={link.to} activeOptions={{exact:true}} className="nav-link">{link.label}</Link>)}</nav><Button asChild size="lg"><Link to="/contact">Contact Us <ArrowUpRight /></Link></Button></div><Button className="md:hidden" variant="ghost" size="icon" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button></div>{open && <nav className="mobile-nav flex flex-col gap-5 md:hidden" aria-label="Mobile navigation">{links.map(link => <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="text-sm" activeProps={{className:'text-primary'}}>{link.label}</Link>)}</nav>}</header>; }

/** Renders only social profiles that have a URL in src/lib/company.ts. */
export function SocialLinks({ className = '' }: { className?: string }) { const items = activeSocialLinks(); if (!items.length) return null; return <div className={`flex gap-3 ${className}`}>{items.map(({ network, url }) => { const Icon = socialIcons[network]; return <a key={network} href={url} target="_blank" rel="noopener noreferrer" aria-label={`RST on ${network}`} className="social-link"><Icon size={16}/></a>; })}</div>; }

export function Footer() { return <footer className="footer border-t border-border"><div className="site-container"><div className="grid gap-10 pb-12 md:grid-cols-[2fr_1fr_1.4fr]"><div><Link to="/" className="logo-link"><img className="brand-logo" src={logo} width={388} height={265} alt="Response Spectrum Trading" loading="lazy" /></Link><p className="mt-4 text-sm font-semibold">{company.positioning}</p><p className="body-copy mt-2 max-w-sm">{company.summary}</p><SocialLinks className="mt-5"/></div><div><h3 className="mb-5 text-sm">Quick links</h3><nav className="flex flex-col gap-3 text-xs text-muted-foreground" aria-label="Footer navigation">{links.map(link => <Link key={link.to} to={link.to}>{link.label}</Link>)}</nav></div><div><h3 className="mb-5 text-sm">Get in touch</h3><p className="mb-4 flex items-start gap-2 text-xs text-muted-foreground"><MapPin size={15} className="mt-0.5 shrink-0"/><span>{contact.address}</span></p><a className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary" href={`mailto:${contact.email}`}><Mail size={15} className="shrink-0"/><span>{contact.email}</span></a><p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground"><Phone size={15} className="shrink-0"/><span>{contact.phones.join(' / ')}</span></p></div></div><div className="flex flex-wrap justify-between gap-4 border-t border-border py-6 text-[10px] text-muted-foreground"><p>© 2026 Response Spectrum Trading PLC. All rights reserved.</p><p>Images marked “illustrative” are placeholders, not RST project photographs.</p></div></div></footer>; }

export function Eyebrow({children}:{children:React.ReactNode}) { return <div className="eyebrow">{children}</div>; }
export function PageIntro({title, label, description, image}:{title:string;label:string;description:string;image?:string}) { return <section className={image ? 'page-intro page-intro-image' : 'page-intro'}>{image && <img src={image} alt="" aria-hidden width={1600} height={1008}/>}<div className="site-container relative z-[1]"><Eyebrow>{label}</Eyebrow><h1>{title}</h1><p className="body-copy">{description}</p></div></section>; }
export function ContactCTA() { return <section className="cta-band"><div className="site-container grid items-center gap-8 md:grid-cols-[1fr_auto]"><div><h2 className="text-3xl">Planning Your Next Project?</h2><p className="mt-4 text-sm opacity-75">Connect with RST to discuss your building, engineering, or infrastructure consultancy requirements.</p></div><Button asChild size="lg"><Link to="/contact">Contact Us <ArrowUpRight/></Link></Button></div></section>; }
export function TextLink({to,children}:{to:To;children:React.ReactNode}) { return <Link to={to} className="text-link">{children}<ArrowRight size={16}/></Link>; }

export function ServiceList() { return <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">{services.map(({title,description,icon:Icon,image},i) => <article className="service-row" key={title}><div className="service-thumb"><img src={image} alt="" aria-hidden width={1600} height={1008} loading="lazy"/></div><div className="p-7"><div className="flex items-center justify-between"><Icon className="service-icon"/><span className="text-xs text-muted-foreground">{String(i+1).padStart(2,'0')}</span></div><h3>{title}</h3><p className="body-copy">{description}</p></div></article>)}</div>; }

//function PhotoLabel({ project }: { project: Project }) { return project.photo === 'verified' ? <a href={project.photoSource} target="_blank" rel="noreferrer" className="photo-label hover:text-primary" onClick={e => e.stopPropagation()}>Photo: {project.photoCredit} <ArrowUpRight size={10}/></a> : <span className="photo-label">Illustrative image</span>; }

/** Editorial card used on the homepage; links to the project's entry on /projects. */
export function ProjectTile({ project, large = false }: { project: Project; large?: boolean }) { return <Link to="/projects" hash={project.slug} className={`project-tile ${large ? 'project-tile-large' : ''}`}><img src={project.image} alt={project.imageAlt} width={1600} height={1008} loading="lazy"/><div className="project-tile-overlay"><p className="project-category text-hero-foreground/80">{project.category}</p><h3>{project.name}</h3><p className="mt-2 line-clamp-2 text-xs opacity-80">{project.description}</p></div><span className="photo-badge">{project.photo === 'verified' ? 'Project photo' : 'Illustrative'}</span></Link>; }

export function ProjectGallery({ items, onOpen }: { items: Project[]; onOpen: (p: Project) => void }) { return <div className="gallery">{items.map((project, i) => <button type="button" id={project.slug} key={project.slug} onClick={() => onOpen(project)} className={`gallery-item ${i % 5 === 0 ? 'gallery-tall' : ''}`} aria-label={`Open details for ${project.name}`}><div className="gallery-media"><img src={project.image} alt={project.imageAlt} width={1600} height={1008} loading="lazy"/><div className="gallery-hover"><span className="text-xs">View details <ArrowUpRight size={12} className="inline"/></span></div><span className="photo-badge">{project.photo === 'verified' ? 'Project photo' : 'Illustrative'}</span></div><p className="project-category">{project.category}</p><h3 className="text-base">{project.name}</h3></button>)}</div>; }

export function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) { return <Dialog open={!!project} onOpenChange={o => !o && onClose()}><DialogContent className="max-w-3xl gap-0 overflow-hidden p-0">{project && <><img src={project.image} alt={project.imageAlt} className="aspect-[16/9] w-full object-cover" width={1600} height={1008}/><div className="p-7"><p className="project-category mt-0">{project.category}</p><DialogTitle className="text-2xl">{project.name}</DialogTitle><DialogDescription className="body-copy mt-4">{project.description}</DialogDescription><p className="mt-5 text-[11px] text-muted-foreground"><PhotoLabel project={project}/>{project.photo === 'illustrative' && ' — not a photograph of this project. Site photos will replace it.'}</p></div></>}</DialogContent></Dialog>; }

const AUTOPLAY_MS = 6000;
export type Slide = { label: string; title: string; text: string; cta: string; to: To; image: string; imageAlt: string; credit?: string };

export function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [slides.length]);

  const go = (i: number) => { setIndex((i + slides.length) % slides.length); };

  return (
    <section className="relative h-[82vh] sm:h-[88vh] min-h-[580px] w-full overflow-hidden bg-black text-white" aria-roledescription="carousel" aria-label="Featured">
      {/* Slide Background Images */}
      {slides.map((s, i) => (
        <div
          key={s.title}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={s.image}
            alt={i === index ? s.imageAlt : ''}
            aria-hidden={i !== index}
            width={1600}
            height={1008}
            className="h-full w-full object-cover object-center scale-105 transition-transform duration-10000 ease-out"
            fetchPriority={i === 0 ? 'high' : 'low'}
          />
          {/* Subtle Dual Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
        </div>
      ))}

      {/* Centered Punchy Content */}
      <div className="relative z-20 flex h-full items-center justify-center pb-12 sm:pb-16" aria-live="polite">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          {slides.map((s, i) => i === index && (
            <div key={s.title} className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-3 duration-700">
              
              {/* 2 Sleek Minimal Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3.5 py-1 text-[10px] sm:text-xs font-black uppercase tracking-widest text-white border border-white/20 backdrop-blur-md shadow-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Grade One Consultancy
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3.5 py-1 text-[10px] sm:text-xs font-black uppercase tracking-widest text-primary border border-primary/40 backdrop-blur-md shadow-md">
                  18+ Years Engineering Precision
                </span>
              </div>

              {/* Punchy Centered Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] drop-shadow-md">
                {s.title}
              </h1>

              {/* Short Subtitle */}
              <p className="mt-3 sm:mt-4 text-xs sm:text-base text-white/85 font-medium leading-relaxed max-w-xl mx-auto drop-shadow-sm">
                {s.text}
              </p>

              {/* Action Button */}
              <div className="mt-6 sm:mt-8">
                <Button asChild size="lg" className="rounded-2xl px-8 py-3.5 text-xs font-black uppercase tracking-widest shadow-2xl transition-all hover:scale-105">
                  <Link to={s.to}>
                    {s.cta} <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Strip (Minimal & Clean) */}
      <div className="absolute bottom-5 sm:bottom-8 left-0 right-0 z-30">
        <div className="site-container flex items-center justify-between gap-4">
          {/* Slide Dots */}
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}: ${s.label}`}
                className={`transition-all duration-300 rounded-full h-2 ${
                  i === index
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-white/40 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          {/* Controls & Designation */}
          <div className="flex items-center gap-3 text-xs text-white/70">
            <span className="hidden sm:inline font-bold text-[10px] uppercase tracking-widest text-white/60">
              Response Spectrum Trading PLC
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all hover:bg-primary hover:border-primary active:scale-95"
                onClick={() => go(index - 1)}
                aria-label="Previous slide"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all hover:bg-primary hover:border-primary active:scale-95"
                onClick={() => go(index + 1)}
                aria-label="Next slide"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}