import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, ServiceList, ContactCTA } from '@/components/site/shared';
import { pageHead, images } from '@/lib/company';
export const Route = createFileRoute('/services')({ head: () => pageHead('Our Services', 'Architectural design, structural engineering, construction supervision, contract administration, project management, and infrastructure consultancy by RST.'), component: Services });
function Services() { return <><PageIntro image={images.construction} label="Our Expertise" title="Our Services" description="RST provides building consultancy and engineering services to support projects from initial design through construction and delivery."/><section className="section"><div className="site-container"><ServiceList/></div></section><ContactCTA/></>; }
