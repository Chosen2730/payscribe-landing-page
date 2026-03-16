import Link from "next/link";

export function DigitalPaymentsHero() {
	return (
		<main className='business-hero flex items-center px-5 py-24 md:py-32'>
			<div className='mx-auto max-w-3xl text-center'>
				<p className='text-xs font-semibold uppercase tracking-[0.25em] text-slate-400'>
					PAY OUT WITH EASE
				</p>
				<h1 className='mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl'>
					Payments, fund transfers, and money management
				</h1>
				<p className='mt-5 text-sm leading-relaxed text-slate-300 md:text-base'>
					Seamlessly handle transactions, move money across accounts, and manage
					funds with ease and security.
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
						className='rounded-full border border-slate-500 bg-slate-800/50 px-8 py-3 text-sm font-semibold text-slate-100'
					>
						Contact Support
					</Link>
				</div>
			</div>
		</main>
	);
}
