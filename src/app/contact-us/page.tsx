import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { ContactUsHero } from "./_components/ContactUsHero";

export default function ContactUsPage() {
	return (
		<div className='min-h-screen bg-secondary text-white'>
			<Nav variant='white' />
			<ContactUsHero />
			<Footer />
		</div>
	);
}
