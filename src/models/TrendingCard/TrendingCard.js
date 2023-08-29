import React from 'react'
import './TrendingCard.css'

function TrendingCard({trendingCardImg,trendingCardTitle,trendingCardDescription,trendingCardCategory,trendingCardCategoryColor,trendingCardCategoryBgColor}) {
    const categoryStyle = {
        backgroundColor: trendingCardCategoryBgColor,
        color: trendingCardCategoryColor
      }
  return (
    <div className='trending-card'>
        <div className='trending-card-img'>
            <img src={trendingCardImg} alt=""/>
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