import React, { useState, useEffect } from "react";
import "./Maxbeamsong.css";
import songcardmock from "../../assets/maxbeamsong.png";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import AudioPlayer from "react-h5-audio-player";
import { BeatLoader } from "react-spinners";
import "react-h5-audio-player/lib/styles.css";
import { API } from "../../constants";
export const Maxbeamsong = () => {
	const { token } = useAuthContext();
	const [microbeams, setMicrobeams] = useState({});
	const [microbeamsload, setMicrobeamsload] = useState(false);
	const { id } = useParams();
	const [audio,setAudio]=useState(null)
	const fetchdata = async () => {
		setMicrobeamsload(true);
		// const data = await fetch(`${API}/minibeams/${id}`, {
		// 	headers: {
		// 		Authorization: `Bearer ${token}`
		// 	}
		// })
		// 	.then((res) => res.json())
		// 	.then((e) => {
		// 		// console.log(e.data.attributes);
		// 		setMicrobeams(e.data.attributes);
		// 		setMicrobeamsload(false);
		// 	});
        fetch("http://localhost:1337/api/audio-players?populate=*").then((res) => res.json())
		.then((audio)=>{
			 const id=audio.data.findIndex((audio)=>audio.attributes.articleId===localStorage.getItem("article"))
			 console.log(audio.data[id].attributes)
			 setAudio(audio.data[id].attributes)
		})

	};

	useEffect(() => {
		fetchdata();
	}, []);

	return (
		<div className="Maxbeamsong mttop">
			{!audio ? (
				<BeatLoader />
			) : (
				<div className="songcard">
					<img src={"http://localhost:1337"+audio.audioImage.data.attributes.url} alt="" className="scardbanner" />
					<span>{audio.title}</span>
					<AudioPlayer src={"http://localhost:1337"+audio.audioUrl.data.attributes.url} style={{ color: "blue" }} />
				</div>
			)}
		</div>
	);
};
