import React, { useState } from 'react';

export default function ProjectDetails() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className={`overflow-hidden mt-8 transition-all flex flex-col justify-center items-center duration-250`}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className={`h-6 w-6 hover:scale-150 hover:animate-pulse cursor-pointer transition-all duration-250 ${
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
				 list-disc transition-all duration-200 ${isOpen ? 'h-40' : 'h-0'}`}
			>
				<li>
					Supported by the official{' '}
					<a
						href='https://www.petfinder.com/developers/'
						rel='noopener noreferrer'
						target='_blank'
						className='bits'
					>
						Petfinder API
					</a>
					.
				</li>
				<li>
					Learned the concepts of Responsive Web Design using
					Tailwind, Routing, and modern React fundamentals.
				</li>
			</ul>
		</div>
	);
}
