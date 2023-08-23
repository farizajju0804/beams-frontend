import "./Quote.css";
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

const Quote = ({ quoteContent, personName, bgcolor,color,order }) => {
  const quoteContainerStyle = {
    backgroundColor: bgcolor, 
    color: color,
    order:order// Set the background color dynamically
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
      <div className="quote-content" style={quoteContainerStyle}>{quoteContent}</div>
      <FaQuoteLeft color="#161616" className="quote-left-icon"/>
      <FaQuoteRight color="161616" className="quote-right-icon"/>
    
      {/* <img className="quote-left-icon" alt="" src="/Assets/images/quote-left.png" />
      <img className="quote-right-icon" alt="" src="/Assets/images/quote-right.png" /> */}
    </div>
  );
};

export default Quote;
