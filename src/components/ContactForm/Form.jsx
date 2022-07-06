import React, { useState, useRef } from 'react';

import MessageInput from './MessageInput.jsx';
import TextInput from './TextInput.jsx';

// Refactoring idea: Rewrite the error logic using hook. Create a hook that takes in a function during initialization, and returns [errorMessage, ok] type of value. if(!ok && showError /*from <TextInput/>*/), errorMessage is displayed. Otherwise errorMessage is not displayed. While submitting, will just need to see if all ok, and then submit.

export default function Form() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const [showAllErrors, setShowAllErrors] = useState(false);

	const submit = useRef(null);

	const validation = {
		isEmpty: {
			condition: val => val.trim() === '',
			message: 'This field cannot be left empty.',
		},
		isInvlidEmail: {
			condition: val => {
				const re =
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

				return !re.test(val.toLowerCase());
			},
			message: 'Please enter a valid email address.',
		},
	};

	const validate = (validation, value) => {
		return validation.find(v => v.condition(value)) || '';
	};

	const errors = {
		name: () => validate([validation.isEmpty], name).message,
		email: () =>
			validate([validation.isEmpty, validation.isInvlidEmail], email)
				.message,
		message: () => validate([validation.isEmpty], message).message,
	};

	return (
		<form
			action='https://formspree.io/f/xgerdlrk'
			method='POST'
			className='flex flex-col justify-center items-center text-richblue-900'
			data-aos='fade-up'
		>
			<div className='flex relative flex-col sm:gap-x-1 sm:flex-row w-full justify-center items-center'>
				<TextInput
					name='Name'
					type='text'
					value={name}
					onChange={setName}
					error={errors.name()}
					showAllErrors={showAllErrors}
				/>
				<TextInput
					name='Email Address'
					type='email'
					value={email}
					onChange={setEmail}
					error={errors.email()}
					showAllErrors={showAllErrors}
				/>
			</div>
			<div className='w-full relative' data-aos='fade-up'>
				<MessageInput
					value={message}
					onChange={setMessage}
					error={errors.message()}
					showAllErrors={showAllErrors}
				/>
			</div>
			<button type='submit' className='hidden' ref={submit}>
				Submit
			</button>
			<button
				className='outline-none bg-richblue-300 px-4 py-1 rounded-lg hover:bg-richblue-100 focus:bg-richblue-600 my-5 text-seashell transition-all duration-200 shadow-sm mb-8 disabled:bg-opacity-30'
				disabled={false}
				onClick={e => {
					e.preventDefault();
					// Enable the visibility of all errors.
					setShowAllErrors(true);
					// If no errors exist, then try submitting.
					console.log('out');
					if (!(errors.name() + errors.email() + errors.message())) {
						// captcha and submit
						submit.current.click();
						console.log(submit.current);
					}
				}}
			>
				Submit
			</button>
			{
				// <p>{state.submitting && 'Submitting'}</p>
				// <p>{state.succeeded && 'Succeeded'}</p>
			}
		</form>
	);
}
