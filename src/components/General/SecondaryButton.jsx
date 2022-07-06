import React from 'react';

export default function SecondaryButton({ href, children, sameTab }) {
	return (
		// <button data-aos='fade-up'>
		<a
			className='transition-all duration-200 border-seashell border hover:border-opacity-0 px-3 py-[0.625rem] mx-2 my-10 bg-white bg-opacity-0 hover:bg-opacity-10 rounded-md font-light hover:font-medium hover:text-lg'
			href={href}
			target={sameTab ? '' : '_blank'}
			rel='noopener noreferrer'
		>
			{children}
		</a>
		// </button>
	);
}
