import React, { useEffect } from "react";
import "./Minibeamscard.css";
import { MdZoomOutMap } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { SlNote } from "react-icons/sl";
import {
	AiOutlineShareAlt,
	AiFillHeart,
	AiOutlineCloseCircle
} from "react-icons/ai";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Toaster, toast } from "react-hot-toast";
import { FaHighlighter } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";

export const Minibeamscard = ({
	open,
	title,
	content,
	id,
	openNotes,
	openshare
}) => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [displayPopUp, setDisplayPopUp] = useState(false);
	const { token, hightlights, setHighlights } = useAuthContext();
	const [selectedText, setSelectedText] = useState("");
	const [dropdown, setDropdown] = useState(false);
	const { addfav } = useAuthContext();
	const type = "Microbeam";

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

	const getHighlightedData = () => {
		if (!hightlights.length) {
			return;
		}
		var items = document.getElementById(`minibeamscard${id}`);
		if (!items) {
			return;
		}
		var ptags = items.getElementsByTagName("p");
		console.log(ptags);
		for (let i = 0; i < ptags.length; i++) {
			hightlights.forEach((element) => {
				if (ptags[i].innerText.includes(element.HighlightedText)) {
					console.log("match");
					ptags[i].innerHTML = ptags[i].innerHTML.replace(
						element.HighlightedText,
						`<span class="hightobjs">${element.HighlightedText}</span>`
					);
				}
			});
		}
	};

	useEffect(() => {
		getHighlightedData();
	}, [hightlights]);

	return (
		<div
			className="minibeamscardcont"
			onClick={() => {
				setDropdown(false);
				// setDisplayPopUp(false);
			}}
		>
			<Toaster></Toaster>
			<div className="minibeamsinner" id={`minibeamscard${id}`}>
				<h3>{title}</h3>
				<p
					onMouseUp={handleMouseUp}
					onMouseDown={() => {
						setSelectedText("");
						setDisplayPopUp(false);
					}}
				>
					{content}
				</p>
			</div>
			<div className="minicontrols">
				<MdZoomOutMap
					size={22}
					style={{ marginRight: "10px", cursor: "pointer" }}
					onClick={() => {
						open(title, content, id);
					}}
				/>
				<BiDotsVerticalRounded
					size={24}
					style={{ cursor: "pointer", zIndex: 50 }}
					className="threedotbtn"
					onClick={(e) => {
						e.stopPropagation();
						setDropdown(!dropdown);
					}}
				/>
			</div>
			<div className={dropdown ? "opdp opdpdisplay" : "opdp"}>
				<AiOutlineCloseCircle
					color="black"
					className="closeminicard"
					size={20}
					onClick={() => {
						setDropdown(false);
					}}
				/>
				<div
					className="opdpitems"
					onClick={() => {
						openNotes({ title, id, type });
					}}
				>
					<SlNote
						size={20}
						style={{ marginRight: "10px", cursor: "pointer" }}
						color={"blue"}
					/>
					<span>Notes</span>
				</div>
				<div
					className="opdpitems"
					onClick={() => {
						openshare();
					}}
				>
					<AiOutlineShareAlt
						size={20}
						style={{ marginRight: "10px", cursor: "pointer" }}
					/>
					<span>Share</span>
				</div>
				<div
					className="opdpitems"
					onClick={() => {
						addfav({
							Name: title,
							Desc: content,
							idofbeam: `${id}`,
							typeofbeam: type
						});
					}}
				>
					<AiFillHeart
						size={20}
						style={{ marginRight: "10px", cursor: "pointer" }}
						color={"red"}
					/>
					<span>Add to Favourites</span>
				</div>
			</div>
			{displayPopUp && (
				<div
					className="highlightop"
					// style={{ left: `${x}px`, top: `${y - 100}px ` }}
					style={{ left: `50%	`, top: "20px" }}
				>
					<div
						className="highlightopinner"
						onClick={() => {
							if (selectedText.split(" ").length > 5) {
								setHighlights({
									HighlightedText: selectedText,
									BeamName: title,
									BeamId: `${id}`,
									BeamType: "Microbeam"
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
							openNotes({ title, id, type });
						}}
					>
						<GrNotes size={22} />
						<span>Note</span>
					</div>
				</div>
			)}
		</div>
	);
};
