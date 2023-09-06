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

  useEffect(() => {
    const handleResize = () => {
      // Get the viewport width
      const viewportWidth = window.innerWidth;

      // Conditionally set showFav based on viewport width
      setShowFav(viewportWidth <= 768); // Show on small screens, hide on larger screens
    };

    // Add a resize event listener to check viewport width on window resize
    window.addEventListener('resize', handleResize);

    // Call the handleResize function initially to set the initial state
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className='trending-card-wrapper'
      onClick={navigateToDescription}
      onMouseEnter={() => setShowFav(true)} // Show on hover for large screens
      onMouseLeave={() => setShowFav(false)} // Hide on mouse leave for large screens
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
      </div>
      {showFav && (
        <div className='favourite-icon1'>
          <img
            className='heart-icon'
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
