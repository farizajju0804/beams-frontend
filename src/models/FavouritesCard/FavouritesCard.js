import React from "react";
import "./Maxbeamscard.css";
import maxbeammock from "../../assets/maxbeammock.png";
import { useNavigate } from "react-router-dom";

export const FavouritesCard = ({ completed }) => {
	const navigate = useNavigate();

	return (
		<div className="maxbeamcardcont">
			<div className="maxcardimg">
				<img src={maxbeammock} alt="" />
			</div>
			<div className="maxbeamdata">
				<h3>Massive Job Disruption</h3>
				<div
					style={{
						width: "100%",
						height: "10px",
						display: "flex",
						alignItems: "center"
					}}
				>
					<div
						style={{ width: "80%", height: "5px", backgroundColor: "#435CFF" }}
					></div>
					<span style={{ marginLeft: "10px" }}>100%</span>
				</div>
				<button
					onClick={() => {
						navigate("/maxbeampage/123");
					}}
				>
					Read Again
				</button>
			</div>
		</div>
	);
};
