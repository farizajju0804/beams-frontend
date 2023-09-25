import React from "react";
import "./Doyouknows.css";
import Doyouknowcard from "../../models/Doyouknowcard/Doyouknowcard";

function Doyouknows() {
  const doyouKnowData = [
    {
      category: "BCI",
      title: "5 Mind-Blowing",
      categoryColor: "#026AA2",
      categoryBgColor: "#F0F9FF",
      img: "Assets/images/bci-application-slideshow.webp",
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
     correctAnswer : "Paris"
    },
    {
        category: "Magical Materials",
        title: "5 Materials",
        categoryColor: "#FB9046",
        categoryBgColor: "#FFF6F5",
        img: "Assets/images/materials-application-slideshow.webp",
        question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
     correctAnswer : "Paris"
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
            <div className="trending-box">Beams Doyouknows</div>
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
