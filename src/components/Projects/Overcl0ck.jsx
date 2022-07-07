import React from 'react';

import Project from './Common/Project.jsx';
import overcl0ck1 from '../../assets/projects/overcl0ck1.png';
import overcl0ck2 from '../../assets/projects/overcl0ck2.png';
import ExternalLink from '../General/ExternalLink.jsx';
import PCImages from './Common/PCImages.jsx';

export default function Overclock({ left }) {
	const caption = 'A digital clock made of 360 analogue clocks.';

	return (
		<Project
			title='overcl0ck'
			image={
				<PCImages
					imgs={[overcl0ck1, overcl0ck2]}
					name='overcl0ck'
					caption={caption}
				/>
			}
			caption={caption}
			details={details}
			technologies={['html', 'css', 'js', 'p5']}
			live={'https://overcl0ck.netlify.app'}
			code={'https://github.com/shameekbaranwal/overcl0ck'}
			position={left ? 'left' : 'right'}
		/>
	);
}

const details = (
	<>
		<li>
			Created a custom notation for the configurations by representing the
			state of each hand in terms of base-4 digits, which improved memory
			utilization and opens avenues for creating a physical version. More
			details available{' '}
			<ExternalLink href='https://github.com/shameekbaranwal/overcl0ck/blob/main/README.md'>
				here
			</ExternalLink>
			.
		</li>
		<li>Includes a dark mode and light mode.</li>
		<li>Includes multiple themes for the digits.</li>
	</>
);
