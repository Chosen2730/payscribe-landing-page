import Image from "next/image";
import Link from "next/link";
import whiteBg from "@/assets/images/white-bg.png";

export function TermsAndConditionsHero() {
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
					Terms of Use
				</p>
				<h1 className='mt-5 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl'>
					Terms and Conditions for Payscribe
				</h1>
				<p className='mt-4 text-base text-slate-300 md:text-lg'>
					Read below the terms of use of payscribe
				</p>

				<div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
					<Link
						href='#terms-content'
						className='rounded-full bg-primary px-10 py-3 text-sm font-semibold text-white'
					>
						Get Started
					</Link>
					<Link
						href='/contact-us'
						className='rounded-full bg-white/10 px-10 py-3 text-sm font-semibold text-white'
					>
						Reach out to us
					</Link>
				</div>
			</div>

			<div className='relative z-10 -mb-px h-16 w-full leading-none md:h-24'>
				<svg
					className='block h-full w-full text-white'
					viewBox='0 0 1440 120'
					preserveAspectRatio='none'
					aria-hidden
				>
					<path
						fill='currentColor'
						d='M0,120 V80 Q360,10 720,50 T1440,80 V120 H0Z'
					/>
				</svg>
			</div>
		</section>
	);
}

