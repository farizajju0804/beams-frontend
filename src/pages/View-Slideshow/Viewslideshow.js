import React from 'react';
import "./ViewSlideshow.css";
import { useLocation } from 'react-router-dom';
function ViewSlideshow() {
  const { state } = useLocation(); // Import useLocation from 'react-router-dom'
  const slideshowUrl = state?.slideshowUrl;

  return (
    <div>
      <iframe
        loading="lazy"
        className='canva-embed'
        src={slideshowUrl} // Use the URL from the prop
        allowFullScreen="allowFullScreen"
        allow="fullscreen">
      </iframe>
    </div>
  );
}

export default ViewSlideshow;
