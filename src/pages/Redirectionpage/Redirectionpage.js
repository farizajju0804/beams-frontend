import React, { useState, useEffect } from "react";
import { API } from "../../constants";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import "./redirectionpage.css";

export const Redirectionpage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const { setUser } = useAuthContext();
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const id_token = searchParams.get("id_token");
	const access_token = searchParams.get("access_token");

	useEffect(() => {
		signUpcall();
	}, []);

	const signUpcall = async () => {
		try {
			const response = await fetch(
				`${API}/auth/google/callback?id_token=${id_token}&access_token=${access_token}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}
			);

			const data = await response.json();
			if (data?.error) {
				throw data?.error;
			} else {
				setUser(data.user);
				navigate("/beams", { replace: true });
			}
		} catch (error) {
			setError(error?.message ?? "Something went wrong!");
		} finally {
		}
	};

	return (
		<div className="Redirectionpage">
			<h1 style={{ marginBottom: "30px", fontSize: "50px", color: "#435CFF" }}>
				Login Successfull
			</h1>
			<ClipLoader color="" />
		</div>
	);
};
