import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { PrivacyPolicyHero } from "./_components/PrivacyPolicyHero";
import { PrivacyPolicyContent } from "./_components/PrivacyPolicyContent";

export default function PrivacyPolicyPage() {
	return (
		<div className='min-h-screen bg-white text-secondary'>
			<Nav variant='white' />
			<PrivacyPolicyHero />
			<PrivacyPolicyContent />
			<Footer />
		</div>
	);
}

