import React from 'react';

import Skill from './Skill.jsx';
import react from '../../assets/tools/react.png';
import reactnative from '../../assets/tools/react native.png';
import expo from '../../assets/tools/expo.png';
import tailwind from '../../assets/tools/tailwind.png';
import node from '../../assets/tools/node.png';
import express from '../../assets/tools/express.png';
import p5 from '../../assets/tools/p5.png';

export default function Tools() {
	return (
		<>
			<Skill
				name='React'
				icon={react}
				experience={new Date('2021-06-01')}
				level={7}
				aos='fade-right'
			/>
			<Skill
				name='React Native'
				icon={reactnative}
				experience={new Date('2021-06-15')}
				level={7}
				aos='fade-right'
			/>
			<Skill
				name='Expo'
				icon={expo}
				experience={new Date('2021-06-15')}
				level={8}
				aos='fade-right'
			/>
			<Skill
				name='Tailwind'
				icon={tailwind}
				experience={new Date('2021-08-01')}
				level={9}
				aos='fade-right'
			/>
			<Skill
				name='Node'
				icon={node}
				experience={new Date('2021-05-01')}
				level={8}
				aos='fade-right'
			/>
			<Skill
				name='Express'
				icon={express}
				experience={new Date('2021-05-01')}
				level={6}
				aos='fade-right'
			/>
			<Skill
				name='p5.js'
				icon={p5}
				experience={new Date('2021-01-01')}
				level={9}
				aos='fade-right'
			/>
		</>
	);
}
