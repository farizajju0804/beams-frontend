import React from "react";
import "./Doyouknows.css";
import Slideshowcard from "../../models/Slideshowcard/Slideshowcard";
import Doyouknowcard from "../../models/Doyouknowcard/Doyouknowcard";
// import ViewSlideshow from "../ViewSlideshow/ViewSlideshow";
function Doyouknows() {
  const slideshowData = [
    {
      category: "BCI",
      title: "Magical Materials",
      categoryColor: "#026AA2",
      categoryBgColor: "#F0F9FF",
      img: "Assets/images/thumbnail-wonder-1.webp",  
      slideshowUrl: "https://beams.outgrow.us/653e1e2fd8432a770d10daae"
      
    },
    {
        category: "Magical Materials",
        title: "Magical Biology",
        categoryColor: "#FB9046",
        categoryBgColor: "#FFF6F5",
        img: "Assets/images/thumbnail-wonder-2-.webp",
        slideshowUrl: "https://beams.outgrow.us/653e3c3da7aab93023cf429d"
      },
    
  ];

  return (
    <div className="beams-section">
      <div>
        <div className="beams-header-container3">
          <h1>Ignite Your Success with Beams</h1>
        </div>
        <div className="beams-content-container">
          <div className="trending-container">
            <div className="trending-box">Beams Wonderland</div>
            <div className="trending-content-container">
              {slideshowData.map((data, index) => (
                <Doyouknowcard
                  key={index}
                  doyouknowCardCategory={data.category}
                  doyouknowCardTitle={data.title}
                  doyouknowcardCategoryColor={data.categoryColor}
                  doyouknowcardCategoryBgColor={data.categoryBgColor}
                  doyouknowCardImg={data.img}
                  url={data.slideshowUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doyouknows;
