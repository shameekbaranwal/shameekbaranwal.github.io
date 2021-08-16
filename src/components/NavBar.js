import React, { useState } from 'react';

import Logo from './Logo.js';
// import NavOption from './NavOption.js';
import HorizontalNavOptions from './HorizontalNavOptions.js';
import VerticalNavOptions from './VerticalNavOptions.js';
import NavToggleButton from './NavToggleButton.js';

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className='transition-all duration-100 flex px-8 justify-center items-center sm:justify-between shadow-xl py-2'>
				{/* nav brand */}
				<Logo />
				{/* nav options */}
				<HorizontalNavOptions />
				{/* button for medium nav component */}
				{/* <VerticalNavOptions /> */}
				<NavToggleButton setIsOpen={setIsOpen} isOpen={isOpen} />
			</div>
			<VerticalNavOptions isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	);
}
