import React, { useState } from 'react';

import useProjects from '../../hooks/useProjects.js';
import TabButton from '../General/TabButton.jsx';
import AdoptMe from './AdoptMe.jsx';
import KEF from './KEF.jsx';
import Overcl0ck from './Overcl0ck.jsx';
import TicTacToe from './TicTacToe.jsx';

export default function Projects() {
	const { projects, sortByDate, sortByRelevance, sortedBy } =
		useProjects(UnsortedProjects);
	const [showAll, setShowAll] = useState(false);

	return (
		<div
			className='mt-20 text-seashell z-[1] flex flex-col justify-center items-center '
			id='projects'
		>
			<h2
				className='mb-6 text-3xl font-light text-center font-Montserrat'
				data-aos='fade-up'
			>
				Projects
			</h2>
			<div className='sticky top-0 flex flex-row items-center justify-center w-screen h-20 max-w-xl px-4 mt-4 text-xl text-seashell sm:px-2'>
				<TabButton
					name='Sort By Date'
					state={sortedBy}
					setState={sortByDate}
					className='text-lg hover:text-xl'
				/>
				<TabButton
					name='Sort By Relevance'
					state={sortedBy}
					setState={sortByRelevance}
					className='text-lg hover:text-xl'
				/>
			</div>
			<ul>
				{projects.map(
					(project, index) =>
						(showAll || index < 3) && (
							<project.Component
								key={project.date}
								left={index % 2 === 0}
							/>
						),
				)}
			</ul>
			{showAll ? (
				<button
					className='p-2 mb-20 -mt-20 transition duration-200 bg-gray-200 rounded bg-opacity-20 hover:shadow-xl hover:bg-opacity-10 focus:outline-none hover:scale-105 active:bg-opacity-5 shadow-gray-50 backdrop-blur-sm'
					onClick={() => setShowAll(false)}
				>
					Show Less
				</button>
			) : (
				<button
					className='p-2 mb-20 -mt-20 transition duration-200 bg-gray-200 rounded bg-opacity-20 hover:shadow-xl hover:bg-opacity-10 focus:outline-none hover:scale-105 active:bg-opacity-5 shadow-gray-50 backdrop-blur-sm'
					onClick={() => setShowAll(true)}
				>
					Show More
				</button>
			)}
		</div>
	);
}

const UnsortedProjects = [
	{
		Component: AdoptMe,
		date: '2021-07-01',
		relevance: 30,
	},
	{
		Component: Overcl0ck,
		date: '2021-04-01',
		relevance: 50,
	},
	{
		Component: KEF,
		date: '2021-06-01',
		relevance: 100,
	},
	{
		Component: TicTacToe,
		date: '2021-05-01',
		relevance: 20,
	},
];
