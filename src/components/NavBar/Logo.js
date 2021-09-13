import React from 'react';

// import github from '../assets/github.png';
// import instagram from '../assets/instagram.png';
// import fiverr from '../assets/fiverr.png';
// import linkedin from '../assets/linkedin.png';

export default function Logo({ className }) {
	return (
		<>
			<a
				className={`w-20 my-3 bg-gradient-to-b from-turq-700 via-turq-300 to-turq-700 text-transparent bg-clip-text ${className}`}
				href='/#'
			>
				<h1 className='text-transparent text-5xl xl:text-6xl text-center font-Montserrat'>
					S
				</h1>
			</a>
			{
				//<div className='hidden sm:flex'>
				// 	<a
				// 		href='https://github.com/shameekbaranwal'
				// 		target='_blank'
				// 		className='w-6 mx-2 hover:opacity-20 transition duration-100 ease-in'
				// 		rel='noopener noreferrer'
				// 	>
				// 		<img src={github} className='w-full' alt='Github' />
				// 	</a>
				// 	<a
				// 		href='https://fiverr.com/shameekbaranwal'
				// 		target='_blank'
				// 		className='w-6 mx-2 hover:opacity-20 transition duration-100 ease-in'
				// 		rel='noopener noreferrer'
				// 	>
				// 		<img src={fiverr} className='w-full' alt='Fiverr' />
				// 	</a>
				// 	<a
				// 		href='https://linkedin.com/in/shameekbaranwal'
				// 		target='_blank'
				// 		className='w-6 mx-2 hover:opacity-20 transition duration-100 ease-in'
				// 		rel='noopener noreferrer'
				// 	>
				// 		<img src={linkedin} className='w-full' alt='LinkedIn' />
				// 	</a>
				// 	<a
				// 		href='https://instagram.com/shameekbaranwal'
				// 		target='_blank'
				// 		className='w-6 mx-2 hover:opacity-20 transition duration-100 ease-in'
				// 		rel='noopener noreferrer'
				// 	>
				// 		<img src={instagram} className='w-full' alt='Instagram' />
				// 	</a>
				// </div>
			}
		</>
	);
}
