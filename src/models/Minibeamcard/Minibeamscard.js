import React from "react";
import "./Minibeamscard.css";

export const Minibeamscard = ({ open }) => {
	return (
		<div className="minibeamscardcont">
			<h3>Massive Job Disruption</h3>
			<p>By 2030, Over 2 Billion Jobs Will Disappear.</p>
			<button onClick={open} >View Now</button>
		</div>
	);
};
