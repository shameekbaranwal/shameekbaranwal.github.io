import React, { useState } from 'react';
import MessageInput from './MessageInput.js';
import TextInput from './TextInput.js';

export default function Form() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const isEmpty = val => val.trim() === '';

	const isValidEmail = val => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return re.test(val.toLowerCase());
	};

	return (
		<form
			action='/#'
			className='flex flex-col justify-center items-center text-richblue-900'
			data-aos='fade-up'
		>
			<div className='flex relative flex-col sm:gap-x-1 sm:flex-row w-full justify-center items-center'>
				<TextInput
					name='Name'
					type='text'
					value={name}
					onChange={setName}
				/>
				<TextInput
					name='Email Address'
					type='email'
					value={email}
					onChange={setEmail}
				/>
			</div>
			<div className='w-full relative' data-aos='fade-up'>
				<MessageInput value={message} onChange={setMessage} />
			</div>
			<button
				type='submit'
				className='outline-none bg-richblue-300 px-4 py-1 rounded-lg hover:bg-richblue-100 focus:bg-richblue-600 my-5 text-seashell transition-all duration-200 shadow-sm mb-8'
				onClick={e => {
					e.preventDefault();
					console.log({ name, email, message });
				}}
			>
				Submit
			</button>
		</form>
	);
}
