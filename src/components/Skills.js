import React from 'react';

import Skill from './Skill.js';

export default function Skills() {
	return (
		<div className='mt-20 mb-10'>
			<h2 className='text-2xl font-thin text-center text-seashell'>
				Skills
			</h2>
			<ul className='my-12 grid grid-cols-2 w-screen mx-auto gap-x-4 gap-y-6 px-4 text-richblue-300'>
				<Skill name='HTML' />
				<Skill name='CSS' />
				<Skill name='JavaScript' />
				<Skill name='React' />
				<Skill name='React Native' />
				<Skill name='Expo' />
				<Skill name='Tailwind' />
				<Skill name='Node' />
				<Skill name='Express' />
				<Skill name='p5.js' />
			</ul>
		</div>
	);
}
