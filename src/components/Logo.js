import React from 'react';

export default function Logo({ className }) {
	return (
		<a
			className={`w-20 my-3 bg-gradient-to-b from-turq-700 via-turq-300 to-turq-700 text-transparent bg-clip-text ${className}`}
			href='/#'
		>
			<h1 className='text-transparent text-5xl xl:text-6xl text-center font-mono'>
				S
			</h1>
		</a>
	);
}
