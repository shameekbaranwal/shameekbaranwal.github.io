import React from 'react';

export default function ContactForm() {
	return (
		<div className='text-seashell my-20 ' id='projects'>
			<h2 className='text-2xl font-thin text-center'>Contact Form</h2>
			<form
				action='/#'
				className='flex flex-col justify-center items-center'
			>
				<input type='text' placeholder='Name' className='block m-5' />
				<input
					type='text'
					placeholder='Email Address'
					className='block m-5'
				/>
				<input
					type='text'
					placeholder='Message'
					className='block m-5'
				/>
				<button
					type='submit'
					className='bg-richblue-300 px-4 py-1 rounded-lg hover:bg-richblue-100'
				>
					Submit
				</button>
			</form>
		</div>
	);
}
