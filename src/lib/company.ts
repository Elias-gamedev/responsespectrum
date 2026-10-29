/**
 * RST website content — the single place to edit company details, services,
 * projects, images and social links. Layouts read everything from here.
 */
import { Building2, Ruler, Layers, HardHat, ClipboardCheck, Waypoints, Waves, Factory } from 'lucide-react';

// Verified real project photographs & custom assets
import noc from '@/assets/noc-head-office .jpg';
import goldenStar from '@/assets/golden-star.jpg';
import oromiaMedia from '@/assets/oromia-media.jpg';

// Illustrative placeholders & custom assets
import imgOffice from '@/assets/placeholder-office.jpg';
import imgResidential from '@/assets/tinsaerealestate.png';
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
import imgOfficeDesign from '@/assets/officedesign.jpg';
import imgStructuraldesign from '@/assets/images (3).jpg';
import imgConstman from '@/assets/constman.png';
import imgslidepicapartment from '@/assets/slidepicapartment.jpg';
import imgOromiamediacomplex from '@/assets/oromiamediacomplex.jpg';
import logo1 from '@/assets/noclogo.jpg';
import logo2 from '@/assets/oromiacourtlogo.png';
import logo4 from '@/assets/mattsrealestatelogo.png';
import logo3 from '@/assets/nyalainsulogo.jpg';
import Mixeduse from '@/assets/apartmentpic.jpg';
import shakaRS from '@/assets/shakaRS.jpg';
import imgSebeta from '@/assets/sebetaMC.jpg';
import imgOromiaAC from '@/assets/OromiaAC.jpg';
import imgGojammed from '@/assets/gojammed.jpg';
import imgficheG from '@/assets/ficheG.jpg';
import archdesign from '@/assets/archdesign.jpg';
import contractadmin from '@/assets/contractadmin.jpg';
import ECGlogo from '@/assets/ECGlogo.jpg';
import Sutherlandlogo from '@/assets/Sutherlandlogo.jpg';
import dhklogo from '@/assets/dhklogo.jpg';
import SVAlogo from '@/assets/SVAlogo.jpg';
import BESlogo from '@/assets/BESlogo.png';










export const images = { 
  noclogo: logo1, 
  oromiacourtlogo: logo2, 
  mattsrealestatelogo: logo4, 
  nyalalogo: logo3, 
  office: imgOffice, 
  residential: imgResidential, 
  institutional: imgInstitutional, 
  industrial: imgIndustrial, 
  fuel: imgFuel, 
  dam: imgDam, 
  bridge: imgBridge, 
  construction: imgConstruction, 
  hero: imgHero, 
  civic: imgCivic, 
  noc, 
  goldenStar, 
  oromiaMedia, 
  slide5: slide5Image, 
  slide6: slide6Image, 
  slide7: slide7Image, 
  apartmentBuilding: imgApartmentBuilding, 
  mattsRealEstate: imgMattsRealEstate, 
  genzebedibaba: imgGenzebedibaba, 
  omoriaSC: imgOmoriaSC, 
  officeDesign: imgOfficeDesign, 
  structuraldesign: imgStructuraldesign, 
  constman: imgConstman, 
  slidepicapartment: imgslidepicapartment ,
  imgMixeduse: Mixeduse ,
  imgshakaRS: shakaRS,
  Oromiamediacomplex:imgOromiamediacomplex,
  imgECGlogo: ECGlogo,
  imgSutherland: Sutherlandlogo,
  imgDHk: dhklogo,
  imgSVA: SVAlogo,
  imgBESlogo:BESlogo,

};

export const company = {
  name: 'Response Spectrum Trading PLC',
  short: 'RST',
  positioning: 'Building and Infrastructure Consultancy',
  summary: 'Grade One Building Consulting Company delivering architectural design, structural engineering, construction management, supervision, and contract administration.',
};

export const contact = {
  address: 'Addis Ababa 22, H & M Building, Ethiopia',
  email: 'Responsespectrum171717@gmail.com',
  phones: ['0911249387', '0912249747'],
};

/**
 * Social profiles. Leave a URL empty ('') until the official profile is supplied.
 */
export const socialLinks: { network: 'Facebook' | 'LinkedIn' | 'Instagram' | 'YouTube'; url: string }[] = [
  { network: 'Facebook', url: '' },
  { network: 'LinkedIn', url: '' },
];
export const activeSocialLinks = () => socialLinks.filter(link => link.url.trim() !== '');

/**
 * Partner logo slider
 */
export const partners = [
  { name: 'National Oil Ethiopia (NOC)', image: logo1 },
  { name: 'ECG', image: images.imgECGlogo },
  { name: 'Oromia Media Complex', image: logo2 },
  { name: 'DHK', image: images.imgDHk },
  { name: 'Nyala Insurance', image: logo3 },
  { name: 'Sutherland', image: images.imgSutherland },
  { name: 'Matts Real estate', image: logo4 },
  { name: 'ECG', image: images.imgECGlogo },
  { name: 'Sutherland', image: images.imgSutherland },
  { name: 'BES', image: images.imgBESlogo },
  
];

/*keyteam members */

export type TeamMember = {
  name: string;
  position: string;
  qualification: string;
  assignment: string;
  isLeadership?: boolean;
};

export const keyPersonnel: TeamMember[] = [
  {
    name: 'Ashenafi Shiferaw',
    position: 'General Manager & Principal Structural Engineer',
    qualification: 'PhD, MSc in Structural Engineering',
    assignment: 'Practicing Professional Structural Engineer & Manager of the Company. Senior Structural Lead, Coordinator of Architectural & Engineering Teams, Overall Supervision & Quality Sign-Off.',
    isLeadership: true,
  },
  {
    name: 'Meron Wondafrash',
    position: 'Senior Structural Engineer & Technical Lead',
    qualification: 'PhD, MSc in Structural Engineering',
    assignment: 'Practicing Professional Structural Engineer. Structural Engineering Design, Structural Revisions, and Project Technical Oversight.',
    isLeadership: true,
  },
  {
    name: 'Hahu Baharu',
    position: 'Lead Architect',
    qualification: 'MSc, BSc in Architecture & Town Planning',
    assignment: 'Practicing Professional Architect. Architectural Planning, Master Planning, Spatial Concepts & Exterior Design.',
    isLeadership: true,
  },
];

export const organizationalDepartments = [
  {
    name: 'General Manager',
    roles: ['Overall Company Management & Strategic Oversight'],
  },
  {
    name: 'Design Team',
    roles: [
      'Project Coordinator',
      'Architects',
      'Structural Engineers',
      'Mechanical Engineers',
      'Sanitary Engineers',
    ],
  },
  {
    name: 'Contract Administration & Supervision',
    roles: [
      'Project Manager',
      'Contract Engineer',
      'Quantity Surveyor',
      'Office Engineer',
      'Resident Engineer',
      'Assistant Resident Engineer',
      'Surveyor',
    ],
  },
  {
    name: 'Financial Department',
    roles: ['Financial Management & Project Cost Control'],
  },
];

export const services = [
  { title: 'Architectural Design', icon: Building2, image: archdesign, description: 'Architectural planning and building design for residential, commercial, office, mixed-use, institutional, and other building projects.' },
  { title: 'Structural Engineering', icon: Ruler, image: imgStructuraldesign, description: 'Structural design, structural design revision, engineering coordination, and structural investigation where required.' },
  { title: 'Building Consultancy and Engineering', icon: Layers, image: imgCivic, description: 'Multidisciplinary consultancy incorporating architectural, structural, electrical, mechanical, and sanitary engineering disciplines.' },
  { title: 'Construction Management and Supervision', icon: HardHat, image: imgConstman, description: 'Construction-phase oversight, site coordination, quality monitoring, progress supervision, and checking work against approved designs and specifications.' },
  { title: 'Contract Administration', icon: ClipboardCheck, image: contractadmin, description: 'Support with construction contract administration, contractual requirements, documentation, and project delivery processes.' },
  { title: 'Project Management', icon: Waypoints, image: imgResidential, description: 'Project planning, design and procurement coordination, stakeholder communication, and monitoring of time, cost, quality, and safety.' },
  { title: 'Infrastructure and Water-Related Structures', icon: Waves, image: imgDam, description: 'Engineering consultancy experience associated with dams and related structures, including spillways, intake structures, and other water infrastructure.' },
  { title: 'Industrial and Specialized Structures', icon: Factory, image: imgIndustrial, description: 'Design and engineering consultancy for industrial facilities, factories, fuel stations, and other specialized structures.' },
  { title: 'Interior Design', icon: Waypoints, image: imgOfficeDesign, description: 'Design and engineering consultancy for interior design, including office spaces, apartments, and other commercial spaces.' },
  { title: 'Apartment Design', icon: Building2, image: imgApartmentBuilding, description: 'Design and engineering consultancy for apartment design, including apartment buildings, apartments, and other residential spaces.' },
  {
    id: 'facade-design',
    title: 'Facade Design & Supervision',
    subtitle: 'Building Enclosure & Exterior Architectural Engineering',
    description: 'From concept to design development and finally to installation and delivery. We engineer aesthetic, structural, and high-performance exterior building envelopes.',
    icon: ClipboardCheck, // or your preferred Lucide/custom icon component
    features: [
      'Conceptual Exterior Architectural Design',
      'Detailed Design Development & Engineering',
      'Structural & Material Specification Oversight',
      'On-Site Installation Supervision & Quality Control',
      'Final Envelope Delivery & Compliance Check',
    ],
    image: imgGenzebedibaba
  },
];

export const expertise = [
  { title: 'Architectural and building design', image: imgHero, text: 'Buildings planned around function, quality, and lasting value.' },
  { title: 'Structural engineering', image: imgOromiaAC, text: 'Structural design, revision, and investigation.' },
  { title: 'Construction management and supervision', image: imgCivic, text: 'Site oversight against approved designs and specifications.' },
  { title: 'Contract administration', image: contractadmin, text: 'Contractual coordination, documentation, and delivery processes.' },
  { title: 'Project management', image: imgConstman, text: 'Planning and monitoring of time, cost, quality, and safety.' },
  { title: 'Infrastructure and water-related structures', image: imgDam, text: 'Dam-related structures, spillways, and intake works.' },
];

export const categories = [
  'All Projects', 
  'Commercial and Office Buildings', 
  'Residential and Mixed-Use Buildings', 
  'Institutional Buildings', 
  'Industrial Projects', 
  'Infrastructure and Water Projects',
  'Religious and Cultural Projects'
] as const;
export type Category = typeof categories[number];

export type Project = {
  slug: string; 
  name: string; 
  category: Exclude<Category, 'All Projects'>; 
  description: string;
  image: string; 
  imageAlt: string;
  cost?: string;
  size?: string;
  status?: string;
  assignment?: string;
  assignmentTags?: string[];
};

const C = 'Commercial and Office Buildings', R = 'Residential and Mixed-Use Buildings', I = 'Institutional Buildings', N = 'Industrial Projects', W = 'Infrastructure and Water Projects', REL = 'Religious and Cultural Projects';
const ill = (image: string, imageAlt: string) => ({ image, imageAlt: `${imageAlt} (image)`, photo: 'image' as const });

export const projects: Project[] = [
  { 
    slug: 'noc-head-office', 
    name: 'National Oil Ethiopia (NOC) Head Office', 
    category: C, 
    description: 'Completed corporate headquarters (3B+G+M+16+Roof Terrace, 21,500 m2 built-up area). Introduced the use of inclined columns for at least three floors for the first time in the country. Assignment: Design, construction supervision, and contract administration.', 
    image: slide5Image, 
    imageAlt: 'National Oil Ethiopia headquarters with its curved glass tower', 
    cost: '1.5 Billion ETB',
    size: '3B+G+M+16 (21,500 m2)',
    status: 'Completed & Delivered'
  },
  { 
    slug: 'noc-parking-office', 
    name: 'NOC Parking and Office Building', 
    category: C, 
    description: 'Parking and office development project (3B+G+M+17+Roof Terrace, 25,650 m2 built-up area) featuring post-tension slabs with 10 to 12-meter spans. Assignment: Design, construction supervision, and contract administration.', 
    ...ill(imgOffice, 'Modern office building'),
    cost: '2.4 Billion ETB',
    size: '3B+G+M+17 (25,650 m2)',
    status: 'Under Construction'
  },
  { 
    slug: 'golden-star', 
    name: 'Golden Star Mall and Office Complex', 
    category: C, 
    description: 'Large commercial development combining mall and office functions (4B+G+24+Roof Terrace, 28,000 m2) featuring post-tension slabs with 8 to 12-meter spans. Assignment: Design, construction supervision, and contract administration.', 
    image: goldenStar, 
    imageAlt: 'Golden Star Building photographed during construction', 

    cost: '4.4 Billion ETB',
    size: '4B+G+24 (28,000 m2)',
    status: 'Under Construction'
  },
  { 
    slug: 'nyala-insurance-hq', 
    name: 'Nyala Insurance Headquarters', 
    category: C, 
    description: 'Corporate office headquarters project (3B+G+19). Assignment: Construction supervision and contract administration.', 
    ...ill(slide6Image, 'Glass office headquarters tower'),
    cost: '3.1 Billion ETB',
    size: '3B+G+19',
    status: 'Under Construction'
  },
  { 
    slug: 'oromia-media-complex', 
    name: 'Oromia Media Complex', 
    category: I, 
    description: 'Major broadcasting complex (2B+G+12+Roof Terrace, 36,000 m2) featuring complex, column-free studios exceeding 600 m2. Assignment: Structural design revision and construction supervision in association with ECO.', 
    image: imgOromiamediacomplex, 
    imageAlt: 'Oromia Media Complex, the glass-fronted OBN headquarters in Addis Ababa', 
    cost: '5.4 Billion ETB',
    size: '2B+G+12 (36,000 m2)',
    status: 'Under Construction',
    assignmentTags: ['Structural Design Revision'," Construction Supervision "]
  },
  { 
    slug: 'samket-mall', 
    name: 'Samket Mall', 
    category: C, 
    description: 'Commercial development with design revision and construction supervision services.', 
    ...ill(Mixeduse, 'Mixed-use building with shops at street level'),
    cost: '350 Million ETB',
    status: 'Completed'
  },
  { 
    slug: 'pecan-mixed-use', 
    name: 'Mixed-Use Building', 
    category: R, 
    description: 'Mixed-use building project (B+G+9) with design, construction supervision, and contract administration.', 
    ...ill(Mixeduse, 'Mixed-use building'),
    cost: '420 Million ETB',
    size: 'B+G+9',
    status: 'Completed'
  },
  { 
    slug: 'oromia-supreme-court', 
    name: 'Oromia Supreme Court', 
    category: I, 
    description: 'Institutional headquarters featuring judge rooms and main entrances with over 20-meter spans (2B+G+14+Roof Terrace, 42,000 m2). Assignment: Structural design and construction supervision in association with ECO.', 
    ...ill(imgOmoriaSC, 'Civic court building with columns'),
    cost: '4.4 Billion ETB',
    size: '2B+G+14 (42,000 m2)',
    status: 'Under Construction'
  },
  { 
    slug: 'sebeta-municipality', 
    name: 'Sebeta Municipality Building', 
    category: I, 
    description: 'Municipal office development (2B+G+5+Roof Terrace, 11,000 m2).', 
    ...ill(imgSebeta, 'Sebeta Municipality structural engineering work'),
    cost: '540 Million ETB',
    size: '2B+G+5 (11,000 m2)',
    status: 'Finishing Work Under Progress',
    // MANUALLY EDIT YOUR TEXT & TAGS HERE:
    assignment: 'Structural engineering design',
    assignmentTags: ['Structural Design',]
  },
  { 
    slug: 'oil-factory', 
    name: 'Oil Factory', 
    category: N, 
    description: 'Industrial oil factory design project for Ato Belayneh Kinde. Assignment: Design.', 
    ...ill(imgIndustrial, 'Oil factory industrial plant'),
    cost: '230 Million ETB',
    status: 'Completed'
  },
  { 
    slug: 'lgs-magnesium-factory', 
    name: 'LGS & Magnesium Oxide Product Factory', 
    category: N, 
    description: 'Industrial manufacturing facility for Ybel Industrial Plc. Assignment: Design, construction supervision, and contract administration.', 
    ...ill(imgIndustrial, 'LGS and Magnesium Oxide Factory'),
    cost: '100 Million ETB',
    status: 'Completed'
  },
  { 
    slug: 'oromia-administration-complex', 
    name: 'Oromia Administration Complex', 
    category: I, 
    description: 'Proposed administration project (4B+G+21+Roof Terrace, 38,000 m2) featuring rhombus facade views and structural modeling. Assignment: Design supervision and contract administration in association with ECO.', 
    ...ill(imgOromiaAC, 'Contemporary building architecture'),
    cost: '6.4 Billion ETB',
    size: '4B+G+21 (38,000 m2)',
    status: 'Design Stage'
  },
  { 
    slug: 'shaka-real-estate', 
    name: 'Shaka Real Estate', 
    category: R, 
    description: 'Residential real estate development comprising seven blocks (G+8 each). Assignment: Design, construction supervision, and contract administration.', 
    ...ill(shakaRS, 'Residential apartment blocks'),
    cost: '2.5 Billion ETB',
    size: '7 Blocks (G+8)',
    status: 'Under Construction'
  },
  { 
    slug: 'matts-real-estate', 
    name: 'MATTS Real Estate', 
    category: R, 
    description: 'Residential apartment building project (3B+G+14+Roof Terrace, 18,000 m2). Assignment: Design revision, construction supervision, and contract administration.', 
    ...ill(imgMattsRealEstate, 'Residential building under construction'),
    cost: '900 Million ETB',
    size: '3B+G+14 (18,000 m2)',
    status: 'Under Construction'
  },
  { 
    slug: 'tinsae-apartments', 
    name: 'Tinsae Real Estate Apartment Project', 
    category: R, 
    description: 'Multi-storey apartment development (3B+G+19+Roof Terrace, 25,000 m2). Assignment: Design supervision and contract administration in association with Invent.', 
    ...ill(imgResidential, 'Multi-storey apartment building'),
    cost: '1.5 Billion ETB',
    size: '3B+G+19 (25,000 m2)',
    status: 'Under Construction'
  },
  { 
    slug: 'genzebe-dibaba-mall', 
    name: 'Genzebe Dibaba Mall and Apartment', 
    category: R, 
    description: 'Mixed-use mall and apartment project in Legetafo (1B+G+4+Roof Terrace, 8,000 m2). Assignment: Structural design in association with Zedor.', 
    ...ill(imgGenzebedibaba, 'Mixed-use tower'),
    cost: '150 Million ETB',
    size: '1B+G+4 (8,000 m2)',
    status: 'Under Construction'
  },
  { 
    slug: 'walelign-apartments', 
    name: 'Walelign Real Estate Apartment Building', 
    category: R, 
    description: 'Residential apartment development (1B+G+5+Roof Terrace, 3,000 m2). Assignment: Design supervision and contract administration.', 
    ...ill(imgApartmentBuilding, 'Apartment building under construction'),
    cost: '300 Million ETB',
    size: '1B+G+5 (3,000 m2)',
    status: 'Under Construction'
  },
  { 
    slug: 'alemayehu-hotel', 
    name: 'Ato Alemayehu Hotel', 
    category: R, 
    description: 'Hotel project featuring custom zig-zag balcony structures (2B+G+9+Roof Terrace, 13,000 m2). Assignment: Structural design supervision and contract administration.', 
    ...ill(imgHero, 'Modern hotel architecture'),
    cost: '800 Million ETB',
    size: '2B+G+9 (13,000 m2)',
    status: 'Finishing Work Under Progress'
  },
  { 
    slug: 'bright-paints-factory', 
    name: 'Bright Paints Factory', 
    category: N, 
    description: 'Industrial facility project. Assignment: Design, construction supervision, and contract administration.', 
    ...ill(imgIndustrial, 'Industrial factory building'),
    cost: '58 Million ETB',
    status: 'Completed'
  },
  { 
    slug: 'water-bottling-factory', 
    name: 'Water Bottling Factory', 
    category: N, 
    description: 'Industrial manufacturing facility. Assignment: Design, construction, and supervision.', 
    ...ill(imgIndustrial, 'Factory building'),
    cost: '55 Million ETB',
    status: 'Completed'
  },
  { 
    slug: 'hangtong-wood-plant', 
    name: 'Hangtong Wood Processing Plant', 
    category: N, 
    description: 'Industrial processing plant. Assignment: Architectural and structural design.', 
    ...ill(imgIndustrial, 'Industrial processing plant'),
    cost: '150 Million ETB',
    status: 'Completed'
  },
  { 
    slug: 'fuel-station-designs', 
    name: 'Fuel Station Designs', 
    category: N, 
    description: 'Specialized structural and canopy design work for fuel service stations.', 
    ...ill(imgFuel, 'Fuel station canopy') 
  },
  { 
    slug: 'gidado-dam', 
    name: 'Gidabo Dam Project', 
    category: W, 
    description: 'Water infrastructure project undertaken in collaboration with WWDSE.', 
    ...ill(imgDam, 'Gidabo Dam structural works'),
    cost: '140 Million ETB',
    status: 'Completed',
    // MANUALLY EDIT YOUR TEXT & TAGS HERE:
    assignment: 'Specialized structural engineering design',
    assignmentTags: ['Structer']
  },
  { 
    slug: 'kesem-tendaho-arjo', 
    name: 'Kesem, Tendaho, and Arjo-Dhidessa Dam-Related Works', 
    category: W, 
    description: 'Specialized structural engineering works for intake towers and spillway structures associated with major regional dam projects.', 
    ...ill(imgDam, 'Dam intake tower and spillway') 
  },
  { 
    slug: 'bridges-infrastructure', 
    name: 'Bridges and Infrastructure', 
    category: W, 
    description: 'Bridge engineering and civil infrastructure consultancy services.', 
    ...ill(imgBridge, 'Concrete bridge over a river') 
  },
  { 
    slug: 'intake-spillways', 
    name: 'Intake Structures and Spillways', 
    category: W, 
    description: 'Specialized structural design and analysis for water intake structures and spillway systems.', 
    ...ill(imgDam, 'Spillway and intake structure') 
  },
  { 
    slug: 'luxury-interior-design', 
    name: 'Apartment & Project Interior Developments', 
    category: R, 
    description: 'Custom interior design and fit-out solutions for residential apartments and commercial spaces.', 
    ...ill(imgOfficeDesign, 'Luxury interior design styling') 
  },
  { 
    slug: 'minjar-maryam', 
    name: 'Minjar Maryam Structural and Supervision Works', 
    category: REL, 
    description: 'Specialized structural engineering and construction supervision works.', 
    ...ill(imgConstruction, 'Structural works on site') 
  },
  { 
    slug: 'gojam-medhanealem', 
    name: 'Gojam Medhanealem Church', 
    category: REL, 
    description: 'Structural design and architectural consultancy support including dome construction and site compound layout planning.', 
    ...ill(imgGojammed, 'Gojam Medhanealem Church design')
  },
  { 
    slug: 'fitche-st-gebriel', 
    name: 'Fitche St. Gebriel Proposal', 
    category: REL, 
    description: 'Proposal and structural design concept for Fitche St. Gebriel religious complex development.', 
    ...ill(imgficheG, 'Fitche St. Gebriel architectural proposal')
  }
];

export const featuredSlugs = ['noc-head-office', 'golden-star', 'oromia-supreme-court', 'oromia-media-complex', 'noc-parking-office', 'nyala-insurance-hq', 'sebeta-municipality', 'gidado-dam'];
export const featuredProjects = () => featuredSlugs.map(slug => projects.find(p => p.slug === slug)!);

export function filterProjects(category: Category) { return category === 'All Projects' ? projects : projects.filter(project => project.category === category); }
export function pageHead(title: string, description: string) { return { meta: [{ title: `${title} | Response Spectrum Trading PLC` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Response Spectrum Trading PLC` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }; }