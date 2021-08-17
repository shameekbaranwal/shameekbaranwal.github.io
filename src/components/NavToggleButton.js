import React from 'react';

export default function NavToggleButton({ setIsOpen, isOpen }) {
	return (
		<button
			className='absolute right-8 flex sm:hidden flex-col items-center justify-center w-12 h-8 px-2 group hover:shadow-2xl'
			onClick={() => setIsOpen(!isOpen)}
		>
			<div
				className={`transition-all duration-300 bg-white w-full h-0.5 mb-2 group-hover:bg-turq-300 origin-center
				${isOpen ? 'transform translate-y-1 rotate-45 ' : ''}`}
			></div>
			<div
				className={`transition-all duration-300 bg-white w-full h-0.5 group-hover:bg-turq-300 origin-center
				${isOpen ? 'transform -translate-y-1.5 -rotate-45' : ''}`}
			></div>
		</button>
	);
}
