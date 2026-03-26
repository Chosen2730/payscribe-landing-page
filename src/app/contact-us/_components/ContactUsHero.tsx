"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { heroCtaPulse, heroDropFromTop, inViewZoom } from "@/lib/animations";

export function ContactUsHero() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<main className='business-hero px-5 py-24 md:py-32'>
			<motion.div
				{...heroDropFromTop({ reduced: reducedMotion, delay: 0.05 })}
				className='mx-auto max-w-2xl text-center'
			>
				<motion.h1
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.14, duration: 0.95 })}
					className='text-3xl font-semibold text-white sm:text-4xl'
				>
					Get in touch with us
				</motion.h1>
				<motion.p
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.26, duration: 0.9 })}
					className='mt-4 text-sm leading-relaxed text-slate-300 md:text-base'
				>
					We want to send your question directly to the correct department and
					answer your questions as quickly as possible. To help us with this, we
					ask that you please complete the form below. Include any details you
					think may be helpful.
				</motion.p>
			</motion.div>

			<motion.div
				{...inViewZoom({ reduced: reducedMotion, delay: 0.12, duration: 0.95, amount: 0.25 })}
				className='mx-auto mt-10 max-w-2xl rounded-2xl border border-slate-700 bg-[#FFFFFF0D] p-6 shadow-xl md:p-8'
			>
				<form className='space-y-6'>
					<div className='grid gap-6 sm:grid-cols-2'>
						<div className='space-y-2'>
							<label
								htmlFor='fullName'
								className='block text-sm font-medium text-slate-200'
							>
								Full Name
							</label>
							<input
								id='fullName'
								type='text'
								placeholder='Enter'
								className='w-full rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 outline-none focus:border-primary'
							/>
						</div>
						<div className='space-y-2'>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-slate-200'
							>
								Email
							</label>
							<input
								id='email'
								type='email'
								placeholder='Enter'
								className='w-full rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 outline-none focus:border-primary'
							/>
						</div>
					</div>

					<div className='space-y-2'>
						<label
							htmlFor='reason'
							className='block text-sm font-medium text-slate-200'
						>
							Reason
						</label>
						<select
							id='reason'
							className='w-full appearance-none rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-slate-300 focus:border-primary focus:outline-none'
						>
							<option value=''>Select Option</option>
							<option value='support'>Support</option>
							<option value='sales'>Sales</option>
							<option value='partnership'>Partnership</option>
							<option value='other'>Other</option>
						</select>
					</div>

					<div className='space-y-2'>
						<label
							htmlFor='description'
							className='block text-sm font-medium text-slate-200'
						>
							Description
						</label>
						<textarea
							id='description'
							rows={4}
							placeholder='Type here...'
							className='w-full resize-none rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 outline-none focus:border-primary'
						/>
					</div>

					<div className='flex justify-center pt-2'>
						<Link
							href='/book-a-demo'
							className='inline-flex'
						>
							<motion.span
								{...heroCtaPulse(reducedMotion)}
								className='inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-secondary'
							>
								Book a Demo
								<svg
									className='h-4 w-4'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M14 5l7 7m0 0l-7 7m7-7H3'
									/>
								</svg>
							</motion.span>
						</Link>
					</div>
				</form>
			</motion.div>
		</main>
	);
}
