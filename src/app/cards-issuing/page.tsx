"use client";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { CardsIssuingHero } from "./_components/CardsIssuingHero";
import { CardsIssuingFeatures } from "./_components/CardsIssuingFeatures";
import { BillFeaturesSection } from "../for-business/_components/BillFeaturesSection";
import { IntegrationSection } from "../_components/IntegrationSection";
import CardSolutions from "./_components/CardSolutions";
import StartBuilding from "../_components/startBuilding";

export default function CardsIssuingPage() {
	return (
		<div className='min-h-screen bg-gray-50 text-white'>
			<Nav variant='white' />
			<CardsIssuingHero />
			<CardsIssuingFeatures />
			<IntegrationSection />
			<CardSolutions />
			<StartBuilding />
			<Footer />
		</div>
	);
}
