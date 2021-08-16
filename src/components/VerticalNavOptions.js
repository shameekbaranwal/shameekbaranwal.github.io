import React from 'react';
import NavOption from './NavOption.js';

// import NavOption from './NavOption.js';

export default function VerticalNavOptions({ isOpen, setIsOpen }) {
	return (
		<div
			className={`w-full sm:hidden transition-all duration-300 flex flex-col absolute justify-start items-center bg-gradient-to-tl from-richblue-500 to-richblue-800 gap-y-6 overflow-hidden ${
				isOpen ? 'h-full pt-10' : 'h-0'
			}`}
		>
			<NavOption name='Skills' href='/#' />
			<NavOption name='Projects' href='/#' />
			<NavOption name='Contact' href='/#' />
		</div>
	);
}
