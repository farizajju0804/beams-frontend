import React, { useState, useEffect } from "react";
import "./Beams.css";
import { Minibeamscard } from "../../models/Minibeamcard/Minibeamscard";
import { Maxbeamscard } from "../../models/Maxbeamscard/Maxbeamscard";
import { Popup } from "../../models/Popup/Popup";
import heroimg from "../../assets/beamsheroimg.png";
import { AiOutlineSearch, AiFillCloseCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { BeatLoader } from "react-spinners";
import { API } from "../../constants";
import { Popupnotes } from "../../models/Popupnotes/Popupnotes";
import ShareModel from "../../models/ShareModel/ShareModel";
import { GotoTop } from "../../models/GotoTop/GotoTop";
import { WelcomePopUp } from "../../models/WelcomePopUp/WelcomePopUp";
import { FirstHighlightPopUp } from "../../models/FirstHighlightPopUp/FirstHightlightPopUp";
import nosearch from "../../assets/nosearch.png";

export const Beams = () => {
	const [modelopen, setModelopen] = useState(false);
	const [microbeams, setMicrobeams] = useState([]);
	const [microbeamsload, setMicrobeamsload] = useState(false);
	const [maxbeams, setMaxbeams] = useState([]);
	const [maxbeamsload, setMaxbeamsload] = useState([]);
	const [popuptitle, setPopuptitle] = useState("");
	const [popupcontent, setPopupcontent] = useState("");
	const [notesPopup, setNotesPopup] = useState(false);
	const [notepopupdata, setNotepopupdata] = useState({});
	const [suggestion, setSuggestion] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [opensuggestionBox, setOpensuggestionBox] = useState(false);
	const [forceclose, setforceclose] = useState(false);
	const [searchOptionType, setSearchOptionType] = useState(0);
	const [popupid, setPopupid] = useState(0);
	const [popuptype, setPopuptype] = useState("");
	const [sharemodelstaus, setSharemodelstaus] = useState(false);
	const [welcomepopupsate, setWelcomepopupsate] = useState(false);
	const [sharemodelurl, setSharemodelurl] = useState("");
	const location = useLocation();

	const closesharemodel = () => setSharemodelstaus(false);

	const opensharemodel = (url) => {
		setSharemodelurl(url);
		setSharemodelstaus(true);
	};

	const closenotePopup = () => setNotesPopup(false);
	const opennotePopup = (data) => {
		setNotepopupdata(data);
		setNotesPopup(true);
	};

	const close = () => setModelopen(false);
	const open = (title, content, id, type) => {
		setPopupcontent(content);
		setPopuptitle(title);
		setModelopen(true);
		setPopupid(id);
		setPopuptype(type);
	};
	const navigate = useNavigate();
	const { token, user, firsthightlight, setFirsthightlight } = useAuthContext();

	const fetchdata = async () => {
		setMicrobeamsload(true);
		const data = await fetch(`${API}/microbeams`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then((res) => res.json())
			.then((e) => {
				if (e.error) {
				} else {
					setMicrobeams(e.data);
					setMicrobeamsload(false);
				}
			});
	};

	const fetchdata2 = async () => {
		setMaxbeamsload(true);
		const data = await fetch(`${API}/minibeams`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then((res) => res.json())
			.then((e) => {
				if (e.error) {
				} else {
					setMaxbeams(e.data);
					setMaxbeamsload(false);
				}
			});
	};

	useEffect(() => {
		if (location.hash) {
			let elem = document.getElementById(location.hash.slice(1));
			if (elem) {
				elem.scrollIntoView({
					behavior: "smooth",
					inline: "center",
					block: "center"
				});
			}
		} else {
			window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		}
	}, [location, microbeams]);

	useEffect(() => {
		setSuggestion([]);
		fetchdata();
		fetchdata2();
	}, [user]);

	return (
		<div className="beamspage">
			<GotoTop />
			{notesPopup && (
				<Popupnotes
					data={notepopupdata}
					handleClose={closenotePopup}
				></Popupnotes>
			)}
			{modelopen && (
				<Popup
					content={popupcontent}
					title={popuptitle}
					handleClose={close}
					id={popupid}
					openNotes={opennotePopup}
					type={popuptype}
					openshare={opensharemodel}
				></Popup>
			)}

			{sharemodelstaus && (
				<ShareModel handleClose={closesharemodel} url={sharemodelurl} />
			)}

			{user && user.newuser && !welcomepopupsate && (
				<WelcomePopUp
					handleClose={() => {
						setWelcomepopupsate(true);
					}}
				/>
			)}

			{/* <FirstHighlightPopUp /> */}
			{firsthightlight && (
				<FirstHighlightPopUp
					handleClose={() => setFirsthightlight(false)}
				></FirstHighlightPopUp>
			)}

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
					<span
						style={{ color: "#435CFF", cursor: "pointer" }}
						onClick={() => {
							navigate("/");
						}}
					>
						Home
					</span>{" "}
					&nbsp; &gt; &nbsp;{" "}
					<span
						style={{ cursor: "pointer" }}
						onClick={() => {
							navigate("/beams");
						}}
					>
						Beams
					</span>
				</span>
				<div className="searchbar">
					<input
						type="text"
						placeholder="Search"
						value={searchTerm}
						onChange={(e) => {
							setforceclose(true);
							setSearchTerm(e.target.value);
						}}
						onFocus={() => {
							setforceclose(true);
							setOpensuggestionBox(true);
						}}
					/>
					{searchTerm === "" && !forceclose ? (
						<AiOutlineSearch className="searchicon" />
					) : (
						<AiFillCloseCircle
							className="searchicon"
							color="black"
							onClick={() => {
								setSearchTerm("");
								setforceclose(false);
							}}
						/>
					)}
					{(searchTerm != "" || opensuggestionBox) && forceclose && (
						<div className="suggestionlist">
							{microbeams
								.filter((item) => {
									const searchterm = searchTerm.toLowerCase();
									const title = item.attributes.Title.toLowerCase();

									return title.includes(searchterm);
								})
								.map((item) => {
									return (
										<p
											style={{ paddingLeft: "20px", paddingRight: "20px	" }}
											onClick={(e) => {
												e.stopPropagation();
												setSearchTerm(item.attributes.Title);
												setforceclose(false);
												setOpensuggestionBox(false);
											}}
										>
											{item.attributes.Title}
										</p>
									);
								})}
						</div>
					)}
				</div>
			</div>
			{searchTerm === "" ? (
				<div>
					<section className="minibeams">
						<div className="sec2label">
							<span>Micro Beams</span>
						</div>
						<div className="minicardcont">
							{microbeams.length !== 0 ? (
								<div style={{ display: "flex", flexDirection: "column" }}>
									<div className="minicardssection">
										{microbeams.map((micro) => {
											return (
												<Minibeamscard
													navid={micro.id + "Microbeam"}
													title={micro.attributes.Title}
													content={micro.attributes.Content}
													id={micro.id}
													open={open}
													openNotes={opennotePopup}
													openshare={opensharemodel}
												/>
											);
										})}
									</div>
									<span
										style={{
											alignSelf: "flex-end",
											marginRight: "40px",
											cursor: "pointer"
										}}
										onClick={() => {
											navigate("/minibeams");
										}}
									>
										View More
									</span>
								</div>
							) : (
								<BeatLoader />
							)}
						</div>
					</section>
					<section className="minibeams" style={{ marginTop: "140px" }}>
						<div className="sec2label">
							<span>Mini Beams</span>
						</div>
						<div className="minicardcont">
							{maxbeams.length !== 0 ? (
								<div style={{ display: "flex", flexDirection: "column" }}>
									<div className="minicardssection">
										{maxbeams.map((micro) => {
											return (
												<Maxbeamscard
													navid={micro.id + "Minibeam"}
													Title={micro.attributes.Title}
													Desc={micro.attributes.shortDesc}
													id={micro.id}
													open={open}
													openNotes={opennotePopup}
													openshare={opensharemodel}
												/>
											);
										})}
									</div>
									<span
										style={{
											alignSelf: "flex-end",
											marginRight: "60px",
											marginBottom: "120px",
											cursor: "pointer"
										}}
										onClick={() => {
											navigate("/maxbeams");
										}}
									>
										View More
									</span>
								</div>
							) : (
								<BeatLoader />
							)}
						</div>
					</section>
				</div>
			) : (
				<div className="searchPage">
					<span className="searchPageheading">Search Results</span>
					<div className="searchPageoptions">
						<div className="searchpageleftoptions">
							<span
								onClick={() => {
									setSearchOptionType(0);
								}}
								style={{
									backgroundColor: searchOptionType == 0 ? "#F7CD61" : "#E3E3E3"
								}}
							>
								All
							</span>
							<span
								onClick={() => {
									setSearchOptionType(1);
								}}
								style={{
									backgroundColor: searchOptionType == 1 ? "#F7CD61" : "#E3E3E3"
								}}
							>
								Micro Beams
							</span>
							<span
								onClick={() => {
									setSearchOptionType(2);
								}}
								style={{
									backgroundColor: searchOptionType == 2 ? "#F7CD61" : "#E3E3E3"
								}}
							>
								Mini Beams
							</span>
						</div>
					</div>

					<div className="minicardcont">
						{maxbeams.length !== 0 ? (
							<div className="minicardssection">
								{searchOptionType === 0 &&
									microbeams
										.filter((item) => {
											const searchterm = searchTerm.toLowerCase();
											const title = item.attributes.Title.toLowerCase();

											return title.includes(searchterm);
										})
										.map((micro) => {
											return (
												<Minibeamscard
													title={micro.attributes.Title}
													content={micro.attributes.Content}
													id={micro.id}
													navid={micro.id + "mini"}
													open={open}
													openNotes={opennotePopup}
													openshare={opensharemodel}
												/>
											);
										})}
								{searchOptionType === 0 &&
									maxbeams
										.filter((item) => {
											const searchterm = searchTerm.toLowerCase();
											const title = item.attributes.Title.toLowerCase();

											return title.includes(searchterm);
										})
										.map((micro) => {
											return (
												<Maxbeamscard
													Title={micro.attributes.Title}
													Desc={micro.attributes.shortDesc}
													id={micro.id}
													navid={micro.id + "max"}
													open={open}
													openshare={opensharemodel}
												/>
											);
										})}

								{searchOptionType === 1 &&
									microbeams
										.filter((item) => {
											const searchterm = searchTerm.toLowerCase();
											const title = item.attributes.Title.toLowerCase();

											return title.includes(searchterm);
										})
										.map((micro) => {
											return (
												<Minibeamscard
													title={micro.attributes.Title}
													content={micro.attributes.Content}
													id={micro.id}
													navid={micro.id + "mini"}
													open={open}
													openNotes={opennotePopup}
													openshare={opensharemodel}
												/>
											);
										})}

								{searchOptionType === 2 &&
									maxbeams
										.filter((item) => {
											const searchterm = searchTerm.toLowerCase();
											const title = item.attributes.Title.toLowerCase();

											return title.includes(searchterm);
										})
										.map((micro) => {
											return (
												<Maxbeamscard
													navid={micro.id + "max"}
													Title={micro.attributes.Title}
													Desc={micro.attributes.shortDesc}
													id={micro.id}
													open={open}
													openshare={opensharemodel}
												/>
											);
										})}

								{microbeams.filter((item) => {
									const searchterm = searchTerm.toLowerCase();
									const title = item.attributes.Title.toLowerCase();

									return title.includes(searchterm);
								}).length === 0 ? (
									<div
										style={{
											width: "100%",
											justifyContent: "center",
											alignItems: "center",
											display: "flex",
											flexDirection: "column",
											marginTop: "50px",
											marginBottom: "200px	"
										}}
										className="nodatadiv"
									>
										<img src={nosearch} alt="" />
										<h2 style={{ marginTop: "30px", fontSize: "30px" }}>
											Unfortunately, we couldn't find any results for your
											search.
										</h2>
									</div>
								) : (
									<div></div>
								)}
							</div>
						) : (
							<BeatLoader />
						)}
					</div>
				</div>
			)}
		</div>
	);
};
