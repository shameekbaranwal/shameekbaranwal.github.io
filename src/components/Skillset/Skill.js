import React from 'react';
import SkillLevel from './SkillLevel.js';

export default function Skill({ name, icon, experience, level }) {
	const calculateExperienceMonths = () => {
		const now = new Date();
		const then = experience;
		const diffInMilliseconds = now - then;
		let months = diffInMilliseconds / 1000 / 60 / 60 / 24 / 30;
		months = Math.ceil(months);
		months = Math.max(months, 1);
		return months;
	};

	return (
		<li className='text-2xl bg-seashell bg-opacity-0 h-28 flex items-center justify-center container hover:ring-0 rounded-2xl hover:bg-opacity-0 transition-all group duration-200 relative select-none'>
			<img
				src={icon}
				alt={name}
				className='w-20 h-28 py-4 transition-all ease-in-out duration-200 group-hover:opacity-20 filter group-hover:blur-sm group-hover:w-32 group-hover:h-40'
			/>
			<div className='flex flex-col justify-center items-center absolute cursor-default text-md font-thin text-seashell'>
				<p className='text-sm hidden text-center group-hover:flex flex-row mb-2'>
					{`${
						calculateExperienceMonths() +
						' month' +
						(calculateExperienceMonths() !== 1 ? 's' : '')
					}`}
				</p>
				<h3 className='hidden text-center group-hover:block font-light'>
					{name}
				</h3>
				<SkillLevel level={level} />
			</div>
		</li>
	);
}
