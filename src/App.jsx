import { useState } from 'react'
import './App.css'
import ContactFormModal from './components/ContactFormModal';
import './styles/ContactFormModal.css'

import About from './components/About';
import './styles/About.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <nav>
        <h1 id='name-logo'>Matthew Peterson</h1>
          <div id='nav-btn-wrapper'>
            <button className='nav-btn' id='standard' href="#about">About</button>
            <button className='nav-btn' id='standard' href="#project-container">Projects</button>
            <button className='nav-btn' id='contrast'  href="#contact" onClick={() => setIsModalOpen(!isModalOpen)}>Contact</button>
          </div>
    </nav>
    <div className='content-section'>
      <About />
      <div></div>
      <div></div>
    </div>
    <ContactFormModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(!isModalOpen)}/>
    </>
  )
}

export default App
