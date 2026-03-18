import Link from "next/link";
import whiteBg from "@/assets/images/white-bg.png";
import Image from "next/image";
export function CaseStudiesHero() {
	return (
		<main className='business-hero relative flex items-center px-5 py-24 md:py-32'>
			<Image
				src={whiteBg}
				alt='white background'
				className='absolute inset-0'
				fill
				priority
			/>
			<div className='mx-auto max-w-3xl text-center'>
				<p className='text-xs font-semibold uppercase tracking-[0.25em] text-slate-400'>
					Case Studies
				</p>
				<h1 className='mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl'>
					Real-World success stories with Payscribe
				</h1>
				<p className='mt-5 text-sm leading-relaxed text-slate-300 md:text-base'>
					Discover how Payscribe's innovative solutions have transformed
					businesses across diverse sectors. Explore how we're shaping the
					future of finance, e-commerce, gaming, and SaaS.
				</p>

				<div className='mt-10 flex justify-center'>
					<Link
						href='/contact-us'
						className='rounded-full bg-primary px-10 py-3 text-sm font-semibold text-white shadow-lg'
					>
						Get Started
					</Link>
				</div>
			</div>
		</main>
	);
}
