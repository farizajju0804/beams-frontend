import Featuretitle from "../../../models/Feature-title/Featuretitle";
import "./Feature1.css";
import React from 'react'

function Feature1() {
  return (
    <section className="feature-1">
      <div className="container">
          <Featuretitle number='01' title="Unearthing Mind-Blowing Topics"/>
          <div className="feature-content">
            <div className="img-box">
              <img className="topicimg" src="Assets/images/Topic-img.png" alt="Topicimg" />
            </div>
              <div className="topics-container1">
                <div className="topic-row">
                <div className="topic-box">
                    <img className="topic-bubble" alt="topicimg" src="Assets/images/Longevity-img.png" />
                    <div className="topic">LONGEVITY</div>
                  </div>
                  </div>
                  <div className="topic-row2">
                <div className="topic-box">
                    <img className="topic-bubble" alt="topicimg" src="Assets/images/Synthetic-bio-Img.png" />
                    <div className="topic">SYNTHETIC <br></br>BIOLOGY</div>
                  </div>
                  <div className="topic-box">
                    <img className="topic-bubble" alt="topicimg" src="Assets/images/Senolytics-img.png" />
                    <div className="topic">SENOLYTICS</div>
                  </div>
                  </div>
                  <div className="topic-row">
                <div className="topic-box">
                    <img className="topic-bubble" alt="topicimg" src="Assets/images/CRISPR-img.png" />
                    <div className="topic">CRISPR</div>
                  </div>
                  </div>
                 
                  

              </div>
          </div>
      </div>

    </section>
  )
}

export default Feature1