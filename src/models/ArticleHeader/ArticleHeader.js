import "./ArticleHeader.css";
import { Clock } from "iconsax-react";
const ArticleHeader = ({
  category,
  articleTitle,

  introContentBold,
  introContentNormal,
  introMainImage
}) => {
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
      <img className="intro-main-image-icon" alt="" src={introMainImage} />
        <div className="intro-content-parent">
          <div className="intro-content">
            <b>{introContentBold}</b>
          </div>
          <div className="intro-content1">
            <span>
              <span className="unknown-to-most">{introContentNormal}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
