import React from "react";
import Image from "next/image";
import map from "@/assets/images/map.png";

const OneAccountSection = () => {
	return (
		<div className='bg-primary/10 p-5 py-20'>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
				<div>
					<h2 className='text-5xl font-semibold text-secondary'>
						One Account,
						<br /> Global Possibilities.
					</h2>
					<p className='mt-4 text-base leading-relaxed text-slate-600'>
						Payscribe’s Global Account gives your business the ability to send,
						receive, and manage money across countries from a single unified
						account.
					</p>
					<div className='grid grid-cols-2 gap-2 mt-6 '>
						<div className='flex items-center gap-2'>
							<div className='w-2 h-2 bg-secondary rounded-full' />
							<p className='text-sm text-secondary'>
								Receive International Payments
							</p>
						</div>
						<div className='flex items-center gap-2'>
							<div className='w-2 h-2 bg-secondary rounded-full' />
							<p className='text-sm text-secondary'>
								Unified Financial Control
							</p>
						</div>
						<div className='flex items-center gap-2'>
							<div className='w-2 h-2 bg-secondary rounded-full' />
							<p className='text-sm text-secondary'>Hold Multiple Currencies</p>
						</div>
						<div className='flex items-center gap-2'>
							<div className='w-2 h-2 bg-secondary rounded-full' />
							<p className='text-sm text-secondary'>
								Faster international settlements
							</p>
						</div>
						<div className='flex items-center gap-2'>
							<div className='w-2 h-2 bg-secondary rounded-full' />
							<p className='text-sm text-secondary'>
								Send Cross-Border Transfers
							</p>
						</div>
					</div>
					<button className='mt-6 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white'>
						Get Started
					</button>
				</div>
				<Image
					src={map}
					alt='map'
					width={500}
					className='w-full'
					height={500}
				/>
			</div>
		</div>
	);
};

export default OneAccountSection;
