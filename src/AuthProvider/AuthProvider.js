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

	//Notes
	const fetchnotes = async (token) => {
		setIsLoading(true);
		try {
			const response = await fetch(
				`${API}/users/me?populate[Notes][populate]=*`,
				{
					headers: { Authorization: `${BEARER} ${token}` }
				}
			);
			const data = await response.json();
			// console.log(data);
			setNotes(data.Notes);
		} catch (error) {
			console.error(error);
			alert("Error While Getting Notes");
		} finally {
			setIsLoading(false);
		}
	};

	const AddtoNotes = (BeamName, BeamId, BeamType, NoteItem) => {
		var NotetopicPresent = false;
		Notes.map((note) => {
			if (note.Beamid === BeamId) {
				NotetopicPresent = true;
				note.Noteitem = [
					...note.Noteitem,
					{
						NoteContent: NoteItem.content,
						Date: NoteItem.date
					}
				];
				return note;
			}
		});

		if (NotetopicPresent === false) {
			var newNote = [
				...Notes,
				{
					BeamName: BeamName,
					Beamid: BeamId,
					Beamtype: BeamType,
					Noteitem: [
						{
							NoteContent: NoteItem.content,
							Date: NoteItem.date
						}
					]
				}
			];

			setNotes(newNote);

			toast.promise(pushNotes(newNote), {
				loading: "Saving Note",
				success: <b>Note Saved</b>,
				error: <b>Could not save note.</b>
			});
		} else {
			setNotes(Notes);
			toast.promise(pushNotes(Notes), {
				loading: "Saving Note",
				success: <b>Note Saved</b>,
				error: <b>Could not save note.</b>
			});
		}
	};

	const delnote1 = (beamId) => {
		const newnote = Notes.filter((note) => {
			return note.Beamid != beamId;
		});

		setNotes(newnote);
		toast.promise(pushNotes(newnote), {
			loading: "Deleting Notes",
			success: <b>Notes Deleted</b>,
			error: <b>Could not delete note.</b>
		});
	};

	const delnote2 = (beamId, noteitemid) => {
		var is1 = false;
		var mocknote = Notes;
		mocknote.map((note) => {
			if (note.Beamid === beamId) {
				if (note.Noteitem.length === 1) {
					console.log(note.Noteitem.length);
					is1 = true;
					delnote1(beamId);
				} else {
					note.Noteitem = note.Noteitem.filter((noteitem) => {
						return noteitem.id != noteitemid;
					});
				}

				return note;
			}
		});

		// var newnote = Notes;
		// setNotes(newnote);
		// console.log(newnote);

		if (!is1) {
			setNotes(mocknote);
			// console.log(Notes);
			toast.promise(pushNotes(mocknote), {
				loading: "Deleting Note",
				success: <b>Note Deleted</b>,
				error: <b>Could not delete note.</b>
			});
			window.location.reload(false);
		}
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
			// console.log(data);
			setUserData(data);
			setFavourites(data.Favourites);
			setNotes(data.Notes);
			console.log("datafound");
			// console.log(Favourites);
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
			fetchnotes(authToken);
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
				delinnernote: delnote2
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
