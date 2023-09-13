import React, { useState, useEffect,useContext } from "react";
import { API } from "../../constants";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "./redirectionpage.css";
import { SetToken } from "../../helpers";
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
		const ssoRes=await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`)
		const res1=await axios.get(`${API}/users?filters[email][$eqi]=${ssoRes.data.email}`)
		console.log(res1.data)

		if(res1?.data[0]?.sso===false)
		{
			setFailMsg("you are signed up using your email")
			navigate("/login")
			return
		}
		else{
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
							console.log("1",data.user)
							SetToken(data.jwt);
							setUser(data.user);
							console.log("here")
							navigate("/beams", { replace: true });
							return
						}
		}

		// const existingUsers=res1.data.map((el)=>el.email)
		
		// 	if(!eval(sessionStorage.getItem("login"))){ 

		

			

			
					

		
		// else{
		// 	const response = await fetch(
		// 		`${API}/auth/google/callback?id_token=${id_token}&access_token=${access_token}`,
		// 		{
		// 			method: "GET",
		// 			headers: {
		// 				"Content-Type": "application/json"
		// 			}
		// 		}
		// 	);
		// 	const data = await response.json();

		// 				if (data?.error) {
		// 					throw data?.error;
		// 				} else {
		// 					console.log("1",data.user)
		// 					SetToken(data.jwt);
		// 					setUser(data.user);
		// 					console.log("here")
		// 					navigate("/beams", { replace: true });
		// 					return
		// 				}
		// }
		
			

		// 	if(!eval(sessionStorage.getItem("login"))){ 
		// 	console.log("session",eval(sessionStorage.getItem("login")))
			
		// 	if(existingUsers.includes(data.user.email)){
		// 		console.log("if")
		// 		setFailMsg("you are signed up using your email")
		// 		console.log(data.user.id)
		// 		await axios.delete(`${API}/users/${data.user.id}`)
		// 		navigate("/login")
		// 		return
		// 	}
		// 	else{
		// 		if (data?.error) {
		// 			throw data?.error;
		// 		} else {
		// 			console.log("1",data.user)
		// 			SetToken(data.jwt);
		// 			setUser(data.user);
		// 			console.log("here")
		// 			navigate("/beams", { replace: true });
		// 			return
		// 		}
		// 	}
			
		// }
		// 	else{
			
		// 			console.log("2",data.user)
		// 			SetToken(data.jwt);
		// 			setUser(data.user);
		// 			console.log("here")
		// 			navigate("/beams", { replace: true });	
				
		// 		}
			
			
			}catch (error) {
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
