import React, { useState } from 'react';
import TabButton from '../General/TabButton.jsx';

// import Skill from './Skill.js';
import Languages from './Languages.jsx';
import Tools from './Tools.jsx';

export default function Skills() {
	const [skillCategory, setSkillCategory] = useState('Tools');

	return (
		<div
			data-aos='fade-up'
			className='flex flex-col justify-center items-center min-h-full w-full z-[1]'
			id='skillset'
		>
			<h2
				className='text-3xl font-light text-center mb-6 font-Montserrat text-seashell'
				data-aos='fade-up'
			>
				Skillset
			</h2>
			<div className='flex flex-row justify-center items-center w-screen max-w-xl text-seashell text-xl mt-4 sticky top-0 h-20 px-4 sm:px-2'>
				<TabButton
					name='Tools'
					state={skillCategory}
					setState={setSkillCategory}
				/>
				<TabButton
					name='Languages'
					state={skillCategory}
					setState={setSkillCategory}
				/>
			</div>
			<ul
				className={`my-12 grid grid-cols-2 w-full h-full mx-auto gap-x-4 gap-y-6 px-4 text-richblue-300 sm:grid-cols-4 sm:gap-x-1 ${
					skillCategory === 'Languages'
						? 'max-w-2xl'
						: ' md:grid-cols-5 lg:grid-cols-7 lg:gap-x-10 max-w-6xl'
				}`}
			>
				{skillCategory === 'Languages' ? <Languages /> : <Tools />}
			</ul>
		</div>
	);
}
