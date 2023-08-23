import React, { useState } from "react";
import "./Maxbeamscard.css";
import maxbeammock from "../../assets/maxbeammock.png";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export const Maxbeamscard = ({ id, Title, Desc }) => {

	const navigate = useNavigate();


	

	return (
		<div className="maxbeamcardcontnew">
			<div className="maxcardimgnew">
				<img src={maxbeammock} alt="" />
			</div>
			<div className="maxbeamdata">
				<h3>{Title}</h3>
				<p>{Desc}</p>
				<button
					onClick={() => {
						navigate("/maxbeampage/" + id);
					}}
				>
					Learn More
				</button>
			</div>
		</div>
	);
};
