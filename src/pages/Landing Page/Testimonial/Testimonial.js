import React from 'react'
import './Testimonial.css'
function Testimonial() {
  return (
    <section className='testimonial'>
      <h1>Testimonials</h1>
      <div className='testimonial-container'>
         <div className="testimonial-img" ></div>
            <div className='testimonial-content'>
                <div className='content-box'>
                <img className="rating" src="Assets/images/Rating.webp" alt="" />
                <h1>“Lorem ipsum dolor sit amet consectetur. Sed sit nunc vivamus faucibus enim cursus elit amet.”</h1>
                <div className='testimonial-name'>
                <p>Name</p>
                <p>Designation</p>
                </div>
                
                </div>
                
             </div>
      </div>
    </section>
  )
}

export default Testimonial