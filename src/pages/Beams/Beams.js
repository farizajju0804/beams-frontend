import React, { useState } from "react";
import "./Beams.css";
import { Minibeamscard } from "../../models/Minibeamcard/Minibeamscard";
import { Maxbeamscard } from "../../models/Maxbeamscard/Maxbeamscard";
import { Popup } from "../../models/Popup/Popup";
import heroimg from "../../assets/beamsheroimg.png";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const Beams = () => {
	const [modelopen, setModelopen] = useState(false);
	const close = () => setModelopen(false);
	const open = () => setModelopen(true);
	const navigate = useNavigate();

	return (
		<div className="beamspage">
			{modelopen && <Popup handleClose={close}></Popup>}
			<section className="trendingbeamshero">
				<img src={heroimg} alt="" className="heroimgbeam" />
				<h1>
					Explore{" "}
					<span
						style={{
							backgroundColor: "#F7CD61",
							color: "black",
							padding: "10px",
							borderRadius: "10px"
						}}
					>
						The Future
					</span>{" "}
					With Beams
				</h1>
			</section>
			<div className="innernav">
				<span>
					<span style={{ color: "#435CFF" }}>Home</span> &nbsp; &gt; &nbsp;{" "}
					<span>Beams</span>
				</span>
				<div className="searchbar">
					<input type="text" placeholder="Search" />
					<AiOutlineSearch className="searchicon" />
				</div>
			</div>

			<section className="minibeams">
				<div className="sec2label">
					<span>Micro Beams</span>
				</div>
				<div className="minicardcont">
					<div className="minicardssection">
						<Minibeamscard open={open} />
						<Minibeamscard />
						<Minibeamscard />
						<Minibeamscard />
						<Minibeamscard />
						<Minibeamscard />
					</div>
				</div>
				<span
					onClick={() => {
						navigate("/minibeams");
					}}
				>
					See More
				</span>
			</section>
			<section className="minibeams">
				<div className="sec2label">
					<span>Max Beams</span>
				</div>
				<div className="minicardcont">
					<div className="minicardssection">
						<Maxbeamscard />
						<Maxbeamscard />
						<Maxbeamscard />
						<Maxbeamscard />
					</div>
				</div>
				<span
					onClick={() => {
						navigate("/maxbeams");
					}}
				>
					See More
				</span>
			</section>
		</div>
	);
};
