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
      slideshowUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fa4349vha7EZ1Dt7WESZ8St%2FBeams-Wonderland%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-20%26viewport%3D379%252C235%252C0.17%26t%3DJqei4vIb80CC7f1p-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A20%26mode%3Ddesign"
      
    },
    {
        category: "Magical Materials",
        title: "Brainwave Buddy",
        categoryColor: "#FB9046",
        categoryBgColor: "#FFF6F5",
        img: "Assets/images/thumbnail-wonder-2.webp",
        slideshowUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fa4349vha7EZ1Dt7WESZ8St%2FBeams-Wonderland%3Fpage-id%3D14%253A193%26type%3Ddesign%26node-id%3D21-203%26viewport%3D938%252C225%252C0.09%26t%3DvBW1sOxTgbwGJPmZ-1%26scaling%3Dcontain%26starting-point-node-id%3D21%253A194%26mode%3Ddesign"
        
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
