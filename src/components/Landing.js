import React from 'react';

export default function Landing() {
	return (
		<div className='w-screen flex flex-row justify-center items-center'>
			{/* text & buttons */}
			<div>
				{/* Hi, I'm Shameek Kumar Baranwal / Front-End Web Developer / Freelancer / CS Sophomore at BITS Pilani */}
				<div className=''>
					<p>Hi, I'm</p>
					<p>Shameek Kumar Baranwal</p>
				</div>
				{/* [Know More] [View Resume] */}
				<div className=''>
					<button>Know More</button>
					<button>View Resume</button>
				</div>
			</div>
			{/* Image */}
			<div>
				<img src='' alt='display picture' />
			</div>
		</div>
	);
}
