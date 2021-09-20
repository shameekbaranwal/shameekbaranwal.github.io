import React from 'react';

import Resume from "../../assets/Shameek's Resume.pdf";

export function LandingPageButtons() {
	return (
		<div className='flex flex-row justify-center items-center transition-all duration-100 z-[1]'>
			<a className='primary-btn' href='#about'>
				Know More
			</a>
			<a
				className='secondary-btn'
				href={Resume}
				rel='noopener noreferrer'
				target='_blank'
			>
				View Resume
			</a>
		</div>
	);
}
