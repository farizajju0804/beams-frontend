import React, { useState, useEffect } from "react";
import { Maxbeamscard } from "../../models/Maxbeamscard/Maxbeamscard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import microbeambgheroimg from "../../assets/microbeamheroimg.png";
import { AiOutlineSearch } from "react-icons/ai";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Popup } from "../../models/Popup/Popup";

export const Maxbeams = () => {
	const [modelopen, setModelopen] = useState(false);
	const close = () => setModelopen(false);
	const open = (title, content) => {
		setPopupcontent(content);
		setPopuptitle(title);
		setModelopen(true);
	};
	const [scrollercontrol, setscrollercontrol] = useState(0);
	const navigate = useNavigate();

	const [trendingmicrobeams, setTrendingMicrobeams] = useState([]);
	const [Launchoftheweekmicrobeams, setLauchoftheweekMicrobeams] = useState([]);
	const [microbeams, setMicrobeams] = useState([]);
	const [microbeamsload, setMicrobeamsload] = useState(false);
	const [popuptitle, setPopuptitle] = useState("");
	const [popupcontent, setPopupcontent] = useState("");

	const { token } = useAuthContext();

	const fetchdata = async () => {
		setMicrobeamsload(true);
		const data = await fetch(`http://localhost:1337/api/minibeams`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then((res) => res.json())
			.then((e) => {
				const data = e.data;
				setMicrobeams(e.data);
				const trending = data.filter((micro) => {
					return micro.attributes.type === "Trending";
				});
				const launchoftheweek = data.filter((micro) => {
					return micro.attributes.type === "Launchoftheweek";
				});
				setTrendingMicrobeams(trending);
				setLauchoftheweekMicrobeams(launchoftheweek);
				setMicrobeamsload(false);
			});
	};

	useEffect(() => {
		fetchdata();
	}, []);

	return (
		<div>
			{modelopen && (
				<Popup
					content={popupcontent}
					title={popuptitle}
					handleClose={close}
				></Popup>
			)}
			<section className="minibeamspage">
				<section className="trendingbeamshero">
					<img src={microbeambgheroimg} alt="" className="heroimgbeam" />
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
						With Micro Beams
					</h1>
				</section>
				<div className="innernav">
					<span>
						<span style={{ color: "#435CFF" }}>Home</span> &nbsp; &gt; &nbsp;{" "}
						<span style={{ color: "#435CFF" }}>Beams</span> &nbsp; &gt; &nbsp;{" "}
						<span>Micro Beams</span>
					</span>
					<div className="searchbar">
						<input type="text" placeholder="Search" />
						<AiOutlineSearch className="searchicon" />
					</div>
				</div>
				<section className="minibeams">
					<div className="sec2label">
						<span>Launch Of The Week</span>
					</div>
					<div className="minicardcont">
						{Launchoftheweekmicrobeams.length !== 0 ? (
							<div className="minicardssection">
								{Launchoftheweekmicrobeams.map((micro) => {
									return (
										<Maxbeamscard
											Title={micro.attributes.Title}
											Desc={micro.attributes.shortDesc}
											id={micro.attributes.id}
										/>
									);
								})}
							</div>
						) : (
							""
						)}
					</div>
				</section>
				<section className="minibeams" style={{ marginTop: "0px" }}>
					<div className="sec2label">
						<span>Trending</span>
					</div>
					<div className="minicardcontscroller">
						<FaChevronLeft
							size={26}
							onClick={() => {
								if (scrollercontrol != 0)
									setscrollercontrol(scrollercontrol - 560);
							}}
						/>
						<div className="minicardssectionscroller">
							<div
								className="minicardssectionscroller1"
								style={{ position: "relative", right: `${scrollercontrol}px` }}
							>
								{trendingmicrobeams.map((micro) => {
									return (
										<Maxbeamscard
											Title={micro.attributes.Title}
											Desc={micro.attributes.shortDesc}
											id={micro.attributes.id}
										/>
									);
								})}
							</div>
						</div>
						<FaChevronRight
							size={26}
							onClick={() => {
								console.log(trendingmicrobeams.length);
								if (scrollercontrol < 560 * (trendingmicrobeams.length - 1))
									setscrollercontrol(scrollercontrol + 560);
							}}
						/>
					</div>
					<div className="minicardsnaver"></div>
				</section>
				<section className="minibeams">
					<div className="sec2label">
						<span>Micro Beams</span>
					</div>
					<div className="minicardcont">
						{microbeams.length !== 0 ? (
							<div className="minicardssection">
								{microbeams.map((micro) => {
									return (
										<Maxbeamscard
											Title={micro.attributes.Title}
											Desc={micro.attributes.shortDesc}
											id={micro.attributes.id}
										/>
									);
								})}
							</div>
						) : (
							""
						)}
					</div>
				</section>
			</section>
		</div>
	);
};
