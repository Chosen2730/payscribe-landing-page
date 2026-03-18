import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { CaseStudiesHero } from "./_components/CaseStudiesHero";
import FintechSection from "./_components/FintechSection";
import ExploreCaseStudies from "./_components/ExploreCaseStudies";
import StartBuilding from "../_components/startBuilding";

export default function CaseStudiesPage() {
	return (
		<div className='min-h-screen bg-secondary text-white'>
			<Nav variant='white' />
			<CaseStudiesHero />
			<FintechSection />
			<ExploreCaseStudies />
			<StartBuilding />
			<Footer />
		</div>
	);
}
