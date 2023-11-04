import React from "react";
import "./Slideshows.css";
import Slideshowcard from "../../models/Slideshowcard/Slideshowcard";
// import ViewSlideshow from "../ViewSlideshow/ViewSlideshow";

function Slideshows() {
  const slideshowData = [
    {
      category: "BCI",
      title: "6 Magical Benefits Of A Super Long-Life",
      categoryColor: "#026AA2",
      categoryBgColor: "#F0F9FF",
      img: "Assets/images/thumbnail-1.webp",  
      slideshowUrl: "https://online.fliphtml5.com/vryvr/gvet/"
      
    },
    {
        category: "Magical Materials",
        title: "6 Magical Materials You Haven't Heard Of",
        categoryColor: "#FB9046",
        categoryBgColor: "#FFF6F5",
        img: "Assets/images/thumbnail-2.webp",
        slideshowUrl: "https://online.fliphtml5.com/vryvr/aacv/"
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
