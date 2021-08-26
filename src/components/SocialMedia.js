import React from 'react';

import github from '../assets/github.png';
import instagram from '../assets/instagram.png';
import fiverr from '../assets/fiverr.png';
import linkedin from '../assets/linkedin.png';

export default function SocialMedia() {
	return (
		<div className='flex w-screen justify-around items-center mt-6 px-24'>
			<a
				href='https://github.com/shameekbaranwal'
				target='_blank'
				className='w-1/7 hover:opacity-20 transition duration-100 ease-in'
				rel='noopener noreferrer'
			>
				<img src={github} className='w-full' alt='Github' />
			</a>
			<a
				href='https://fiverr.com/shameekbaranwal'
				target='_blank'
				className='w-1/7 hover:opacity-20 transition duration-100 ease-in'
				rel='noopener noreferrer'
			>
				<img src={fiverr} className='w-full' alt='Fiverr' />
			</a>
			<a
				href='https://linkedin.com/in/shameekbaranwal'
				target='_blank'
				className='w-1/7 hover:opacity-20 transition duration-100 ease-in'
				rel='noopener noreferrer'
			>
				<img src={linkedin} className='w-full' alt='LinkedIn' />
			</a>
			<a
				href='https://instagram.com/shameekbaranwal'
				target='_blank'
				className='w-1/7 hover:opacity-20 transition duration-100 ease-in'
				rel='noopener noreferrer'
			>
				<img src={instagram} className='w-full' alt='Instagram' />
			</a>
		</div>
	);
}
