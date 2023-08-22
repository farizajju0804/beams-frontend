import "./ArticleHeader.css";
import { Clock } from "iconsax-react";
const ArticleHeader = ({
  category,
  articleTitle,

  introContentBold,
  introContentNormal,
  introMainImage
}) => {
  const introBoxStyle = {
    backgroundImage: `url(${introMainImage})`, // Set the background image dynamically
  };
  const processIntroContent = (content) => {
    if (typeof content === "string") {
      const formattedContent = content.replace(
        /<sup><link>(.*?)<\/link><\/sup>/g,
        (_, link) => {
          const linkParts = link.split('|');
          if (linkParts.length === 2) {
            const [number, url] = linkParts;
            return `<sup><a class="superscript-link" href="${url}" target="_blank" rel="noopener noreferrer">${number}</a></sup>`;
          }
          return '';
        }
      );
      return <span dangerouslySetInnerHTML={{ __html: formattedContent }} />;
    } else {
      return content;
    }
  };
  return (
    <div className="article-header">
      <div className="article-title">
        <h1 className="the-fascinating-world4">{articleTitle}</h1>
      </div>
      <div className="article-info-box">
        <div className="category">
          <div className="science">{category}</div>
        </div>
        <div className="time-read">
        <Clock size="20" color="#161616" variant="Outline"/>
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
              <span>{processIntroContent(introContentNormal)}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
