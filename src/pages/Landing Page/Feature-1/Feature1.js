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
              <img className="topicimg" src="Assets/images/Topic-img.webp" alt="Topicimg" />
            </div>
              <div className="topics-container1">
                <div className="topic-row">
                <div className="topic-box">
                    <img className="topic-bubble" alt="topicimg" src="Assets/images/Longevity-img.webp" />
                    <div className="topic">LONGEVITY</div>
                  </div>
                  </div>
                  <div className="topic-row2">
                <div className="topic-box">
                    <img className="topic-bubble" alt="topicimg" src="Assets/images/Synthetic-bio-Img.webp" />
                    <div className="topic">SYNTHETIC <br></br>BIOLOGY</div>
                  </div>
                  <div className="topic-box">
                    <img className="topic-bubble" alt="topicimg" src="Assets/images/Senolytics-img.webp" />
                    <div className="topic">METAMATERIALS</div>
                  </div>
                  </div>
                  <div className="topic-row">
                <div className="topic-box">
                    <img className="topic-bubble" alt="topicimg" src="Assets/images/CRISPR-img.webp" />
                    <div className="topic">BRAIN COMPUTER INTERFACES</div>
                  </div>
                  </div>
                 
                  

              </div>
          </div>
      </div>

    </section>
  )
}

export default Feature1