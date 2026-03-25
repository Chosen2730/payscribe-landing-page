import Image from "next/image";
import blogCover from "@/assets/images/digital.jpg";
import Link from "next/link";

export function BlogHero() {
	return (
		<section className='bg-[#edf4fb] px-6 pb-16 pt-14 sm:pt-20'>
			<div className='mx-auto container'>
				<div className='text-center'>
					<h1 className='text-5xl font-medium text-secondary sm:text-7xl'>
						Payscribe Blog
					</h1>
					<p className='mx-auto mt-6 max-w-3xl text-lg text-slate-700'>
						Don&apos;t miss out on interesting tips about Payscribe, and how to
						manage your funds.
					</p>
				</div>

				<Link href='/blog/gamepride' className='block'>
					<article className='mt-10 rounded-[22px]'>
					<div className='overflow-hidden rounded-[22px]'>
						<Image
							src={blogCover}
							alt='How Gamepride built a seamless gaming experience'
							className='h-[280px] w-full object-cover sm:h-[420px]'
							priority
						/>
					</div>
					<h2 className='mt-6 text-xl font-medium leading-tight text-secondary'>
						How Gamepride Built a Seamless Gaming Experience with Payscribe
					</h2>
					<p className='mt-3 text-base text-slate-500'>
						4 Min &nbsp;&middot;&nbsp; August 19, 2022
					</p>
					</article>
				</Link>
			</div>
		</section>
	);
}
