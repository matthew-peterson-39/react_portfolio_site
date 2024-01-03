import { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './App.css'
import Navbar from './components/Navbar';
import ContactFormModal from './components/ContactFormModal';
import './styles/ContactFormModal.css'

import About from './components/About';
import './styles/About.css'
import './styles/Projects.css'
import Projects from './components/Projects';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>
    <Navbar 
      isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}
      isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}
    />
    <div className='content-section'>
      <About />
      <Projects />
    </div>
    <ContactFormModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(!isModalOpen)}/>
    <footer>
      <a href="https://github.com/matthew-peterson-39" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} className="github-icon" />
      </a>
      <a href="https://www.linkedin.com/in/matthew-peterson-tech/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} className="linkedin-icon" />
      </a>
    </footer>
    </>
  )
}

export default App
