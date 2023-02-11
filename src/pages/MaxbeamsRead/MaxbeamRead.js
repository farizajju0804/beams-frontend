import "./MaxBeamRead.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import "react-h5-audio-player/lib/styles.css";
import { API } from "../../constants";
import ReactMarkdown from "react-markdown";
import { BeatLoader } from "react-spinners";
import { FaHighlighter } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { toast, Toaster } from "react-hot-toast";
import { AiFillSetting } from "react-icons/ai";
import Slider from "@mui/material/Slider";
import { BiFontSize, BiFontFamily } from "react-icons/bi";
import { Popupnotes } from "../../models/Popupnotes/Popupnotes";
import { GotoTop } from "../../models/GotoTop/GotoTop";

export const MaxbeamRead = () => {
	const { token, hightlights, setHighlights } = useAuthContext();
	const [microbeams, setMicrobeams] = useState({});
	const [microbeamsload, setMicrobeamsload] = useState(false);
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [displayPopUp, setDisplayPopUp] = useState(false);
	const [selectedText, setSelectedText] = useState("");
	const { id } = useParams();
	const [fontSize, setfontSize] = useState(20);
	const [lineHeight, setlineHeight] = useState();
	const [settingPopup, setSettingPopup] = useState(false);
	const [notesPopup, setNotesPopup] = useState(false);
	const [notepopupdata, setNotepopupdata] = useState({});
	const type = "Minibeam";

	const handleMouseUp = (e) => {
		var selectedtext = window.getSelection().toString().trim();

		if (selectedtext) {
			setSelectedText(window.getSelection().toString().trim());
			setX(e.pageX);
			setY(e.pageY);
			console.log(e.pageX);
			console.log(e.pageY);
			setDisplayPopUp(true);
			console.log(displayPopUp);
			console.log(e);
			console.log(`${window.getSelection().toString().trim()}`);
		}
	};

	const fetchdata = async () => {
		setMicrobeamsload(true);
		const data = await fetch(`${API}/minibeams/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then((res) => res.json())
			.then((e) => {
				setMicrobeams(e.data.attributes);
				setMicrobeamsload(false);
				getHighlightedData();
				console.log(microbeams);
			});
	};

	const getHighlightedData = () => {
		if (!hightlights.length) {
			return;
		}
		var items = document.getElementById("readtext");
		if (!items) {
			return;
		}
		var ptags = items.getElementsByTagName("p");
		for (let i = 0; i < ptags.length; i++) {
			hightlights.forEach((element) => {
				console.log(element.HighlightedText);
				if (ptags[i].innerText.includes(element.HighlightedText)) {
					console.log("match");
					ptags[i].innerHTML = ptags[i].innerHTML.replace(
						element.HighlightedText,
						`<span class="hightobjs">${element.HighlightedText}</span>`
					);
				}
			});
		}

		return items;
	};

	const fitfontSize = () => {
		var items = document.getElementById("readtext");
		if (!items) {
			return;
		}
		var ptags = Array.from(items.getElementsByTagName("p"));
		ptags.forEach((item) => {
			item.style.fontSize = `${fontSize}px`;
		});
	};

	const setLineHeight = () => {
		var items = document.getElementById("readtext");
		if (!items) {
			return;
		}
		var ptags = Array.from(items.getElementsByTagName("p"));
		ptags.forEach((item) => {
			item.style.lineHeight = `${lineHeight}px`;
		});
	};

	const closenotePopup = () => setNotesPopup(false);
	const opennotePopup = (data) => {
		setNotepopupdata(data);
		setNotesPopup(true);
	};

	useEffect(() => {
		fetchdata();
		// getHighlightedData();
	}, []);

	useEffect(() => {
		getHighlightedData();
	}, [hightlights]);

	return (
		<div
			className="maxbeamsreadpage"
			onClick={(e) => {
				setSettingPopup(false);
			}}
		>
			<GotoTop />
			<Toaster />
			{microbeamsload ? (
				<BeatLoader />
			) : (
				<div>
					{notesPopup && (
						<Popupnotes
							data={notepopupdata}
							handleClose={closenotePopup}
						></Popupnotes>
					)}
					<div className="innernav">
						<span>
							<span style={{ color: "#435CFF" }}>Home</span> &nbsp; &gt; &nbsp;{" "}
							<span style={{ color: "#435CFF" }}>Beams</span> &nbsp; &gt; &nbsp;{" "}
							<span style={{ color: "#435CFF" }}>Mini Beams</span> &nbsp; &gt;
							&nbsp; <span>{microbeams.Title}</span>
						</span>
					</div>
					<div className="maxbeamsreadheader">
						<h2>{microbeams.Title}</h2>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							width: "100%"
						}}
					>
						{" "}
						<div
							onMouseUp={handleMouseUp}
							onMouseDown={() => {
								setSelectedText("");
								setDisplayPopUp(false);
							}}
							id="readtext"
						>
							<ReactMarkdown className="readtext">
								{microbeams.Content}
							</ReactMarkdown>
						</div>
					</div>
				</div>
			)}
			{displayPopUp && (
				<div
					className="highlightop"
					style={{ left: `${x}px`, top: `${y - 100}px ` }}
				>
					<div
						className="highlightopinner"
						onClick={() => {
							if (selectedText.split(" ").length > 5) {
								setHighlights({
									HighlightedText: selectedText,
									BeamName: microbeams.Title,
									BeamId: id,
									BeamType: "Minibeam"
								});
								setDisplayPopUp(false);
								setSelectedText("");
							} else {
								toast.error("Select more than 4 words to highlight");
								setDisplayPopUp(false);
								setSelectedText("");
							}
						}}
					>
						<FaHighlighter size={22} />
						<span>Highlight</span>
					</div>
					<div
						className="highlightopinner"
						onClick={() => {
							opennotePopup({ title: microbeams.Title, id, type });
						}}
					>
						<GrNotes size={22} />
						<span>Note</span>
					</div>
				</div>
			)}

			<div className="settingdropdown">
				<div
					className="settingdropdownbg"
					onClick={(e) => {
						e.stopPropagation();
						setSettingPopup(!settingPopup);
					}}
				>
					<AiFillSetting size={24} />
				</div>
				{settingPopup && (
					<div
						className="settingdrops"
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
						<div className="settingsrops1">
							<label htmlFor="">Size</label>
							<div>
								<BiFontSize size={21} />
								<Slider
									max={35}
									min={11}
									defaultValue={20}
									aria-label="Default"
									valueLabelDisplay="auto"
									onChange={(e) => {
										setfontSize(e.target.value);
										fitfontSize();
									}}
									style={{
										width: "70%"
									}}
								/>
								<BiFontSize size={21} />
							</div>
						</div>
						<div className="settingsrops1">
							<label htmlFor="">Line Spacing</label>
							<div>
								<BiFontFamily size={21} />
								<Slider
									defaultValue={40}
									aria-label="Default"
									valueLabelDisplay="auto"
									onChange={(e) => {
										setlineHeight(e.target.value);
										setLineHeight();
									}}
									style={{
										width: "70%"
									}}
									min={22}
									max={100}
								/>
								<BiFontFamily size={21} />
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
