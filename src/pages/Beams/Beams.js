import React, { useState } from "react";
import beamshero from "../../assets/beamshero.png";
import "./Beams.css";
import { Minibeamscard } from "../../models/Minibeamcard/Minibeamscard";
import { Maxbeamscard } from "../../models/Maxbeamscard/Maxbeamscard";
// import { useNavigate } from "react-router-dom";
import { Popup } from "../../models/Popup/Popup";

export const Beams = () => {
	const [modelopen, setModelopen] = useState(false);
	const close = () => setModelopen(false);
	const open = () => setModelopen(true);
	// const navigate = useNavigate();

	return (
		<div className="beamspage">
			{modelopen && <Popup handleClose={close}></Popup>}
			<section className="trendingbeamshero">
				<div className="beamsherotexts">
					<h3>TRENDING BEAMS</h3>
					<span>
						Read finely curated Beams from best magazines and articles
					</span>
				</div>
				<img src={beamshero} alt="" />
			</section>
			<section className="minibeams">
				<div className="sec2label">
					<span>Mini Beams</span>
				</div>
				<div className="minicardssection">
					<Minibeamscard open={open} />
					<Minibeamscard />
					<Minibeamscard />
				</div>
				<a href="/minibeams">See more...</a>
			</section>
			<section className="minibeams">
				<div className="sec2label">
					<span>Max Beams</span>
				</div>
				<div className="minicardssection">
					<Maxbeamscard />
					<Maxbeamscard />
				</div>
				<a href="/maxbeams">See more...</a>
			</section>
		</div>
	);
};
