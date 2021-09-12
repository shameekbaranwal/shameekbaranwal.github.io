import React from 'react';

export function LandingPageButtons() {
	return (
		<div className='flex flex-row justify-center items-center transition-all duration-100'>
			<a
				className='transition-all duration-200 border-2 border-turq-600 bg-turq-600 px-3 py-2 mx-2 text-richblue-800 hover:bg-opacity-10 hover:border-seashell hover:border-opacity-20 hover:text-seashell rounded-md font-light hover:font-medium hover:text-lg'
				href='#about'
			>
				Know More
			</a>
			<a
				className='transition-all duration-200 border-2 border-seashell px-3 py-2 mx-2 my-10 hover:border-opacity-10 rounded-md font-light hover:font-medium hover:text-lg'
				href='#skillset'
			>
				View Resume
			</a>
		</div>
	);
}
