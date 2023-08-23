import React from "react";
import "./SubPara.css";

const SubPara = ({ subtitle, subParaImg, subContent, order }) => {
  const hasImage = subParaImg !== undefined && subParaImg !== null;
  const containerClass = hasImage
    ? "sub-para with-image"
    : "sub-para without-image";

  const processContent = (content) => {
    if (Array.isArray(content)) {
      return content.map((sentence, index) => {
        if (typeof sentence === "string") {
          let formattedSentence = sentence.replace(
            /<strong>(.*?)<\/strong>/g,
            '<strong>$1</strong>'
          );
          formattedSentence = formattedSentence.replace(
            /<italic>(.*?)<\/italic>/g,
            '<em class="italic">$1</em>'
          );
          formattedSentence = formattedSentence.replace(
            /<sup><link>(.*?)<\/link><\/sup>/g,
            (_, link) => {
              const linkParts = link.split("|");
              if (linkParts.length === 2) {
                const [number, url] = linkParts;
                return `<sup><a class="superscript-link" href="${url}" target="_blank" rel="noopener noreferrer">${number}</a></sup>`;
              }
              return "";
            }
          );
          formattedSentence = formattedSentence.replace(
            /<link>(.*?)<\/link>/g,
            (_, link) => {
              const linkParts = link.split("|");
              if (linkParts.length === 2) {
                const [text, url] = linkParts;
                return `<a class="link" href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
              }
              return "";
            }
          );
          // Handle <br> tags
          formattedSentence = formattedSentence.replace(
            /<br>/g,
            '<br />'
          );
          return (
            <span
              key={index}
              dangerouslySetInnerHTML={{ __html: formattedSentence }}
            />
          );
        } else {
          return <span key={index}>{sentence}</span>;
        }
      });
    } else {
      return <span>{content}</span>;
    }
  };

  const orderstyle = {
    order: order,
  };

  return (
    <div className={containerClass} style={orderstyle}>
      <div className="subtitle">{subtitle}</div>
      {hasImage && (
        <img
          className="sub-para-img-box-icon"
          alt=""
          src={subParaImg}
        />
      )}
      <div className="subpara-content">
        <div className="content-para">{processContent(subContent)}</div>
      </div>
    </div>
  );
};

export default SubPara;
