import React, { useContext, useState, useEffect, useRef } from "react"; // Import useRef from React
import "./LoggedinNav.css";
import { BsChevronDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import acc1 from "../../assets/acc1.png";
import acc2 from "../../assets/acc2.png";
import acc3 from "../../assets/acc3.png";
import { useAuthContext } from "../../context/AuthContext";
import { removeToken } from "../../helpers";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
import { API_Photo } from "../../constants";
import { useCookies } from "react-cookie";

export const LoggedinNav = () => {
  const { user, setUserData, isLoggedIn, setisLoggedIn } = useContext(AuthContext);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [cookies, setCookie, removeCookie] = useCookies(['myCookieName']);
  const dropdownRef = useRef(null); // Define a ref

  useEffect(() => {
  

    // Add event listener to close dropdown when clicking outside
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    }

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {user ? (
        <div className="loggedinnav">
          <img
            className="logged-logo"
            src="https://www.beams.world/Assets/images/logo.png"
            alt=""
            onClick={() => {
              navigate("/");
            }}
          />

          <div className="bandacont">
            <div
              className="navaccoutholder"
              onClick={() => {
                setDropdown(!dropdown);
              }}
              ref={dropdownRef}
            >
              {user.Profilepic?.url ? (
                <img src={API_Photo + user.Profilepic.url} alt="" />
              ) : (
                <img
                  src={
                    "https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
                  }
                  alt=""
                />
              )}

              <span>
                {user ? (user.name === null ? user.username : user.name) : ""}
              </span>
              <BsChevronDown />
              <div
                className={
                  dropdown ? "accountdropdown accountdropdowndisplay" : "accountdropdown"
                }
              >
                <div
                  className="accountdropdownitems"
                  onClick={() => {
                    navigate("/beams");
                  }}
                >
                  <FcHome />
                  <span>My Home</span>
                </div>
                <div className="accountdropdownitems" onClick={() => navigate(`/profile`)}>
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
                    sessionStorage.removeItem("uid");
                    removeCookie("loggedIn");
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
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};
