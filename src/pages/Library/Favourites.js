import React, { useState,useContext, useEffect } from "react";
import libcompleted from "../../assets/libcompleted.png";
import libfav from "../../assets/libfav.png";
import libnotes from "../../assets/libnotes.png";
import libhighlight from "../../assets/libhighlights.png";
import { FavouritesCard } from "../../models/FavouritesCard/FavouritesCard";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import nofav from "../../assets/nofav.png";
import { FiChevronDown } from "react-icons/fi";
import Pagination from "@mui/material/Pagination";
import { Toaster } from "react-hot-toast";
import "./Library.css";
import Favouritescard2 from "../../models/Favouritescard2/Favouritescard2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import TrendingCard from "../../models/TrendingCard/TrendingCard";
import { API } from "../../constants";
export const Favourites = () => {
	const navigate = useNavigate();
	const { favourites, favpersist, changefav,user } = useContext(AuthContext);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsperpage, setPostsperpage] = useState(6);
	const indexoflast = currentPage * postsperpage;
	const indexoffirst = indexoflast - postsperpage;
	const [sortop, setSortop] = useState(2);
	const [favouriteData,setFavouriteData]=useState([])
	console.log(favourites);
	useEffect(()=>{
		fetch(`${API}/users/${user.id}?populate=*`).then((res) => res.json())
        .then((data)=>{
          	const userFavs=data.Favourites.map((el)=>el.articleId)
			fetch(`${API}/descriptions?populate=*`).then((res) => res.json())
			.then((res)=>{
				console.log("favs",res.data.filter((article)=>userFavs.includes(article.attributes.articleId)))
				const favouriteCards=res.data.filter((article)=>userFavs.includes(article.attributes.articleId))
				.map((el)=>{
					return {
						img:el.attributes.articleDescriptionImg,
						title:el.attributes.articleDescriptionTitle,
						desc:el.attributes.artilceDescriptionText,
						idofbeam:el.attributes.articleId
					}
				}
					)
					setFavouriteData(favouriteCards)
			})
		  })
	},[favourites])
	return (
		<>
		{
			favouriteData?<div className="LibraryPage">
			<Toaster />
			<div className="libraryoption">
				<div
					className="libraryopitem"
					onClick={() => {
						navigate("/favourites");
					}}
				>
					<img src={libfav} className="lbopic" />
					<span style={{ color: "#f96f2e" }}>Favourites</span>
				</div>
				<div
					className="libraryopitem"
					onClick={() => {
						navigate("/notes");
					}}
				>
					<img src={libnotes} className="lbopic" />
					<span>Notes </span>
				</div>
				{/* <div
					className="libraryopitem"
					onClick={() => {
						navigate("/hightlights");
					}}
				>
					<img src={libhighlight} className="lbopic" />
					<span>Highlights</span>
				</div> */}
			</div>
			<div className="opandfildivider"></div>
			{/* <div className="filteroption">
				<div className="libraryopitem">
					{" "}
					<select
						name=""
						id=""
						style={{ paddingRight: "40px" }}
						onChange={(e) => {
							if (e.target.value == "All Beam") {
								changefav(favpersist);
							} else {
								const sorter = favpersist.filter((h) => {
									return h.typeofbeam == e.target.value;
								});

								changefav(sorter);
							}
						}}
					>
						<option disabled defaultValue={""}>
							Title
						</option>
						<option value="All Beam">All Beams</option>
						<option value="Microbeam">Micro Beams</option>
						<option value="Minibeam">Mini Beams</option>
					</select>
					<FiChevronDown className="arrowselectposition" />
				</div>

				<div className="libraryopitem">
					<span style={{ color: "black" }}>Sort By</span>
					<select
						name=""
						id=""
						onChange={(e) => {
							// console.log(e.target.value);
							setSortop(e.target.value);
						}}
						style={{ paddingRight: "40px" }}
					>
						<option defaultValue={2} value={2}>
							Latest
						</option>
						<option value={0}>A-Z</option>
						<option value={1}>Z-A</option>
					</select>
					<FiChevronDown className="arrowselectposition" />
				</div>
			</div> */}
			{favourites.length != 0 ? (
				<div className="gridwrapper">
						<div className="highlightdata fwrap">
							{favouriteData
								.map((e) => {
										return (
											<FavouritesCard
												{...e}
											></FavouritesCard>
										);
								})
							}
						</div>
				</div>
			) : (
				<div
					style={{
						width: "100%",
						justifyContent: "center",
						alignItems: "center",
						display: "flex",
						flexDirection: "column",
						marginTop: "50px"
					}}
					className="nodatadiv"
				>
					<img src={nofav} alt="" />
					<h2 style={{ marginTop: "30px", fontSize: "30px" }}>
					❤️ Oh no! Your favorites are feeling shy today! ❤️
					</h2>
					<p style={{ marginTop: "20px" }}>
					They'll be back with more love soon! 💖
					</p>
				</div>
			)}
			<div className="pagination">
				<Pagination
					shape="rounded"
					count={Math.ceil(favourites.length / postsperpage)}
					onChange={(e, page) => {
						setCurrentPage(page);
					}}
				/>
			</div>
		</div>:
		<p>loading</p>
		}
		
		</>
	);
};
