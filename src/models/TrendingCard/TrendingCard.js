import React, { useState } from 'react'
import './TrendingCard.css'
import { useNavigate } from 'react-router-dom'
import { API_Photo } from '../../constants'
import "../../models/Description/Description.css"
function TrendingCard({trendingCardImg,trendingCardTitle,trendingCardDescription,trendingCardCategory,trendingCardCategoryColor,trendingCardCategoryBgColor,articleId,show,altTitle}) {
    const navigate=useNavigate()
    const [showFav,setShowFav]=useState(false)
    const categoryStyle = {
        backgroundColor: trendingCardCategoryBgColor,
        color: trendingCardCategoryColor
      }
      console.log(altTitle)
  return (
    <>
    
    <div className={`trending-card `} id="parent" onClick={(e)=>{
    if(show)   console.log(e.target.id)

    }}
    
    >
    
            
    <div className="favourite-icon"  style={{top:"10px",width:"3rem",height:"3rem"}}>
            <img className="heart-icon"   alt="" src="https://www.beams.world/Assets/images/heart.svg" />
          </div>
        
        <div className='trending-card-img' id="hoverElement" style={{opacity:showFav?"o.5":"1",transition:"all 300ms ease-in-out"}} >
        
            <img id="heartImg" src={API_Photo+trendingCardImg.data.attributes.url}  alt=""/>
        </div>
        <div className='trending-card-title'>
            {show?trendingCardTitle:altTitle}
        </div>
        <div className='trending-card-desc'>
            {show?trendingCardDescription:altTitle}
        </div>
        <div className='trending-category' style={categoryStyle}>
            {trendingCardCategory}
        </div>
    </div>

    </>
  )
}

export default TrendingCard