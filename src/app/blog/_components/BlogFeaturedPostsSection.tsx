"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import blogImg from "@/assets/images/blog.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type Category = "All" | "Company" | "Product" | "Finance" | "API";

type FeaturedPost = {
	id: string;
	category: Exclude<Category, "All">;
	tag: string;
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
	views: string;
};

const categories: Category[] = ["All", "Company", "Product", "Finance", "API"];

export function BlogFeaturedPostsSection(): JSX.Element {
	const [activeCategory, setActiveCategory] = useState<Category>("All");

	const posts = useMemo<FeaturedPost[]>(
		() => [
			{
				id: "1",
				category: "Product",
				tag: "Machine Learning",
				title: "Welcome to Wired Wits: Transforming Entrepreneurship with AI.",
				excerpt:
					"Lorem ipsum dolor sit amet. Facilisi volutpat sed massa in mi dui. Vel morbi quis morbi.",
				date: "Feb 8th",
				readTime: "10 mins read",
				views: "500 views",
			},
			{
				id: "2",
				category: "Finance",
				tag: "Machine Learning",
				title: "Welcome to Wired Wits: Transforming Entrepreneurship with AI.",
				excerpt:
					"Lorem ipsum dolor sit amet. Facilisi volutpat sed massa in mi dui. Vel morbi quis morbi.",
				date: "Feb 8th",
				readTime: "10 mins read",
				views: "500 views",
			},
			{
				id: "3",
				category: "Company",
				tag: "Machine Learning",
				title: "Welcome to Wired Wits: Transforming Entrepreneurship with AI.",
				excerpt:
					"Lorem ipsum dolor sit amet. Facilisi volutpat sed massa in mi dui. Vel morbi quis morbi.",
				date: "Feb 8th",
				readTime: "10 mins read",
				views: "500 views",
			},
			{
				id: "4",
				category: "API",
				tag: "Machine Learning",
				title: "Welcome to Wired Wits: Transforming Entrepreneurship with AI.",
				excerpt:
					"Lorem ipsum dolor sit amet. Facilisi volutpat sed massa in mi dui. Vel morbi quis morbi.",
				date: "Feb 8th",
				readTime: "10 mins read",
				views: "500 views",
			},
			{
				id: "5",
				category: "Product",
				tag: "Machine Learning",
				title: "Welcome to Wired Wits: Transforming Entrepreneurship with AI.",
				excerpt:
					"Lorem ipsum dolor sit amet. Facilisi volutpat sed massa in mi dui. Vel morbi quis morbi.",
				date: "Feb 8th",
				readTime: "10 mins read",
				views: "500 views",
			},
			{
				id: "6",
				category: "Finance",
				tag: "Machine Learning",
				title: "Welcome to Wired Wits: Transforming Entrepreneurship with AI.",
				excerpt:
					"Lorem ipsum dolor sit amet. Facilisi volutpat sed massa in mi dui. Vel morbi quis morbi.",
				date: "Feb 8th",
				readTime: "10 mins read",
				views: "500 views",
			},
		],
		[],
	);

	const filtered = useMemo(() => {
		if (activeCategory === "All") return posts;
		return posts.filter((p) => p.category === activeCategory);
	}, [activeCategory, posts]);

	return (
		<section className='bg-white px-5 py-20'>
			<div className='mx-auto container'>
				<div className='flex items-start justify-between gap-4'>
					<div>
						<h2 className='text-2xl font-semibold text-secondary sm:text-3xl'>
							Featured Posts
						</h2>
						<div className='mt-5 flex flex-wrap items-center gap-6 text-sm'>
							{categories.map((cat) => {
								const active = cat === activeCategory;
								return (
									<button
										key={cat}
										type='button'
										onClick={() => setActiveCategory(cat)}
										className={`inline-flex items-center gap-2 transition ${
											active
												? "text-secondary"
												: "text-slate-500 hover:text-secondary"
										}`}
									>
										{active && (
											<span className='h-2 w-2 rounded-full bg-green-500' />
										)}
										{cat}
									</button>
								);
							})}
						</div>
					</div>

					<div className='hidden items-center gap-3 sm:flex'>
						<button
							type='button'
							aria-label='Previous'
							className='grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-700'
						>
							<ChevronLeftIcon className='h-5 w-5' />
						</button>
						<button
							type='button'
							aria-label='Next'
							className='grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-700'
						>
							<ChevronRightIcon className='h-5 w-5' />
						</button>
					</div>
				</div>

				<div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					{filtered.map((post) => (
						<article
							key={post.id}
							className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm'
						>
							<div className='relative h-[180px] w-full'>
								<Image src={blogImg} alt={post.title} fill className='object-cover' />
							</div>
							<div className='p-6'>
								<p className='text-sm text-slate-500'>
									<span className='mr-2 align-middle text-[10px] text-amber-500'>
										●
									</span>
									{post.tag}
								</p>
								<h3 className='mt-3 text-base font-semibold leading-snug text-secondary'>
									{post.title}
								</h3>
								<p className='mt-3 text-sm leading-relaxed text-slate-500'>
									{post.excerpt}
								</p>
								<p className='mt-5 text-xs text-slate-400'>
									{post.date} &nbsp; • &nbsp; {post.readTime} &nbsp; • &nbsp;{" "}
									{post.views}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

