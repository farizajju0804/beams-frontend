import ApplicationBox from "../ApplicationBox/ApplicationBox";
import "./Applications.css";

const Applications = ({ applicationHeader, applicationHeaderContent, applicationBoxes, order }) => {
  const orderstyle = {
    order: order
  };

  // Define CSS classes conditionally based on content presence
  const headerClasses = applicationHeader ? "application-header" : "no-header";
  const contentClasses = applicationHeaderContent ? "application-header-content" : "no-content";
  const contentClass = applicationHeaderContent && applicationHeader ? "application-box-container" : "no-padding";

  return (
    <div className="applications" style={orderstyle}>
      <div className={`application-header-box ${headerClasses}`}>
        {applicationHeader && <b className="application-header">{applicationHeader}</b>}
        <div className={`application-header-content ${contentClasses}`}>
          {applicationHeaderContent}
        </div>
      </div>
      <div className={`application-box-container ${contentClass}`}>
        {applicationBoxes.map((boxProps, index) => (
          <ApplicationBox key={index} {...boxProps} />
        ))}
      </div>
    </div>
  );
};

export default Applications;
