import React from "react";
import "./Stories.css";
import Doyouknowcard from "../../models/Doyouknowcard/Doyouknowcard";

function Stories() {
  const doyouKnowData = [
    {
      category: "BCI",
      title: "The Amazing World of Magical Materials",
      categoryColor: "#026AA2",
      categoryBgColor: "#F0F9FF",
      img: "Assets/images/thumbnail-1-storyland.webp",
      url: "https://online.fliphtml5.com/vryvr/ryqu/"

    },
    {
        category: "Magical Materials",
        title: "The Fascinating World Of Magical Biology",
        categoryColor: "#FB9046",
        categoryBgColor: "#FFF6F5",
        img: "Assets/images/thumbnail-2-storyland.webp",
        url: "https://online.fliphtml5.com/vryvr/wdss/"
      },
    
  ];

  return (
    <div className="beams-section">
      <div>
        <div className="beams-header-container2">
          <h1>Ignite Your Success with Beams</h1>
        </div>
        <div className="beams-content-container">
          <div className="trending-container">
            <div className="trending-box">Beams Storyland</div>
            <div className="trending-content-container">
              {doyouKnowData.map((data, index) => (
                <Doyouknowcard
                  key={index}
                  doyouknowCardCategory={data.category}
                  doyouknowCardTitle={data.title}
                  doyouknowcardCategoryColor={data.categoryColor}
                  doyouknowcardCategoryBgColor={data.categoryBgColor}
                  doyouknowCardImg={data.img}
                  question={data.question}
                  correctAnswer={data.correctAnswer}
                  options={data.options}
                  url = {data.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
