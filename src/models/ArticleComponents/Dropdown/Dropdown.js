import React, { useState } from "react";
import "./Dropdown.css";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";

function Dropdown({ dropdownTitle, dropdownContent, dropdownIcon }) {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const processDropdownContent = (content) => {
    return content.map((point, index) => {
      const parts = point.split("|");
      if (parts.length === 2) {
        const text = parts[0];
        const url = parts[1];
        return (
          <li key={index}>
            <a class="ref-link" href={url} target="_blank" rel="noopener noreferrer">
              {text}
            </a>
          </li>
        );
      } else {
        return (
          <li key={index}>{point}</li>
        );
      }
    });
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header">
        <div className="dropdown-icon-box">
          <div className="dropdown-title-icon">
            <img src={dropdownIcon} alt="" />
          </div>
          <div className="dropdown-title">{dropdownTitle}</div>
        </div>
        <div className="dropdown-icon" onClick={toggleContent}>
          {showContent ? (
            <ArrowUp2 size="30" color="#161616" />
          ) : (
            <ArrowDown2 size="30" color="#161616" />
          )}
        </div>
      </div>
      {showContent && (
        <div className="dropdown-content">
          <ol className="dropdown-points">{processDropdownContent(dropdownContent)}</ol>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
