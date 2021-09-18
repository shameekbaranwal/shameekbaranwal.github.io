import React from 'react';

export default function Tooltip({ children, text }) {
	const tipRef = React.createRef(null);

	const handleMouseEnter = () => {
		tipRef.current.style.opacity = 1;
		tipRef.current.style.marginLeft = '20px';
	};

	const handleMouseLeave = () => {
		tipRef.current.style.opacity = 0;
		tipRef.current.style.marginLeft = '10px';
	};

	return (
		<div
			className='relative flex items-center'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div
				className='absolute whitespace-no-wrap bg-gradient-to-r from-richblue-800 to-transparent text-white px-4 py-2 rounded flex items-center transition-all duration-150 min-w-full'
				style={{ bottom: '150%', left: '-60%', opacity: 0 }}
				ref={tipRef}
			>
				<div
					className='bg-gradient-to-b from-transparent to-richblue-800 h-3 w-3 absolute'
					style={{ bottom: '-6px', transform: 'rotate(45deg)' }}
				/>
				<p className='w-24'>{text}</p>
			</div>
			{children}
		</div>
	);
}
