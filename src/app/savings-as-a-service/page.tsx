import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { SavingsAsAServiceHero } from "./_components/SavingsAsAServiceHero";
import WhatSavings from "./_components/WhatSavings";
import { HowItWorksSavings } from "./_components/HowItWorksSavings";

export default function SavingsAsAServicePage() {
	return (
		<div className='min-h-screen bg-gray-50 text-white'>
			<Nav variant='white' />
			<SavingsAsAServiceHero />
			<WhatSavings />
			<HowItWorksSavings />
			<Footer />
		</div>
	);
}
