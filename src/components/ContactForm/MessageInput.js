import React from 'react';
import { useState } from 'react';

export default function MessageInput({ value, onChange, error }) {
	const [showError, setShowError] = useState(false);

	return (
		<>
			<textarea
				id='message'
				type='text'
				placeholder=' '
				className='formfield peer sm:my-2 h-40'
				value={value}
				onChange={e => onChange(e.target.value)}
				onFocus={() => setShowError(true)}
			/>
			{showError && (
				<p className='absolute text-xs -bottom-3 sm:bottom-0 left-0 text-imperialRed font-light text-center w-full'>
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
