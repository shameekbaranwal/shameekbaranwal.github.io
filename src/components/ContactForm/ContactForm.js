import React from 'react';

export default function ContactForm() {
	return (
		<div className='flex justify-center items-center w-full'>
			<div
				className='text-richblue-900 my-20 bg-gray-200 px-4 sm:px-7 py-5 rounded-2xl shadow-lg mx-2 w-full max-w-lg'
				id='contact'
			>
				<h2 className='text-2xl font-light text-richblue-400 text-center'>
					Get in Touch
				</h2>
				<form
					action='/#'
					className='flex flex-col justify-center items-center text-richblue-900'
				>
					<div className='flex flex-col sm:flex-row w-full justify-center items-center'>
						<input
							id='name'
							type='text'
							placeholder='Name'
							className='peer outline-none inline-block px-2 py-2 focus:rounded-md bg-gray-200 placeholder-richblue-200 placeholder-opacity-40 my-2 sm:mr-2 sm:my-5 w-full border-gray-400 border-b focus:border-richblue-600 hover:rounded-md hover:shadow-lg focus:shadow-lg transition-all duration-200'
						/>
						{/* <label
							htmlFor='name'
							className='font-light from-gray-400 border-2 self-start peer-placeholder-shown:uppercase'
						>
							Name
						</label> */}
						<input
							id='email'
							type='email'
							placeholder='Email Address'
							className='outline-none inline-block px-2 py-2 focus:rounded bg-gray-200 placeholder-richblue-200 placeholder-opacity-40 my-2 sm:ml-2 sm:my-5 w-full border-gray-400 border-b focus:border-richblue-600 focus:shadow-lg transition-all duration-200'
						/>
					</div>
					<textarea
						id='message'
						type='text'
						placeholder='Message'
						className='outline-none inline-block px-2 py-2 focus:rounded bg-gray-200 placeholder-richblue-200 placeholder-opacity-40 my-2 h-40 w-full border-gray-400 border-b focus:border-richblue-600 focus:shadow-md transition-all duration-200'
					/>
					<button
						type='submit'
						className='bg-richblue-300 px-4 py-1 rounded-lg hover:bg-richblue-100 focus:bg-richblue-600 my-5 text-seashell transition-all duration-200 shadow-sm'
						onClick={e => {
							e.preventDefault();
						}}
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
