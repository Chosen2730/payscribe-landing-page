import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import UseCaseTabs from "./_components/UseCaseTabs";
import StartBuilding from "../_components/startBuilding";

export default function UseCasePage() {
	return (
		<div className='min-h-screen bg-secondary text-white'>
			<Nav variant='white' />
			<UseCaseTabs />
			<StartBuilding />
			<Footer />
		</div>
	);
}
