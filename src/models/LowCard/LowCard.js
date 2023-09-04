import React from 'react'
import './LowCard.css'
import { Clock } from 'iconsax-react'
import { useEffect,useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate, useParams } from 'react-router-dom';
import { API_Photo } from '../../constants'
function LowCard({lowImg,lowTitle,lowDesc,lowCategory,categoryBgColor,categoryColor,articleId}) { 
  const navigate=useNavigate()
  const auth=useContext(AuthContext)
  const categoryStyle = {
    backgroundColor: categoryBgColor,
    color: categoryColor
  }
  const timeStyle ={
    color : categoryColor
  }

  // useEffect(()=>{
  //   console.log(auth.article)
  // },[auth])
  
  return (
    <div className='low-card'  onClick={()=>{
      navigate(`/article-description/${articleId}`)
    }}>
        <div className='low-img'>
            <img src={API_Photo+lowImg.data.attributes.url} alt="article-img"/>
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