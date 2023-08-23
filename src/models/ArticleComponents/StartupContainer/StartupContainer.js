import "./StartupContainer.css";
import Startup from '../Startup/Startup'
const StartupContainer = ({productCategory,startupContainerTitle,startupContents,order}) => {
  const orderstyle = {
    order : order
  }
  return (
    <div className="startups-container" style={orderstyle}>
      <div className="startupcontainertitle">
        {startupContainerTitle}
      </div>
      <div className="product-category-wrapper">
        <div className="product-category">{productCategory}</div>
      </div>
      <div className="pole-points">
        {/* <div className="pole">
          <img className="vector-icon" alt="" src="Assets/images/Pole.svg" />
        </div> */}
        <div className="startup-box">
        {startupContents.map((content, index) => (
          <Startup
            key={index}
            startupContent={content.startupContent}
            relevanceContent={content.relevanceContent}
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default StartupContainer;
