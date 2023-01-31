import React, { useState } from "react";
import "./UserProfile.css";
import userProfileimg from "../../assets/userprofile.png";
import { useAuthContext } from "../../context/AuthContext";

export const UserProfile = () => {
	const { user } = useAuthContext();
	const [name, setName] = useState(user ? user.name : "");

	return (
		<div className="Userprofile">
			{user ? (
				<div className="userprofinner">
					<div className="profileleft">
						<img src={userProfileimg} alt="" />
						<div className="profitems">
							<label htmlFor="">Full Name</label>
							<input
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
						<button className="changepassbtn">Change Password</button>
						<div className="profitems">
							<label htmlFor="">Phone</label>
							<input type="text" />
						</div>
						<div className="profileoptns">
							<button className="cancelbtn">Cancel</button>
							<button className="savbtn">Save</button>
						</div>
					</div>
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
