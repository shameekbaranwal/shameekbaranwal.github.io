import React from 'react';

import AdoptMePC from '../../assets/projects/AdoptMePC.png';
// import AdoptMePhone from '../../assets/projects/AdoptMePhone.jpg';
import ProjectDetails from './ProjectDetails.js';

export default function Project({ title }) {
	return (
		<li
			className='mt-10 flex flex-col justify-center items-center h-full mb-40 min-h-full'
			data-aos='fade-up'
		>
			<div className='w-full h-full rounded-xl'>
				<h3 className='text-3xl text-center font-Montserrat font-semibold text-seashell'>
					{title}
				</h3>
				<div className='w-full px-4 h-auto container mx-auto'>
					<img
						src={AdoptMePC}
						alt='Adopt Me PC'
						className='mt-5 object-cover rounded'
					/>
					<p className='mt-4 text-center font-light text-md font-Montserrat'>
						A simple client-side web-app that allows users to view a
						live feed of real pets put up for adoption across the
						US.
					</p>
				</div>
				<ProjectDetails />
				<div className='flex flex-col justify-center items-center mx-6 font-thin '>
					<p>Technologies Used</p>
					<ul>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div className='flex flex-row justify-center items-center mt-8 gap-x-8'>
					<button className=''>
						<a
							className='transition-all duration-200 border-2 border-turq-600 bg-turq-600 px-3 py-2 mx-2 text-richblue-800 hover:bg-opacity-10 hover:border-seashell hover:border-opacity-20 hover:text-seashell rounded-md font-light hover:font-medium hover:text-lg'
							href='https://adopt-me-web.netlify.app'
							target='_blank'
							rel='noopener noreferrer'
						>
							Live Demo
						</a>
					</button>
					<button>
						<a
							className='transition-all duration-200 border-2 border-seashell px-3 py-2 mx-2 my-10 hover:border-opacity-10 rounded-md font-light hover:font-medium hover:text-lg'
							href='https://github.com/shameekbaranwal/adopt-me'
							target='_blank'
							rel='noopener noreferrer'
						>
							Source Code
						</a>
					</button>
				</div>
			</div>
		</li>
	);
}
