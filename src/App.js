import NavBar from './components/NavBar.js';
import Intro from './components/Intro.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import About from './components/About.js';
import ContactForm from './components/ContactForm.js';
import Footer from './components/Footer.js';

function App() {
	return (
		<div className='bg-gradient-to-l from-richblue-600 to-richblue-800 min-w-screen min-h-screen'>
			<NavBar />
			<div className='flex flex-col justify-center items-center'>
				<Intro />
				<Skills />
				<Projects />
				<About />
				<ContactForm />
				<Footer />
			</div>
		</div>
	);
}

export default App;
