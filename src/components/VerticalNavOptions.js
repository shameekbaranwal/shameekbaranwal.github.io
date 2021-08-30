import React from 'react';

import NavOption from './NavOption.js';
import SocialMedia from './SocialMedia.js';

export default function VerticalNavOptions({ isOpen, setIsOpen }) {
	// <div>Icons from "https://www.flaticon.com/authors/pixel-perfect"

	return (
		<div
			className={`w-full sm:hidden transition-all duration-300 flex flex-col absolute justify-start items-center bg-gradient-to-tl from-richblue-500 to-richblue-800 gap-y-6 overflow-hidden z-10 ${
				isOpen ? 'h-full pt-10' : 'h-0'
			}`}
		>
			<NavOption name='Skills' href='/#' />
			<NavOption name='Projects' href='/#' />
			<NavOption name='Contact' href='/#' />
			<div className='my-10'>
				<p className='text-seashell px-2 py-1 text-center text-xl font-extralight'>
					You can also find me on
				</p>
				<SocialMedia />
			</div>
		</div>
	);
}
