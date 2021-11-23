import React from 'react';

import Project from './Project.js';
import tictactoe1 from '../../assets/projects/tictactoe1.jpg';
import tictactoe2 from '../../assets/projects/tictactoe2.jpg';
import tictactoe3 from '../../assets/projects/tictactoe3.jpg';
import tictactoe4 from '../../assets/projects/tictactoe4.jpg';
import ExternalLink from '../General/ExternalLink.js';

export default function TicTacToe() {
	const caption =
		'A minimalistic progressive web-app implementation of the ancient game.';

	const image = (
		<div
			className='px-8 h-full container mx-auto flex flex-col justify-center items-center max-w-7xl'
			data-aos='fade-up'
		>
			<div className='flex justify-center items-center mx-auto'>
				<div className='relative w-full px-10 '>
					<div className='tictactoe-img-container relative'>
						<img
							src={tictactoe1}
							alt={'tictactoe Volunteering App screenshot 1'}
							className='tictactoe-img-1'
						/>
						<img
							src={tictactoe3}
							alt={'tictactoe Volunteering App screenshot 2'}
							className='tictactoe-img-2'
						/>
					</div>
				</div>
				<div className='relative w-full px-10'>
					<div className='tictactoe-img-container relative'>
						<img
							src={tictactoe4}
							alt={'tictactoe Volunteering App screenshot 3'}
							className='tictactoe-img-1'
						/>
						<img
							src={tictactoe2}
							alt={'tictactoe Volunteering App screenshot 4'}
							className='tictactoe-img-2'
						/>
					</div>
				</div>
			</div>

			<p className='text-center font-light text-md font-Montserrat md:hidden'>
				{caption}
			</p>
		</div>
	);

	return (
		<Project
			title='tic-tac-toe'
			image={image}
			details={details}
			// size={13}
			technologies={['html', 'css', 'js']}
			live={'https://tic-tac-toe-shmk.netlify.app/'}
			code={'https://github.com/shameekbaranwal/tic-tac-toe'}
			position='left'
			caption={caption}
		/>
	);
}

const details = (
	<>
		<li>Includes a universal light mode and dark mode.</li>
		<li>
			Since it is a Progressive Web-App, it can be installed from the
			browser on Android, iOS, and Windows.
		</li>
		<li>
			Includes two modes: Multiplayer and Single-Player. The latter works
			with a script based on the concept of{' '}
			<ExternalLink href='https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-1-introduction/'>
				recursive backtracking
			</ExternalLink>
			.
		</li>
	</>
);
