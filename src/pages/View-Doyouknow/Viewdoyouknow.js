import React from 'react';
import "./Viewdoyouknow.css";
import { useLocation } from 'react-router-dom';
import DocViewer from "react-doc-viewer";

function Viewdoyouknow() {
  const { state } = useLocation(); // Import useLocation from 'react-router-dom'
  const url = state?.url;
  const docs = [
    { uri: url }
  ];
  return (
    <div>
      {/* <iframe
        loading="lazy"
        className='canva-embed'
        src={url} // Use the URL from the prop
        scrolling="yes" frameBorder="0" allowTransparency="true" allowFullScreen="true"
          >
      </iframe>
      <div style={{position: 'relative', paddingTop: 'max(60%,324px)', width: '100%', height: '0'}}>
        <iframe style={{position: 'absolute', border: 'none', width: '100%', height: '80%', marginTop:"10vh", left: '0', top: '0'}} src="https://online.fliphtml5.com/vryvr/rqil/" scrolling="no" frameBorder="0" allowTransparency="true" allowFullScreen="true"></iframe>
      </div> */}
      {/* <iframe title="Magical Materials" className="no-margin canva-embed" src={url}
       allow="camera *;"></iframe> */}
       <iframe className='canva-embed' src={url} allowfullscreen></iframe>
     </div>
  );
}

export default Viewdoyouknow;
