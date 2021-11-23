import React from 'react';

export default function SecondaryButton({ href, children, sameTab }) {
	return (
		// <button data-aos='fade-up'>
		<a
			className='transition-all duration-200 border-0 px-3 py-3 mx-2 my-10 hover:border-opacity-0 bg-white bg-opacity-0 hover:bg-opacity-10 rounded-md font-light hover:font-medium hover:text-lg'
			href={href}
			target={sameTab ? '' : '_blank'}
			rel='noopener noreferrer'
		>
			{children}
		</a>
		// </button>
	);
}
