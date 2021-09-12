import React from 'react';

export default function ContactForm() {
	return (
		<div className='flex justify-center items-center w-full'>
			<div
				className='text-richblue-900 my-20 bg-seashell px-3 md:px-7 py-5 rounded-2xl shadow-lg bg-opacity-90 mx-2 w-full max-w-lg'
				id='contact'
			>
				<h2 className='text-2xl font-thin text-center'>Contact Form</h2>
				<form
					action='/#'
					className='flex flex-col justify-center items-center text-richblue-900'
				>
					<div className='flex flex-col md:flex-row w-auto justify-center items-center'>
						<input
							type='text'
							placeholder='Name'
							className='outline-none inline-block px-2 py-2 rounded-lg bg-gray-200 placeholder-richblue-200 placeholder-opacity-40 my-2 md:mr-2 md:my-5 w-full hover:ring-1 focus:ring-2 focus:shadow-lg transition-all duration-200'
						/>
						<input
							type='email'
							placeholder='Email Address'
							className='outline-none inline-block px-2 py-2 rounded-lg bg-gray-200 placeholder-richblue-200 placeholder-opacity-40 my-2 md:ml-2 md:my-5 w-full hover:ring-1 focus:ring-2 focus:shadow-lg transition-all duration-200'
						/>
					</div>
					<textarea
						type='text'
						placeholder='Message'
						className='outline-none inline-block px-2 py-2 rounded-lg bg-gray-200 placeholder-richblue-200 placeholder-opacity-40 my-2 h-40 w-full hover:ring-1 focus:ring-2 focus:shadow-md transition-all duration-200'
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
