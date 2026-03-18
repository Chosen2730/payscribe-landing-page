"use client";

import { useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import transfer1 from "@/assets/images/digital.jpg";
import transfer2 from "@/assets/images/transfer2.png";
import wallet from "@/assets/images/wallet.png";
import map from "@/assets/images/map.png";

type TabKey =
	| "Lending"
	| "Payroll"
	| "Marketplace"
	| "Mobility"
	| "Digital Payments";

const TABS: TabKey[] = [
	"Lending",
	"Payroll",
	"Marketplace",
	"Mobility",
	"Digital Payments",
];

const CONTENT: Record<
	TabKey,
	{ title: string; description: string; image: StaticImageData }
> = {
	Lending: {
		title: "Lending",
		description:
			"Use Payscribe Payout API to automate loan disbursements directly to borrowers' accounts. With instant, secure payouts, you can ensure that borrowers receive their funds without delay, improving customer satisfaction and accelerating the lending process.",
		image: transfer1,
	},
	Payroll: {
		title: "Payroll",
		description:
			"Pay salaries and contractor fees programmatically with bulk transfers, scheduled payouts, and clear reporting. Reduce manual work and keep your team paid on time, every time.",
		image: transfer2,
	},
	Marketplace: {
		title: "Marketplace",
		description:
			"Split payments and pay out to vendors seamlessly. Manage escrow-like flows, handle refunds, and reconcile transactions across multiple sellers with ease.",
		image: map,
	},
	Mobility: {
		title: "Mobility",
		description:
			"Power real-time driver payouts, wallet top-ups, and automated settlements. Build reliable cashflow experiences for riders, drivers, and fleets across regions.",
		image: wallet,
	},
	"Digital Payments": {
		title: "Digital Payments",
		description:
			"Accept and disburse payments across multiple channels while keeping balances, transfers, and reconciliation in one platform. Scale collections and payouts for your product without complexity.",
		image: wallet,
	},
};

export function DigitalPaymentsExplore() {
	const [active, setActive] = useState<TabKey>("Lending");
	const activeContent = useMemo(() => CONTENT[active], [active]);

	return (
		<section className='bg-white py-20'>
			<div className='mx-auto max-w-6xl px-5'>
				<div className='mx-auto max-w-4xl text-center'>
					<p className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>
						Explore
					</p>
					<h2 className='mt-3 text-2xl font-semibold text-secondary sm:text-3xl md:text-4xl'>
						Payscribe offers virtual debit cards designed to cater to diverse
						business models and industries.
					</h2>
				</div>

				<div className='mt-10 flex flex-wrap items-center justify-center gap-2'>
					<div className='flex flex-wrap items-center justify-center gap-2 rounded-full bg-slate-50 p-2 ring-1 ring-slate-200'>
						{TABS.map((tab) => {
							const isActive = tab === active;
							return (
								<button
									key={tab}
									type='button'
									onClick={() => setActive(tab)}
									className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
										isActive
											? "bg-white text-primary shadow-sm"
											: "text-slate-600 hover:text-secondary"
									}`}
								>
									{tab}
								</button>
							);
						})}
					</div>
				</div>

				<div className='mt-12 grid items-center gap-10 lg:grid-cols-2'>
					<div className='relative overflow-hidden rounded-3xl bg-slate-100 shadow-sm'>
						<Image
							src={activeContent.image}
							alt={activeContent.title}
							className='h-[341px] w-full object-cover'
							priority={false}
						/>
					</div>

					<div>
						<h3 className='text-2xl font-semibold text-secondary'>
							{activeContent.title}
						</h3>
						<p className='mt-4 text-sm leading-relaxed text-slate-600 md:text-base'>
							{activeContent.description}
						</p>
						<div className='mt-8'>
							<Link
								href='/contact-us'
								className='inline-flex items-center justify-center rounded-full bg-primary px-10 py-3 text-sm font-semibold text-white'
							>
								Contact Us
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
