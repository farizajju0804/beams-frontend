import "./Description.css";
import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const Description = ({
  articleDescriptionImg,
  articleDescriptionTitle,
  artilceDescriptionText,
  time,
}) => {
  const navigate=useNavigate()

  const [isMobile, setIsMobile] = useState(false);

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 767); // Adjust the width threshold as needed
  };

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
    <div className="article-description" onClick={()=>navigate("/maxbeamsong")}>
      <div className="article-description-image" style={{ height: imageHeight }}>
        <img
          className="article-desciption-img-icon"
          alt=""
          src={"http://localhost:1337"+articleDescriptionImg.data.attributes.url}
          
        />
        <div className="favourite-icon">
          <img className="heart-icon" alt="" src="Assets/images/heart.svg" />
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
            <div className="read-cta">
              <div className="read-btn">
                <img className="vector1-icon" alt="" src="Assets/images/book.svg" />
                <div className="read-btn-text">Read</div>
              </div>
              <div className="time-info">
                <img
                  className="vuesaxbulkclock-icon"
                  alt=""
                  src="Assets/images/clock.svg"
                />
                <div className="time">5 min</div>
              </div>
            </div>
            <div className="read-cta">
              <div className="read-btn">
                <img className="headset-icon" alt="" src="Assets/images/headset.svg" />
                <div className="read-btn-text">Listen</div>
              </div>
              <div className="time-info">
                <img
                  className="vuesaxbulkclock-icon"
                  alt=""
                  src="Assets/images/clock.svg"
                />
                <div className="time">{time}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
