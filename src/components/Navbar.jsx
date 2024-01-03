import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import '../styles/Navbar.css'

function Navbar({isMenuOpen, setIsMenuOpen, isModalOpen, setIsModalOpen}) {
    
    const handleNavButton = (buttonClicked) => {
        if(buttonClicked === 'contact') {
            setIsModalOpen(!isModalOpen)
        }
        setIsMenuOpen(!isMenuOpen)
    }

    return (
      <nav>
        <h1 id='name-logo'>Matthew Peterson</h1>
        <div className="bars-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaBars size={30}/>
        </div>
        <div id='nav-btn-wrapper' className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <button 
                className='nav-btn' 
                href="#about" 
                onClick={() => handleNavButton('about')}>About</button>
            <button 
                className='nav-btn' 
                href="#project-container"
                onClick={() => handleNavButton('projects')}>Projects</button>
            <button 
                className='nav-btn' 
                id='contrast' href="#contact"
                onClick={() => handleNavButton('contact')}>Contact</button>
        </div>
      </nav>
    );
  }

  export default Navbar;
  