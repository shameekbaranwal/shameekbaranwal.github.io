import React from 'react';

export default function ExternalLink({ href, className, children }) {
	return (
		<a
			href={href}
			rel='noopener noreferrer'
			target='_blank'
			className={`bits bg-gray-50 px-1 py-0.5 bg-opacity-10 rounded ${className}`}
		>
			{children}
		</a>
	);
}
