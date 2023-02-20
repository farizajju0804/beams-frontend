import React, { useState, useEffect } from "react";
import maxbeamimg from "../../assets/maxbeampagemock.png";
import "./Maxbeampage.css";
import { FaBook } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { BeatLoader } from "react-spinners";
import { API } from "../../constants";
import { BsHeadphones } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";

export const Maxbeampage = () => {
	const navigate = useNavigate();
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
		<div className="maxbeampage mttop">
			{microbeamsload === true ? (
				<BeatLoader />
			) : (
				<div className="maxbeaminner">
					<img src={maxbeamimg} alt="" />
					<div className="maxbeampagedata">
						<span>{microbeams.Title}</span>
						<p>{microbeams.Desc}</p>
						<div className="maxbeamspagebtns">
							<div
								className="maxbeamsbtn"
								style={{ backgroundColor: "#191641", color: "white" }}
								onClick={() => {
									navigate("/maxbeamslideshow");
								}}
							>
								<FiMonitor size={21} />
								<span>Slideshow</span>
							</div>
							<div
								className="maxbeamsbtn"
								onClick={() => {
									navigate("/maxbeamread/" + id);
								}}
							>
								<FaBook />
								<span>Read</span>
							</div>
							<div
								className="maxbeamsbtn"
								style={{ backgroundColor: "#435CFF", color: "white" }}
								onClick={() => {
									navigate("/maxbeamsong/" + id);
								}}
							>
								<BsHeadphones size={21} />
								<span>Listen</span>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
