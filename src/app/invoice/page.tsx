import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { InvoiceHero } from "./_components/InvoiceHero";
import { WhyInvoiceSection } from "./_components/WhyInvoiceSection";
import { HowItWorksInvoice } from "./_components/HowItWorksInvoice";
import StartBuilding from "../_components/startBuilding";

export default function InvoicePage() {
	return (
		<div className='min-h-screen bg-secondary text-white'>
			<Nav variant='white' />
			<InvoiceHero />
			<WhyInvoiceSection />
			<HowItWorksInvoice />
			<StartBuilding />
			<Footer />
		</div>
	);
}
