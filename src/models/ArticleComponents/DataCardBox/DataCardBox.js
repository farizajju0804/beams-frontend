import React from "react";
import { DataCard } from "../DataCard/DataCard";
import "./DataCardBox.css";
function DataCardBox({ order, dataCards }) {
  // console.log(dataCards);
  const orderstyle = {
    order: order,
  };
  return (
    <div className="data-cards-box" style={orderstyle}>
      {dataCards.map((dataCardProps, index) => (
        <DataCard key={index} {...dataCardProps} />
      ))}
    </div>
  );
}

export default DataCardBox;
