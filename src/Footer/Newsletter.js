import React from 'react'
import { useState } from 'react';
import "./Footer.css"
import { useAuthContext } from "../context/AuthContext";
import { NewsletterPopUp } from "../models/NewsletterPopUp/NewsletterPopUp";
import { Toaster, toast } from "react-hot-toast";
import { API } from '../constants';
import axios from 'axios';
function Newsletter() {
  const [newsletterpopup, setNewsletterpopup] = useState(false);
	const [newletter, setNewletter] = useState("");
    const [mail, setMail] = useState('');
    const handleChange = event => {
        setMail(event.target.value);
      };
      const { user, addnewsletter } = useAuthContext();
    const submitHandler=async()=>{
      const res=await axios.get(`${API}/newsletters`)
      console.log(res.data)
      const resdata=res.data.data.map((el)=>el.attributes.email)
      if(resdata.includes(mail)){
        toast.error("email already exists")
        setMail('')
        return
      }
      else{
          const res1=await fetch(`https://plankton-app-tafca.ondigitalocean.app/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to:mail,
          subject:"Beams-Newsletter",
          text:`You just subscribed!!!`
        }),
      }).then(async(res)=>{toast.success("Subscribed successfully")
            const jsonData=await res.json()
        
            setMail('')
    })

        const res2=await  axios.post(`${API}/newsletters`,{data:{email:mail}})
          .then((res)=>console.log(res))
      }
    
    
    } 
  return (
    <div className='newsletter'>
      <Toaster/>
      {newsletterpopup && (
				<NewsletterPopUp
					handleClose={() => {
						setNewsletterpopup(false);
					}}
				/>
			)}
    
    <div className='newsletter-container'>
    <div className='yellow-bg'>
        </div>
        <div className='newsletter-title'>
            <h1>Newsletter</h1>
            <p>Everybody deserves to know about unique global trends.</p>
        </div>
        <div className='input-box'>
         <input className="email-input" required type="email" name="email" placeholder='Enter your email' onChange={handleChange}
        value={mail}/>
         <button className="footer-btn" type="button" onClick={() => {
												// addnewsletter(newletter, setNewsletterpopup);
                        submitHandler()
												// setNewsletterpopup(true);
											}}>Subscribe</button>
    </div>
   
    </div>
      
    </div>
  )
}

export {Newsletter}