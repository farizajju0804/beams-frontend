import React, { useState } from "react";
import "./Dropdown.css";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";

function Dropdown({ dropdownTitle, dropdownContent, dropdownIcon, order }) {
  const [showContent, setShowContent] = useState(false);
  const orderstyle = {
    order: order
  };

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const processDropdownContent = (content) => {
    return content.map((point, index) => {
      const formattedPoint = point.replace(/<strong>(.*?)<\/strong>/g, '<strong >$1</strong>')
        .replace(/<italic>(.*?)<\/italic>/g, '<em class="italic">$1</em>')
        .replace(/<link>(.*?)<\/link>/g, (_, link) => {
          const linkParts = link.split('|');
          if (linkParts.length === 2) {
            const [text, url] = linkParts;
            return `<a class="ref-link" href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
          }
          return '';
        });

      return <li key={index} dangerouslySetInnerHTML={{ __html: formattedPoint }} />;
    });
  };

  return (
    <div className="dropdown" style={orderstyle}>
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
