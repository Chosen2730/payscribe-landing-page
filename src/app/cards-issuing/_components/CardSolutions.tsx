import Image from "next/image";
import Link from "next/link";
import cardStack from "@/assets/images/cardstacks.png";

const features = [
	"100% Whitelabel",
	"Global Coverage",
	"Flexible Solutions",
	"Mastercard/Visa/Verve Cards",
];

export default function CardSolutions() {
	return (
		<section className='bg-[#214DC00D] py-16 mt-20'>
			<div className='mx-auto container px-5'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center lg:justify-between'>
					{/* Left: Card stack visual */}
					<div className='relative w-full'>
						<Image
							src={cardStack}
							alt='Virtual cards stack'
							className='w-full object-contain'
							width={440}
							height={280}
							priority={false}
						/>
					</div>

					{/* Right: Copy and CTAs */}
					<div className='max-w-xl'>
						<p className='text-xs font-semibold uppercase tracking-wider text-slate-500'>
							Complete Card Solutions
						</p>
						<h2 className='mt-3 text-3xl font-medium text-secondary sm:text-4xl'>
							Handle card transactions with ease.
						</h2>
						<p className='mt-5 text-sm leading-relaxed text-slate-600 md:text-base'>
							Seamlessly manage your virtual card issuance with a comprehensive
							solution designed to operate independently, giving you full
							control and flexibility.
						</p>
						<ul className='mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2'>
							{features.map((item) => (
								<li
									key={item}
									className='flex items-center gap-2 text-sm text-slate-700'
								>
									<span className='h-1.5 w-1.5 shrink-0 rounded-full bg-secondary' />
									{item}
								</li>
							))}
						</ul>
						<div className='mt-8 flex flex-wrap gap-4'>
							<Link
								href='#'
								className='rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white'
							>
								Sign Up
							</Link>
							<Link
								href='#'
								className='rounded-full border-2 border-primary/30 bg-primary/5 px-8 py-3 text-sm font-semibold text-primary'
							>
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
