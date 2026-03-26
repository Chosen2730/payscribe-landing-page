import whiteBg from "@/assets/images/white-bg.png";
import Image from "next/image";
import Link from "next/link";
export function ForBusinessHero() {
	return (
		<main className='business-hero flex items-center px-5 py-24 md:py-32'>
			<div className='mx-auto max-w-3xl text-center'>
				<p className='text-xs font-semibold tracking-[0.25em] text-slate-400'>
					UNLOCK YOUR BUSINESS POTENTIAL WITH PAYSCRIBE
				</p>
				<h1 className='mt-5 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl'>
					Expert Financial Solutions Crafted for Ambitious Businesses Like
					Yours.
				</h1>
				<p className='mt-5 text-sm leading-relaxed text-slate-300 md:text-base'>
					Payscribe empowers you with secure transactions, cutting-edge
					management tools, and effortless financial integrations. Streamline
					your operations, amplify efficiency, and drive sustainable growth —
					giving you the competitive advantage to succeed and thrive in
					today&apos;s fast-paced market.
				</p>

				<div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center'>
					<button className='rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white'>
						Create A Free Account
					</button>
					<Link
						href='/book-a-demo'
						className='rounded-full bg-white/10 px-8 py-3 text-sm font-semibold text-slate-100'
					>
						Book a Demo
					</Link>
				</div>
			</div>
			<Image
				src={whiteBg}
				alt='whiteBg'
				className='w-full h-full object-cover absolute top-0 right-0'
				width={500}
				height={500}
			/>
		</main>
	);
}
