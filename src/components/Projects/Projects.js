import React from 'react';
import Project from './Project.js';

export default function Projects() {
	return (
		<div className='text-seashell mt-20 z-[1]' id='projects'>
			<h2
				className='text-3xl font-light text-center mb-6 font-Montserrat'
				data-aos='fade-up'
			>
				Projects
			</h2>
			<ul>
				<Project title='adopt-me' />
				<Project title='KEF Volunteering App' />
				<Project title='overcl0ck' />
				<Project title='portfolio' />
				<Project title='tic-tac-toe' />
			</ul>
		</div>
	);
}
