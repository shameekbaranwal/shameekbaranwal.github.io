import React from 'react';

import Resume from "../../assets/Shameek's Resume.pdf";
import PrimaryButton from '../General/PrimaryButton.jsx';
import SecondaryButton from '../General/SecondaryButton.jsx';

export function LandingPageButtons() {
	return (
		<div className='flex flex-row justify-center items-center transition-all duration-100 z-[1]'>
			<PrimaryButton href='#about' sameTab={true}>
				Know More
			</PrimaryButton>
			<SecondaryButton href={Resume}>View Resume</SecondaryButton>
		</div>
	);
}
