import React from 'react';

import Project from './Common/Project.jsx';
import PhoneImages from './Common/PhoneImages.jsx';
import KEF1 from '../../assets/projects/KEF1.jpg';
import KEF2 from '../../assets/projects/KEF2.jpg';
import KEF3 from '../../assets/projects/KEF3.jpg';
import KEF4 from '../../assets/projects/KEF4.jpg';
import ExternalLink from '../General/ExternalLink.jsx';

export default function KEF({ left }) {
	const caption =
		'A full-stack mobile app made for Kotak Education Foundation as part of my virtual internship in the Summer of 2021.';

	return (
		<Project
			title='Kotak Education Foundation App'
			image={
				<PhoneImages
					imgs={[KEF1, KEF2, KEF3, KEF4]}
					caption={caption}
					name='KEF Volunteering'
				/>
			}
			details={details}
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
			position={left ? 'left' : 'right'}
		/>
	);
}

const details = (
	<>
		<li>
			A mobile application to simplify the methods of communicating
			information between the Volunteering Department at{' '}
			<ExternalLink href='https://kotakeducation.org'>KEF</ExternalLink>{' '}
			and the registered Volunteers and Beneficiaries.
		</li>
		<li>
			New users can sign up as a Volunteer or a Beneficiary, and can then
			log in to view the scheduled activities or fill any relevant form.
		</li>
		<li>
			Received a{' '}
			<ExternalLink href='https://drive.google.com/file/d/1Oeq2aTYddU0l3ClYVgu3us4dZ44PC6B8/view'>
				Certificate of Appreciation
			</ExternalLink>{' '}
			and a{' '}
			<ExternalLink href='https://drive.google.com/file/d/1ofyjTwW00GuY15pvR4lbZijA_wLwMI4e/view'>
				Letter of Recommendation
			</ExternalLink>{' '}
			at the conclusion of the internship.
		</li>
		<li>
			For more details about the project, check out the{' '}
			<ExternalLink href='https://drive.google.com/file/d/1R_HgGJGehIbOtvHcfdgtbMYTitb6dw11/view'>
				Project Report.
			</ExternalLink>
		</li>
	</>
);
