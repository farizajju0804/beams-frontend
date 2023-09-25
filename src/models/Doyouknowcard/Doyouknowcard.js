import React, { useState, useContext, useEffect } from 'react';
import './Doyouknowcard.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { API, API_Photo } from '../../constants';
import '../../models/Description/Description.css';
import { Heart } from 'iconsax-react';
import axios from 'axios';
import { Cookies } from "react-cookie";
import { Toaster,toast } from 'react-hot-toast';
import Overlay from '../Overlay/Overlay';

function Doyouknowcard({
  doyouknowCardImg,
  doyouknowCardTitle,
  doyouknowCardCategory,
  doyouknowcardCategoryColor,
  doyouknowcardCategoryBgColor,
  question,
  options,
  correctAnswer
}) 


{
  const [showOverlay, setShowOverlay] = useState(false);

  const openquestion = () => {
    setShowOverlay(true);
  }

  const closeOverlay = () => {
    setShowOverlay(false);
  }
  const cookies=new Cookies()
  const navigate = useNavigate();
  const { addfav,delfav,favourites } = useContext(AuthContext);
  const [isFavorited, setIsFavorited] = useState(false);
  const [firstRender, setFirstRender] = useState(true)
  const [showFav, setShowFav] = useState(false);
  const heartColor = isFavorited ? "red" : "#161616";

  const categoryStyle = {
    backgroundColor: doyouknowcardCategoryBgColor,
    color: doyouknowcardCategoryColor,
  };

 


  return (
    
    <div
      className={`trending-card-wrapper`} onClick={openquestion}
    >
      <div className='trending-card'>
        <div className='trending-card-img'>
          <img
            id='heartImg'
            src={doyouknowCardImg}
            alt=''
          />
        </div>
        <div className='trending-card-title'>
          {doyouknowCardTitle}
        </div>
        
        <div className='trending-category' style={categoryStyle}>
          {doyouknowCardCategory}
        </div>
        {showOverlay && (
        <Overlay
          question={question}
          options={options}
          correctAnswer={correctAnswer}
          onClose={closeOverlay}
        />
      )}
      </div>
    </div>
  );
}

export default Doyouknowcard;
