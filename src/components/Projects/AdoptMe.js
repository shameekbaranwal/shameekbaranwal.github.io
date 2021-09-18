import React from 'react';

import Project from './Project.js';
import AdoptMe1 from '../../assets/projects/AdoptMe1.png';
import AdoptMe2 from '../../assets/projects/AdoptMe2.png';
import ExternalLink from '../ExternalLink.js';

export default function AdoptMe() {
	const caption =
		'A simple client-side web-app that allows users to view a live feed of real pets put up for adoption across the US.';

	const image = (
		<div
			className='w-full px-10 h-auto container mx-auto'
			data-aos='fade-up'
		>
			<div className='adoptme-img-container '>
				<img
					src={AdoptMe2}
					alt={'Adopt Me screenshot 1'}
					className='adoptme-img-1'
				/>
				<img
					src={AdoptMe1}
					alt={'Adopt Me screenshot 2'}
					className='adoptme-img-2'
				/>
			</div>

			<p className='text-center font-light text-md font-Montserrat'>
				{caption}
			</p>
		</div>
	);

	return (
		<Project
			title='adopt-me'
			image={image}
			caption={caption}
			details={details}
			// size={10}
			technologies={['react', 'tailwind', 'reactrouter']}
			live={'https://adopt-me-web.netlify.app'}
			code={'https://github.com/shameekbaranwal/adopt-me'}
		/>
	);
}

const details = (
	<>
		<li>
			Supported by the official{' '}
			<ExternalLink href='https://www.petfinder.com/developers/'>
				Petfinder API
			</ExternalLink>
			.
		</li>
		<li>
			Learned the concepts of Responsive Web Design using Tailwind,
			Routing, and modern React fundamentals.
		</li>
	</>
);
