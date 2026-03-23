import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { PaymentLinkHero } from "./_components/PaymentLinkHero";
import { WhyUsePaymentLinks } from "./_components/WhyUsePaymentLinks";
import { HowItWorksPaymentLink } from "./_components/HowItWorksPaymentLink";
import StartBuilding from "../_components/startBuilding";

export default function PaymentLinkPage() {
	return (
		<div className='min-h-screen bg-secondary text-white'>
			<Nav variant='white' />
			<PaymentLinkHero />
			<WhyUsePaymentLinks />
			<HowItWorksPaymentLink />
			<StartBuilding />
			<Footer />
		</div>
	);
}
