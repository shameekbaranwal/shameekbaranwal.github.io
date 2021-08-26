import React from 'react';

import NavOption from './NavOption.js';

export default function HorizontalNavOptions() {
	return (
		<div className='hidden sm:flex items-center justify-around w-1/2 md:w-2/5 lg:w-2/5 xl:w-1/3 '>
			<NavOption name='Skills' href='/#' />
			<NavOption name='Projects' href='/#' />
			<NavOption name='Contact' href='/#' />
		</div>
	);
}
