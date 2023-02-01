import React, { useState } from "react";
import { API, BEARER } from "../constants";
import { useEffect } from "react";
import { getToken } from "../helpers";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";

const AuthProvider = ({ children }) => {
	const [userData, setUserData] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [Favourites, setFavourites] = useState([]);
	const [highlightedText, setHighlightedText] = useState([]);
	const [Notes, setNotes] = useState([]);
	const authToken = getToken();

	//Favourites

	const pushfav = async (item) => {
		const data = await fetch(`${API}/users/${userData.id}`, {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${authToken}`,
				"Content-Type": "application/json"
			},

			body: JSON.stringify({
				Favourites: item
			})
		})
			.then((res) => res.json())
			.then((e) => {
				console.log(e);
			});
	};

	const addFavourites = (item) => {
		var itemstatus = false;

		Favourites.forEach((fav) => {
			if (fav.idofbeam === item.idofbeam) {
				itemstatus = true;
			}
		});

		if (itemstatus === false) {
			pushfav([...Favourites, item]);
			setFavourites([...Favourites, item]);
			toast.success("Beam Added to Favourites");
		} else {
			toast.error("Beam Already In Favourites");
		}
	};

	const deleteFavourites = (item) => {
		const filteredfavs = Favourites.filter((e) => {
			return e.idofbeam != item.idofbeam;
		});

		setFavourites(filteredfavs);
		pushfav(filteredfavs);
		toast.success("Beam Removed from Favourites");
	};

	//Favourites

	//Highlights

	const pushHighlights = async (highlightitem) => {
		const data = await fetch(`${API}/users/${userData.id}`, {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${authToken}`,
				"Content-Type": "application/json"
			},

			body: JSON.stringify({
				Highlights: highlightitem
			})
		})
			.then((res) => res.json())
			.then((e) => {
				console.log(e);
			});
	};

	const addHighlights = async (highlightitem) => {
		setHighlightedText([...highlightedText, highlightitem]);
		var highlightadded = [...highlightedText, highlightitem];
		pushHighlights(highlightadded);
	};

	const delhighlight = (id) => {
		console.log(id);
		const newhightlights = highlightedText.filter((highlight) => {
			if (highlight.id === id) {
				return false;
			} else {
				return true;
			}
		});

		console.log(newhightlights);

		setHighlightedText(newhightlights);
		toast.promise(pushHighlights(newhightlights), {
			loading: "Deleting Highlight",
			success: <b>Highlight Deleted</b>,
			error: <b>Could not delete hightlight.</b>
		});
	};

	//Highlights

	//Notes

	const AddtoNotes = (BeamName, BeamId, BeamType, NoteItem) => {
		const newnote = {
			BeamName,
			Beamid: BeamId,
			Beamtype: BeamType,
			NoteContent: NoteItem.content,
			Date: NoteItem.date
		};

		setNotes([...Notes, newnote]);
		toast.promise(pushNotes([...Notes, newnote]), {
			loading: "Adding Note",
			success: <b>Note Added</b>,
			error: <b>Could not delete note.</b>
		});
	};

	const delnote1 = (id) => {
		const newnote = Notes.filter((note) => {
			return note.id != id;
		});

		setNotes(newnote);
		toast.promise(pushNotes(newnote), {
			loading: "Deleting Note",
			success: <b>Note Deleted</b>,
			error: <b>Could not delete note.</b>
		});
	};

	const pushNotes = async (item) => {
		const data = await fetch(`${API}/users/${userData.id}`, {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${authToken}`,
				"Content-Type": "application/json"
			},

			body: JSON.stringify({
				Notes: item
			})
		})
			.then((res) => res.json())
			.then((e) => {});
	};

	//Notes

	const fetchLoggedInUser = async (token) => {
		setIsLoading(true);
		try {
			const response = await fetch(`${API}/users/me?populate=*`, {
				headers: { Authorization: `${BEARER} ${token}` }
			});
			const data = await response.json();
			setUserData(data);
			setFavourites(data.Favourites);
			setNotes(data.Notes);
			setHighlightedText(data.Highlights);
			console.log("datafound");
		} catch (error) {
			console.error(error);
			alert("Error While Getting Logged In User Details");
		} finally {
			setIsLoading(false);
		}
	};

	const handleUser = (user) => {
		setUserData(user);
	};

	useEffect(() => {
		if (authToken) {
			fetchLoggedInUser(authToken);
			return;
		}
	}, [authToken]);

	return (
		<AuthContext.Provider
			value={{
				user: userData,
				setUser: handleUser,
				isLoading,
				token: authToken,
				favourites: Favourites,
				addfav: addFavourites,
				delfav: deleteFavourites,
				notes: Notes,
				addnotes: AddtoNotes,
				delfullnote: delnote1,
				hightlights: highlightedText,
				setHighlights: addHighlights,
				delhighlight: delhighlight
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
