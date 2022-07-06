import React from 'react';

import SocialMedia from '../NavBar/SocialMedia.jsx';
import Form from './Form';

export default function ContactForm() {
	return (
		<div
			className='flex justify-center items-center w-full z-[1]'
			data-aos='fade-up'
		>
			<div
				className='text-richblue-900 my-20 bg-gray-200 px-4 sm:px-7 py-5 rounded-2xl shadow-lg mx-2 w-full max-w-lg bg-opacity-90'
				id='contact'
				data-aos='fade-up'
			>
				<h2
					className='text-3xl font-regular text-center mb-6 font-Montserrat text-richblue-400'
					data-aos='fade-up'
				>
					Get in Touch
				</h2>
				<Form />
				<div className='w-full'>
					<p className='text-center font-light'>
						You can also find me on{' '}
					</p>
					<SocialMedia />
				</div>
			</div>
		</div>
	);
}
