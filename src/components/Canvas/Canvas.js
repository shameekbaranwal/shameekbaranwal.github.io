import React from 'react';
import Particles from 'react-particles-js';

export default function Canvas() {
	return (
		<div className='fixed inset-0 top-24 w-screen h-full'>
			<Particles
				className='h-full'
				params={{
					particles: {
						number: {
							density: {
								enable: true,
								value_area: 1500,
							},
						},
						size: {
							value: 2.4,
							random: true,
						},
						move: {
							speed: 0.6,
						},
						line_linked: {
							width: 0.2,
							distance: 100,
						},
					},
				}}
			/>
		</div>
	);
}
