import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
function Footer() {
    const [mail, setMail] = useState('');
    const handleChange = event => {
        setMail(event.target.value);
      };
  return (
    <section className='footer'>
        
        <div className='newsletter-container'>
        <div className='yellow-bg'>
            </div>
            <div className='newsletter-title'>
                <h1>Newsletter</h1>
                <p>Everybody deserves to know about unique global trends.</p>
            </div>
            <div className='input-box'>
             <input className="email-input" type="email" name="email" placeholder='Enter your email' onChange={handleChange}
            value={mail}/>
             <button className="footer-btn" type="submit">Subscribe</button>
        </div>
       
        </div>
        
        <div className='footer-content'>
            <div className='logo-footer'>
            <Link className='logo-dummy' to='/'>Beams-----</Link>
            </div>
            <div className='about-link'>
            <Link to='/aboutus'>About Us</Link>
            </div>
            <div className='contact-link'>
            <Link to='/contact'>Contact Us</Link>
            </div>
            <div className='terms'>
            <Link to='/terms-of-service'>Terms Of Service</Link>
            </div>
            <div className='policy'>
            <Link to='/privacy-policy'>Privacy Policy</Link>
            </div>
            <div className='copyright'>
              © 2023 Beams. All Rights Reserved. 
            </div>
        </div>
    </section>
  )
}

export default Footer