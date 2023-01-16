import React from "react";
import maxbeamimg from "../../assets/maxbeampagemock.png";
import "./Maxbeampage.css";
import { FaBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Maxbeampage = () => {
	const navigate = useNavigate();
	return (
		<div className="maxbeampage">
			<div className="maxbeaminner">
				<img src={maxbeamimg} alt="" />
				<div className="maxbeampagedata">
					<span>Massive Job Disruption</span>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint eos
						laboriosam necessitatibus impedit adipisci sequi! Sed nesciunt non
						numquam quis quisquam, impedit officia quas quibusdam voluptates,
						facilis minus cupiditate dolorem. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Libero magni laborum architecto
					</p>
					<div className="maxbeamspagebtns">
						<div className="maxbeamsbtn">
							<FaBook />
							<span>Read</span>
						</div>
						<div
							className="maxbeamsbtn"
							onClick={() => {
								navigate("/maxbeamsong/123");
							}}
						>
							<FaBook />
							<span>Listen</span>
						</div>
						<div className="maxbeamsbtn">
							<FaBook />
							<span>Slideshow</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
