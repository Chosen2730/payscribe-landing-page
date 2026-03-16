import Link from "next/link";
import Image from "next/image";
import card from "@/assets/images/card2.png";
import whiteBg from "@/assets/images/white-bg.png";

export function CardsIssuingHero() {
	return (
		<main className='business-hero relative flex flex-col items-center px-5 pt-12'>
			<div className='mx-auto max-w-3xl text-center'>
				<p className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-400'>
					Card Issuing
				</p>
				<h1 className='mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl'>
					Issue virtual debit cards easily,
				</h1>
				<p className='mt-5 text-left text-sm leading-relaxed text-slate-300 md:text-center md:text-base'>
					With Payscribe&apos;s virtual card issuing solution, you can
					effortlessly create, manage, and scale commercial virtual debit cards.
					Our platform provides all the tools you need to streamline card
					issuance, making it simple to offer secure, customizable payment
					solutions to your customers.
				</p>

				<div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
					<Link
						href='#'
						className='rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg'
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
			<Image
				src={card}
				alt='card'
				className='w-[652px] mt-20'
				width={500}
				height={500}
			/>

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
