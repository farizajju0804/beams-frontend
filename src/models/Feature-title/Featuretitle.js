import React from 'react'
import './Featuretitle.css'
function Featuretitle(props) {
  return (
    <div className="feature-title">
      <div className="substrate-group">
        <div className="number">{props.number}</div>
      </div>
      <div className="title">{props.title}</div>
    </div>
  )
}

export default Featuretitle