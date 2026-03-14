import React from "react";
import Image from "next/image";
import clock from "@/assets/icons/clock.svg";
import stream from "@/assets/icons/streamlined.svg";
import gain from "@/assets/icons/gain.svg";
import tag from "@/assets/icons/tag.svg";

const cards = [
	{
		icon: clock,
		title: "Round-the-clock customer support, ready to assist",
		description:
			"Experience tailored assistance with Payscribe's dedicated team of account managers, providing expert support.",
	},
	{
		icon: stream,
		title: "Streamlined development process with our unified gateway",
		description:
			"Simplify your payment infrastructure with our single API integration, designed to streamline your payment processing capabilities.",
	},
	{
		icon: gain,
		title: "Gain Valuable Payment Insights Right at Your Fingertips",
		description:
			"Unlock a complete view of your business performance through our user-friendly boards and cutting-edge real-time analytics.",
	},
	{
		icon: tag,
		title: "No hidden fees - clear and transparent financial solutions",
		description:
			"Experience complete transparency with our financial solutions — no hidden charges, just simple straightforward and clear pricing.",
	},
];

const WhyBusinessSection = () => {
	return (
		<section className='px-5 py-20 bg-white'>
			<div className='mx-auto max-w-6xl'>
				<h2 className='text-center text-2xl font-bold text-secondary sm:text-3xl'>
					Why Businesses And Consumers Love Payscribe?
				</h2>
				<div className='mt-12 grid sm:grid-cols-2'>
					{cards.map((card, index) => (
						<div
							key={card.title}
							className={`flex flex-col items-center py-20 justify-center text-center px-6  lg:p-8 ${index === 0 || index === 3 ? "bg-[#B8D6F866]" : "bg-white"}`}
						>
							<div className='mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10'>
								<Image
									src={card.icon}
									alt=''
									className='h-7 w-7'
									width={28}
									height={28}
								/>
							</div>
							<h3 className='text-lg font-semibold text-secondary'>
								{card.title}
							</h3>
							<p className='mt-3 text-sm leading-relaxed text-slate-600'>
								{card.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyBusinessSection;
