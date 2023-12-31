import React, { useState } from 'react';

function ContactFormModal({ isOpen, closeModal }) {
    //TODO finish implmenting posting form data 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [message, setMessage] = useState('')
    const [emailIsValid, setEmailIsValid] = useState(false); // Initially, assume email is valid    


    // Check to make sure email is valid and protect against spam / malicious
    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        console.log(event.name.value)
        if (emailIsValid) {
          console.log('valid email')
        }   
        else {
            console.log('invalid email')
        }
    };
    
    return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <span className="close" onClick={closeModal}>&times;</span>
          

          <div className="modal-content">  
            <h2>Contact Me</h2>
            <form id="contact-form"
              onSubmit={(e) => handleSubmit(e.target.value)}>
              
              <div className='form-field'>
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required />
              </div>
              
              <div className='form-field'>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={email}
                  onChange={e => setEmail(e.target.value)} 
                  required />
              </div>

              <div className='form-field'>
                <label htmlFor="company">Company</label>
                <input 
                  type="company" 
                  id="company" 
                  name="company" 
                  value={company}
                  onChange={e => setEmail(e.target.value)} 
                  required />
              </div>

              <div className='form-field'>
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  onChange={e => setMessage(e.target.value)} 
                  required />
              </div>
              
              <button id='submit' type='submit'>Send Message</button>
            </form>
          

          </div>
        </div>
      )}
    </>
  );
}

export default ContactFormModal;