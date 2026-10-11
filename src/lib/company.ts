import { Building2, Ruler, HardHat, ClipboardCheck, Waypoints, ScanLine } from 'lucide-react';
import noc from '@/assets/noc-head-office.jpg.asset.json';
import goldenStar from '@/assets/golden-star.jpg.asset.json';
import oromiaMedia from '@/assets/oromia-media.jpg.asset.json';
export const contact = {
 address: 'Addis Ababa 22, H & M Building, Ethiopia',
 email: 'Responsespectrum171717@gmail.com',
 phones: ['0911249387', '0912249747'],
};
export const services = [
 { title: 'Building Design', icon: Building2, description: 'Architectural and engineering design solutions for residential, commercial, office, mixed-use, and institutional buildings.' },
 { title: 'Construction Supervision', icon: HardHat, description: 'Professional oversight to help ensure construction follows approved designs, required specifications, and quality standards.' },
 { title: 'Contract Administration', icon: ClipboardCheck, description: 'Support in managing construction contracts, coordinating project requirements, and monitoring delivery processes.' },
 { title: 'Structural Engineering', icon: Ruler, description: 'Structural design, design review, and engineering solutions that support building safety, functionality, and performance.' },
 { title: 'Project Management', icon: Waypoints, description: 'Project coordination, planning, and construction-phase support, with clear communication between stakeholders.' },
 { title: 'Engineering Assessment and Design Review', icon: ScanLine, description: 'Engineering review and structural investigation services tailored to the requirements of your project.' },
];
export const categories = ['All Projects', 'Commercial Buildings', 'Institutional Buildings', 'Other Projects'] as const;
export type Category = typeof categories[number];
type ProjectPhoto = { image: string; imageAlt: string; photoSource: string; photoCredit: string };
const verifiedPhotos: Record<string, ProjectPhoto> = {
 'National Oil Ethiopia (NOC) Head Office': { image: noc.url, imageAlt: 'National Oil Ethiopia headquarters with its curved glass tower', photoSource: 'https://lessoethiopia.com/index.php/projects', photoCredit: 'LESSO Ethiopia' },
 'Golden Star Mall and Office Complex': { image: goldenStar.url, imageAlt: 'Golden Star Building photographed during construction', photoSource: 'https://ease-int.com/projects/golden-star-building/', photoCredit: 'EASE Engineering · Construction photo' },
 'Oromia Media Complex': { image: oromiaMedia.url, imageAlt: 'Oromia Media Complex, the glass-fronted OBN headquarters in Addis Ababa', photoSource: 'https://besconsultants.net/blogs/projects/media-complex-ethiopia', photoCredit: 'BES Consultants' },
};
export const projects = ([
 ['National Oil Ethiopia (NOC) Head Office', 'Commercial Buildings'],
 ['Golden Star Mall and Office Complex', 'Commercial Buildings'],
 ['Oromia Supreme Court', 'Institutional Buildings'],
 ['Oromia Media Complex', 'Institutional Buildings'],
 ['NOC Parking and Office Building', 'Commercial Buildings'],
 ['Nyala Insurance Headquarter', 'Commercial Buildings'],
 ['Sebeta Municipality Building', 'Institutional Buildings'],
 ['Shaka Real Estate', 'Commercial Buildings'],
 ['Samket Mall', 'Commercial Buildings'],
 ['Gidado Dam Project', 'Other Projects'],
] as const).map(([name, category]) => ({ name, category, image: verifiedPhotos[name]?.image, imageAlt: verifiedPhotos[name]?.imageAlt, photoSource: verifiedPhotos[name]?.photoSource, photoCredit: verifiedPhotos[name]?.photoCredit, description: 'Part of RST’s building and engineering project experience in Ethiopia.' }));
export function filterProjects(category: Category) { return category === 'All Projects' ? projects : projects.filter(project => project.category === category); }
export function pageHead(title: string, description: string) { return { meta: [{ title: `${title} | Response Spectrum Trading PLC` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Response Spectrum Trading PLC` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }; }
