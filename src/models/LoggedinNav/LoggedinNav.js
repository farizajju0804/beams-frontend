import React, { useContext, useState } from "react";
import "./LoggedinNav.css";
import { BsChevronDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {FcHome} from "react-icons/fc";
import acc1 from "../../assets/acc1.png";
import acc2 from "../../assets/acc2.png";
import acc3 from "../../assets/acc3.png";
import { useAuthContext } from "../../context/AuthContext";
import { removeToken } from "../../helpers";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
import { API_Photo } from "../../constants";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
export const LoggedinNav = () => {
  const { user, setUserData, isLoggedIn, setisLoggedIn } = useContext(AuthContext);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const {id}=useParams()
  const [cookies, setCookie, removeCookie] = useCookies(['myCookieName']);
  useEffect(()=>{
    console.log(user)
  })
  return <>{
    user? 
    <div className="loggedinnav">
      <img className="logged-logo"
      src="http://localhost:3000/Assets/images/logo.png" alt=""
        onClick={() => {
          navigate("/"); 
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
          {
            user.Profilepic?.url ? <img
            src={API_Photo + user.Profilepic.url}
            alt=""
          />:
          <p>{user.email.charAt(0).toUpperCase()}</p>
          }
          
          <span>{user ? (user.name === null ? user.username : user.name) : ""}</span>
          <BsChevronDown />
          <div className={dropdown ? "accountdropdown accountdropdowndisplay" : "accountdropdown"}>
          <div
              className="accountdropdownitems"
              onClick={() => {
                navigate("/beams");
              }}
            >
              <FcHome/>
              <span>My Home</span>
            </div>
            <div className="accountdropdownitems" onClick={()=>navigate(`/profile`)}>
            <img src={acc1} alt="" />
              <span>My Profile</span>
            </div>
            <div
              className="accountdropdownitems"
              onClick={() => {
                navigate("/favourites");
              }}
            >
              <img src={acc2} alt="" />
              <span>My Library</span>
            </div>
            <div
              className="accountdropdownitems"
              onClick={() => {
                sessionStorage.removeItem("uid")
                removeCookie("loggedIn")
                removeToken();
                setUserData(null);
                setisLoggedIn(false);
                navigate("/");
              }}
            >
              <img src={acc3} alt="" />
              <span>Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    :
    <p>Loading</p>
            }
    </>

};
