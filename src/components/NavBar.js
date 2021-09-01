import React, { useState } from 'react';

import Logo from './Logo.js';
// import NavOption from './NavOption.js';
import HorizontalNavOptions from './HorizontalNavOptions.js';
import VerticalNavOptions from './VerticalNavOptions.js';
import NavToggleButton from './NavToggleButton.js';

export default function NavBar({ isOpen, setIsOpen }) {
	return (
		<nav className='bg-gradient-to-l from-richblue-600 to-richblue-800 fixed left-0 right-0 z-20'>
			<div className='transition-all duration-100 flex px-8 justify-center items-center sm:justify-between shadow-xl py-3'>
				{/* nav brand */}
				<Logo />
				{/* nav options */}
				<HorizontalNavOptions />
				{/* button for small screen nav component */}
				<NavToggleButton setIsOpen={setIsOpen} isOpen={isOpen} />
			</div>
		</nav>
	);
}
