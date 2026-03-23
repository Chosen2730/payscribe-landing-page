import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { StableCoinRailsHero } from "./_components/StableCoinRailsHero";
import WhyStableCoins from "./_components/WhyStableCoins";
import { HowItWorksStable } from "./_components/HowItWorksStable";
import StartBuilding from "../_components/startBuilding";

export default function StableCoinRailsPage() {
	return (
		<div className='min-h-screen bg-gray-50 text-white '>
			<Nav variant='white' />
			<StableCoinRailsHero />
			<WhyStableCoins />
			<HowItWorksStable />
			<StartBuilding />
			<Footer />
		</div>
	);
}
