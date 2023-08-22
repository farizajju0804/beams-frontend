import "./StartBox.css";
const StartBox = ({ startContent }) => {
  return (
    <div className="start-box">
      <i className="start-content">{startContent}</i>
    </div>
  );
};

export default StartBox;
