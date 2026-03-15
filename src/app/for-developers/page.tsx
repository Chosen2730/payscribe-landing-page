import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { ForDevelopersHero } from "./_components/ForDevelopersHero";
import { WhoBuildsSection } from "./_components/WhoBuildsSection";
import { DevelopersCanDoSection } from "./_components/DevelopersCanDoSection";
import StartBuilding from "../_components/startBuilding";

export default function ForDevelopersPage() {
	return (
		<div className='min-h-screen bg-secondary text-white'>
			<Nav variant='white' />
			<ForDevelopersHero />
			<WhoBuildsSection />
			<DevelopersCanDoSection />
			<StartBuilding />
			<Footer />
		</div>
	);
}
