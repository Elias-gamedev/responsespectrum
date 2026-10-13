import { describe, expect, it } from 'vitest';
import { activeSocialLinks, contact, featuredProjects, filterProjects, projects } from '@/lib/company';
describe('Projects', () => {
 it('includes all 25 portfolio entries', () => { expect(filterProjects('All Projects')).toHaveLength(25); });
 it('marks only the three credited photos as verified', () => { expect(projects.filter(p=>p.photo==='verified').map(p=>p.slug)).toEqual(['noc-head-office','golden-star','oromia-media-complex']); });
 it('features eight projects on the homepage', () => { expect(featuredProjects()).toHaveLength(8); });
 it('puts the Gidado dam under infrastructure', () => { expect(filterProjects('Infrastructure and Water Projects').map(p=>p.slug)).toContain('gidado-dam'); });
});
describe('Contact details', () => {
 it('shows the confirmed office, email, and phone', () => { expect(contact.address).toBe('Addis Ababa 22, H & M Building, Ethiopia'); expect(contact.email).toBe('Responsespectrum171717@gmail.com'); expect(contact.phones).toEqual(['0911249387','0912249747']); });
 it('hides social links until official URLs are supplied', () => { expect(activeSocialLinks()).toHaveLength(0); });
});
