import Image from "next/image";

import left1 from "@/assets/images/left1.png";
import left2 from "@/assets/images/left2.png";
import right1 from "@/assets/images/right1.png";
import right2 from "@/assets/images/right2.png";
import right3 from "@/assets/images/right3.png";

export function Hero() {
	return (
		<main
			className='relative mx-auto flex w-full flex-col items-center text-center pt-20'
			style={{
				background:
					"linear-gradient(180deg, #e8f1fc 0%, #f4f8ff 60%, #ffffff 100%)",
			}}
		>
			{/* Left-side cards */}
			<div className='pointer-events-none absolute left-0 top-0 hidden md:block'>
				<div className='relative h-32 w-48'>
					<Image
						src={left1}
						alt='Monthly analytics card'
						fill
						className='object-contain object-left'
						priority
					/>
				</div>
			</div>
			<div className='pointer-events-none absolute bottom-0 left-0 hidden md:block'>
				<div className='relative h-52 w-60'>
					<Image
						src={left2}
						alt='Activity breakdown card'
						fill
						className='object-contain object-left'
					/>
				</div>
			</div>

			<div className='pointer-events-none absolute right-0 top-4 hidden  md:block'>
				<div className='relative h-36 w-64'>
					<Image
						src={right1}
						alt='Earned this month card'
						fill
						className='object-contain object-right'
					/>
				</div>
			</div>
			<div className='pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 md:block'>
				<div className='relative h-36 w-64'>
					<Image
						src={right2}
						alt='Completed transactions card'
						fill
						className='object-contain object-right'
					/>
				</div>
			</div>
			<div className='pointer-events-none absolute bottom-4 right-0 hidden md:block'>
				<div className='relative h-36 w-64'>
					<Image
						src={right3}
						alt='Users statistics card'
						fill
						className='object-contain object-right'
					/>
				</div>
			</div>
			<div className='flex flex-col items-center justify-center pb-20'>
				<h1 className='max-w-4xl text-balance text-4xl font-medium leading-tight sm:text-5xl'>
					Empowering Businesses with the Future of Financial Innovation.
				</h1>
				<p className='mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-xl'>
					Payscribe provides businesses with a robust payment infrastructure to
					securely accept payments, issue USD/NGN cards for seamless
					cross-border transactions, and deliver a full range of financial
					services to enhance customer experience.
				</p>

				<div className='mt-10 flex flex-col gap-4 sm:flex-row'>
					<button className='rounded-full bg-primary px-10 py-4 text-sm font-semibold text-white sm:text-base'>
						Create A Free Account
					</button>
					<button className='rounded-full bg-blue-100 px-10 py-4 text-sm font-semibold text-primary sm:text-base'>
						Book a Demo
					</button>
				</div>
			</div>
		</main>
	);
}
