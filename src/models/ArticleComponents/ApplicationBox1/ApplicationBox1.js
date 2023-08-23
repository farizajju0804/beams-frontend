import "./ApplicationBox1.css";
const ApplicationBox1 = ({
  applicationImg,
  applicationtitle,
  outcomeContent,
  applicationPoints,
}) => {
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
                return `<sup><a class="superscript-link" href="${url}" target="_blank" rel="noopener noreferrer">${number}</a></sup>`;
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
                return `<a class="superscript-link" href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
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
    <div className="application-box1" >
      <div className="application-img-box1">
        <img className="application-img-1-1-icon" alt="" src={applicationImg} />
      </div>
      <div className="application-content1">
        <div className="application-title1">{applicationtitle}</div>
        <div className="application-point-box1">
          <div className="application-points1">
            {processContent(applicationPoints)}
          </div>
        </div>
      </div>
      <div className="outcome-box">
        <div className="outcome">{`Startup  `}</div>
        <div className="outcome-content">{processContent(outcomeContent)}</div>
      </div>
    </div>
  );
};


export default ApplicationBox1;
