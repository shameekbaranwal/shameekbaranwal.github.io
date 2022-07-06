import React from 'react';

import NavBar from './components/NavBar/NavBar.jsx';
import Landing from './components/Hero/Landing.jsx';
import Skills from './components/Skillset/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import About from './components/AboutMe/About.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import Footer from './components/Footer/Footer.jsx';
import { useEffect, useState } from 'react';
import Canvas from './components/Canvas/Canvas.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		AOS.init({
			once: true,
			duration: 300,
			easing: 'ease-out-quart',
		});
	}, []);

	return (
		<>
			<div className='bg-gradient-to-l from-richblue-600 to-richblue-800 min-w-screen min-h-screen overflow-hidden selection:bg-turq-700/75 '>
				<NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
				<div className='flex flex-col justify-center items-center relative max-h-full'>
					<Landing />
					<Skills />
					<Projects />
					<About />
					<ContactForm />
					<Footer />
					<Canvas />
				</div>
			</div>
		</>
	);
}

export default App;
