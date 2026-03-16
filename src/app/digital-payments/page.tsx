import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { DigitalPaymentsHero } from "./_components/DigitalPaymentsHero";

export default function DigitalPaymentsPage() {
	return (
		<div className='min-h-screen bg-secondary text-white'>
			<Nav variant='white' />
			<DigitalPaymentsHero />
			<Footer />
		</div>
	);
}
