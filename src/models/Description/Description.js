import "./Description.css";
import React, { useState,useEffect,useContext } from "react";
import { useNavigate,useParams } from 'react-router-dom'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast, Toaster } from "react-hot-toast";
import { API, API_Photo } from "../../constants";
const Description = ({
  articleDescriptionImg,
  articleDescriptionTitle,
  artilceDescriptionText,
  time,
}) => {
  const navigate=useNavigate()
  const {id}=useParams()
  const [isMobile, setIsMobile] = useState(false);
  const {addfav}=useContext(AuthContext)
  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 767); // Adjust the width threshold as needed
  };
  const favoritesHandler=()=>{
    addfav({articleId:id})
  }
  useEffect(() => {
  
    updateIsMobile();

    // Add event listener for window resize
    window.addEventListener("resize", updateIsMobile);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);
  const imageHeight = isMobile ? "200px" : "500px";
  return (
    <>
          <Toaster></Toaster>
    <div className="article-description" >
      <div className="article-description-image" style={{ height: imageHeight }}>
        <img
          className="article-desciption-img-icon"
          alt=""
          src={API_Photo+articleDescriptionImg.data.attributes.url}
          
        />
        <div className="favourite-icon" onClick={favoritesHandler}>
          <img className="heart-icon" alt="" src="https://beams-frontend.vercel.app/Assets/images/heart.svg" />
        </div>
      </div>
      <div className="article-description-content-co">
        <div className="article-description-content">
          <div className="article-description-tille-box">
            <div className="article-description-title">
              {articleDescriptionTitle}
            </div>
            <div className="artilce-description-text">
              {artilceDescriptionText}
            </div>
          </div>
          <div className="article-cta-box">
            <div className="read-cta" onClick={()=>navigate(`/articleread/${id}`)}>
              <div className="read-btn">
                <img className="vector1-icon" alt="" src="https://beams-frontend.vercel.app/Assets/images/book.svg" />
                <div className="read-btn-text">Read</div>
              </div>
              <div className="time-info">
                <img
                  className="vuesaxbulkclock-icon"
                  alt=""
                  src="https://beams-frontend.vercel.app/Assets/images/clock.svg"
                />
                <div className="time">5 min</div>
              </div>
            </div>
            <div className="read-cta" >
              <div className="read-btn" onClick={()=>navigate(`/maxbeamsong/${id}`)}>
                <img className="headset-icon" alt="" src="https://beams-frontend.vercel.app/Assets/images/headset.svg" />
                <div className="read-btn-text">Listen</div>
              </div>
              <div className="time-info">
                <img
                  className="vuesaxbulkclock-icon"
                  alt=""
                  src="https://beams-frontend.vercel.app/Assets/images/clock.svg"
                />
                <div className="time">{time}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default Description;
