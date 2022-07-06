import React from 'react';
import AdoptMe from './AdoptMe.jsx';
import KEF from './KEF.jsx';
import Overcl0ck from './Overcl0ck.jsx';
import TicTacToe from './TicTacToe.jsx';
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
