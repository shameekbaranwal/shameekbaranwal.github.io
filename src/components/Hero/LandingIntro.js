import React from 'react';
import { useTypedText } from '../../hooks/useTypedText.js';

export function LandingIntro() {
	const [typedText, showA, showAn] = useTypedText();

	return (
		<div className='mx-3 z-[1]'>
			<p className='font-light text-center text-xl md:text-3xl mt-10 mb-2 font-Robto'>
				&nbsp;&nbsp;{"Hi, I'm "}
				<span
					className={`transition duration-1000 ${
						showA ? 'opacity-100' : 'opacity-0'
					}`}
				>
					a
				</span>
				<span
					className={`transition duration-1000 ${
						showAn ? 'opacity-100' : 'opacity-0'
					}`}
				>
					n
				</span>
			</p>
			<div
				className='font-thin text-center text-2xl md:text-4xl mb-2 '
				// flex justify-center items-center flex-col h-20
			>
				<p className='typing font-Montserrat'>{' ' + typedText}</p>
			</div>
		</div>
	);
}
