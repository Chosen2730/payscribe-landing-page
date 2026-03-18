import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { DigitalPaymentsHero } from "./_components/DigitalPaymentsHero";
import { DigitalPaymentsFeatures } from "./_components/DigitalPaymentsFeatures";
import { DigitalPaymentsExplore } from "./_components/DigitalPaymentsExplore";
import StartBuilding from "../_components/startBuilding";

export default function DigitalPaymentsPage() {
	return (
		<div className='min-h-screen bg-secondary text-white'>
			<Nav variant='white' />
			<DigitalPaymentsHero />
			<DigitalPaymentsFeatures />
			<DigitalPaymentsExplore />
			<StartBuilding />
			<Footer />
		</div>
	);
}
