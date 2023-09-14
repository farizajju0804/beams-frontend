import React, { useState, useContext, useEffect } from 'react';
import './TrendingCard.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { API, API_Photo } from '../../constants';
import '../../models/Description/Description.css';
import { Heart } from 'iconsax-react';
import axios from 'axios';
import { Cookies } from "react-cookie";

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
  const cookies=new Cookies()
  const navigate = useNavigate();
  const { addfav,delfav,favourites } = useContext(AuthContext);
  const [isFavorited, setIsFavorited] = useState(false);
  const [firstRender, setFirstRender] = useState(true)
  const [showFav, setShowFav] = useState(false);
  const heartColor = isFavorited ? "red" : "#161616";

  const categoryStyle = {
    backgroundColor: trendingCardCategoryBgColor,
    color: trendingCardCategoryColor,
  };

  // const favoritesHandler = (event) => {
  //   event.stopPropagation();

  //   setShowFav(!showFav);

  //   addfav({ articleId });
  // };

  const favoritesHandler=(event)=>{
    event.stopPropagation();
    setFirstRender(false)
    setIsFavorited(!isFavorited);
  }

  const navigateToDescription = () => {
    if (show) {
      navigate(`/article-description/${articleId}`);
    }
    else{
      const days = Math.floor(remainingTime / 24);
      const remainingHours = remainingTime % 24;
      toast(`Come back after ${days} days ${remainingHours} hrs to unlock this beam`)
    }
  };

  const fetchCall=async()=>{
    const favRes=await axios.get(`${API}/users/${cookies.get("uid")}?populate=*`)
    if(favRes.data.Favourites.map((el)=>el.articleId).includes(articleId))
    setIsFavorited(true)
  }
  useEffect(()=>{
    console.log(favourites)
    if(favourites.length){
      if(favourites.map((el)=>el.articleId).includes(articleId))
      setIsFavorited(true)
    }
    else{
       fetchCall()
    }
  },[])
  useEffect(()=>{
      if(isFavorited) addfav({articleId})
      if(!isFavorited && !firstRender) delfav({articleId})
      console.log(favourites)
  },[isFavorited,firstRender])

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
            src={show? trendingCardImg : 'Assets/images/gift.webp'}
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
        <Heart size="15" onClick={favoritesHandler} color={heartColor} variant="Bold"/>
          
        </div>
      )}
    </div>
  );
}

export default TrendingCard;
