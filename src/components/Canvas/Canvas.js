import React from 'react';
import Particles from 'react-particles-js';

export default function Canvas() {
	return (
		// <div className='border-2 fixed inset-0 h-screen'>
		// 	<div className='relative w-screen h-screen'>
		<div className='fixed inset-0 top-24 w-screen h-full'>
			<Particles
				className='h-full'
				params={{
					particles: {
						number: {
							density: { enable: true, value_area: 1200 },
							// value: 20,
						},
						size: {
							value: 2,
						},
						move: {
							speed: 1,
						},
					},
				}}
			/>
		</div>
		// 	</div>
		// </div>
	);
}
