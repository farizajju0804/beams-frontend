import "./DataCard.css";
const DataCard = ({ yearData, incidentData, verbData, linkData, organization,backgroundColor,textColor }) => {
    const cardStyle = {
        backgroundColor: backgroundColor,
        color: textColor,
      };
  return (
    <div className="data-card2"   style={cardStyle}>
      <div className="in-2022">{yearData}</div>
      <div className="the-first-true-container">
        <p className="the-first-true">{incidentData}</p>
      </div>
      <div className="occurred">{verbData}</div>
      <div className="link-resource2">
        {` `}
        <a
          className="international-energy-associati"
          href={linkData}
          target="_blank"
        >
          <span className="international-energy-associati1">
          {organization}
          </span>
        </a>
      </div>
    </div>
  );
};

export {DataCard};
