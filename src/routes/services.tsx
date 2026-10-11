import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, ServiceCards, ContactCTA } from '@/components/site/shared';
import { pageHead } from '@/lib/company';
export const Route = createFileRoute('/services')({ head: () => pageHead('Our Services', 'Explore RST’s building design, structural engineering, construction supervision, contract administration, and project management services.'), component: Services });
function Services() { return <><PageIntro label="Our Expertise" title="Our Services" description="RST provides building consultancy and engineering services designed to support projects throughout their development and construction."/><section className="section"><div className="site-container"><ServiceCards all/></div></section><ContactCTA/></>; }
