import React from "react";
import Image from "next/image";
import transfer from "@/assets/images/transfer1.png";
import transfer2 from "@/assets/images/transfer2.png";
import allWhite from "@/assets/images/pay-all-white.png";

const SendMoneySection = () => {
	return (
		<div className='container mx-auto my-20 px-5'>
			<h2 className='text-3xl font-medium text-secondary text-center'>
				Send Money Your Way — One Payment or Thousands
			</h2>
			<p className='mt-4 text-base leading-relaxed text-slate-600 text-center max-w-xl mx-auto'>
				From simple transfers to large-scale payouts, move money faster with
				secure, automated payment infrastructure.
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center relative mt-10 max-w-3xl mx-auto'>
				<Image
					src={transfer}
					alt='transfer'
					className='relative z-10 w-full'
					width={500}
					height={500}
				/>
				<Image
					src={transfer2}
					alt='transfer'
					className='relative z-10 w-full'
					width={500}
					height={500}
				/>
				<Image
					src={allWhite}
					alt='allWhite'
					width={500}
					className='w-full absolute top-0 translate-y-1/2'
				/>
			</div>
		</div>
	);
};

export default SendMoneySection;
