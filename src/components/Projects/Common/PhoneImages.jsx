import React from 'react';

export default function PhoneImages({ name, imgs, caption }) {
	return (
		<div
			className='px-8 h-full container mx-auto flex flex-col justify-center items-center max-w-7xl'
			data-aos='fade-up'
		>
			<div className='flex justify-center items-center mx-auto'>
				<div className='relative w-full px-10 '>
					<div className='phone-project-img-container relative'>
						<img
							src={imgs[0]}
							alt={name + ' phone screenshot 1'}
							className='phone-project-img-1'
						/>
						<img
							src={imgs[1]}
							alt={name + ' phone screenshot 2'}
							className='phone-project-img-2'
						/>
					</div>
				</div>
				<div className='relative w-full px-10'>
					<div className='phone-project-img-container relative'>
						<img
							src={imgs[2]}
							alt={name + ' phone screenshot 3'}
							className='phone-project-img-1'
						/>
						<img
							src={imgs[3]}
							alt={name + ' phone screenshot 4'}
							className='phone-project-img-2'
						/>
					</div>
				</div>
			</div>

			<p className='text-center font-light text-md font-Montserrat md:hidden'>
				{caption}
			</p>
		</div>
	);
}
