import React from 'react';

// import pfp from '../../assets/social/dp.png';
import { LandingIntro } from './LandingIntro';
import { LandingPageButtons } from './LandingPageButtons';

export default function Landing() {
	return (
		<div className='w-screen h-screen flex justify-center items-center text-seashell min-h-96 pt-24 py-48 z-[1]'>
			<div>
				<LandingIntro />
				<LandingPageButtons />
			</div>
		</div>
	);
}
