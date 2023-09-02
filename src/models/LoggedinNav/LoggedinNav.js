import React, { useContext, useState } from "react";
import "./LoggedinNav.css";
import { BsChevronDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoLibrarySharp } from "react-icons/io5";
import { useAuthContext } from "../../context/AuthContext";
import { removeToken } from "../../helpers";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
export const LoggedinNav = () => {
  const { user, setUserData, isLoggedIn, setisLoggedIn } = useContext(AuthContext);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const {id}=useParams()
  useEffect(()=>{
    console.log(id)
  })
  return (
    <div className="loggedinnav">
      <img className="logged-logo"
      src="http://localhost:3000/Assets/images/logo.png" alt=""
        onClick={() => {
          navigate("/beams");
        }}
        
      />
      
      <div className="bandacont">
        {/* <span>Beams</span> */}
        <div
          className="navaccoutholder"
          onClick={() => {
            setDropdown(!dropdown);
          }}
        >
          <img
            src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000"
            alt=""
          />
          <span>{user ? (user.name === null ? user.username : user.name) : ""}</span>
          <BsChevronDown />
          <div className={dropdown ? "accountdropdown accountdropdowndisplay" : "accountdropdown"}>
            <div className="accountdropdownitems" onClick={()=>navigate(`/profile/${id}`)}>
              <CgProfile size={20} />
              <span>My Profile</span>
            </div>
            <div
              className="accountdropdownitems"
              onClick={() => {
                navigate("/hightlights");
              }}
            >
              <IoLibrarySharp />
              <span>My Library</span>
            </div>
            <div
              className="accountdropdownitems"
              onClick={() => {
                sessionStorage.removeItem("uid")
                removeToken();
                setUserData(null);
                setisLoggedIn(false);
                navigate("/");
              }}
            >
              <FiLogOut />
              <span>Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};
