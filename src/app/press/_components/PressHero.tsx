import Image from "next/image";
import fallbackHeroImg from "@/assets/images/digital.jpg";

export type PressPost = {
	title: string;
	date: string;
	readTime: string;
	summary: string;
	thumbnail: string;
};

export function PressHero({ post }: { post: PressPost }) {
	const heroImg = post.thumbnail?.trim() ? post.thumbnail : fallbackHeroImg;

	return (
		<section className='bg-[#edf4fb] px-6 pb-10 pt-14 sm:pt-20'>
			<div className='mx-auto container'>
				<article className='mt-2 rounded-[22px]'>
					<div className='overflow-hidden rounded-[22px]'>
						{typeof heroImg === "string" ? (
							// Remote images may not be configured in next.config, so keep it safe.
							<img
								src={heroImg}
								alt={post.title}
								className='h-[280px] w-full object-cover sm:h-[420px]'
								loading='lazy'
							/>
						) : (
							<Image
								src={heroImg}
								alt={post.title}
								className='h-[280px] w-full object-cover sm:h-[420px]'
								priority
							/>
						)}
					</div>
					<h1 className='mt-6 text-xl font-medium leading-tight text-secondary sm:text-2xl'>
						{post.title}
					</h1>
					<p className='mt-3 text-base text-slate-500'>
						{post.readTime} &nbsp;&middot;&nbsp; {post.date}
					</p>
				</article>
			</div>
		</section>
	);
}

