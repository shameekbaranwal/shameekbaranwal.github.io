import React from 'react';
import AdoptMe from './AdoptMe.js';
import KEF from './KEF.js';
import Overcl0ck from './Overcl0ck.js';
import TicTacToe from './TicTacToe.js';
// import Project from './Project.js';

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
				{/*<Project title='KEF Volunteering App' />
				<Project title='adopt-me' />
				<Project title='overcl0ck' />
				<Project title='tic-tac-toe' />
			*/}
				<KEF />
				<AdoptMe />
				<TicTacToe />
				<Overcl0ck />
			</ul>
		</div>
	);
}
