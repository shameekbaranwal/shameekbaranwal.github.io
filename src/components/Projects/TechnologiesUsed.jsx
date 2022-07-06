import React from 'react';

import Technology from './Technology.jsx';
import ReactJS from '../../assets/tools/react.png';
import Tailwind from '../../assets/tools/tailwind.png';
import ReactRouter from '../../assets/tools/react-router.png';
import Formik from '../../assets/tools/formik.png';
import Sheets from '../../assets/tools/sheets.png';
import ReactNative from '../../assets/tools/react native.png';
import Expo from '../../assets/tools/expo.png';
import Node from '../../assets/tools/node.png';
import Express from '../../assets/tools/express.png';
import p5 from '../../assets/tools/p5.png';
import HTML from '../../assets/languages/html.png';
import CSS from '../../assets/languages/css.png';
import JavaScript from '../../assets/languages/javascript.png';

const details = {
	react: {
		name: 'ReactJS',
		image: ReactJS,
	},
	tailwind: {
		name: 'Tailwind',
		image: Tailwind,
	},
	reactrouter: {
		name: 'React Router',
		image: ReactRouter,
	},
	formik: {
		name: 'Formik',
		image: Formik,
	},
	sheets: {
		name: 'Sheets API',
		image: Sheets,
	},
	reactnative: {
		name: 'React Native',
		image: ReactNative,
	},
	expo: {
		name: 'Expo',
		image: Expo,
	},
	node: {
		name: 'Node',
		image: Node,
	},
	express: {
		name: 'Express',
		image: Express,
	},
	p5: {
		name: 'p5.js',
		image: p5,
	},
	html: {
		name: 'HTML',
		image: HTML,
	},
	css: {
		name: 'CSS',
		image: CSS,
	},
	js: {
		name: 'JavaScript',
		image: JavaScript,
	},
};

export default function TechnologiesUsed({ technologies }) {
	return (
		<div
			className='flex flex-col justify-center items-center mx-6 font-thin w-full'
			data-aos='fade-up'
		>
			{/*<p>Technologies Used</p>*/}
			<ul className='flex justify-around items-center w-full px-4 max-w-lg'>
				{technologies.map(tech => (
					<Technology
						details={details[tech]}
						key={details[tech].name}
					/>
				))}
			</ul>
		</div>
	);
}

// React
// Tailwind
// React Router *

// React Native
// Expo
// Formik *
// Node
// Express
// Sheets *

// HTML5
// CSS3
// JavaScript
// p5.js

// HTML5
// CSS3
// JavaScript
