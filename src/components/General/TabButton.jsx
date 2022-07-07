import React from 'react';

export default function TabButton({ state, setState, name, className }) {
	return (
		<button
			className={`w-full rounded-lg mx-1 my-auto py-2 text-center hover:bg-richblue-200 font-thin transition-all cursor-pointer duration-200 focus:bg-richblue-100 hover:text-2xl outline-none ${
				state === name ? 'bg-richblue-100' : 'bg-richblue-400'
			} ${className}`}
			onClick={() => setState(name)}
		>
			{name}
		</button>
	);
}
