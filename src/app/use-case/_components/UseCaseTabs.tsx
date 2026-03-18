"use client";

import { useState } from "react";
import Link from "next/link";

type UseCaseKey = "Fintech" | "Health" | "Retail" | "Logistics" | "Gaming";

const USE_CASES: {
	key: UseCaseKey;
	title: string;
	subtitle: string;
	points: string[];
	illustration: React.ReactNode;
}[] = [
	{
		key: "Fintech",
		title: "You are one step away from launching your fintech solution.",
		subtitle: "We help you build better Fintech products",
		points: [
			"Use Payscribe's account issuance APIs, digital wallet APIs, and card issuance APIs to go to market faster.",
			"Offer a comprehensive suite of financial services with secure and reliable transactions.",
		],
		illustration: <PhoneIllustration />,
	},
	{
		key: "Health",
		title: "Power seamless payments for health platforms.",
		subtitle: "Focus on care while we handle payments",
		points: [
			"Collect consultation fees, subscriptions, and insurance payouts with unified payment rails.",
			"Automate payouts to clinics, pharmacies, and practitioners with clear reporting.",
		],
		illustration: <PhoneIllustration />,
	},
	{
		key: "Retail",
		title: "Build shopping experiences your customers love.",
		subtitle: "From checkout to refunds, we've got you covered",
		points: [
			"Accept card, bank transfer, and wallet payments in-store and online.",
			"Manage settlements, refunds, and loyalty payouts from one dashboard.",
		],
		illustration: <PhoneIllustration />,
	},
	{
		key: "Logistics",
		title: "Keep deliveries and driver payouts running smoothly.",
		subtitle: "Better cashflow for riders, drivers, and fleets",
		points: [
			"Automate cash-on-delivery reconciliation and wallet top-ups.",
			"Disburse earnings to drivers and partners in real time.",
		],
		illustration: <PhoneIllustration />,
	},
	{
		key: "Gaming",
		title: "Monetize games with seamless, global payments.",
		subtitle: "Focus on gameplay, not payment complexity",
		points: [
			"Accept in-game purchases and subscriptions in multiple currencies.",
			"Pay out to creators, streamers, and partners without friction.",
		],
		illustration: <PhoneIllustration />,
	},
];

const TABS: UseCaseKey[] = [
	"Fintech",
	"Health",
	"Retail",
	"Logistics",
	"Gaming",
];

function PhoneIllustration() {
	return (
		<svg
			viewBox='0 0 120 180'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className='w-28 h-44 md:w-36 md:h-56 shrink-0'
			aria-hidden='true'
		>
			{/* Phone body */}
			<rect x='4' y='4' width='112' height='172' rx='18' fill='#2D55C8' />
			{/* Screen */}
			<rect x='16' y='22' width='88' height='118' rx='6' fill='#A8B9F0' />
			{/* Home button */}
			<circle cx='60' cy='158' r='10' fill='white' />
		</svg>
	);
}

const UseCaseTabs = () => {
	const [active, setActive] = useState<UseCaseKey>("Fintech");
	const current = USE_CASES.find((c) => c.key === active)!;

	return (
		<section className='bg-white py-20'>
			<div className='mx-auto container px-5'>
				{/* Outer wrapper — light blue-grey background, rounded */}
				<div className='relative rounded-3xl overflow-visible'>
					<div className='flex flex-col md:flex-row'>
						{/* ── Left: vertical tab list ── */}
						<div className='flex flex-row flex-wrap gap-1 p-4 md:flex-col md:gap-0 md:p-0 md:pt-8 md:pb-8 md:w-[220px] md:shrink-0'>
							{TABS.map((tab) => {
								const isActive = tab === active;
								return (
									<button
										key={tab}
										type='button'
										onClick={() => setActive(tab)}
										className={`
											relative z-10 px-6 py-2.5 text-sm font-semibold text-left transition-all duration-200
											rounded-full md:rounded-none
											${
												isActive
													? "bg-primary text-white md:rounded-r-full"
													: "text-[#1a2240] hover:text-primary bg-transparent"
											}
										`}
									>
										{tab}
									</button>
								);
							})}
						</div>

						{/* ── Right: white content card ── */}
						<div className='flex-1 m-4 md:my-6 md:mr-6 md:ml-0'>
							<div className='h-full rounded-2xl bg-[#214DC00D] shadow-sm px-8 py-10 flex flex-col md:flex-row items-start gap-8'>
								<div className='flex-1 flex flex-col justify-between h-full'>
									<div>
										<h2 className='text-2xl md:text-4xl font-medium text-black leading-snug'>
											{current.title}
										</h2>
										<p className='mt-4 text-sm text-slate-500 font-medium'>
											{current.subtitle}
										</p>
										<ul className='mt-5 space-y-4'>
											{current.points.map((point) => (
												<li
													key={point}
													className='flex items-start gap-3 text-sm text-slate-600 leading-relaxed'
												>
													<span className='mt-[5px] h-2 w-2 shrink-0 rounded-full bg-primary' />
													<span>{point}</span>
												</li>
											))}
										</ul>
									</div>

									<div className='mt-8'>
										<Link
											href='/contact-us'
											className='inline-flex items-center justify-center rounded-full bg-primary px-10 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity'
										>
											Get Started
										</Link>
									</div>
								</div>

								<div className='hidden md:flex items-center justify-center shrink-0 self-center'>
									{current.illustration}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UseCaseTabs;
