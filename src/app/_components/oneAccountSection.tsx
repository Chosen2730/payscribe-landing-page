"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import map from "@/assets/images/map.png";
import { inViewFadeUp, inViewFromTop, inViewZoom } from "@/lib/animations";

const OneAccountSection = () => {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;
	const benefits = [
		"Receive International Payments",
		"Unified Financial Control",
		"Hold Multiple Currencies",
		"Faster international settlements",
		"Send Cross-Border Transfers",
	];

	return (
		<div className='bg-primary/10 p-5 py-20'>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
				<motion.div {...inViewFromTop({ reduced: reducedMotion, delay: 0.1 })}>
					<motion.h2
						{...inViewFromTop({ reduced: reducedMotion, delay: 0.18, duration: 0.95 })}
						className='text-5xl font-semibold text-secondary'
					>
						One Account,
						<br /> Global Possibilities.
					</motion.h2>
					<motion.p
						{...inViewFromTop({ reduced: reducedMotion, delay: 0.28, duration: 0.95 })}
						className='mt-4 text-base leading-relaxed text-slate-600'
					>
						Payscribe’s Global Account gives your business the ability to send,
						receive, and manage money across countries from a single unified
						account.
					</motion.p>
					<div className='grid grid-cols-2 gap-2 mt-6 '>
						{benefits.map((item, index) => (
							<motion.div
								key={item}
								{...inViewFadeUp({
									reduced: reducedMotion,
									delay: 0.34 + index * 0.06,
									duration: 0.8,
									amount: 0.25,
								})}
								className='flex items-center gap-2'
							>
								<div className='w-2 h-2 bg-secondary rounded-full' />
								<p className='text-sm text-secondary'>{item}</p>
							</motion.div>
						))}
					</div>
					<motion.button
						{...inViewFadeUp({ reduced: reducedMotion, delay: 0.68, duration: 0.85 })}
						className='mt-6 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white'
					>
						Get Started
					</motion.button>
				</motion.div>
				<motion.div
					{...inViewZoom({ reduced: reducedMotion, delay: 0.28, duration: 1.0 })}
				>
					<Image
						src={map}
						alt='map'
						width={500}
						className='w-full'
						height={500}
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default OneAccountSection;
