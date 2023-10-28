import React, { useState, useContext, useEffect } from 'react';
import './Storycard.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { API, API_Photo } from '../../constants';
import '../../models/Description/Description.css';
import { Heart } from 'iconsax-react';
import axios from 'axios';
import { Cookies } from "react-cookie";
import { Toaster,toast } from 'react-hot-toast';
import Overlay from '../Overlay/Overlay';

function Storycard({
  StoryCardImg,
  StoryCardTitle,
  StoryCardCategory,
  StoryCardCategoryColor,
  StoryCardCategoryBgColor,
  url,
  question,
  options,
  correctAnswer
}) 




 {
  const navigateToStory = () => {
    navigate('/view-story', { state: { url } });
  
  }
 
  const cookies=new Cookies()
  const navigate = useNavigate();
  const { addfav,delfav,favourites } = useContext(AuthContext);
  const [isFavorited, setIsFavorited] = useState(false);
  const [firstRender, setFirstRender] = useState(true)
  const [showFav, setShowFav] = useState(false);
  const heartColor = isFavorited ? "red" : "#161616";

  const categoryStyle = {
    backgroundColor: StoryCardCategoryBgColor,
    color: StoryCardCategoryColor,
  };

 


  return (
    
    <div
      className={`trending-card-wrapper`} onClick={navigateToStory} 
    >
      <div className='trending-card'>
        <div className='trending-card-img'>
          <img
            id='heartImg'
            src={StoryCardImg}
            alt=''
          />
        </div>
        <div className='trending-card-title'>
          {StoryCardTitle}
        </div>
        
        {/* <div className='trending-category' style={categoryStyle}>
          {doyouknowCardCategory}
        </div> */}
        
        
      </div>
      {/* {showOverlay && (
      <Overlay
          question={question}
          options={options}
          correctAnswer={correctAnswer}
          onClose={closeOverlay}
        />
      )} */}
    </div>
  );
}

export default Storycard;
