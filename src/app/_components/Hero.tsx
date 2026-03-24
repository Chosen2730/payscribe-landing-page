"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

import left1 from "@/assets/images/left1.png";
import left2 from "@/assets/images/left2.png";
import right1 from "@/assets/images/right1.png";
import right2 from "@/assets/images/right2.png";
import right3 from "@/assets/images/right3.png";

export function Hero() {
	const heroRef = useRef<HTMLElement | null>(null);
	const hasBeenInView = useRef(false);
	const [animationCycle, setAnimationCycle] = useState(0);

	useEffect(() => {
		const node = heroRef.current;
		if (!node) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					if (!hasBeenInView.current) {
						setAnimationCycle((prev) => prev + 1);
						hasBeenInView.current = true;
					}
				} else {
					hasBeenInView.current = false;
				}
			},
			{ threshold: 0.35 }
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	return (
		<main
			ref={heroRef}
			className='relative mx-auto flex w-full flex-col items-center text-center pt-20'
			style={{
				background:
					"linear-gradient(180deg, #e8f1fc 0%, #f4f8ff 60%, #ffffff 100%)",
			}}
		>
			{/* Left-side cards */}
			<div className='pointer-events-none absolute left-0 top-0 hidden md:block'>
				<div
					key={`left-1-${animationCycle}`}
					className={`${styles.dropIn} relative h-32 w-48`}
					style={{ animationDelay: "100ms" }}
				>
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
				<div
					key={`left-2-${animationCycle}`}
					className={`${styles.dropIn} relative h-52 w-60`}
					style={{ animationDelay: "220ms" }}
				>
					<Image
						src={left2}
						alt='Activity breakdown card'
						fill
						className='object-contain object-left'
					/>
				</div>
			</div>

			<div className='pointer-events-none absolute right-0 top-4 hidden  md:block'>
				<div
					key={`right-1-${animationCycle}`}
					className={`${styles.dropIn} relative h-36 w-64`}
					style={{ animationDelay: "320ms" }}
				>
					<Image
						src={right1}
						alt='Earned this month card'
						fill
						className='object-contain object-right'
					/>
				</div>
			</div>
			<div className='pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 md:block'>
				<div
					key={`right-2-${animationCycle}`}
					className={`${styles.dropIn} relative h-36 w-64`}
					style={{ animationDelay: "430ms" }}
				>
					<Image
						src={right2}
						alt='Completed transactions card'
						fill
						className='object-contain object-right'
					/>
				</div>
			</div>
			<div className='pointer-events-none absolute bottom-4 right-0 hidden md:block'>
				<div
					key={`right-3-${animationCycle}`}
					className={`${styles.dropIn} relative h-36 w-64`}
					style={{ animationDelay: "540ms" }}
				>
					<Image
						src={right3}
						alt='Users statistics card'
						fill
						className='object-contain object-right'
					/>
				</div>
			</div>
			<div className='flex flex-col items-center justify-center pb-20'>
				<h1
					key={`hero-title-${animationCycle}`}
					className={`${styles.popIn} max-w-4xl text-balance text-4xl font-medium leading-tight sm:text-5xl`}
					style={{ animationDelay: "620ms" }}
				>
					Empowering Businesses with the Future of Financial Innovation.
				</h1>
				<p
					key={`hero-copy-${animationCycle}`}
					className={`${styles.popIn} mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-xl`}
					style={{ animationDelay: "760ms" }}
				>
					Payscribe provides businesses with a robust payment infrastructure to
					securely accept payments, issue USD/NGN cards for seamless
					cross-border transactions, and deliver a full range of financial
					services to enhance customer experience.
				</p>

				<div className='mt-10 flex flex-col gap-4 sm:flex-row'>
					<button
						key={`hero-primary-btn-${animationCycle}`}
						className={`${styles.buttonIn} rounded-full bg-primary px-10 py-4 text-sm font-semibold text-white sm:text-base`}
						style={{ animationDelay: "900ms" }}
					>
						Create A Free Account
					</button>
					<button
						key={`hero-secondary-btn-${animationCycle}`}
						className={`${styles.buttonIn} rounded-full bg-blue-100 px-10 py-4 text-sm font-semibold text-primary sm:text-base`}
						style={{ animationDelay: "1020ms" }}
					>
						Book a Demo
					</button>
				</div>
			</div>
		</main>
	);
}
