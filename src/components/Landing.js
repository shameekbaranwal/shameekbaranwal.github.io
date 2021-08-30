import React from 'react';

import pfp from '../assets/dp.png';
import { LandingIntro } from './LandingIntro';
import { LandingPageButtons } from './LandingPageButtons';

export default function Landing() {
	return (
		<div className='w-screen flex flex-col-reverse sm:flex-row justify-center items-center text-seashell my-20'>
			<div>
				<LandingIntro />
				<LandingPageButtons />
			</div>
			{/* Image */}
			<div className='object-contain w-32 h-w-32'>
				<img src={pfp} alt='profile pic' className='rounded-full' />
			</div>
		</div>
	);
}
