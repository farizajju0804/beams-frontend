import "./MaxBeamRead.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import "react-h5-audio-player/lib/styles.css";
import { API } from "../../constants";
import ReactMarkdown from "react-markdown";
import { BeatLoader } from "react-spinners";

export const MaxbeamRead = () => {
	const { token } = useAuthContext();
	const [microbeams, setMicrobeams] = useState({});
	const [microbeamsload, setMicrobeamsload] = useState(false);
	const { id } = useParams();

	const fetchdata = async () => {
		setMicrobeamsload(true);
		const data = await fetch(`${API}/minibeams/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then((res) => res.json())
			.then((e) => {
				// console.log(e.data.attributes);
				setMicrobeams(e.data.attributes);
				setMicrobeamsload(false);
			});
	};

	useEffect(() => {
		fetchdata();
	}, []);

	return (
		<div className="maxbeamsreadpage">
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
						<ReactMarkdown className="readtext">
							{microbeams.Content}
							{/* <ReactMarkdown children={microbeams.Content}> </ReactMarkdown> */}
						</ReactMarkdown>
					</div>
				</div>
			)}
		</div>
	);
};
