import React from "react";
import Image from "next/image";
import savingsImg from "@/assets/images/savingsImg.png";

const WhatSavings = () => {
	return (
		<div className='py-20 grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto items-center'>
			<div className=''>
				<h2 className='text-3xl font-semibold leading-tight text-secondary'>
					What is Savings-as-a-Service?
				</h2>
				<p className='mt-6 text-sm leading-relaxed text-slate-600'>
					Savings-as-a-Service enables you to offer digital savings accounts,
					automated saving tools, and goal-based financial experiences without
					building banking infrastructure from scratch.
				</p>

				<div className='mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2'>
					<p className='flex items-center gap-3 text-sm text-secondary'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						Digital Savings Wallets
					</p>
					<p className='flex items-center gap-3 text-sm text-secondary'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						Goal-Based Saving
					</p>
					<p className='flex items-center gap-3 text-sm text-secondary'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						Automated Savings
					</p>
					<p className='flex items-center gap-3 text-sm text-secondary'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						Flexible withdrawal controls
					</p>
					<p className='flex items-center gap-3 text-sm text-secondary sm:col-span-2'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						Smart Fund Management
					</p>
					<p className='flex items-center gap-3 text-sm text-secondary sm:col-span-2'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						Save in Naira or USD
					</p>
				</div>

				<button className='mt-10 rounded-full bg-primary px-12 py-4 text-sm font-semibold text-white'>
					Get Started
				</button>
			</div>
			<div>
				<Image
					src={savingsImg}
					alt='savings img'
					className='w-full h-full object-contain'
				/>
			</div>
		</div>
	);
};

export default WhatSavings;
