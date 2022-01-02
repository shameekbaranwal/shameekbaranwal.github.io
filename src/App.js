import NavBar from './components/NavBar/NavBar.js';
import Landing from './components/Hero/Landing.js';
import Skills from './components/Skillset/Skills.js';
import Projects from './components/Projects/Projects.js';
import About from './components/AboutMe/About.js';
import ContactForm from './components/ContactForm/ContactForm.js';
import Footer from './components/Footer/Footer.js';
import { useEffect, useState } from 'react';
import Canvas from './components/Canvas/Canvas.js';
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
			<div className='bg-gradient-to-l from-richblue-600 to-richblue-800 min-w-screen min-h-screen overflow-hidden'>
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
