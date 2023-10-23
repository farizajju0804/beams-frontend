import React from 'react';
import "./ViewSlideshow.css";
import { useLocation } from 'react-router-dom';
import DocViewer from "react-doc-viewer";

function ViewSlideshow() {
  const { state } = useLocation(); // Import useLocation from 'react-router-dom'
  // const slideshowUrl = state?.slideshowUrl;
  // const docs = [
  //   { uri: slideshowUrl }
  // ];
  return (
    <div>
      {/* <iframe
        loading="lazy"
        className='canva-embed'
        src={slideshowUrl} // Use the URL from the prop
        allowFullScreen="allowFullScreen"
        allow="fullscreen">
      </iframe> */}
      <div style={{position: 'relative', paddingTop: 'max(60%,324px)', width: '100%', height: '0'}}>
        <iframe style={{position: 'absolute', border: 'none', width: '100%', height: '80%', marginTop:"10vh", left: '0', top: '0'}} src="https://online.fliphtml5.com/vryvr/rqil/" scrolling="no" frameBorder="0" allowTransparency="true" allowFullScreen="true"></iframe>
      </div>
      {/* <DocViewer documents={docs} /> */}
    </div>
  );
}

export default ViewSlideshow;
