import React from 'react';

import Project from './Common/Project.jsx';
import AdoptMe1 from '../../assets/projects/AdoptMe1.png';
import AdoptMe2 from '../../assets/projects/AdoptMe2.png';
import ExternalLink from '../General/ExternalLink.jsx';
import PCImages from './Common/PCImages.jsx';

export default function AdoptMe() {
	const caption =
		'A simple client-side web-app that allows users to view a live feed of real pets put up for adoption across the US.';

	return (
		<Project
			title='adopt-me'
			image={
				<PCImages
					imgs={[AdoptMe1, AdoptMe2]}
					caption={caption}
					name='adopt-me'
				/>
			}
			caption={caption}
			details={details}
			// size={10}
			technologies={['react', 'tailwind', 'reactrouter']}
			live={'https://adopt-me-web.netlify.app'}
			code={'https://github.com/shameekbaranwal/adopt-me'}
			position='right'
		/>
	);
}

const details = (
	<>
		<li>
			Supported by the official{' '}
			<ExternalLink href='https://www.petfinder.com/developers/'>
				Petfinder API
			</ExternalLink>
			.
		</li>
		<li>
			Learned the concepts of Responsive Web Design using Tailwind,
			Routing, and modern React fundamentals.
		</li>
	</>
);
