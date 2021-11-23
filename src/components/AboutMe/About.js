import React from 'react';

import pfp from '../../assets/social/dp.png';
import ExternalLink from '../General/ExternalLink.js';

export default function About() {
	return (
		<div
			className='text-seashell my-20 z-[1] w-full max-w-[90rem]'
			id='about'
		>
			<h2
				data-aos='fade-up'
				className='text-3xl font-light text-center mb-6 font-Montserrat text-seashell'
			>
				About Me
			</h2>
			<div className='flex justify-center items-center w-full flex-col xl:flex-row'>
				<div
					className='w-full flex flex-col md:flex-row items-center justify-center '
					data-aos='fade-up'
				>
					<div className='container w-32 h-32 md:w-48 md:h-48 mb-8 md:mb-0 flex justify-center items-center'>
						<img
							src={pfp}
							alt='profile pic'
							className='rounded-full object-contain w-full h-auto self-center'
							loading='lazy'
						/>
					</div>
					<p className='font-thin text-lg text-justify px-10 max-w-xl xl:max-w-2xl xl:text-xl'>
						I'm a motivated software developer aiming to specialize
						in the field of{' '}
						<strong className='font-light'>
							Front-End Web Development
						</strong>{' '}
						by doing meaningful personal projects and participating
						in real-world enterprise projects. I am currently
						pursuing my{' '}
						<strong className='font-light'>
							B.E. in Computer Science Engineering at{' '}
							<ExternalLink href='https://bits-pilani.ac.in'>
								BITS Pilani
							</ExternalLink>
						</strong>
						, and I am looking for an experience-building internship
						for the summer of 2022 to enhance my skills as well as
						to learn how to work better as a teamplayer.
					</p>
				</div>
				<div
					className='!transition-all duration-200 bg-gray-300 bg-opacity-10 hover:bg-opacity-5 px-4 py-4 rounded mt-10 xl:mt-0 backdrop-blur hover:backdrop-blur-sm shadow-xl mx-10 max-w-lg'
					data-aos='fade-up'
				>
					<h3 className='text-xl text-center font-extralight'>
						Some highlights
					</h3>
					<ul className='mt-2'>
						<li className='mx-1 min-w-[0ch] font-thin before:content-["⪼"] before:mr-2'>
							Secured third rank in{' '}
							<ExternalLink href='http://www.cmseducation.org/cofas/results.html'>
								COFAS
							</ExternalLink>
							{' International Computer Olympiad - '}
							Computer Wizard{' '}
							<span className='font-mono'>(11/2018)</span>.
						</li>
						<li className='mx-1 font-thin before:content-["⪼"] before:mr-2'>
							Secured 97.25% in ISC Board Examinations{' '}
							<span className='font-mono'>(05/2019)</span>.
						</li>
						<li className='mx-1 font-thin before:content-["⪼"] before:mr-2'>
							Maintained a constant ⭐⭐⭐⭐⭐ rating across all
							gigs on{' '}
							<ExternalLink href='https://fiverr.com/shameekbaranwal'>
								Fiverr
							</ExternalLink>{' '}
							<span className='font-mono'>(03/2021)</span>.
						</li>
						<li className='mx-1 font-thin before:content-["⪼"] before:mr-2'>
							Received an{' '}
							<ExternalLink href='https://drive.google.com/file/d/1Oeq2aTYddU0l3ClYVgu3us4dZ44PC6B8/view?usp=sharing'>
								LOR
							</ExternalLink>{' '}
							from Kotak Education Foundation at the conclusion of
							my internship{' '}
							<span className='font-mono'>(07/2021)</span>.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

// Highlights:
// 1) COFAS
// 2) 97.25%
// 3) Fiverr 5*
// 4) Secured internship at KEF + Received LOR
