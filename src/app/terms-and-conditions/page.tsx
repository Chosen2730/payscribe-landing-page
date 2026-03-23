import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { TermsAndConditionsHero } from "./_components/TermsAndConditionsHero";
import { TermsAndConditionsContent } from "./_components/TermsAndConditionsContent";

export default function TermsAndConditionsPage() {
	return (
		<div className='min-h-screen bg-white text-secondary'>
			<Nav variant='white' />
			<TermsAndConditionsHero />
			<TermsAndConditionsContent />
			<Footer />
		</div>
	);
}

