import ApplicationBox from "../ApplicationBox/ApplicationBox";
import "./Applications.css";
const Applications = ({ applicationHeader, applicationHeaderContent,applicationBoxes,order }) => {
  const orderstyle = {
    order: order
  }
  return (
    <div className="applications" style={orderstyle}>
      <div className="application-header-box">
        <b className="application-header">{applicationHeader}</b>
        <div className="application-header-content">
          {applicationHeaderContent}
        </div>
      </div>
      <div className="application-box-container">
           {applicationBoxes.map((boxProps, index) => (
          <ApplicationBox key={index} {...boxProps} />
        ))}
        
          </div>
        </div>
  );
};

export default Applications;
