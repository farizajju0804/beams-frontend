import React from "react";
import "./Stories.css";
import Storycard from "../../models/Storycard/Storycard";

function Stories() {
  const storyData = [
    {
      category: "BCI",
      title: "The Amazing World of Magical Materials",
      categoryColor: "#026AA2",
      categoryBgColor: "#F0F9FF",
      img: "Assets/images/thumbnail-1-storyland.webp",
      url: "https://online.fliphtml5.com/zptoc/kjjp/"

    },
    {
        category: "Magical Materials",
        title: "The Fascinating World Of Magical Biology",
        categoryColor: "#FB9046",
        categoryBgColor: "#FFF6F5",
        img: "Assets/images/thumbnail-2-storyland.webp",
        url: "https://online.fliphtml5.com/vryvr/gwhy/"
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
              {storyData.map((data, index) => (
                <Storycard
                  key={index}
                  StoryCardCategory={data.category}
                  StoryCardTitle={data.title}
                  StoryCardCategoryColor={data.categoryColor}
                  StoryCardCategoryBgColor={data.categoryBgColor}
                  StoryCardImg={data.img}
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
