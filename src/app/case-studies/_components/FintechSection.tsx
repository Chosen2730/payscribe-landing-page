import Image from "next/image";
import Link from "next/link";
import fintech from "@/assets/icons/fintech.svg";

const FintechSection = () => {
	return (
		<section className='bg-white py-16'>
			<div className='mx-auto container px-5'>
				<div className='flex flex-col items-center justify-between gap-8 rounded-3xl bg-[#E8F0FE] px-8 py-10 md:flex-row md:px-12'>
					<div className='max-w-xl'>
						<p className='text-xs font-semibold uppercase tracking-[0.2em] text-primary'>
							Fintech
						</p>
						<h2 className='mt-3 text-2xl font-semibold text-primary sm:text-4xl'>
							Empowering Fintech Innovators.
						</h2>
						<p className='mt-4 text-sm leading-relaxed text-slate-600 md:text-base'>
							In the fast-paced world of fintech, we&apos;ve partnered with
							trailblazers to power their financial services. From digital
							wallets and lending platforms to cross-border payments, Payscribe
							provides the rails that help them launch, scale, and stay
							compliant.
						</p>
						<div className='mt-8'>
							<Link
								href='/contact-us'
								className='inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white'
							>
								Get Started
							</Link>
						</div>
					</div>

					<div className='flex justify-center md:justify-end'>
						<Image
							src={fintech}
							alt='Fintech icon'
							className='h-[300px] w-[300px] object-contain'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FintechSection;
