import React from "react";
import "./Slideshows.css";
import Slideshowcard from "../../models/Slideshowcard/Slideshowcard";
// import ViewSlideshow from "../ViewSlideshow/ViewSlideshow";

function Slideshows() {
  const slideshowData = [
    {
      category: "BCI",
      title: "5 Mind-Blowing Applications Of Brain Computer Interfaces",
      categoryColor: "#026AA2",
      categoryBgColor: "#F0F9FF",
      img: "Assets/images/bci-application-slideshow.webp",  
      slideshowUrl: "https://www.canva.com/design/DAFwdNhsXrI/view?embed"
    },
    {
        category: "Magical Materials",
        title: "5 Materials You Didn't Know Existed",
        categoryColor: "#FB9046",
        categoryBgColor: "#FFF6F5",
        img: "Assets/images/materials-application-slideshow.webp",
        slideshowUrl: "https://www.canva.com/design/DAFvRwho7uY/view?embed"
      },
    
  ];

  return (
    <div className="beams-section">
      <div>
        <div className="beams-header-container1">
          <h1>Ignite Your Success with Beams</h1>
        </div>
        <div className="beams-content-container">
          <div className="trending-container">
            <div className="trending-box">Beams Curiosityland</div>
            <div className="trending-content-container">
              {slideshowData.map((data, index) => (
                <Slideshowcard
                  key={index}
                  slideshowCardCategory={data.category}
                  slideshowCardTitle={data.title}
                  slideshowcardCategoryColor={data.categoryColor}
                  slideshowcardCategoryBgColor={data.categoryBgColor}
                  slideshowCardImg={data.img}
                  slideshowUrl={data.slideshowUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slideshows;
