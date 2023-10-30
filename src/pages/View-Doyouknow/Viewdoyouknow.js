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
       <iframe className='canva-embed' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fa4349vha7EZ1Dt7WESZ8St%2FBeams-Wonderland%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-20%26viewport%3D379%252C235%252C0.17%26t%3DJqei4vIb80CC7f1p-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A20%26mode%3Ddesign" allowfullscreen></iframe>
     </div>
  );
}

export default Viewdoyouknow;
