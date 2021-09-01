import React from 'react';
import { useTypedText } from '../hooks/useTypedText.js';

export function LandingIntro() {
	const [typedText, showArticle] = useTypedText();

	return (
		<div className='mx-3'>
			<p className='font-light text-center text-xl mt-10 mb-2'>
				{" Hi I'm "}
				<span
					className={`transition duration-1000 ${
						showArticle ? 'opacity-0' : 'opacity-100'
					}`}
				>
					a
				</span>
			</p>
			<div
				className='font-thin text-center text-2xl mb-2'
				// flex justify-center items-center flex-col h-20
			>
				<p className='typing'>{' ' + typedText}</p>
			</div>
		</div>
	);
}
