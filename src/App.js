import NavBar from './components/NavBar/NavBar.js';
import Landing from './components/Hero/Landing.js';
import Skills from './components/Skillset/Skills.js';
import Projects from './components/Projects/Projects.js';
import About from './components/About.js';
import ContactForm from './components/ContactForm.js';
import Footer from './components/Footer.js';
import { useState } from 'react';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className='bg-gradient-to-l from-richblue-600 to-richblue-800 min-w-screen min-h-screen overflow-hidden'>
				<NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
				<div className='flex flex-col justify-center items-center pt-24'>
					<Landing />
					<Skills />
					<Projects />
					<About />
					<ContactForm />
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
