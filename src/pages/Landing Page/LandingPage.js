import React from 'react'
import Doyouknow from './DoYouKnow/Doyouknow';
import Feature1 from './Feature-1/Feature1';
import Feature2 from './Feature-2/Feature2';
import Feature3 from './Feature-3/Feature3';
import Feature4 from './Feature-4/Feature4';
import Hero from './Hero/Hero';
import { Navbar } from '../../models/navbar/Navbar';
import IntroducingBeams from './IntroducingBeams/IntroducingBeams'
import Testimonial from './Testimonial/Testimonial';
import Benefits from './Benefits/Benefits';
import { Toaster } from 'react-hot-toast';
import { LoggedinNav } from '../../models/LoggedinNav/LoggedinNav';
import { Cookies } from 'react-cookie'

function LandingPage() {
  const cookies=new Cookies()

  return (
    <>
    				
    {cookies.get("loggedIn")?<LoggedinNav/>:<Navbar />} 
    <Toaster/>
    <div>
    <Hero />
    <Doyouknow />
    <IntroducingBeams />
    <Feature1/>
    <Feature2/>
    <Feature3/>
    {/* <Feature4 /> */}
    <Benefits/>
    <Testimonial/>
    </div>
    </>
  )
}

export default LandingPage;