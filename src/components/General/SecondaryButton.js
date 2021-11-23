import React from 'react';

export default function SecondaryButton({ href, children }) {
	return (
		// <button data-aos='fade-up'>
		<a
			className='transition-all duration-200 border-2 border-seashell px-3 py-2 mx-2 my-10 hover:border-opacity-10 rounded-md font-light hover:font-medium hover:text-lg'
			href={href}
			target='_blank'
			rel='noopener noreferrer'
		>
			{children}
		</a>
		// </button>
	);
}
