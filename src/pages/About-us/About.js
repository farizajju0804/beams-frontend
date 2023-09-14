import React from 'react'
import "./About.css"
import {Link} from 'react-router-dom'
import { LoggedinNav } from '../../models/LoggedinNav/LoggedinNav'
import { Navbar } from '../../models/navbar/Navbar'
function About() {
  return (
    <>
    <div>
      
   {/* <Navbar/> */}
    <section className='team-section'>
      <div className='team-title'>
        <div className='yellow-circle'> 
           <h1>Meet</h1>
        </div>
        <h1>Our Team</h1>
      </div>
      <div className='all-members'>
  
      <div className='team-member'>
        <div className='team-member-img'>
          <img src="Assets/images/member-img-1.webp" alt=""/>
        </div>
        <div className='member-content'>
          <div className='member-info'>
            <div className='member-name'>
              Malvika Bawri
            </div>
            <div className='member-designation'>
              Founder
            </div>
          </div>
          <div className='member-description'>
            <p>Malvika Bawri is an MBA from Pepperdine University, California. She is the Founder of Diduce, a software startup based out of Silicon Valley and India. She is the Co-Founder of Think India Foundation, a premier non-profit, apolitical think tank, focused on policy research on areas that impact India’s future.</p>
            <p>Think India’s mission is to identify and research these critical areas, and draft-policy documents to shape legislation in India. Think India works closely with all branches of the Government, institutions, and individuals to help apply their knowledge in shaping the Industry in India. She holds various patents on search in her name.</p>
          </div>
        </div>
      </div>
      <div className='team-member'>
        <div className='team-member-img'>
          <img src="Assets/images/member-img-2.webp" alt=""/>
        </div>
        <div className='member-content'>
          <div className='member-info'>
            <div className='member-name'>
            Vinay Bawri
            </div>
            <div className='member-designation'>
              Co-Founder
            </div>
          </div>
          <div className='member-description'>
          <p>Vinay Bawri is the Founder of Diduce Technologies, a software startup based out of Silicon Valley. He is an inventor and an innovator who has developed algorithms and processes that radically transform search. He has been granted a patent by the USPTO and has several patents pending in the United States.</p>
          <p>He was the former Joint Managing Director of Calcom Cements, one of the largest cement companies in North-East India. He was part of the core team that built Calcom into a multi million dollar company. He spent the last ten years building and running cement plants in East India.</p>
          </div>
        </div>
      </div>
     </div>
    </section>
    </div>
    </>
  )
}

export default About