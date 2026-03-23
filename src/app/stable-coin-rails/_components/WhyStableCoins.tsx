import React from "react";
import Image from "next/image";
import whyimg from "@/assets/images/stableImage.png";

const WhyStableCoins = () => {
	return (
		<div className='py-20 grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto items-center'>
			<div className=''>
				<h2 className='text-3xl font-semibold leading-tight text-secondary'>
					Why Stablecoins with Payscribe?
				</h2>
				<p className='mt-6 text-sm leading-relaxed text-slate-600'>
					Traditional payment systems are slow, expensive, and limited by
					borders. Payscribe unlocks programmable money — allowing your product
					to transact globally with speed and transparency.
				</p>

				<div className='mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2'>
					<p className='flex items-center gap-3 text-sm text-secondary'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						Instant cross-border payments
					</p>
					<p className='flex items-center gap-3 text-sm text-secondary'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						Dollar-denominated stability
					</p>
					<p className='flex items-center gap-3 text-sm text-secondary'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						Lower transaction costs
					</p>
					<p className='flex items-center gap-3 text-sm text-secondary'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						API-first integration
					</p>
					<p className='flex items-center gap-3 text-sm text-secondary sm:col-span-2'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						24/7 settlement
					</p>
				</div>

				<button className='mt-10 rounded-full bg-primary px-12 py-4 text-sm font-semibold text-white'>
					Get Started
				</button>
			</div>
			<div>
				<Image
					src={whyimg}
					alt='why stable coins'
					className='w-full h-full object-contain'
				/>
			</div>
		</div>
	);
};

export default WhyStableCoins;
