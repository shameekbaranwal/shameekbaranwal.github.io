import React from 'react';

import Tooltip from '../../General/Tooltip.jsx';

export default function Technology({ details }) {
	return (
		<li className='flex justify-center items-center group'>
			<Tooltip text={details.name}>
				<img
					src={details.image}
					alt={details.name}
					className=' w-10 group-hover:scale-125 transition duration-500 group-hover:animate-pulse rounded-lg'
					// title={details.name}
				/>
			</Tooltip>
		</li>
	);
}
