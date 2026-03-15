export function ForDevelopersHero() {
	return (
		<main className='business-hero flex items-center px-5 py-24 md:py-32'>
			<div className='mx-auto max-w-3xl text-center'>
				<p className='text-xs font-semibold tracking-[0.25em] text-slate-400'>
					DESIGNED BY DEVELOPERS FOR DEVELOPERS
				</p>
				<h1 className='mt-5 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl'>
					Build Powerful Payment Experiences with Payscribe API
				</h1>
				<p className='mt-5 text-sm leading-relaxed text-slate-300 md:text-base'>
					Have access to tools that will help you to seamlessly integrate secure
					payments, automate financial workflows, and build scalable transaction
					experiences directly into their applications.
				</p>

				<div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center'>
					<button className='rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white'>
						View Documentation
					</button>
					<button className='rounded-full bg-white/10 px-8 py-3 text-sm font-semibold text-slate-100'>
						Join Community
					</button>
				</div>
			</div>
		</main>
	);
}
