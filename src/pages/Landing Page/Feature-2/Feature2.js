import Featuretitle from "../../../models/Feature-title/Featuretitle";

import "./Feature2.css";
import React from 'react'
import { Link } from 'react-router-dom'
function Feature2() {
  return (
    <section className="feature-2">
      <div className="container2">
          <Featuretitle number='02' title="Easy To Consume In Just 5 Minutes"/>
          <div className="feature-content2">
            <div className="img-box1">
              <img className="topicimg1" src="Assets/images/Time-img.webp" alt="Topicimg" />
            </div>

            <div className="topics-container">

              <div className="topic-card">
                 <img className="topic-img" src="Assets/images/Synthetic-bio-article.webp" alt=""></img>
                 <div className="topic-title">The Fascinating World Of<br></br>Synthetic Biology
                    </div>
                </div>
         
                <div className="topic-card">
               
                 <img className="topic-img" src="Assets/images/bci-trending-img.webp" alt=""></img>
                 <div className="topic-title">Brain-Computer<br></br>Interfaces
                   </div>

                </div>
                <div className="topic-card">
                 <img className="topic-img" src="Assets/images/placebo-topic.webp" alt=""></img>
                 <div className="topic-title">The Magic of Belief:<br></br>The Placebo Effect</div>
                </div>
                <div className="topic-card">
                 <img className="topic-img" src="Assets/images/language-topic.webp" alt=""></img>
                 <div className="topic-title">The Top 6 Benefits of<br></br>Learning a Language</div>
                </div>
            </div>

          </div>
      </div>

    </section>
  )
}

export default Feature2