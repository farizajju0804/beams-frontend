import "./StartBox.css";
const StartBox = ({ startContent,order }) => {
  const orderstyle ={
    order:order
  }
  return (
    <div className="start-box" style={orderstyle}>
      <i className="start-content">{startContent}</i>
    </div>
  );
};

export default StartBox;
