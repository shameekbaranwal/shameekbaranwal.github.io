import React from 'react';
import { useState } from 'react';

export default function MessageInput({
	value,
	onChange,
	error,
	showAllErrors,
}) {
	const [showError, setShowError] = useState(false);

	return (
		<>
			<textarea
				id='Message'
				name='Message'
				type='text'
				placeholder=' '
				className='formfield peer sm:my-2 h-40'
				value={value}
				onChange={e => onChange(e.target.value)}
				// onFocus={() => setShowError(true)}
				onBlur={() => setShowError(true)}
				required
			/>
			{(showError || showAllErrors) && (
				<p className='absolute text-xs -bottom-2 left-0 text-imperialRed font-light text-center w-full'>
					{error}
				</p>
			)}
			<label
				htmlFor='message'
				className='messagelabel peer-placeholder-shown:text-md duration-800'
			>
				Message
			</label>
		</>
	);
}
