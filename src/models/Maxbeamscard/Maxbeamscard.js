import React from "react";
import "./Maxbeamscard.css";
import maxbeammock from "../../assets/maxbeammock.png";

export const Maxbeamscard = () => {
	return (
		<div className="maxbeamcardcont">
			<div className="maxcardimg">
				<img src={maxbeammock} alt="" />
			</div>
			<div className="maxbeamdata">
				<h3>Massive Job Disruption</h3>
				<p>By 2030, Over 2 Billion Jobs Will Disappear.</p>
				<button>Learn More</button>
			</div>
		</div>
	);
};
