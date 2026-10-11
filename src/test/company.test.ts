import { describe, expect, it } from 'vitest';
import { filterProjects, projects } from '@/lib/company';
describe('Project categories', () => {
 it('includes all ten supplied projects', () => { expect(filterProjects('All Projects')).toHaveLength(10); });
 it('uses verified photographs only for matching projects', () => { expect(projects.filter(p=>p.image).map(p=>p.name)).toEqual(['National Oil Ethiopia (NOC) Head Office','Golden Star Mall and Office Complex','Oromia Media Complex']); });
 it('does not substitute photographs for unverified projects', () => { expect(projects.find(p=>p.name === 'Samket Mall')?.image).toBeUndefined(); expect(projects.find(p=>p.name === 'Oromia Supreme Court')?.image).toBeUndefined(); });
 it('keeps commercial projects separate', () => { expect(filterProjects('Commercial Buildings').map(p=>p.name)).toEqual(['National Oil Ethiopia (NOC) Head Office','Golden Star Mall and Office Complex','NOC Parking and Office Building','Nyala Insurance Headquarter','Shaka Real Estate','Samket Mall']); });
 it('keeps institutional projects separate', () => { expect(filterProjects('Institutional Buildings').map(p=>p.name)).toEqual(['Oromia Supreme Court','Oromia Media Complex','Sebeta Municipality Building']); });
 it('places the dam in other projects', () => { expect(filterProjects('Other Projects').map(p=>p.name)).toEqual(['Gidado Dam Project']); expect(projects).toHaveLength(10); });
});
