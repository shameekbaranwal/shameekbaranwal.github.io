import React from 'react';

import Project from './Project.js';
import overcl0ck1 from '../../assets/projects/overcl0ck1.png';
import overcl0ck2 from '../../assets/projects/overcl0ck2.png';
import ExternalLink from '../General/ExternalLink.js';

export default function Overclock() {
	const caption = 'A digital clock made of 360 analogue clocks.';

	const image = (
		<div
			className='w-full px-10 h-auto container mx-auto'
			data-aos='fade-up'
		>
			<div className='pc-project-img-container '>
				<img
					src={overcl0ck1}
					alt={'overcl0ck screenshot 1'}
					className='pc-project-img-1'
				/>
				<img
					src={overcl0ck2}
					alt={'overcl0ck screenshot 2'}
					className='pc-project-img-2'
				/>
			</div>

			<p className='text-center font-light text-md font-Montserrat md:hidden'>
				{caption}
			</p>
		</div>
	);

	return (
		<Project
			title='overcl0ck'
			image={image}
			caption={caption}
			details={details}
			// size={10}
			technologies={['html', 'css', 'js', 'p5']}
			live={'https://overcl0ck.netlify.app'}
			code={'https://github.com/shameekbaranwal/overcl0ck'}
			position='right'
		/>
	);
}

const details = (
	<>
		<li>
			Created a custom notation for the configurations by representing the
			state of each hand in terms of base-4 digits, which improved memory
			utilization and opens avenues for creating a physical version. More
			details available{' '}
			<ExternalLink href='https://github.com/shameekbaranwal/overcl0ck/blob/main/README.md'>
				here
			</ExternalLink>
			.
		</li>
		<li>Includes a dark mode and light mode.</li>
		<li>Includes multiple themes for the digits.</li>
	</>
);
