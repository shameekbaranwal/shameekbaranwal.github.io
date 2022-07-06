import React from 'react';

import Skill from './Skill.jsx';
import html from '../../assets/languages/html.png';
import css from '../../assets/languages/css.png';
import java from '../../assets/languages/java.png';
import javascript from '../../assets/languages/javascript.png';

export default function Languages() {
	return (
		<>
			<Skill
				name='HTML'
				icon={html}
				experience={new Date('2021-02-01')}
				level={8}
				aos='fade-left'
			/>
			<Skill
				name='CSS'
				icon={css}
				experience={new Date('2021-02-01')}
				level={5}
				aos='fade-left'
			/>
			<Skill
				name='JavaScript'
				icon={javascript}
				experience={new Date('2021-01-01')}
				level={8}
				aos='fade-left'
			/>
			<Skill
				name='Java'
				icon={java}
				experience={new Date('2021-08-23')}
				level={5}
				aos='fade-left'
			/>
			{/*<Skill name='TypeScript' />*/}
		</>
	);
}
