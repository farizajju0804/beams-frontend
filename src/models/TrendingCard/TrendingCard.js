import React from 'react'
import './TrendingCard.css'
import { useNavigate } from 'react-router-dom'
function TrendingCard({trendingCardImg,trendingCardTitle,trendingCardDescription,trendingCardCategory,trendingCardCategoryColor,trendingCardCategoryBgColor,articleId}) {
    const navigate=useNavigate()

    const categoryStyle = {
        backgroundColor: trendingCardCategoryBgColor,
        color: trendingCardCategoryColor
      }
  return (
    <div className='trending-card' onClick={()=>{localStorage.setItem("article",articleId)
    navigate("/article-description")
    }}>
        <div className='trending-card-img'>
            <img src={"http://localhost:1337"+trendingCardImg.data.attributes.url} alt=""/>
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