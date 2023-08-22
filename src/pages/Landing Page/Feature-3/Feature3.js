import "./Feature3.css";
import Featuretitle from "../../../models/Feature-title/Featuretitle";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Feature3 = () => {
  return (
    <div className="bg">
    <section className="feature-3">
      <div className="container-3">
      <Featuretitle number='03' title="listen to Captivating Content "/>
        <div className="mobile-mockup">
          <img className="blue-light-mockup" src="Assets/images/Blue-light-mockup.png" alt=""/>
          <img className="synthetic-bio-mockup" src="Assets/images/Synthetic-bio-mockup.png" alt=""/>
          <img className="placebo-mockup" src="Assets/images/Placebo-mockup.png" alt=""/>
        </div>
        {/* <img
          className="audio-player"
          alt=""
          src="Assets/images/Audio-player.png"
        /> */}
        <AudioPlayer
    src="Assets/sample-audio.mp3"
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
