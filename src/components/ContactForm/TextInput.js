import React from 'react';

export default function TextInput({ name, type, value, onChange }) {
	return (
		<div className='w-full relative' data-aos='fade-up'>
			<input
				id={name}
				type={type}
				placeholder=' '
				className='formfield peer'
				value={value}
				onChange={e => onChange(e.target.value)}
			/>
			<p className='hidden peer-focus:block absolute text-xs -bottom-3 sm:bottom-0 left-0 text-imperialRed font-light text-center w-full'>
				This field cannot be empty
			</p>
			<label
				htmlFor={name}
				className='formlabel peer-placeholder-shown:text-md duration-800'
			>
				{name}
			</label>
		</div>
	);
}
