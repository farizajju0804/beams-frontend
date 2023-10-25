import React, { useState, useContext, useEffect } from 'react';
import './Slideshowcard.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { API, API_Photo } from '../../constants';
import '../../models/Description/Description.css';
import { Heart } from 'iconsax-react';
import axios from 'axios';
import { Cookies } from "react-cookie";
import { Toaster,toast } from 'react-hot-toast';


function Slideshowcard({
  slideshowCardImg,
  slideshowCardTitle,
  slideshowCardCategory,
  slideshowcardCategoryColor,
  slideshowcardCategoryBgColor,
  slideshowUrl
}) {
  const cookies=new Cookies()
  const navigate = useNavigate();
  const { addfav,delfav,favourites } = useContext(AuthContext);
  const [isFavorited, setIsFavorited] = useState(false);
  const [firstRender, setFirstRender] = useState(true)
  const [showFav, setShowFav] = useState(false);
  const heartColor = isFavorited ? "red" : "#161616";

  const categoryStyle = {
    backgroundColor: slideshowcardCategoryBgColor,
    color: slideshowcardCategoryColor,
  };

  const navigateToSlideshow = () => {
    navigate('/view-slideshow', { state: { slideshowUrl } });

   
    }




  return (
    
    <div
      className={`trending-card-wrapper`} onClick={navigateToSlideshow}
    >
      <div className='trending-card'>
        <div className='trending-card-img'>
          <img
            id='heartImg'
            src={slideshowCardImg}
            alt=''
          />
        </div>
        <div className='trending-card-title'>
          {slideshowCardTitle}
        </div>
        
        {/* <div className='trending-category' style={categoryStyle}>
          {slideshowCardCategory}
        </div> */}
      </div>
    </div>
  );
}

export default Slideshowcard;
