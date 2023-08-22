import React from 'react'
import './Contactus.css'
import { Location, Sms} from 'iconsax-react';
import { useState, useEffect } from 'react';

function Contactus() {
    const [isMobileViewport, setIsMobileViewport] = useState(window.innerWidth <= 912);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobileViewport(window.innerWidth <= 912);
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <section className='contact-us'>
        <div className='contact-info-container'>
             <div className='contact-info-img-box'>
              <img className="contact-img" src="Assets/images/contact-img.png" alt=""/>
             </div>
            
             <div className='contact-info-content'>
              <div className='info-row-1'>
                  <h1 className='info-title'>CONTACT US</h1>
                  <p>You’ve got questions? We’ve got the answers.</p>
              </div>

              <div className='info-row-2'>
                <div className='visit-us'>
                <div className='title-icon'>
                    <Location size="30" color={isMobileViewport ? "#161616" : "#FF8A65"} variant="Bold"/>
                  </div>
                  <div className='visit-us-container'>
                    {/* <h1 className='info-title'>VISIT US</h1> */}
                    <p>San Francisco, USA</p>
                  </div>
                </div>
                <div className='mail-us'>
                <div className='title-icon'>
                  <Sms size="30" color={isMobileViewport ? "#161616" : "#FF8A65"} variant="Bold" />
                    
                  </div>
                  <div className='mail-us-container'>
                  {/* <h1 className='info-title'>MAIL US</h1> */}
                  <p>info@beams.com</p>
                  </div>
                </div>
                
                 
              </div>    
            
            </div>
            
        </div>
          <div className='contact-form-container'>
            <div className='contact-form-title'>
                <h1>Have a Query? <br/>Message Us</h1>
            </div>
            <div className='contact-form'>
              <form action='submit'>
                <div className='form-row-1'>
                <input className="input-field" type="name" name="" value="" placeholder='Your Name'/>
                <input className="input-field" type="mail" name="" value="" placeholder='E-mail'/>
                </div>
                <div className='form-row-3'>
                <textarea className="input-field message" type="textarea" rows="5" cols="40" name="" value="" placeholder='Message'/>
                </div>
                <div className='form-row-4'>
                  <button className="form-btn" type="submit">Send Message</button>
                </div>
                
              </form>
            </div>
          </div>
    </section>
  )
}

export default Contactus