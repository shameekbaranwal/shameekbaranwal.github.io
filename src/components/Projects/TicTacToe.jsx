import React from 'react';

import Project from './Common/Project.jsx';
import PhoneImages from './Common/PhoneImages.jsx';
import tictactoe1 from '../../assets/projects/tictactoe1.jpg';
import tictactoe2 from '../../assets/projects/tictactoe2.jpg';
import tictactoe3 from '../../assets/projects/tictactoe3.jpg';
import tictactoe4 from '../../assets/projects/tictactoe4.jpg';
import ExternalLink from '../General/ExternalLink.jsx';

export default function TicTacToe() {
	const caption =
		'A minimalistic progressive web-app implementation of the ancient game.';

	return (
		<Project
			title='tic-tac-toe'
			image={
				<PhoneImages
					imgs={[tictactoe1, tictactoe3, tictactoe4, tictactoe2]}
					name='tic-tac-toe'
					caption={caption}
				/>
			}
			details={details}
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
