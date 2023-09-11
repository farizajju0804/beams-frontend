import React, { useEffect } from 'react'
import './Beams.css'
import LowCard from '../../models/LowCard/LowCard'
import TrendingCard from '../../models/TrendingCard/TrendingCard'
import { useState,useContext } from 'react'
import { API } from '../../constants'
import { toast, Toaster } from "react-hot-toast";
import { AuthContext } from '../../AuthProvider/AuthProvider'
// import { useCookies } from 'react-cookie'
function Beams() {
  const {user,setArticles,articles}=useContext(AuthContext)
  // const [cookies,setCookie]=useCookies(['login'])
  const [launch,setLaunch]=useState(null)
  const [trending,setTrending]=useState()
  
  useEffect(()=>{  
    if(user){
    
      const expirationTime = new Date();
      expirationTime.setSeconds(expirationTime.getSeconds+10);
      
        // fetch(`${API}/launch-of-the-weeks?populate=*`).then((res) => res.json())
        // .then((launch)=>{
          
        //   setLaunch(launch.data[0].attributes)})

          fetch(`${API}/trending-cards?populate=*`).then((res) => res.json())
          .then((trending)=>{ 
            console.log(trending)
            const serverDate = new Date(user.createdAt);
            
            const currentDate = new Date(); 
           
            const timeDifference = currentDate - serverDate;
      
            const daysDifference =Math.floor(timeDifference / (1000 * 60 * 60 * 24))
            const showContents=Math.floor((daysDifference/3)) 
    
            const mapData=trending.data.map((el,index)=>{
               if(user.role.name==="admin") return {...el.attributes,show:true}
                if (index<=showContents || index===0) return {...el.attributes,show:true}
                else return {...el.attributes,show:false,remainingTime:Math.floor(((index*259200000)-timeDifference)/(3600*1000))}
            })
            setArticles(mapData.map((el)=> { return {img:el.trendingCardImg,idofbeam:el.articleId,title:el.trendingCardTitle}}))
            console.log(mapData)
            setTrending(mapData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)))
            
          })
        }
        
  },[user])
  
  
  return (
    <div className='beams-section' >
       <Toaster></Toaster>
      
          {user?
        <div>
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
                    toast={(msg)=>toast.error(msg)}
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
    </div>:
    <p>user loading</p>
    }
    
    </div>
    
  )
}

export default Beams