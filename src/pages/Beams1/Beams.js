import React, { useEffect } from 'react'
import './Beams.css'
import LowCard from '../../models/LowCard/LowCard'
import TrendingCard from '../../models/TrendingCard/TrendingCard'
import { useState } from 'react'
function Beams() {
  const [launch,setLaunch]=useState(null)
  const [trending,setTrending]=useState([])
  useEffect(()=>{
        fetch("http://localhost:1337/api/launch-of-the-weeks?populate=*").then((res) => res.json())
        .then((launch)=>{
          console.log(launch.data[0].attributes)
          setLaunch(launch.data[0].attributes)})

          fetch("http://localhost:1337/api/trending-cards?populate=*").then((res) => res.json())
          .then((trending)=>{
            setTrending(trending.data)})
  },[])
  return (
    <div className='beams-section'>
        <div className='beams-header-container'>
        <h1>Ignite Your Success with Beams</h1>
                {/* <img className='beams-hero' src="Assets/images/beams-hero.png" alt=""/> */}
       </div>
       <div className='beams-content-container'>
            <div className='low-container'>
                <div className='low-box'>
                    Launch Of The Week
                </div>
                {
                  launch?<LowCard 
                  // lowImg='Assets/images/intro-main-image-synthetic-bio.png'
                  {...launch}
                  />:
                  <p>loading..</p>
                }
                
            </div>
           
            <div className='trending-container'>
            <div className='trending-box'>
                    Trending Beams
                </div>
              <div className='trending-content-container'>
                {
                    trending.length?
                    trending.map((trending)=><TrendingCard
                    {...trending.attributes}
                    />)
                    :
                    <p>loading...</p>
                }
                
  
              
              </div>
            </div>
       </div>


    <div>
        
    </div>
    
    </div>
    
  )
}

export default Beams