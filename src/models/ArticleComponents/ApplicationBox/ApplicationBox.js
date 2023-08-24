import "./ApplicationBox.css";
const ApplicationBox = ({
  applicationImg,
  applicationtitle,
  outcomeTitle,
  outcomeContent,
  applicationPoints,
  textAlign
}) => {
  const textalign = {
   textAlign : textAlign
  }
  const processContent = (content) => {
    if (Array.isArray(content)) {
      return content.map((sentence, index) => {
        if (typeof sentence === "string") {
          let formattedSentence = sentence.replace(/<strong>(.*?)<\/strong>/g, '<strong>$1</strong>');
          formattedSentence = formattedSentence.replace(/<italic>(.*?)<\/italic>/g, '<em class="italic">$1</em>');
          formattedSentence = formattedSentence.replace(
            /<sup><link>(.*?)<\/link><\/sup>/g,
            (_, link) => {
              const linkParts = link.split('|');
              if (linkParts.length === 2) {
                const [number, url] = linkParts;
                return `<sup class="superscript-link"><a class="superscript-link" href="${url}" target="_blank" rel="noopener noreferrer">${number}</a></sup>`;
              }
              return '';
            }
          );
          formattedSentence = formattedSentence.replace(
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
          return <p key={index} dangerouslySetInnerHTML={{ __html: formattedSentence }} />;
        } else {
          return <p key={index}>{sentence}</p>;
        }
      });
    } else {
      return <p>{content}</p>;
    }
  };

  return (
    <div className="application-box" >
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
        <div className="outcome">{outcomeTitle}</div>
        <div className="outcome-content" style={textalign}>{processContent(outcomeContent)}</div>
      </div>
    </div>
  );
};


export default ApplicationBox;
