import React from 'react'
import { Link } from 'react-router-dom';
import './Newsletter.js'
import './Footer.css'
function Footer() {
    
  return (
    <section className='footer'> 
        <div className='footer-content'>
            <div className='logo-footer'>
              <img src="https://www.beams.world/Assets/images/logo1.webp" alt=""/>
            {/* <Link className='logo-dummy' to='/'>Beams-----</Link> */}
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

export {Footer}