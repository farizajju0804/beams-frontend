import React from 'react'
import './LowCard.css'
import { Clock } from 'iconsax-react'
function LowCard({lowImg,lowTitle,lowDesc,lowCategory,categoryBgColor,categoryColor}) { 
  const categoryStyle = {
    backgroundColor: categoryBgColor,
    color: categoryColor
  }
  const timeStyle ={
    color : categoryColor
  }
  return (
    <div className='low-card'>
        <div className='low-img'>
            <img src={lowImg} alt=""/>
        </div>
        <div className='low-card-content'>
            <div className='low-title'>
                {lowTitle}
            </div>
            <div className='low-desc'>
                {lowDesc}
            </div>
            <div className='low-info'>
                <div className='beam-category' style={categoryStyle}>
                    {lowCategory}
                </div>
                <div className='beam-time' style={timeStyle}>
                    {/* <img src="Assets/images/clock.svg" style={timeStyle} alt=""/> */}
                    <Clock size="20" color={categoryColor} variant="Bulk" />
                    5 Min Read
                </div>
                <div>
                    
                </div>
            </div>
            {/* <div className="read-btn1">
                <img className="vector1-icon" alt="" src="Assets/images/book.svg" />
                <div className="read-btn1-text">Read</div>
              </div> */}
        </div>
    </div>
  )
}

export default LowCard