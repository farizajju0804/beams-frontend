import React from "react";
import "./Maxbeamscard.css";
import maxbeammock from "../../assets/maxbeammock.png";
import { useNavigate } from "react-router-dom";

export const Maxbeamscard = ({ noshadow }) => {
	const navigate = useNavigate();

	return (
		<div className="maxbeamcardcontnew">
			<div className="maxcardimgnew">
				<img src={maxbeammock} alt="" />
			</div>
			<div className="maxbeamdata">
				<h3>Massive Job Disruption</h3>
				<p>By 2030, Over 2 Billion Jobs Will Disappear.</p>
				<button
					onClick={() => {
						navigate("/maxbeampage/123");
					}}
				>
					Learn More
				</button>
			</div>
		</div>
	);
};
