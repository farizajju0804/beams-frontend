import "./ApplicationBox.css";
const ApplicationBox = ({
  applicationImg,
  applicationtitle,
  outcomeContent,
  applicationPoints,
}) => {
  const processContent = (content) => {
    if (Array.isArray(content)) {
      return content.map((point, index) => {
        if (typeof point === "string") {
          let formattedPoint = point.replace(/<strong>(.*?)<\/strong>/g, '<strong class="bold-point">$1</strong>');
          formattedPoint = formattedPoint.replace(/<italic>(.*?)<\/italic>/g, '<em class="italic">$1</em>');
          return <p className="normal-point" key={index} dangerouslySetInnerHTML={{ __html: formattedPoint }} />;
        } else {
          return <p className="point" key={index}>{point}</p>;
        }
      });
    } else {
      return <p className="point">{content}</p>;
    }
  };

  return (
    <div className="application-box">
      <div className="application-img-box">
        <img className="application-img-1-1-icon" alt="" src={applicationImg} />
      </div>
      <div className="application-content">
        <div className="application-title">{applicationtitle}</div>
        <div className="application-point-box">
          <div className="application-points">
            {processContent(applicationPoints)}
          </div>
        </div>
      </div>
      <div className="outcome-box">
        <div className="outcome">{`Outcome  `}</div>
        <div className="outcome-content">{outcomeContent}</div>
      </div>
    </div>
  );
};


export default ApplicationBox;
