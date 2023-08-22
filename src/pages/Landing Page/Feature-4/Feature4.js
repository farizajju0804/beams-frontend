import Featuretitle from "../../../models/Feature-title/Featuretitle";
import { PlayCircle } from "iconsax-react";
import "./Feature4.css";
const Feature4 = () => {
  return (
    <div className="feature-4">
      <div className="container-4">
      <Featuretitle number='04' title="Watch Transformational Content "/>
       <div className="video-row">
        <div className="video-box">
          <div className="thumbnail1">
          <PlayCircle size="32" color="#f96f2e" variant="Bold"/>
          </div>
          <div className="video-title">
          The Magic of Belief: The Placebo Effect
          </div>
        </div>
        <div className="video-box">
          <div className="thumbnail2">
          <PlayCircle size="32" color="#f96f2e" variant="Bold"/>
          </div>
          <div className="video-title">
          The Fascinating World Of Synthetic Biology
          </div>
        </div>
        <div className="video-box">
          <div className="thumbnail3">
          <PlayCircle size="32" color="#f96f2e" variant="Bold"/>
          </div>
          <div className="video-title">
          Blue Light: A Dazzling Discovery
          </div>
        </div>
       </div>
        <img
          className="video-player"
          alt=""
          src="Assets/images/Video-player.png"
        />
      </div>
    </div>
  );
};

export default Feature4;