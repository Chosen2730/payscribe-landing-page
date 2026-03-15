import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { FaqHero } from "./_components/FaqHero";
import { FaqAccordion } from "./_components/FaqAccordion";

export default function FaqsPage() {
	return (
		<div className='min-h-screen bg-white text-secondary'>
			<Nav />
			<FaqHero />
			<FaqAccordion />
			<Footer />
		</div>
	);
}
