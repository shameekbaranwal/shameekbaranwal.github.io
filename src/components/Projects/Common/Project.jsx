import React from 'react';

// import AdoptMePC from '../../assets/projects/AdoptMePC.png';
import ProjectDetails from './ProjectDetails.jsx';
import TechnologiesUsed from './TechnologiesUsed.jsx';
import SecondaryButton from '../../General/SecondaryButton.jsx';
import PrimaryButton from '../../General/PrimaryButton.jsx';

export default function Project({
	title,
	image,
	caption,
	details,
	size,
	technologies,
	live,
	code,
	position,
}) {
	return (
		<li
			className={`mt-10 flex flex-col justify-center items-center h-full mb-40 min-h-full md:flex-row ${
				position === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
			}`}
		>
			<div
				className='h-full rounded-xl flex flex-col justify-center items-center'
				data-aos='fade-up'
			>
				<h3
					className='text-3xl text-center inline font-Montserrat font-semibold text-seashell'
					data-aos='fade-up'
				>
					{title}
				</h3>
				<div className='md:hidden'>{image}</div>
				<p className='hidden md:block pt-4 mx-auto max-w-md text-center font-light text-md font-Montserrat'>
					{caption}
				</p>
				<ProjectDetails details={details} />
				<TechnologiesUsed technologies={technologies} />
				<div
					className='flex flex-row justify-center items-center mt-16 gap-x-8'
					data-aos='fade-up'
				>
					{live && (
						<button className='' data-aos='fade-up'>
							<PrimaryButton href={live}>Live Demo</PrimaryButton>
						</button>
					)}
					<button className='' data-aos='fade-up'>
						<SecondaryButton href={code}>
							Source Code
						</SecondaryButton>
					</button>
				</div>
			</div>
			<div className='hidden md:inline-block md:w-full xl:w-3/5 2xl:w-2/5'>
				{image}
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
