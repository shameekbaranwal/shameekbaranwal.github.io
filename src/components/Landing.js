import React, { useState } from 'react';

import pfp from '../assets/dp.png';

export default function Landing() {
	const texts = [
		'Shameek Kumar Baranwal',
		'Front-End Web Developer',
		'Freelancer',
		<p>
			Computer Science Sophomore at{' '}
			<a
				href='https://bits-pilani.ac.in'
				rel='noopener noreferrer'
				target='_blank'
				className='relative bits'
			>
				BITS Pilani
			</a>
		</p>,
	];

	const [index, setIndex] = useState(1);

	return (
		<div className='w-screen flex flex-col-reverse sm:flex-row justify-center items-center text-seashell my-20'>
			{/* text & buttons */}
			<div>
				{/* Hi, I'm Shameek Kumar Baranwal / Front-End Web Developer / Freelancer / CS Sophomore at BITS Pilani */}
				<div className='mx-3'>
					<p className='font-light text-center text-xl mt-10 mb-2'>
						Hi, I'm{' '}
						<span
							className={`transition duration-100 ${
								index === 0 ? 'opacity-0' : 'opacity-100'
							}`}
						>
							a
						</span>
					</p>
					<p className='font-thin text-center text-2xl mb-2 flex justify-center items-center flex-col h-20 typing'>
						{texts[index]}
					</p>
				</div>
				{/* [Know More] [View Resume] */}
				<div className='flex flex-row justify-center items-center'>
					<button className='transition-all duration-200 border-2 border-turq-600 bg-turq-600 px-3 py-2 mx-2 text-richblue-800 hover:bg-opacity-10 hover:border-seashell hover:border-opacity-20 hover:text-seashell rounded-md font-light hover:font-medium hover:text-lg'>
						Know More
					</button>
					<button
						className='transition-all duration-200 border-2 border-seashell px-3 py-2 mx-2 my-10 hover:border-opacity-10 rounded-md font-light hover:font-medium hover:text-lg'
						onClick={() => {
							setIndex((index + 1) % 4);
						}}
					>
						View Resume
					</button>
				</div>
			</div>
			{/* Image */}
			<div className='object-contain w-32 h-w-32'>
				<img src={pfp} alt='profile pic' className='rounded-full' />
			</div>
		</div>
	);
}
