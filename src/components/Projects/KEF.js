import React from 'react';

import Project from './Project.js';
import KEF1 from '../../assets/projects/KEF1.jpg';
import KEF2 from '../../assets/projects/KEF2.jpg';
import KEF3 from '../../assets/projects/KEF3.jpg';
import KEF4 from '../../assets/projects/KEF4.jpg';
import ExternalLink from '../General/ExternalLink.js';

export default function KEF() {
	const caption =
		'A full-stack mobile app made for Kotak Education Foundation as part of my virtual internship in the Summer of 2021.';

	const image = (
		<div
			className='px-8 h-full container mx-auto flex flex-col justify-center items-center max-w-7xl'
			data-aos='fade-up'
		>
			<div className='flex justify-center items-center mx-auto'>
				<div className='relative w-full px-10 '>
					<div className='kef-img-container relative'>
						<img
							src={KEF1}
							alt={'KEF Volunteering App screenshot 1'}
							className='kef-img-1'
						/>
						<img
							src={KEF2}
							alt={'KEF Volunteering App screenshot 2'}
							className='kef-img-2'
						/>
					</div>
				</div>
				<div className='relative w-full px-10'>
					<div className='kef-img-container relative'>
						<img
							src={KEF3}
							alt={'KEF Volunteering App screenshot 3'}
							className='kef-img-1'
						/>
						<img
							src={KEF4}
							alt={'KEF Volunteering App screenshot 4'}
							className='kef-img-2'
						/>
					</div>
				</div>
			</div>

			<p className='text-center font-light text-md font-Montserrat md:hidden'>
				{caption}
			</p>
		</div>
	);

	return (
		<Project
			title='Kotak Education Foundation App'
			image={image}
			details={details}
			// size={13}
			technologies={[
				'reactnative',
				'expo',
				'node',
				'express',
				'sheets',
				'formik',
			]}
			live={'https://bp-gc.in/kotak-refs'}
			caption={caption}
			code={'https://github.com/shameekbaranwal/KEF-Volunteering'}
			position='left'
		/>
	);
}

const details = (
	<>
		<li>
			A mobile application to simplify the methods of communicating
			information between the Volunteering Department at{' '}
			<ExternalLink href='https://kotakeducation.org' className=''>
				KEF
			</ExternalLink>{' '}
			and the registered Volunteers and Beneficiaries.
		</li>
		<li>
			New users can sign up as a Volunteer or a Beneficiary, and can then
			log in to view the scheduled activities or fill any relevant form.
		</li>
		<li>
			Received a{' '}
			<ExternalLink
				href='https://drive.google.com/file/d/1Oeq2aTYddU0l3ClYVgu3us4dZ44PC6B8/view?usp=sharing'
				className='bg-gray-50 px-1 py-0.5 bg-opacity-10 rounded'
			>
				Certificate of Appreciation
			</ExternalLink>{' '}
			and a{' '}
			<ExternalLink
				href='https://drive.google.com/file/d/1Oeq2aTYddU0l3ClYVgu3us4dZ44PC6B8/view?usp=sharing'
				className='bg-gray-50 px-1 py-0.5 bg-opacity-10 rounded'
			>
				Letter of Recommendation
			</ExternalLink>{' '}
			at the conclusion of the internship.
		</li>
		<li>
			For more details about the project, check out the{' '}
			<ExternalLink
				href='https://drive.google.com/file/d/1R_HgGJGehIbOtvHcfdgtbMYTitb6dw11/view'
				className='bg-gray-50 px-1 py-0.5 bg-opacity-10 rounded'
			>
				Project Report.
			</ExternalLink>
		</li>
	</>
);
