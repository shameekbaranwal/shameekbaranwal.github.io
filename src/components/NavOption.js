import React from 'react';

export default function NavOption({ name, href }) {
	return (
		<a
			className='relative transition-all duration-400 text-seashell hover:text-turq-500 px-2 py-1 text-center text-xl hover:text-2xl nav-option'
			href={href}
		>
			{name}
		</a>
	);
}
