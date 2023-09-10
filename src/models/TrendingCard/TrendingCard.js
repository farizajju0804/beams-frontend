import React, { useState, useContext, useEffect } from 'react';
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
  toast,
  remainingTime
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
    if (show) {
      navigate(`/article-description/${articleId}`);
    }
    else{
      toast(`Come back after ${remainingTime} hrs to unlock this beam`)
    }
  };

  useEffect(() => {
    const handleResize = () => {
      // Get the viewport width
      const viewportWidth = window.innerWidth;

      // Conditionally set showFav based on viewport width and show prop
      setShowFav(viewportWidth <= 768 && show); // Show on small screens with show state
    };

    // Add a resize event listener to check viewport width on window resize
    window.addEventListener('resize', handleResize);

    // Call the handleResize function initially to set the initial state
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [show]); // Added `show` as a dependency to handle changes

  return (
    <div
      className={`trending-card-wrapper`}
      onClick={navigateToDescription}
      onMouseEnter={() => setShowFav(true)} // Show on hover for large screens
      onMouseLeave={() => setShowFav(false)} // Hide on mouse leave for large screens
    >
      <div className={` ${!show ? 'hidden-card' : 'trending-card'}`}>
        <div className='trending-card-img'>
          <img
            id='heartImg'
            src={show? API_Photo + trendingCardImg.data.attributes.url : 'Assets/images/gift.webp'}
            alt=''
          />
        </div>
        <div className={` ${!show ? 'hidden-title' : 'trending-card-title'}`}>
          {show ? trendingCardTitle : altTitle}
        </div>
        <div className='trending-card-desc'>
          {show ? trendingCardDescription : altTitle}
        </div>
        <div className='trending-category' style={categoryStyle}>
          {trendingCardCategory}
        </div>
      </div>
      {show && showFav && (
        <div className='favourite-icon1'>
          <img
            className='heart-icon1'
            alt=''
            src='/Assets/images/heart.svg'
            onClick={favoritesHandler}
            style={{ fill: showFav ? 'red' : 'none' }}
          />
        </div>
      )}
    </div>
  );
}

export default TrendingCard;
