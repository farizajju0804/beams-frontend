import "./Feature3.css";
import Featuretitle from "../../../models/Feature-title/Featuretitle";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import React, { useState } from "react";
const Feature3 = () => {
 
  const [audioSrc, setAudioSrc] = useState("Assets/sample-audio.mp3");
  const [clickedImageIndex, setClickedImageIndex] = useState(0);
  
  const handleImageClick = (newSrc,index) => {
    setAudioSrc(newSrc); 
    setClickedImageIndex(index);// Update the audio source when an image is clicked
  };
  return (
    <div className="bg">
    <section className="feature-3">
      <div className="container-3">
      <Featuretitle number='03' title="listen to Captivating Content "/>
      <div className="mobile-mockup">
      <img src="Assets/images/Blue-light-mockup.png" alt="" onClick={() => handleImageClick("Assets/sample-audio.mp3",0)}
      className={clickedImageIndex === 0 ? "dance" : ""}/>
      <img src="Assets/images/Synthetic-bio-mockup.png" alt=""  onClick={() => handleImageClick("Assets/sample-audio-2.mp3",1)}
      className={clickedImageIndex === 1 ? "dance" : ""}/>
      <img src="Assets/images/Placebo-mockup.png" alt="" onClick={() => handleImageClick("Assets/sample-audio.mp3",2)}
      className={clickedImageIndex === 2 ? "dance" : ""}/>
  
</div>

<AudioPlayer
    // autoPlay
    src={audioSrc}
  />
      </div>
    </section>
    <div className="top-left-bar" />
    <div className="bottom-left-bar" />
    <div className="bottom-right-bar" />
    <div className="top-right-bar" />
    </div>
  );
};

export default Feature3;
