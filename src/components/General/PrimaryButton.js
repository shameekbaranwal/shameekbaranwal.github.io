import React from 'react';

export default function SecondaryButton({ href, children, sameTab }) {
	return (
		// <button className='' data-aos='fade-up'>
		<a
			className='transition-all duration-200 border-0 border-turq-600 bg-turq-600 px-3 py-3 mx-2 text-richblue-800 hover:bg-opacity-10 hover:rounded-lg hover:border-seashell hover:text-seashell rounded-md font-light hover:font-medium hover:text-lg'
			href={href}
			target={sameTab ? '' : '_blank'}
			rel='noopener noreferrer'
		>
			{children}
		</a>
		// </button>
	);
}
