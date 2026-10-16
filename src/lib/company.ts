/**
 * RST website content — the single place to edit company details, services,
 * projects, images and social links. Layouts read everything from here.
 *
 * IMAGES: every project points at one file in src/assets. To use a real site
 * photo later, drop the file in src/assets, change the import below, and set
 * `photo: 'verified'` with its credit. Placeholder images are marked
 * `photo: 'illustrative'` and the site labels them as such — never mark a
 * placeholder as verified.
 */
import { Building2, Ruler, Layers, HardHat, ClipboardCheck, Waypoints, Waves, Factory } from 'lucide-react';
// Verified real project photographs (credited to their sources)
import noc from '@/assets/noc-head-office.jpg';
import goldenStar from '@/assets/golden-star.jpg';
import oromiaMedia from '@/assets/oromia-media.jpg';
// Illustrative placeholders — replace with client site photos when supplied
import imgOffice from '@/assets/placeholder-office.jpg';
import imgResidential from '@/assets/placeholder-residential.jpg';
import imgInstitutional from '@/assets/placeholder-institutional.jpg';
import imgIndustrial from '@/assets/placeholder-industrial.jpg';
import imgFuel from '@/assets/placeholder-fuel-station.jpg';
import imgDam from '@/assets/placeholder-dam.jpg';
import imgBridge from '@/assets/placeholder-bridge.jpg';
import imgConstruction from '@/assets/placeholder-construction.jpg';
import imgHero from '@/assets/architecture-hero.jpg';
import imgCivic from '@/assets/civic-building.jpg';
import slide5Image from '@/assets/slide-5.jpg';
import slide6Image from '@/assets/slide-6.jpg';
import slide7Image from '@/assets/slide-7.jpg';
import imgApartmentBuilding from '@/assets/apartmentbldg.jpg';
import imgMattsRealEstate from '@/assets/mattsrealestate.jpg';
import imgGenzebedibaba from '@/assets/genzebedibaba.jpg';
import imgOmoriaSC from '@/assets/oromiaSC.png';

export const images = { office: imgOffice, residential: imgResidential, institutional: imgInstitutional, industrial: imgIndustrial, fuel: imgFuel, dam: imgDam, bridge: imgBridge, construction: imgConstruction, hero: imgHero, civic: imgCivic, noc, goldenStar, oromiaMedia, slide5: slide5Image, slide6: slide6Image, slide7: slide7Image, apartmentBuilding: imgApartmentBuilding, mattsRealEstate: imgMattsRealEstate, genzebedibaba: imgGenzebedibaba, omoriaSC: imgOmoriaSC };

export const company = {
  name: 'Response Spectrum Trading PLC',
  short: 'RST',
  positioning: 'Building and Infrastructure Consultancy',
  summary: 'Building consultancy and engineering expertise across architectural design, structural engineering, construction management, construction supervision, and contract administration.',
};

export const contact = {
  address: 'Addis Ababa 22, H & M Building, Ethiopia',
  email: 'Responsespectrum171717@gmail.com',
  phones: ['0911249387', '0912249747'],
};

/**
 * Social profiles. Leave a URL empty ('') until the official profile is
 * supplied — empty links are hidden everywhere on the site.
 */
export const socialLinks: { network: 'Facebook' | 'LinkedIn' | 'Instagram' | 'YouTube'; url: string }[] = [
  { network: 'Facebook', url: '' },  // TODO: official Facebook page URL
  { network: 'LinkedIn', url: '' },  // TODO: official LinkedIn company URL
  { network: 'Instagram', url: '' }, // TODO: official Instagram URL
  { network: 'YouTube', url: '' },   // TODO: official YouTube URL, if any
];
export const activeSocialLinks = () => socialLinks.filter(link => link.url.trim() !== '');

export const services = [
  { title: 'Architectural Design', icon: Building2, image: imgHero, description: 'Architectural planning and building design for residential, commercial, office, mixed-use, institutional, and other building projects.' },
  { title: 'Structural Engineering', icon: Ruler, image: imgConstruction, description: 'Structural design, structural design revision, engineering coordination, and structural investigation where required.' },
  { title: 'Building Consultancy and Engineering', icon: Layers, image: imgCivic, description: 'Multidisciplinary consultancy incorporating architectural, structural, electrical, mechanical, and sanitary engineering disciplines.' },
  { title: 'Construction Management and Supervision', icon: HardHat, image: imgConstruction, description: 'Construction-phase oversight, site coordination, quality monitoring, progress supervision, and checking work against approved designs and specifications.' },
  { title: 'Contract Administration', icon: ClipboardCheck, image: imgOffice, description: 'Support with construction contract administration, contractual requirements, documentation, and project delivery processes.' },
  { title: 'Project Management', icon: Waypoints, image: imgResidential, description: 'Project planning, design and procurement coordination, stakeholder communication, and monitoring of time, cost, quality, and safety.' },
  { title: 'Infrastructure and Water-Related Structures', icon: Waves, image: imgDam, description: 'Engineering consultancy experience associated with dams and related structures, including spillways, intake structures, and other water infrastructure.' },
  { title: 'Industrial and Specialized Structures', icon: Factory, image: imgIndustrial, description: 'Design and engineering consultancy for industrial facilities, factories, fuel stations, and other specialized structures.' },
];

export const expertise = [
  { title: 'Architectural and building design', image: imgHero, text: 'Buildings planned around function, quality, and lasting value.' },
  { title: 'Structural engineering', image: imgConstruction, text: 'Structural design, revision, and investigation.' },
  { title: 'Construction management and supervision', image: imgCivic, text: 'Site oversight against approved designs and specifications.' },
  { title: 'Contract administration', image: imgOffice, text: 'Contractual coordination, documentation, and delivery processes.' },
  { title: 'Project management', image: imgResidential, text: 'Planning and monitoring of time, cost, quality, and safety.' },
  { title: 'Infrastructure and water-related structures', image: imgDam, text: 'Dam-related structures, spillways, and intake works.' },
];

export const categories = ['All Projects', 'Commercial and Office Buildings', 'Residential and Mixed-Use Buildings', 'Institutional Buildings', 'Industrial Projects', 'Infrastructure and Water Projects'] as const;
export type Category = typeof categories[number];

export type Project = {
  slug: string; name: string; category: Exclude<Category, 'All Projects'>; description: string;
  image: string; imageAlt: string;
  photo: 'verified' | 'illustrative';
  photoCredit?: string; photoSource?: string;
};

const C = 'Commercial and Office Buildings', R = 'Residential and Mixed-Use Buildings', I = 'Institutional Buildings', N = 'Industrial Projects', W = 'Infrastructure and Water Projects';
const ill = (image: string, imageAlt: string) => ({ image, imageAlt: `${imageAlt} (illustrative image)`, photo: 'illustrative' as const });

export const projects: Project[] = [
  // image: src/assets/noc-head-office.jpg (verified)
  { slug: 'noc-head-office', name: 'National Oil Ethiopia (NOC) Head Office', category: C, description: 'A major office development. RST’s documented assignment includes design, construction supervision, and contract administration. The company profile describes the project as completed.', image: noc, imageAlt: 'National Oil Ethiopia headquarters with its curved glass tower', photo: 'verified', photoCredit: 'LESSO Ethiopia', photoSource: 'https://lessoethiopia.com/index.php/projects' },
  // image: src/assets/placeholder-office.jpg
  { slug: 'noc-parking-office', name: 'NOC Parking and Office Building', category: C, description: 'A parking and office development associated with National Oil Ethiopia. The profile lists design, construction supervision, and contract administration.', ...ill(imgOffice, 'Modern office building') },
  // image: src/assets/golden-star.jpg (verified)
  { slug: 'golden-star', name: 'Golden Star Mall and Office Complex', category: C, description: 'A large commercial development combining mall and office functions. RST’s documented assignment includes design, construction supervision, and contract administration.', image: goldenStar, imageAlt: 'Golden Star Building photographed during construction', photo: 'verified', photoCredit: 'EASE Engineering · Construction photo', photoSource: 'https://ease-int.com/projects/golden-star-building/' },
  // image: src/assets/placeholder-office.jpg
  { slug: 'nyala-insurance-hq', name: 'Nyala Insurance Headquarters', category: C, description: 'An office headquarters project. The profile describes RST’s involvement in construction supervision and contract administration.', ...ill(slide6Image, 'Glass office headquarters tower') },
  // image: src/assets/oromia-media.jpg (verified)
  { slug: 'oromia-media-complex', name: 'Oromia Media Complex', category: I, description: 'A large media complex. The documented assignment includes structural design-related work, construction supervision, and contract administration in association with other consultants.', image: oromiaMedia, imageAlt: 'Oromia Media Complex, the glass-fronted OBN headquarters in Addis Ababa', photo: 'verified', photoCredit: 'BES Consultants', photoSource: 'https://besconsultants.net/blogs/projects/media-complex-ethiopia' },
  // image: src/assets/placeholder-residential.jpg
  { slug: 'samket-mall', name: 'Samket Mall', category: C, description: 'A commercial development listed in the company profile, with design and construction consultancy involvement.', ...ill(imgResidential, 'Mixed-use building with shops at street level') },
  // image: src/assets/placeholder-residential.jpg
  { slug: 'pecan-mixed-use', name: 'Mixed-Use Building, Pecan Building Rental', category: R, description: 'A mixed-use building project listed in the company profile, with design and construction consultancy services.', ...ill(imgResidential, 'Mixed-use building') },
  // image: src/assets/placeholder-institutional.jpg
  { slug: 'oromia-supreme-court', name: 'Oromia Supreme Court', category: I, description: 'An institutional building. RST’s documented involvement includes structural design-related services, construction supervision, and contract administration in association with other consultants.', ...ill(imgOmoriaSC, 'Civic court building with columns') },
  // image: src/assets/civic-building.jpg
  { slug: 'sebeta-municipality', name: 'Sebeta Municipality Building', category: I, description: 'A municipal office development listed in the company profile, with design and supervision-related involvement.', ...ill(imgCivic, 'Contemporary civic building') },
  // image: src/assets/architecture-hero.jpg
  { slug: 'oromia-administration-complex', name: 'Oromia Administration Complex', category: I, description: 'A proposed administration complex included in the company profile, presented here as design-stage work.', ...ill(imgHero, 'Contemporary building architecture') },
  // image: src/assets/placeholder-residential.jpg
  { slug: 'shaka-real-estate', name: 'Shaka Real Estate', category: R, description: 'A real estate development comprising multiple building blocks, with structural and building consultancy experience.', ...ill(imgResidential, 'Residential apartment blocks') },
  // image: src/assets/placeholder-construction.jpg
  { slug: 'matts-real-estate', name: 'MATTS Real Estate', category: R, description: 'A residential building project listed in the company profile, with design, construction supervision, and contract administration.', ...ill(imgMattsRealEstate, 'Residential building under construction') },
  // image: src/assets/placeholder-residential.jpg
  { slug: 'tinsae-apartments', name: 'Tinsae Real Estate Apartment Project', category: R, description: 'A multi-storey apartment development listed in the company profile, with design and consultancy involvement.', ...ill(imgResidential, 'Multi-storey apartment building') },
  // image: src/assets/placeholder-office.jpg
  { slug: 'genzebe-dibaba-mall', name: 'Genzebe Dibaba Mall and Apartment', category: R, description: 'A mixed-use mall and apartment project included in the company profile.', ...ill(imgGenzebedibaba, 'Mixed-use tower') },
  // image: src/assets/placeholder-construction.jpg
  { slug: 'walelign-apartments', name: 'Walelign Real Estate Apartment Building', category: R, description: 'A residential apartment development listed in the company profile.', ...ill(imgApartmentBuilding, 'Apartment building under construction') },
  // image: src/assets/architecture-hero.jpg
  { slug: 'alemayehu-hotel', name: 'Ato Alemayehu Hotel', category: R, description: 'A hotel project with design and construction consultancy involvement described in the company profile.', ...ill(imgHero, 'Modern hotel architecture') },
  // image: src/assets/placeholder-industrial.jpg
  { slug: 'bright-paints-factory', name: 'Bright Paints Factory', category: N, description: 'An industrial project listed in the company profile, with design and construction consultancy services.', ...ill(imgIndustrial, 'Industrial factory building') },
  // image: src/assets/placeholder-industrial.jpg
  { slug: 'water-bottling-factory', name: 'Water Bottling Factory', category: N, description: 'A factory project included in the company profile.', ...ill(imgIndustrial, 'Factory building') },
  // image: src/assets/placeholder-industrial.jpg
  { slug: 'hangtong-wood-plant', name: 'Hangtong Wood Processing Plant', category: N, description: 'An industrial facility listed in the company profile, with design-related work.', ...ill(imgIndustrial, 'Industrial processing plant') },
  // image: src/assets/placeholder-fuel-station.jpg — replace with client fuel station photos
  { slug: 'fuel-station-designs', name: 'Fuel Station Designs', category: N, description: 'Design work for fuel stations. Project photographs from the client will be added here.', ...ill(imgFuel, 'Fuel station canopy') },
  // image: src/assets/placeholder-dam.jpg
  { slug: 'gidado-dam', name: 'Gidado Dam Project', category: W, description: 'A dam project identified in the company profile as being undertaken in collaboration with WWDSE.', ...ill(imgDam, 'Concrete dam with spillway') },
  // image: src/assets/placeholder-dam.jpg
  { slug: 'kesem-tendaho-arjo', name: 'Kesem, Tendaho, and Arjo-Dhidessa Dam-Related Works', category: W, description: 'The profile references intake tower, spillway, and dam-related structural work associated with these projects — specific structures, not delivery of the entire dams.', ...ill(imgDam, 'Dam intake tower and spillway') },
  // image: src/assets/placeholder-bridge.jpg
  { slug: 'bridges-infrastructure', name: 'Bridges and Infrastructure', category: W, description: 'A portfolio category for bridge and infrastructure consultancy. Verified project details and site photographs will be added when supplied.', ...ill(imgBridge, 'Concrete bridge over a river') },
  // image: src/assets/placeholder-dam.jpg
  { slug: 'intake-spillways', name: 'Intake Structures and Spillways', category: W, description: 'Water intake structures and spillways, drawing on the dam-related works referenced in the company profile.', ...ill(imgDam, 'Spillway and intake structure') },
  // image: src/assets/placeholder-construction.jpg
  { slug: 'minjar-maryam', name: 'Minjar Maryam Structural and Supervision Works', category: W, description: 'Structural engineering and construction supervision works.', ...ill(imgConstruction, 'Structural works on site') },

];

export const featuredSlugs = ['noc-head-office', 'golden-star', 'oromia-supreme-court', 'oromia-media-complex', 'noc-parking-office', 'nyala-insurance-hq', 'sebeta-municipality', 'gidado-dam'];
export const featuredProjects = () => featuredSlugs.map(slug => projects.find(p => p.slug === slug)!);

export function filterProjects(category: Category) { return category === 'All Projects' ? projects : projects.filter(project => project.category === category); }
export function pageHead(title: string, description: string) { return { meta: [{ title: `${title} | Response Spectrum Trading PLC` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Response Spectrum Trading PLC` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }; }
