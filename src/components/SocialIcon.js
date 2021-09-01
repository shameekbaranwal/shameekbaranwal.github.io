import React from 'react';

export default function SocialIcon({ href, closeNavBar, icon, alt }) {
	return (
		<a
			href={href}
			target='_blank'
			className='w-1/6 hover:opacity-20 transition duration-100 ease-in'
			rel='noopener noreferrer'
			onClick={closeNavBar}
		>
			<img src={icon} className='w-full' alt={alt} />
		</a>
	);
}
