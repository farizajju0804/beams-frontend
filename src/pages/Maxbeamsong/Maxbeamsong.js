import React from "react";
import "./Maxbeamsong.css";
import songcardmock from "../../assets/maxbeamsong.png";
import songcontrol from "../../assets/maxbeamsongcontrol.png";
import songtracker from "../../assets/maxbeamsongtracker.png";

export const Maxbeamsong = () => {
	return (
		<div className="Maxbeamsong">
			<div className="songcard">
				<img src={songcardmock} alt="" className="scardbanner" />
				<span>Massive Job Disrution</span>
				<img src={songcontrol} alt="" className="scardcontrol" />
				<img src={songtracker} alt="" className="scardtracker" />
			</div>
		</div>
	);
};
