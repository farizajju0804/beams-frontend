import "./Feature3.css";
import Featuretitle from "../../../models/Feature-title/Featuretitle";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import React, { useState } from "react";
const Feature3 = () => {
  const [selectedMockup, setSelectedMockup] = useState(null);
  const mockups = [
    {
      id: 1,
      src: "Assets/images/Blue-light-mockup.png",
      audioSrc: "Assets/sample-audio1.mp3",
    },
    {
      id: 2,
      src: "Assets/images/Synthetic-bio-mockup.png",
      audioSrc: "Assets/sample-audio2.mp3",
    },
    {
      id: 3,
      src: "Assets/images/Placebo-mockup.png",
      audioSrc: "Assets/sample-audio3.mp3",
    },
  ];

  const handleMockupClick = (mockup) => {
    setSelectedMockup(mockup);
    console.log(mockup)
  };

  return (
    <div className="bg">
    <section className="feature-3">
      <div className="container-3">
      <Featuretitle number='03' title="listen to Captivating Content "/>
      <div className="mobile-mockup">
  {mockups.map((mockup) => (
    <img
      key={mockup.id}
      className={`mockup ${selectedMockup === mockup ? "dance" : ""}`}
      src={mockup.src}
      alt=""
      onClick={() => handleMockupClick(mockup)}
    />
  ))}
</div>

        <AudioPlayer
    src={selectedMockup ? selectedMockup.audioSrc : ""}
    onPlay={e => console.log("onPlay")}
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
