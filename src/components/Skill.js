import React from 'react';

export default function Skill({ name, icon, level }) {
	return (
		<li className='w-full h-28 bg-seashell rounded-lg shadow-2xl text-2xl flex items-center justify-center'>
			{name}
		</li>
	);
}
