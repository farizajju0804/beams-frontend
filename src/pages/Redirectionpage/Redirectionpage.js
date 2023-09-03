import React, { useState, useEffect,useContext } from "react";
import { API } from "../../constants";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "./redirectionpage.css";
import { setToken } from "../../helpers";
import axios from "axios";
export const Redirectionpage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const { setUser,setFailMsg } = useContext(AuthContext);
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const id_token = searchParams.get("id_token");
	const access_token = searchParams.get("access_token");
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

			const res1=await axios.get("http://localhost:1337/api/users")

		    const existingUsers=res1.data.map((el)=>el.email)
			const data = await response.json();
			console.log(existingUsers)
			console.log(data)
			if(existingUsers.includes(data.user.email)){
				console.log("if")
				setFailMsg("you are signed up using your email")
				console.log(data.user.id)
				await axios.delete(`http://localhost:1337/api/users/${data.user.id}`)
				navigate("/login")
			}
			else{
				console.log("else")
				if (data?.error) {
					throw data?.error;
				} else {
					console.log(data.user)
					setToken(data.jwt);
					setUser(data.user);
					console.log("here")
					navigate("/beams", { replace: true });
				}
			}
			
		} catch (error) {
			console.log(error)
			setError(error?.message ?? "Something went wrong!");
		} finally {
		}
	};
	useEffect(() => {
		signUpcall(id_token,access_token);
	}, []);



	return (
		<div className="Redirectionpage">
			<h1 style={{ marginBottom: "30px", fontSize: "50px", color: "#f96f2e" }}>
				Login Successfull
			</h1>
			<ClipLoader color="" />
		</div>
	);
};
