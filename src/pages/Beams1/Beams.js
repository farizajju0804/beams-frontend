import React from 'react'
import './Beams.css'
import LowCard from '../../models/LowCard/LowCard'
import TrendingCard from '../../models/TrendingCard/TrendingCard'
function Beams() {
  return (
    <div className='beams-section'>
        <div className='beams-header-container'>
        <h1>Ignite Your Success with Beams</h1>
                <img className='beams-hero' src="Assets/images/beams-hero.png" alt=""/>
       </div>
       <div className='beams-content-container'>
            <div className='low-container'>
                <div className='low-box'>
                    Launch Of The Week
                </div>
                <LowCard 
                lowTitle="The Fascinating World Of Synthetic Biology"
                lowDesc="Lorem ipsum dolor sit amet consectetur. Amet purus gravida id neque nam praesent duis posuere. Erat nullam mauris ac lorem commodo pellentesque placerat eu ut. Orci malesuada ut scelerisque sit. Sed eu pretium ut ultricies purus in diam cum. Integer et ornare fringilla nunc."
                lowCategory="Science"
                lowImg='Assets/images/intro-main-image-synthetic-bio.png'
                categoryColor="#6941C6"
                categoryBgColor="#F9F5FF"
                />
            </div>
           
            <div className='trending-container'>
            <div className='trending-box'>
                    Trending Beams
                </div>
              <div className='trending-content-container'>
                <TrendingCard
                trendingCardImg="Assets/images/bci-trending-img.png"
                trendingCardTitle= "Brain-Computer Interfaces: The Next Frontier in Human Evolution"
                trendingCardDescription="Lorem ipsum dolor sit amet consectetur. Tempus consectetur tortor ut quam at semper dui placerat."
                trendingCardCategory="Technology"
                trendingCardCategoryBgColor="#EEF4FF"
                trendingCardCategoryColor="#3538CD"
                />
                <TrendingCard
                trendingCardImg="Assets/images/bci-trending-img.png"
                trendingCardTitle= "Brain-Computer Interfaces: The Next Frontier in Human Evolution"
                trendingCardDescription="Lorem ipsum dolor sit amet consectetur. Tempus consectetur tortor ut quam at semper dui placerat."
                trendingCardCategory="Technology"
                trendingCardCategoryBgColor="#EEF4FF"
                trendingCardCategoryColor="#3538CD"
                />
                <TrendingCard
                trendingCardImg="Assets/images/bci-trending-img.png"
                trendingCardTitle= "Brain-Computer Interfaces: The Next Frontier in Human Evolution"
                trendingCardDescription="Lorem ipsum dolor sit amet consectetur. Tempus consectetur tortor ut quam at semper dui placerat."
                trendingCardCategory="Technology"
                trendingCardCategoryBgColor="#EEF4FF"
                trendingCardCategoryColor="#3538CD"
                />
                <TrendingCard
                trendingCardImg="Assets/images/bci-trending-img.png"
                trendingCardTitle= "Brain-Computer Interfaces: The Next Frontier in Human Evolution"
                trendingCardDescription="Lorem ipsum dolor sit amet consectetur. Tempus consectetur tortor ut quam at semper dui placerat."
                trendingCardCategory="Technology"
                trendingCardCategoryBgColor="#EEF4FF"
                trendingCardCategoryColor="#3538CD"
                />
              </div>
            </div>
       </div>


    <div>
        
    </div>
    
    </div>
    
  )
}

export default Beams