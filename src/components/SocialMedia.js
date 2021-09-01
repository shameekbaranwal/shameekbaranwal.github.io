import React from 'react';

import gmail from '../assets/social/gmail.png';
import github from '../assets/social/github.png';
import fiverr from '../assets/social/fiverr.png';
import linkedin from '../assets/social/linkedin.png';
import SocialIcon from './SocialIcon.js';

export default function SocialMedia({ closeNavBar }) {
	return (
		<div className='flex w-screen justify-around items-center gap-x-1 mt-6 px-20'>
			<SocialIcon
				icon={github}
				alt='GitHub'
				closeNavBar={closeNavBar}
				href='https://github.com/shameekbaranwal'
			/>
			<SocialIcon
				icon={fiverr}
				alt='Fiverr'
				closeNavBar={closeNavBar}
				href='https://fiverr.com/shameekbaranwal'
			/>
			<SocialIcon
				icon={linkedin}
				alt='LinkedIn'
				closeNavBar={closeNavBar}
				href='https://linkedin.com/in/shameekbaranwal'
			/>
			<SocialIcon
				icon={gmail}
				alt='Mail'
				closeNavBar={closeNavBar}
				href='mailto:shameekbaranwal@gmail.com'
			/>
		</div>
	);
}
