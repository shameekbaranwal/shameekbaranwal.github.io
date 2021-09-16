import React from 'react';

import AdoptMePC from '../../assets/projects/AdoptMePC.png';
// import AdoptMePhone from '../../assets/projects/AdoptMePhone.jpg';

export default function Project({ title }) {
	return (
		<li
			className='mt-10 flex flex-col justify-center items-center h-full mb-40 min-h-full'
			data-aos='fade-up'
		>
			<div className='w-full h-full rounded-xl'>
				<h3 className='text-3xl text-center font-Montserrat font-semibold text-seashell'>
					{title}
				</h3>
				<div className='w-full px-4 h-auto container mx-auto'>
					<img
						src={AdoptMePC}
						alt='Adopt Me PC'
						className='mt-5 object-cover rounded'
					/>
					<p className='mt-4 text-center font-light text-md font-Montserrat'>
						A simple client-side web-app that allows users to view a
						live feed of real pets put up for adoption across the
						US.
					</p>
				</div>
				<ul className='font-thin mt-8 text-justify mx-8 list-disc'>
					<li>
						Supported by the official{' '}
						<a
							href='https://www.petfinder.com/developers/'
							rel='noopener noreferrer'
							target='_blank'
							className='bits'
						>
							Petfinder API
						</a>
						.
					</li>
					<li>
						Learned the concepts of Responsive Web Design using
						Tailwind, Routing, and modern React fundamentals.
					</li>
				</ul>
				<div className='flex flex-col justify-center items-center mx-6 font-thin '>
					<p>Technologies Used</p>
					<ul>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div className='flex flex-row justify-center items-center mt-8 gap-x-8'>
					<button className=''>
						<a
							className='transition-all duration-200 border-2 border-turq-600 bg-turq-600 px-3 py-2 mx-2 text-richblue-800 hover:bg-opacity-10 hover:border-seashell hover:border-opacity-20 hover:text-seashell rounded-md font-light hover:font-medium hover:text-lg'
							href='https://adopt-me-web.netlify.app'
							target='_blank'
							rel='noopener noreferrer'
						>
							View Live
						</a>
					</button>
					<button>
						<a
							className='transition-all duration-200 border-2 border-seashell px-3 py-2 mx-2 my-10 hover:border-opacity-10 rounded-md font-light hover:font-medium hover:text-lg'
							href='https://github.com/shameekbaranwal/adopt-me'
							target='_blank'
							rel='noopener noreferrer'
						>
							Source Code
						</a>
					</button>
				</div>
			</div>
		</li>
	);
}
// Create a chevron that toggles a smoothly appearing and disappearing details section
// That section will contain info about the respective project in bullet points
// Make a React Component which is very much like the individual Skill component, which takes in an image and label, and create something like the Skill component directly
// Then, use that component here inside the <li></li> tags
// Make it dynamic - like if React is passed as a prop to this Project component in some options parameter, then React will get passed to that Technology component, which will render out the React logo. Will probably need to wrap the Technology component with a more generalized component which will check for which one has been mentioned, and will pass the corresponding parameters to <Technology/>
// Then implement the row of Tech stack in this - above the two buttons and below the chevron.

// Replace the images with the laptop/mobile frame

// Create a component for each project using Project.js

// For responsiveness, make the image stay in alternating left and right sides of the viewport. Maybe receive a prop in the Project component to style accordingly
// Add some 3D effect to the image as well, shouldnt look bland atleast

// stacking images

// Beginner above the Skill Level bar, and Expert below it
