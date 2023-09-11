import "./StartBox.css";
const StartBox = ({ startContent,order }) => {
  const orderstyle ={
    order:order
  }
  
  const processContent = (content) => {
    if (typeof content === "string") {
      let formattedSentence = content.replace(
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
            return `<sup><a class="superscript-link2" href="${url}" target="_blank" rel="noopener noreferrer">${number}</a></sup>`;
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
          dangerouslySetInnerHTML={{ __html: formattedSentence }}
        />
      );
    } else {
      return <span>{content}</span>;
    }
  };
  
  return (
    <div className="start-box" style={orderstyle}>
      <span className="start-content">{processContent(startContent)}</span>
    </div>
  );
};

export default StartBox;
