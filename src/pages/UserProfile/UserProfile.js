import React, { useState, useEffect, useContext } from "react";
import "./UserProfile.css";
import userProfileimg from "../../assets/userprofile.png";
import { useAuthContext } from "../../context/AuthContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { API } from "../../constants";
import { Toaster, toast } from "react-hot-toast";
import { RxImage } from "react-icons/rx";
import { json, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
export const UserProfile = () => {
	const auth=useContext(AuthContext)
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [phone, setPhone] = useState();
	const [image, setImage] = useState(null);
	const [img,setImg]=useState(null)
	const {id}=useParams()
	const { user, token } = useContext(AuthContext);
	useEffect(() => {
		console.log(auth)
		// fetch(`http://localhost:1337/api/users/${id}?populate=*`)
		// .then((res)=>res.json())
		// .then((res)=>{
		// 	console.log("user",res)
		// 	setUser(res)})
		if (user) {
			setName(user.name);
			setPhone(user.Phone);
		}
	}, [auth]);

	const updateUserContext=()=>{
		fetch(`http://localhost:1337/api/users/${user.id}?populate=*`)
		.then((res)=>res.json())
		.then((res)=>{
			console.log(res)
			auth.setUserData(res)})
	}

	const uploadPhoto = async (file) => {
		const formdata = new FormData();
		formdata.append("files", file);
		formdata.append("ref", "plugin::users-permissions.user");
		formdata.append("refid", `${token}`);
		console.log(file[0]);

		const data = await fetch(`${API}/upload`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "multipart/form-data; "
			},

			body: formdata
		})
			.then((res) => res.json())
			.then((e) => {
				console.log("response",e);
			});
	};

	const updateProfile = async () => {
		console.log("update")
		await fetch(`${API}/users/${user.id}`, {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json"
			},

			body: JSON.stringify({
				name: name,
				Phone: phone
			})
		})
			.then((res) => res.json())
			.then((e) => {
				updateUserContext()
				if(img){
			    uploadPhoto(img)
				}
				console.log(e);
			});
	};

	const formsubmit = async (e) => {
		var formdata = new FormData(e.target);
		formdata.append("ref", "plugin::users-permissions.user");
		formdata.append("refId", `${user.id}`);
		formdata.append("field", "Profilepic");
		console.log(formdata)
		e.preventDefault();

		await fetch(`${API}/upload`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`
			},
			body: formdata
		})
			.then((res) => res.json())
			.then((e) => {
				toast.promise(updateProfile(), {
					loading: "Updating Profile",
					success: <b>Profile Updated</b>,
					error: <b>Could not Upload Profile.</b>
				});
			});
	};

	return (
		<div className="Userprofile">
			<Toaster></Toaster>
			{user ? (
				<div className="userprofinner">
					<form
						className="profileleft"
						onSubmit={(e) => {
							formsubmit(e);
						}}
					>
						<label For="files">
							{image === null ? (
								<div>
									{auth.user?.Profilepic  ? (
										<div
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												position: "relative"
											}}
										>
											<img
												src={`http://localhost:1337${auth.user.Profilepic.url}`}
												alt=""
											/>
											<div className="proftag">
												<RxImage color="white" />
											</div>
										</div>
									) : (
										<div
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												position: "relative"
											}}
										>
											<img
												src={
													"https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
												}
												alt=""
											/>
											<div className="proftag">
												<RxImage color="white" />
											</div>
										</div>
									)}
								</div>
							) : (
								<div
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										position: "relative"
									}}
								>
									<img src={image} alt="" />
									<div className="proftag">
										<RxImage color="white" />
									</div>
								</div>
							)}
						</label>

						<input
							id="files"
							style={{ visibility: "hidden" }}
							type="file"
							name="files"
							multiple={false}
							onChange={(e) => {
								setImg((e.target.files[0]))
								setImage(URL.createObjectURL(e.target.files[0]));
							}}
						/>
						<div className="profitems">
							<label htmlFor="">Full Name</label>
							<input
							    required
								type="text"
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
						</div>
						<div className="profitems">
							<label htmlFor="">Email</label>
							<input type="text" value={user.email} disabled />
						</div>
						<div className="profitems">
							<label htmlFor="">Password</label>
							<input type="text" value="***********" disabled />
							<p
								style={{ marginTop: "5px", color: "#f96f2e", cursor: "pointer" }}
								onClick={() => {
									navigate("/resetpassword");
								}}
							>
								Change Password{" "}
							</p>
						</div>
						<div className="profitems">
							{window.innerWidth <= 450 ? (
								<PhoneInput
									// containerStyle={{
									// 	width: "90vw"
									// }}
									// inputClass={"containerclass"}
									inputStyle={{
										width: "90vw",
										fontSize: "18px"
									}}
									country={"in"}
									style={{ marginTop: "40px" }}
									value={phone}
									onChange={(phone) => {
										console.log(phone);
										setPhone(phone);
									}}
								/>
							) : (
								<PhoneInput
									// containerStyle={{
									// 	width: "90vw"
									// }}
									// inputClass={"containerclass"}
									inputStyle={{
										width: "400px",
										fontSize: "18px",
										"@media only screen and (max-width: 450px)": {
											width: "90vw !important"
										}
									}}
									country={"in"}
									style={{ marginTop: "40px" }}
									value={phone}
									onChange={(phone) => {
										console.log(phone);
										setPhone(phone);
									}}
								/>
							)}
						</div>
						<div className="profileoptns">
							<button className="cancelbtn">Cancel</button>
							<input type="submit" value="Submit" className="savbtn">
								{/* Save */}
							</input>
						</div>
					</form>
					<div className="profileright">
						<div className="profrightdata">
							<span>90% of our users have complete profiles.</span>
							<p>A Complete profile is very powerful</p>
							<p>Take a minute to complete your profile.</p>
						</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
};
