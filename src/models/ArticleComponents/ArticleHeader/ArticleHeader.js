import "./ArticleHeader.css";
import { Clock } from "iconsax-react";
const ArticleHeader = ({
  category,
  articleTitle,
  order,
  introContentBold,
  introContentNormal,
  introMainImage,
  bgcolor,
}) => {
  const bgStyle = {
    backgroundColor: bgcolor,
    order: order,
  };
  const introBoxStyle = {
    backgroundImage: `url(${introMainImage})`, // Set the background image dynamically
  };
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

  return (
    <div className="article-header" style={bgStyle}>
      <div className="article-title">
        <h1 className="the-fascinating-world4">{articleTitle}</h1>
      </div>
      <div className="article-info-box">
        <div className="category">
          <div className="science">{category}</div>
        </div>
        <div className="time-read">
          <Clock size="20" color="#161616" variant="Outline" />
          <div className="minute-read">5 minute read</div>
        </div>
      </div>
      <div className="intro-box">
        <div className="intro-main-image-icon" style={introBoxStyle} />
        <div className="intro-content-parent">
          <div className="intro-content">
            <b>{introContentBold}</b>
          </div>
          <div className="intro-content">
            <span>
              <span>{processContent(introContentNormal)}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
