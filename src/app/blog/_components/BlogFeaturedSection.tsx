"use client";

import Image from "next/image";
import featuredImage from "@/assets/images/blog.jpg";
import latestImage from "@/assets/images/digital.jpg";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { heroDropFromTop, inViewFadeUp, inViewZoom } from "@/lib/animations";

const latestPosts = [
	{
		title: "Emerging Food Trends: What's Next on the Menu?",
		date: "Feb 8th",
		readTime: "10 mins read",
		views: "500 views",
	},
	{
		title: "Emerging Food Trends: What's Next on the Menu?",
		date: "Feb 8th",
		readTime: "10 mins read",
		views: "500 views",
	},
	{
		title: "Emerging Food Trends: What's Next on the Menu?",
		date: "Feb 8th",
		readTime: "10 mins read",
		views: "500 views",
	},
];

export function BlogFeaturedSection() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<section className='bg-white px-5 py-20'>
			<div className='mx-auto grid container gap-7 lg:grid-cols-[1.7fr_1fr]'>
				<Link href='/blog/gamepride' className='block'>
					<motion.article
						{...inViewZoom({ reduced: reducedMotion, delay: 0.06, duration: 0.95, amount: 0.25 })}
						className='relative overflow-hidden rounded-[20px]'
					>
					<div className='relative h-[320px] sm:h-[470px]'>
						<Image
							src={featuredImage}
							alt='Featured blog post'
							fill
							className='object-cover'
						/>
					</div>
					<div className='absolute inset-x-0 bottom-0 bg-[#111827]/55 px-6 py-6 text-white backdrop-blur-[2px] sm:px-7'>
						<p className='text-sm text-slate-300'>• Artificial Intelligence</p>
						<h3 className='mt-3 max-w-2xl text-3xl font-medium leading-tight sm:text-[40px]'>
							Demystifying AI: Navigating the New Frontier of Intelligence.
						</h3>
						<p className='mt-4 text-sm text-slate-300'>
							Feb 8th &nbsp; • &nbsp; 10 mins read &nbsp; • &nbsp; 500 views
						</p>
					</div>
					</motion.article>
				</Link>

				<motion.div {...heroDropFromTop({ reduced: reducedMotion, delay: 0.08 })}>
					<motion.h4
						{...heroDropFromTop({ reduced: reducedMotion, delay: 0.14, duration: 0.85 })}
						className='mb-5 text-2xl font-semibold text-secondary'
					>
						Latest Posts
					</motion.h4>
					<div className='space-y-4'>
						{latestPosts.map((post, idx) => (
							<motion.article
								key={`${post.title}-${idx}`}
								{...inViewFadeUp({
									reduced: reducedMotion,
									delay: 0.16 + idx * 0.08,
									duration: 0.8,
									amount: 0.4,
								})}
								className='flex gap-3 rounded-2xl border border-slate-200 bg-white p-3'
							>
								<Image
									src={latestImage}
									alt={post.title}
									className='h-24 w-24 rounded-xl object-cover'
									width={96}
									height={96}
								/>
								<div className='flex flex-1 flex-col justify-between py-1'>
									<p className='text-base font-medium leading-snug text-secondary'>
										{post.title}
									</p>
									<p className='text-xs text-slate-500'>
										{post.date} &nbsp; • &nbsp; {post.readTime} &nbsp; • &nbsp;{" "}
										{post.views}
									</p>
								</div>
							</motion.article>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
