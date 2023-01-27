import React from "react";
import "./UserProfile.css";
import { userProfileimg } from "../../assets/userprofile.png";

export const UserProfile = () => {
	return (
		<div className="Userprofile">
			<div className="profileleft">
				<img src="" alt="" />
				<div>
					<label htmlFor="">Name</label>
					<input type="text" />
				</div>
				<div>
					<label htmlFor="">Email</label>
					<input type="text" />
				</div>
				<button>Change Password</button>
				<div>
					<label htmlFor="">Phone</label>
					<input type="text" />
				</div>
				<div>
					<button>Cancel</button>
					<button>Save</button>
				</div>
			</div>
			<div className="profileright"></div>
		</div>
	);
};
