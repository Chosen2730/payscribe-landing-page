const steps = [
	{
		number: "1",
		title: "Create Invoice",
		description: "Add customer details, items, pricing, and due date.",
		bg: "bg-[#E6F0FF]",
	},
	{
		number: "2",
		title: "Send Instantly",
		description: "Share via email or payment link",
		bg: "bg-white",
	},
	{
		number: "3",
		title: "Client Pays Online",
		description: "Customers pay securely through the invoice page.",
		bg: "bg-[#F8FAFC]",
	},
	{
		number: "4",
		title: "Track & Reconcile",
		description: "Monitor payments automatically in your dashboard.",
		bg: "bg-[#E6F0FF]",
	},
];

export function HowItWorksInvoice() {
	return (
		<section className='bg-white py-20'>
			<div className='mx-auto max-w-6xl'>
				<h2 className='mb-10 text-center text-4xl font-semibold text-secondary'>
					How It Works.
				</h2>

				<div className='grid grid-cols-1 md:grid-cols-2'>
					{steps.map((step) => (
						<div
							key={step.number}
							className={`flex min-h-[280px] flex-col items-center justify-center px-10 py-14 text-center ${step.bg}`}
						>
							<span className='text-6xl font-semibold leading-none text-transparent [-webkit-text-stroke:2px_#214dc0]'>
								{step.number}
							</span>
							<h3 className='mt-8 text-3xl font-semibold text-secondary'>
								{step.title}
							</h3>
							<p className='mt-4 max-w-md text-xl leading-relaxed text-slate-600'>
								{step.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
