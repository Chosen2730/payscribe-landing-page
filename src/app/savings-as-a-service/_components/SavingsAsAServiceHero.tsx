import Image from "next/image";
import Link from "next/link";
import whiteBg from "@/assets/images/white-bg.png";

export function SavingsAsAServiceHero() {
	return (
		<section className='business-hero relative overflow-hidden'>
			<Image
				src={whiteBg}
				alt='white background'
				className='pointer-events-none absolute top-0 right-0 h-full w-full object-cover'
				fill
				priority
			/>

			<div className='mx-auto max-w-4xl px-5 py-24 text-center text-white md:py-32'>
				<p className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-400'>
					Savings as a Service
				</p>
				<h1 className='mt-5 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl'>
					Enable Smarter Saving Experiences with Payscribe
				</h1>
				<p className='mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg'>
					Help users save automatically, manage funds better, and build financial stability — all powered by Payscribe&apos;s infrastructure.
				</p>

				<div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
					<Link
						href='/contact-us'
						className='rounded-full bg-primary px-10 py-3 text-sm font-semibold text-white'
					>
						Get Started
					</Link>
					<Link
						href='/contact-us'
						className='rounded-full bg-white/10 px-10 py-3 text-sm font-semibold text-white'
					>
						Contact Support
					</Link>
				</div>
			</div>
		</section>
	);
}
