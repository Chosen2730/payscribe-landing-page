"use client";

import Image from "next/image";
import blogCover from "@/assets/images/digital.jpg";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { heroDropFromTop, inViewZoom } from "@/lib/animations";

export function BlogHero() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<section className='bg-[#edf4fb] px-6 pb-16 pt-14 sm:pt-20'>
			<div className='mx-auto container'>
				<motion.div
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.05 })}
					className='text-center'
				>
					<motion.h1
						{...heroDropFromTop({ reduced: reducedMotion, delay: 0.14, duration: 0.95 })}
						className='text-5xl font-medium text-secondary sm:text-7xl'
					>
						Payscribe Blog
					</motion.h1>
					<motion.p
						{...heroDropFromTop({ reduced: reducedMotion, delay: 0.26, duration: 0.9 })}
						className='mx-auto mt-6 max-w-3xl text-lg text-slate-700'
					>
						Don&apos;t miss out on interesting tips about Payscribe, and how to
						manage your funds.
					</motion.p>
				</motion.div>

				<Link href='/blog/gamepride' className='block'>
					<motion.article
						{...inViewZoom({ reduced: reducedMotion, delay: 0.18, duration: 0.95, amount: 0.3 })}
						className='mt-10 rounded-[22px]'
					>
					<div className='overflow-hidden rounded-[22px]'>
						<Image
							src={blogCover}
							alt='How Gamepride built a seamless gaming experience'
							className='h-[280px] w-full object-cover sm:h-[420px]'
							priority
						/>
					</div>
					<h2 className='mt-6 text-xl font-medium leading-tight text-secondary'>
						How Gamepride Built a Seamless Gaming Experience with Payscribe
					</h2>
					<p className='mt-3 text-base text-slate-500'>
						4 Min &nbsp;&middot;&nbsp; August 19, 2022
					</p>
					</motion.article>
				</Link>
			</div>
		</section>
	);
}
