import { Building2, Ruler, HardHat, ClipboardCheck, Waypoints, ScanLine } from 'lucide-react';
import commercial from '@/assets/architecture-hero.jpg';
import institutional from '@/assets/civic-building.jpg';
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
export const projects = [
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
].map(([name, category]) => ({ name, category, image: category === 'Commercial Buildings' ? commercial : institutional, description: 'Part of RST’s building and engineering project experience in Ethiopia.' }));
export function filterProjects(category: Category) { return category === 'All Projects' ? projects : projects.filter(project => project.category === category); }
export function pageHead(title: string, description: string) { return { meta: [{ title: `${title} | Response Spectrum Trading PLC` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Response Spectrum Trading PLC` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }; }
