import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useAuthContext } from "../../context/AuthContext";
import { API } from "../../constants";

export const Termsandcondition = () => {
	const { token } = useAuthContext();
	const [microbeams, setMicrobeams] = useState({});
	const [microbeamsload, setMicrobeamsload] = useState(false);

	const fetchdata = async () => {
		setMicrobeamsload(true);
		const data = await fetch(`${API}/termsandcondition/`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then((res) => res.json())
			.then((e) => {
				setMicrobeams(e.data.attributes);
				setMicrobeamsload(false);
			});
	};

	useEffect(() => {
		fetchdata();
	}, []);

	return (
		<div className="maxbeamsreadpage">
			<div>
				{/* <div className="maxbeamsreadheader">
					<h2>{microbeams.Title}</h2>
				</div> */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center	"
					}}
				>
					{" "}
					<ReactMarkdown className="readtext">{microbeams.terms}</ReactMarkdown>
				</div>
			</div>
		</div>
	);
};
