import React, { useState } from 'react';

// import Skill from './Skill.js';
import Languages from './Languages.js';
import Tools from './Tools.js';

export default function Skills() {
	const [skillCategory, setSkillCategory] = useState('Languages');
	console.log(skillCategory);
	return (
		<div
			className='flex flex-col justify-center items-center min-h-full'
			id='skillset'
		>
			<h2 className='text-2xl font-thin text-center text-seashell'>
				Skillset
			</h2>
			<div className='flex flex-row justify-center items-center w-screen max-w-lg text-seashell text-xl mt-4 sticky top-0 h-20'>
				<button
					className={`w-full rounded-lg mx-1 my-auto py-2 text-center hover:bg-richblue-200 font-thin transition-all cursor-pointer duration-200 focus:bg-richblue-100 hover:text-2xl outline-none ${
						skillCategory === 'Languages'
							? 'bg-richblue-100'
							: 'bg-richblue-400 '
					}`}
					onClick={() => setSkillCategory('Languages')}
				>
					Languages
				</button>
				<button
					className={`w-full rounded-lg mx-1 my-auto py-2 text-center hover:bg-richblue-200 font-thin transition-all cursor-pointer duration-200 focus:bg-richblue-100 hover:text-2xl outline-none ${
						skillCategory === 'Tools'
							? 'bg-richblue-100'
							: 'bg-richblue-400'
					}`}
					onClick={() => setSkillCategory('Tools')}
				>
					Tools
				</button>
			</div>
			<ul className='my-12 grid grid-cols-2 w-screen mx-auto gap-x-4 gap-y-6 px-4 text-richblue-300'>
				{skillCategory === 'Languages' ? <Languages /> : <Tools />}
			</ul>
		</div>
	);
}
