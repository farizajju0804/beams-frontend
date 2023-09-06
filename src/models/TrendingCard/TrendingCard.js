import React, { useState, useContext } from 'react';
import './TrendingCard.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { API, API_Photo } from '../../constants';
import '../../models/Description/Description.css';

function TrendingCard({
  trendingCardImg,
  trendingCardTitle,
  trendingCardDescription,
  trendingCardCategory,
  trendingCardCategoryColor,
  trendingCardCategoryBgColor,
  articleId,
  show,
  altTitle,
}) {
  const navigate = useNavigate();
  const { addfav } = useContext(AuthContext);

  const [showFav, setShowFav] = useState(false);

  const categoryStyle = {
    backgroundColor: trendingCardCategoryBgColor,
    color: trendingCardCategoryColor,
  };

  const favoritesHandler = (event) => {
    event.stopPropagation();

    // Toggle the favorite status in the local state
    setShowFav(!showFav);

    // Send a request to add/remove the article from favorites
    addfav({ articleId });
  };

  const navigateToDescription = () => {
    navigate(`/article-description/${articleId}`);
  };

  const handleCardHover = () => {
    setShowFav(true);
  };

  const handleCardLeave = () => {
    setShowFav(false);
  };

  return (
    <div
      className='trending-card-wrapper'
      onClick={navigateToDescription}
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardLeave}
    >
      <div className={`trending-card`}>
        <div className='trending-card-img'>
          <img
            id='heartImg'
            src={API_Photo + trendingCardImg.data.attributes.url}
            alt=''
          />
        </div>
        <div className='trending-card-title'>
          {show ? trendingCardTitle : altTitle}
        </div>
        <div className='trending-card-desc'>
          {show ? trendingCardDescription : altTitle}
        </div>
        <div className='trending-category' style={categoryStyle}>
          {trendingCardCategory}
        </div>
        {showFav && (
          <div className='favourite-icon'  style={{ position: "absolute", top: "10px", width:"50px",height:"50px" }}>
            <img
              className='heart-icon'
              alt=''
              src='/Assets/images/heart.svg'
              onClick={favoritesHandler}
              style={{ fill: showFav ? 'red' : 'none' ,}}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default TrendingCard;
