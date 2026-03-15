"use client";

import { useState } from "react";

const faqs = [
	{
		question: "How do I get started with creating a USD/NGN card?",
		answer:
			"Sign up for a Payscribe business account, complete your verification, and navigate to the Cards section to instantly create and manage virtual or physical USD/NGN cards.",
	},
	{
		question: "What is your return policy?",
		answer:
			"Refunds and reversals follow the policies of our acquiring partners and card schemes. Once a dispute or refund is initiated, we keep you updated at every step until it is resolved.",
	},
	{
		question: "How secure are the transactions made through your platform?",
		answer:
			"All payments are encrypted end-to-end and processed over PCI-DSS compliant infrastructure, with additional fraud monitoring and risk controls to keep your business and customers safe.",
	},
	{
		question: "Can I use your payment links for international transactions?",
		answer:
			"Yes. You can accept payments from customers in multiple countries using our payment links, subject to supported currencies and regions for your account.",
	},
	{
		question: "What services does Payscribe offer for businesses?",
		answer:
			"Payscribe offers payments collection, payouts, virtual accounts, card issuing, bills payment, and API integrations so you can accept, send, and manage money in one place.",
	},
	{
		question: "How can my business accept payments using Payscribe?",
		answer:
			"You can accept payments via payment links, invoices, API, or in-person. We support cards, bank transfer, USSD, and mobile money so your customers can pay how they prefer.",
	},
	{
		question: "Can Payscribe support cross-border payments?",
		answer:
			"Yes. Payscribe supports multi-currency accounts, cross-border transfers, and USD/NGN card issuing so you can send and receive money across borders.",
	},
	{
		question: "How do I issue virtual cards through Payscribe?",
		answer:
			"From your dashboard or via API, you can create virtual USD/NGN cards for spending and withdrawals. Physical cards are also available on request.",
	},
	{
		question: "Is Payscribe suitable for small businesses and startups?",
		answer:
			"Yes. We offer flexible onboarding, transparent pricing, and tools that scale from early-stage to enterprise so small businesses and startups can grow with us.",
	},
	{
		question: "How secure is Payscribe's platform?",
		answer:
			"We use bank-grade encryption, PCI-DSS compliant infrastructure, and continuous monitoring to protect your data and transactions.",
	},
	{
		question: "What industries does Payscribe support?",
		answer:
			"Payscribe works across fintech, marketplaces, SaaS, e-commerce, mobility, payroll, lending, and digital creators. Our APIs and products are built for a wide range of use cases.",
	},
	{
		question: "Can Payscribe handle recurring payments or subscriptions?",
		answer:
			"Yes. You can set up recurring charges and subscriptions via our API or dashboard, with support for cards and other payment methods where applicable.",
	},
	{
		question: "How do I get started with Payscribe?",
		answer:
			"Create an account on our website, complete verification, and then use the dashboard or API to start accepting payments, issuing cards, or moving money.",
	},
	{
		question: "What kind of customer support does Payscribe offer?",
		answer:
			"We offer email support, in-app help, and dedicated account management for larger clients. Our team is available to help with integration, compliance, and day-to-day operations.",
	},
];

export function FaqAccordion() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section className='bg-white py-16'>
			<div className='mx-auto max-w-4xl px-5'>
				<div className='divide-y divide-slate-200 rounded-2xl border-b border-slate-200 bg-white'>
					{faqs.map((item, index) => {
						const isOpen = openIndex === index;
						return (
							<button
								key={item.question}
								type='button'
								onClick={() => setOpenIndex(isOpen ? null : index)}
								className='flex w-full flex-col items-stretch text-left'
							>
								<div className='flex items-center justify-between px-6 py-4'>
									<span className='text-sm font-medium text-secondary sm:text-base'>
										{item.question}
									</span>
									<span className='ml-4 shrink-0 text-xl font-semibold text-primary'>
										{isOpen ? "−" : "+"}
									</span>
								</div>
								{isOpen && (
									<div className='px-6 pb-5 text-sm leading-relaxed text-slate-600'>
										{item.answer}
									</div>
								)}
							</button>
						);
					})}
				</div>

				<div className='mt-10 rounded-2xl bg-blue-50 px-6 py-5 text-center'>
					<p className='text-sm text-slate-700'>
						Got more questions? Email us at{" "}
						<a
							href='mailto:hello@payscribe.ng'
							className='font-semibold text-primary underline underline-offset-2'
						>
							hello@payscribe.ng
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}
