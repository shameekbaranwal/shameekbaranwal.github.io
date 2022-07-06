import React from 'react';

export default function PCImages({ name, imgs, caption }) {
	return (
		<div
			className='w-full px-10 h-auto container mx-auto'
			data-aos='fade-up'
		>
			<div className='pc-project-img-container '>
				<img
					src={imgs[0]}
					alt={name + ' desktop screenshot 1'}
					className='pc-project-img-1'
				/>
				<img
					src={imgs[1]}
					alt={name + ' desktop screenshot 2'}
					className='pc-project-img-2'
				/>
			</div>

			<p className='text-center font-light text-md font-Montserrat md:hidden'>
				{caption}
			</p>
		</div>
	);
}
