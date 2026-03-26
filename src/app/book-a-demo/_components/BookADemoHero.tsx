export function BookADemoHero() {
	return (
		<section className='relative overflow-hidden bg-secondary px-6 pb-20 pt-20 text-white'>
			<div className='absolute inset-0 opacity-70 [background:radial-gradient(1200px_500px_at_50%_0%,rgba(33,77,192,0.35),transparent_60%),radial-gradient(900px_420px_at_80%_20%,rgba(255,255,255,0.10),transparent_55%)]' />

			<div className='relative mx-auto max-w-4xl text-center'>
				<h1 className='text-4xl font-semibold tracking-tight sm:text-6xl'>
					Book a Demo
				</h1>
				<p className='mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base'>
					Get a free live one-on-one demo of the Payscribe API. You do not need
					to create an account. You can choose to do it yourself as we guide you
					or we show it to you while you do it yourself later.
				</p>
			</div>
		</section>
	);
}
