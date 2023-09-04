import React, { useEffect } from 'react'
import './Beams.css'
import LowCard from '../../models/LowCard/LowCard'
import TrendingCard from '../../models/TrendingCard/TrendingCard'
import { useState,useContext } from 'react'
import { API } from '../../constants'
import { AuthContext } from '../../AuthProvider/AuthProvider'
function Beams() {
  const {user}=useContext(AuthContext)
  console.log(user)
  const [launch,setLaunch]=useState(null)
  const [trending,setTrending]=useState()
  const serverDate = new Date(sessionStorage.getItem("createdAt"));
  const currentDate = new Date(); 
  const timeDifference = currentDate - serverDate;
  const daysDifference =Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  const showContents=Math.floor((10/4)) 
  useEffect(()=>{
        fetch(`${API}/launch-of-the-weeks?populate=*`).then((res) => res.json())
        .then((launch)=>{
          console.log(launch.data[0].attributes)
          setLaunch(launch.data[0].attributes)})

          fetch(`${API}/trending-cards?populate=*`).then((res) => res.json())
          .then((trending)=>{
            console.log("set..")
            
            const mapData=trending.data.map((el,index)=>{
                if (index<showContents || index===0) return {...el.attributes,show:true}
                else return {...el.attributes,show:false}
            })
            console.log(mapData)
            setTrending(mapData)
            
          })

        
  },[])
  
  
  return (
    <div className='beams-section' >
        <div className='beams-header-container'>
        <h1>Ignite Your Success with Beams</h1>
                {/* <img className='beams-hero' src="Assets/images/beams-hero.png" alt=""/> */}
       </div>
       <div className='beams-content-container' >
            {/* <div className='low-container'>
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
                
            </div> */}
           
            <div className='trending-container'>
            <div className='trending-box'>
                    Trending Beams
                </div>
              <div className='trending-content-container'>
                {
                    trending?
                    trending.map((trending)=><TrendingCard
                    {...trending}
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