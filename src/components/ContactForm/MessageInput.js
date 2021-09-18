import React from 'react';

export default function MessageInput({ value, onChange }) {
	return (
		<>
			<textarea
				id='message'
				type='text'
				placeholder=' '
				className='formfield peer sm:my-2 h-40'
				value={value}
				onChange={e => onChange(e.target.value)}
			/>
			<p className='hidden peer-focus:block absolute text-xs -bottom-1 sm:-bottom-1 left-0 text-imperialRed font-light text-center w-full'>
				This field cannot be empty
			</p>
			<label
				htmlFor='message'
				className='messagelabel peer-placeholder-shown:text-md duration-800'
			>
				Message
			</label>
		</>
	);
}
