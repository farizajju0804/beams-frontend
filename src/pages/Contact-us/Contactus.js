import React from 'react'
import './Contactus.css'
import { Location, Sms} from 'iconsax-react';
import { useState, useEffect } from 'react';
import { Toaster,toast } from 'react-hot-toast';

function Contactus() {
    const [isMobileViewport, setIsMobileViewport] = useState(window.innerWidth <= 912);
    const [form,setForm]=useState({name:"",email:"",message:""})
    const changeHandler=(event)=>{
      setForm({...form,[event.target.id]:event.target.value})
    }
    const submitHandler=(e)=>{
      e.preventDefault()

      fetch(`https://plankton-app-tafca.ondigitalocean.app/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to:"mbawri@gmail.com",
          subject:"Contact Form Response",
          text:`name:${form.name} email:${form.email} message:${form.message}`
        }),
      }).then((res)=>res.json()).then((res)=>toast.success("email sent successfully!"))
    }
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
      <Toaster/>
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
                  <p>info@beams.world</p>
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
              <form action='submit' onSubmit={submitHandler}>
                <div className='form-row-1'>
                <input className="input-field" id="name" type="name" name=""  placeholder='Your Name' onChange={changeHandler}/>
                <input className="input-field" id="email" type="mail" name=""  placeholder='E-mail' onChange={changeHandler}/>
                </div>
                <div className='form-row-3'>
                <textarea className="input-field message" id="message" type="textarea" rows="5" cols="40" name=""  placeholder='Message' onChange={changeHandler}/>
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