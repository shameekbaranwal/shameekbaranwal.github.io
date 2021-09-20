import React from 'react';
import { useState } from 'react';

export default function TextInput({
	name,
	type,
	value,
	onChange,
	error,
	showAllErrors,
}) {
	const [showError, setShowError] = useState(false);

	return (
		<div className='w-full relative' data-aos='fade-up'>
			<input
				id={name}
				name={name}
				type={type}
				placeholder=' '
				className='formfield peer'
				value={value}
				onChange={e => onChange(e.target.value)}
				// onFocus={() => setShowError(true)}
				onBlur={() => setShowError(true)}
				// required
			/>
			{(showError || showAllErrors) && (
				<p className='absolute text-xs -bottom-3 sm:bottom-0 left-0 text-imperialRed font-light text-center w-full'>
					{error}
				</p>
			)}
			<label
				htmlFor={name}
				className='formlabel peer-placeholder-shown:text-md duration-800'
			>
				{name}
			</label>
		</div>
	);
}
