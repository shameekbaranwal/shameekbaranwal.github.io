import React from 'react';

import pfp from '../../assets/social/dp.png';

export default function About() {
	return (
		<div className='text-seashell my-20 z-[1]' id='about'>
			<h2 className='text-3xl font-light text-center mb-6 font-Montserrat text-seashell'>
				About Me
			</h2>
			<div className='w-full flex flex-col md:flex-row items-center justify-center'>
				<div className='object-contain w-32 h-32 md:w-48 md:h-48 mb-8'>
					<img
						src={pfp}
						alt='profile pic'
						className='rounded-full w-full h-full'
					/>
				</div>
				<p className='font-thin text-lg text-justify px-10 max-w-lg'>
					I'm a motivated software developer aiming to specialize in
					the field of{' '}
					<strong className='font-light'>
						Front-End Web Development
					</strong>{' '}
					by doing meaningful personal projects and participating in
					real-world enterprise projects. I am currently pursuing my{' '}
					<strong className='font-light'>
						B.E. in Computer Science Engineering at{' '}
						<a href='https://bits-pilani.ac.in' className='bits'>
							BITS Pilani
						</a>
					</strong>
					, and I am looking for an experience-building internship for
					the summer of 2022 to enhance my skills as well as to learn
					how to work better as a teamplayer.
				</p>
			</div>
			<p className='font-light text-center mt-5'></p>
		</div>
	);
}
