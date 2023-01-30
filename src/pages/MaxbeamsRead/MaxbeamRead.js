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

// import { onHighlightAction } from "../xpath";
// q

export const MaxbeamRead = () => {
	const { token, hightlights, setHighlights } = useAuthContext();
	console.log(hightlights);
	const [microbeams, setMicrobeams] = useState({});
	const [microbeamsload, setMicrobeamsload] = useState(false);
	const [highlightedtext, setHighlightedtext] = useState([]);
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [displayPopUp, setDisplayPopUp] = useState(false);
	const [selectedText, setSelectedText] = useState("");
	const { id } = useParams();

	const mockhigh = [
		"It is estimated that by 2030 automation could disrupt between 800 million to 2 billion jobs."
	];

	const handleMouseUp = (e) => {
		var selectedtext = window.getSelection().toString().trim();

		if (selectedtext) {
			setSelectedText(window.getSelection().toString().trim());
			setX(e.pageX);
			setY(e.pageY);
			console.log(e.pageX);
			console.log(e.pageY);
			setDisplayPopUp(true);

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

	useEffect(() => {
		fetchdata();
		// getHighlightedData();
	}, []);

	useEffect(() => {
		getHighlightedData();
	}, [hightlights]);

	return (
		<div className="maxbeamsreadpage">
			<Toaster />
			{microbeamsload ? (
				<BeatLoader />
			) : (
				<div>
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
							alignItems: "center",
							justifyContent: "center	"
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
									BeamId: id	
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
					<div className="highlightopinner">
						<GrNotes size={22} />
						<span>Note</span>
					</div>
				</div>
			)}
		</div>
	);
};
