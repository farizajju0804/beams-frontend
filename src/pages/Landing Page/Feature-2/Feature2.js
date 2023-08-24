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
              <img className="topicimg1" src="Assets/images/Time-img.png" alt="Topicimg" />
            </div>

            <div className="topics-container">

              <div className="topic-card">
                 <img className="topic-img" src="Assets/images/Synthetic-bio-article.png" alt=""></img>
                 <div className="topic-title"><Link to='/articleread' activeClassName='active'>The Fascinating World Of<br></br>Synthetic Biology</Link>
                    </div>
                </div>
         
                <div className="topic-card">
               
                 <img className="topic-img" src="Assets/images/bci-header-1.jpg" alt=""></img>
                 <div className="topic-title"><Link to='/articleread1' activeClassName='active'>Brain-Computer<br></br>Interfaces</Link>
                   </div>

                </div>
                <div className="topic-card">
                 <img className="topic-img" src="Assets/images/placebo-topic.png" alt=""></img>
                 <div className="topic-title">The Magic of Belief:<br></br>The Placebo Effect</div>
                </div>
                <div className="topic-card">
                 <img className="topic-img" src="Assets/images/language-topic.jpg" alt=""></img>
                 <div className="topic-title">The Top 6 Benefits of<br></br>Learning a Language</div>
                </div>
            </div>

          </div>
      </div>

    </section>
  )
}

export default Feature2