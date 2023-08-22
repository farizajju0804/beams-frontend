import React from 'react';
import './Startup.css';

const Startup = ({ startupContent, relevanceContent }) => {
  const processContent = (content) => {
    if (typeof content === "string") {
      let formattedContent = content.replace(/<strong>(.*?)<\/strong>/g, '<strong>$1</strong>');
      formattedContent = formattedContent.replace(/<italic>(.*?)<\/italic>/g, '<em class="italic">$1</em>');
      formattedContent = formattedContent.replace(
        /<sup><link>(.*?)<\/link><\/sup>/g,
        (_, link) => {
          const linkParts = link.split('|');
          if (linkParts.length === 2) {
            const [number, url] = linkParts;
            return `<sup><a class="superscript-link-1" href="${url}" target="_blank" rel="noopener noreferrer">${number}</a></sup>`;
          }
          return '';
        }
      );
      formattedContent = formattedContent.replace(
        /<link>(.*?)<\/link>/g,
        (_, link) => {
          const linkParts = link.split('|');
          if (linkParts.length === 2) {
            const [text, url] = linkParts;
            return `<a class="link" href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
          }
          return '';
        }
      );
      return <span dangerouslySetInnerHTML={{ __html: formattedContent }} />;
    } else {
      return <span>{content}</span>;
    }
  };

  return (
    <div className='startup'>
      <div className='startup-content'>
        {processContent(startupContent)}
      </div>
      <div className='relevance'>
        <div className='relevance-wrapper'>
          RELEVANCE
        </div>
        <div className='relevance-content'>
          {processContent(relevanceContent)}
        </div>
      </div>
      <div className='arrow-relevance'>
        <img src="Assets/images/arrow1.png" alt=""/>
      </div>
    </div>
  );
};

export default Startup;
