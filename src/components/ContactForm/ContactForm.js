import React from 'react';

import SocialMedia from '../NavBar/SocialMedia.js';

export default function ContactForm() {
	return (
		<div className='flex justify-center items-center w-full z-[1]'>
			<div
				className='text-richblue-900 my-20 bg-gray-200 px-4 sm:px-7 py-5 rounded-2xl shadow-lg mx-2 w-full max-w-lg bg-opacity-90'
				id='contact'
			>
				<h2 className='text-3xl font-regular text-center mb-6 font-Montserrat text-richblue-400'>
					Get in Touch
				</h2>
				<form
					action='/#'
					className='flex flex-col justify-center items-center text-richblue-900'
				>
					<div className='flex relative flex-col sm:gap-x-1 sm:flex-row w-full justify-center items-center'>
						<div className='w-full relative'>
							<input
								id='name'
								type='text'
								placeholder=' '
								className='formfield peer'
							/>
							<label
								htmlFor='name'
								className='formlabel peer-placeholder-shown:text-md duration-800'
							>
								Name
							</label>
						</div>
						<div className='w-full relative'>
							<input
								id='email'
								type='email'
								placeholder=' '
								className='formfield peer'
							/>
							<label
								htmlFor='email'
								className='formlabel peer-placeholder-shown:text-md duration-800'
							>
								Email Address
							</label>
						</div>
					</div>
					<div className='w-full relative'>
						<textarea
							id='message'
							type='text'
							placeholder=' '
							className='formfield peer sm:my-2 h-40'
						/>
						<label
							htmlFor='message'
							className='messagelabel peer-placeholder-shown:text-md duration-800'
						>
							Message
						</label>
					</div>
					<button
						type='submit'
						className='outline-none bg-richblue-300 px-4 py-1 rounded-lg hover:bg-richblue-100 focus:bg-richblue-600 my-5 text-seashell transition-all duration-200 shadow-sm mb-8'
						onClick={e => {
							e.preventDefault();
						}}
					>
						Submit
					</button>
				</form>
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
