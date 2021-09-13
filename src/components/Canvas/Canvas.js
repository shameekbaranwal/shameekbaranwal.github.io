import React from 'react';
import Particles from 'react-particles-js';

export default function Canvas() {
	return (
		<Particles
			className='absolute inset-0'
			params={{
				particles: {
					number: {
						value: 100,
					},
					size: {
						value: 2.5,
					},
					move: {
						speed: 1.8,
					},
				},
				interactivity: {
					events: {
						onhover: {
							enable: true,
							mode: 'repulse',
						},
						onclick: {
							enable: true,
							mode: 'attract',
						},
					},
				},
			}}
		/>
	);
}
