import "./Quote.css";
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

const Quote = ({ quoteContent, personName, bgcolor,color,order }) => {
  const quoteContainerStyle = {
    backgroundColor: bgcolor, 
    color: color,
    order:order// Set the background color dynamically
  };
  
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
          dangerouslySetInnerHTML={{ __html: formattedSentence }}
        />
      );
    } else {
      return <span>{content}</span>;
    }
  }; 
  const quotePersonNameStyle = {
    backgroundColor: "#161616", // Add quotes around the color value
    color: "#FFFFFE", // Add quotes around the color value
  };

  return (
    <div className="quote-tab" style={quoteContainerStyle}>
      <div className="quote-person-name" >
        <div className="person-name">{personName}</div>
      </div>
      <div className="quote-content" style={quoteContainerStyle}>{processContent(quoteContent)}</div>
      <FaQuoteLeft color="#161616" className="quote-left-icon"/>
      <FaQuoteRight color="161616" className="quote-right-icon"/>
    
      {/* <img className="quote-left-icon" alt="" src="/Assets/images/quote-left.png" />
      <img className="quote-right-icon" alt="" src="/Assets/images/quote-right.png" /> */}
    </div>
  );
};

export default Quote;
