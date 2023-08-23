import React from 'react'
import { useState } from 'react';

function Newsletter() {
    const [mail, setMail] = useState('');
    const handleChange = event => {
        setMail(event.target.value);
      };
  return (
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
  )
}

export {Newsletter}