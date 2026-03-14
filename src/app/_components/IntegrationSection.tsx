import logo from "@/assets/images/app-icon.png";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import card1 from "@/assets/images/wallet.png";
export function IntegrationSection() {
	return (
		<section className='mx-auto mt-24 w-full max-w-6xl px-6'>
			<div className='flex flex-col items-center text-center'>
				<span className='inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-xs font-semibold text-primary shadow-sm'>
					<span className='text-yellow-400'>⚡</span>
					EFFORTLESS FINANCIAL INTEGRATION
				</span>
				<h2 className='mt-6 max-w-3xl text-2xl font-semibold text-secondary sm:text-3xl'>
					Streamline Your Payments and Financial Services with Ease
				</h2>
			</div>

			<div className='relative mt-10 flex items-center justify-center gap-6'>
				{/* Left arrow */}
				<button className='hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary/10 text-primary shadow-md sm:flex cursor-pointer'>
					<ChevronLeftIcon />
				</button>
				{/* Right arrow */}
				<div className='overflow-hidden rounded-3xl bg-gradient-to-br from-[#214DC0] to-[#020b4a] text-white shadow-xl'>
					<div className='flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-10'>
						<div className='max-w-md text-left'>
							<Image src={logo} alt='logo' width={90} height={90} />
							<h3 className='text-2xl font-semibold md:text-3xl'>
								Build seamless accounts and wallets with half the effort.
							</h3>
							<p className='mt-4 text-sm leading-relaxed text-blue-100'>
								Enable your customers to send, receive, and store money in
								multiple currencies. With support for diverse use cases, your
								customers can enjoy greater flexibility and convenience in
								handling international payments.
							</p>
							<div className='mt-6 flex flex-wrap gap-4'>
								<button className='rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary'>
									Get Started
								</button>
								<button className='rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white'>
									Learn More
								</button>
							</div>
						</div>

						<div className='relative mt-4 w-full self-stretch md:mt-0'>
							<div className='rounded-full bg-white/15 p-4 text-xs font-semibold w-fit ml-auto mb-4'>
								Accounts and Wallets
							</div>

							<Image
								src={card1}
								alt='card'
								className='w-full'
								width={458}
								height={304}
							/>
						</div>
					</div>
				</div>{" "}
				<button className='hidden h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shadow-md sm:flex cursor-pointer'>
					<ChevronRightIcon />
				</button>
			</div>
		</section>
	);
}
