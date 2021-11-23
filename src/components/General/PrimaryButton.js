import React from 'react';

export default function SecondaryButton({ href, children }) {
	return (
		// <button className='' data-aos='fade-up'>
		<a
			className='transition-all duration-200 border-2 border-turq-600 bg-turq-600 px-3 py-2 mx-2 text-richblue-800 hover:bg-opacity-10 hover:border-seashell hover:border-opacity-20 hover:text-seashell rounded-md font-light hover:font-medium hover:text-lg'
			href={href}
			target='_blank'
			rel='noopener noreferrer'
		>
			{children}
		</a>
		// </button>
	);
}
