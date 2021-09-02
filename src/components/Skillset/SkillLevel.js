import React from 'react';

export default function SkillLevel({ level }) {
	return (
		<div className='hidden group-hover:flex flex-row w-32 mt-3 bg-gray-100 rounded-lg'>
			<div style={{ width: `${level * 10}%` }}>
				<div class='py-0.5 text-xs text-center text-white bg-gradient-to-r from-red-400 to-red-600 rounded-l-lg rounded-r-sm progress'></div>
			</div>
		</div>
	);
}
