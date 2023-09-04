import React from 'react'
import './TrendingCard.css'
import { useNavigate } from 'react-router-dom'
import { API_Photo } from '../../constants'
function TrendingCard({trendingCardImg,trendingCardTitle,trendingCardDescription,trendingCardCategory,trendingCardCategoryColor,trendingCardCategoryBgColor,articleId,show}) {
    const navigate=useNavigate()

    const categoryStyle = {
        backgroundColor: trendingCardCategoryBgColor,
        color: trendingCardCategoryColor
      }
  return (
    <div className={`trending-card ${!show && "hide"}`} onClick={()=>{
    if(show)  navigate(`/article-description/${articleId}`)

    }}>
        <div className='trending-card-img'>
            <img src={API_Photo+trendingCardImg.data.attributes.url} alt=""/>
        </div>
        <div className='trending-card-title'>
            {trendingCardTitle}
        </div>
        <div className='trending-card-desc'>
            {trendingCardDescription}
        </div>
        <div className='trending-category' style={categoryStyle}>
            {trendingCardCategory}
        </div>
    </div>
  )
}

export default TrendingCard