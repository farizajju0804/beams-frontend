import React, { useContext, useState } from "react";
import "./Maxbeamscard.css";
import maxbeammock from "../../assets/maxbeammock.png";
import { useNavigate } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { SlNote } from "react-icons/sl";
import { AiOutlineCloseCircle, AiOutlineShareAlt, AiFillHeart } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useAuthContext } from "../../context/AuthContext";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export const FavouritesCard = ({ completed, key, title, Desc, typeofbeam, idofbeam,img }) => {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const { delfav } = useContext(AuthContext);

  return (
    <div
      className="maxbeamcardcont"
      onClick={() => {
        setDropdown(false);
      }}
    >
      <div className="maxcardimg">
      <img src={"http://localhost:1337"+img.data.attributes.url} alt=""/>
      </div>
      <div className="maxbeamdata">
        <h3>{title}</h3>
        <div
          style={{
            width: "100%",
            height: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ marginTop: "15px", marginBottom: "15px" }}>{Desc}</p>
        </div>
        <button
          onClick={() => {
              navigate(`/articleread/${idofbeam}`)  
          }}
        >
          Read Now
        </button>
      </div>
      {/* <BiDotsVerticalRounded
        className="favcard3dots"
        color="black"
        fontSize={22}
        onClick={(e) => {
          e.stopPropagation();
          setDropdown(!dropdown);
        }}
      ></BiDotsVerticalRounded> */}
      

    
        {/* <AiOutlineCloseCircle
          color="red"
          className="closeminicard"
          size={20}
          onClick={() => {
            setDropdown(false);
          }}
        /> */}

        {/* <div className="opdpitems">
          <AiOutlineShareAlt size={20} style={{ marginRight: "10px", cursor: "pointer" }} />
          <span>Share</span>
        </div> */}
        <div
          className="opdpitems"
          onClick={() => {
            delfav({
              articleId:idofbeam
            })
          }}
        >
        <RiDeleteBin5Fill size={20} style={{ cursor: "pointer" }} color={"red"} />
        </div>
      </div>
  );
};
