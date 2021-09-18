import React, { useState } from 'react';

export default function ProjectDetails({ details, size }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className={`overflow-hidden my-8 transition-all flex flex-col justify-center items-center duration-250`}
			data-aos='fade-up'
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className={`h-6 w-6 hover:scale-150 animate-pulse cursor-pointer transition-all duration-250 ${
					isOpen && 'transform rotate-180'
				}`}
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				onClick={() => setIsOpen(o => !o)}
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M19 9l-7 7-7-7'
				/>
			</svg>
			<ul
				className={`font-thin text-justify mx-8 mt-8
				list-disc transition-all duration-500} ${isOpen ? 'max-h-96' : 'max-h-0'}`}
			>
				{details}
			</ul>
		</div>
	);
}
