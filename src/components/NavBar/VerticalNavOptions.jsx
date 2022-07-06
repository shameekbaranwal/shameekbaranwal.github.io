import React from 'react';

import NavOption from './NavOption.jsx';
import SocialMedia from './SocialMedia.jsx';

export default function VerticalNavOptions({ isOpen, setIsOpen }) {
	// <div>Icons from "https://www.flaticon.com/authors/pixel-perfect"

	// function to close the navbar upon clicking any of the options
	const closeNavBar = () => setIsOpen(false);

	return (
		<div
			className={`outline-none w-full sm:hidden transition-all duration-300 flex flex-col fixed top-24 -mt-1 justify-start items-center bg-gradient-to-tl from-richblue-500 to-richblue-800 gap-y-6 overflow-hidden z-10 ${
				isOpen ? 'h-full pt-10 bottom-0 ' : 'h-0'
			}`}
		>
			<NavOption
				name='Skillset'
				href='/#skillset'
				closeNavBar={closeNavBar}
			/>
			<NavOption
				name='Projects'
				href='/#projects'
				closeNavBar={closeNavBar}
			/>
			<NavOption
				name='Contact'
				href='/#contact'
				closeNavBar={closeNavBar}
			/>
			<div className='my-10'>
				<p className='text-seashell px-2 py-1 text-center text-xl font-extralight'>
					You can also find me on
				</p>
				<SocialMedia closeNavBar={closeNavBar} />
			</div>
		</div>
	);
}
