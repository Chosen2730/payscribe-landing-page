import Link from "next/link";

export function FaqHero() {
	return (
		<main className='relative overflow-hidden bg-white px-5 py-20 md:py-28'>
			{/* Subtle bottom gradient */}
			<div
				className='pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-blue-50/50 to-transparent'
				aria-hidden
			/>
			<div className='relative mx-auto max-w-2xl text-center'>
				<h1 className='text-3xl font-bold text-secondary sm:text-4xl'>
					Frequently Asked Questions
				</h1>
				<p className='mt-4 text-base text-slate-500 md:text-lg'>
					Go through our FAQs to find the answer you&apos;re looking for.
				</p>
				<div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
					<Link
						href='#'
						className='rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white'
					>
						Create Account
					</Link>
					<Link
						href='/contact-us'
						className='rounded-full bg-blue-50 px-8 py-3 text-sm font-semibold text-primary'
					>
						Contact Support
					</Link>
				</div>
			</div>
		</main>
	);
}
