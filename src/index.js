import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Navbar } from "./models/navbar/Navbar";
import { Resetpass } from "./pages/ResetPass/Resetpass";
import { Signup } from "./pages/SignUp/Signup";
import { Beams } from "./pages/Beams/Beams";
import { LoggedinNav } from "./models/LoggedinNav/LoggedinNav";
import { Footer } from "./models/footer/Footer";
import { Maxbeams } from "./pages/Maxbeams/Maxbeams";
import { Minibeams } from "./pages/Minibeams/Minibeams";
import { Maxbeampage } from "./pages/Maxbeampage/Maxbeampage";
import { Maxbeamsong } from "./pages/Maxbeamsong/Maxbeamsong";
import { Aboutus } from "./pages/Aboutus/Aboutus";
import { Library } from "./pages/Library/Library";
import { Favourites } from "./pages/Library/Favourites";
import { Completed } from "./pages/Library/Completed";
import { Notes } from "./pages/Library/Notes";
import AuthProvider from "./AuthProvider/AuthProvider";
import { Products } from "./pages/Products/Products";
import { Redirectionpage } from "./pages/Redirectionpage/Redirectionpage";
import { Contact } from "./pages/ContactUs/Contact";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />
	},
	{
		path: "/login",
		element: (
			<div>
				<Navbar />
				<Login />
			</div>
		)
	},
	{
		path: "/signup",
		element: (
			<div>
				<Navbar />
				<Signup />
			</div>
		)
	},
	{
		path: "/resetpassword",
		element: (
			<div>
				<Navbar />
				<Resetpass />
			</div>
		)
	},
	{
		path: "/beams",
		element: (
			<div>
				<LoggedinNav />
				<Beams />
				<Footer />
			</div>
		)
	},
	{
		path: "/maxbeams",
		element: (
			<div>
				<LoggedinNav />
				<Maxbeams />
				<Footer />
			</div>
		)
	},
	{
		path: "/minibeams",
		element: (
			<div>
				<LoggedinNav />
				<Minibeams />
				<Footer />
			</div>
		)
	},
	{
		path: "/maxbeampage/:id",
		element: (
			<div>
				<LoggedinNav />
				<Maxbeampage />
				<Footer />
			</div>
		)
	},
	{
		path: "/maxbeamsong/:id",
		element: (
			<div>
				<LoggedinNav />
				<Maxbeamsong />
				<Footer />
			</div>
		)
	},
	{
		path: "/aboutus",
		element: (
			<div>
				<Navbar />
				<Aboutus />
				<Footer />
			</div>
		)
	},
	{
		path: "/hightlights",
		element: (
			<div>
				<LoggedinNav />
				<Library />
				<Footer />
			</div>
		)
	},
	{
		path: "/favourites",
		element: (
			<div>
				<LoggedinNav />
				<Favourites />
				<Footer />
			</div>
		)
	},
	{
		path: "/completed",
		element: (
			<div>
				<LoggedinNav />
				<Completed />
				<Footer />
			</div>
		)
	},
	{
		path: "/notes",
		element: (
			<div>
				<LoggedinNav />
				<Notes />
				<Footer />
			</div>
		)
	},
	{
		path: "/products",
		element: (
			<div>
				<Navbar />
				<Products />
				<Footer />
			</div>
		)
	},
	{
		path: "/api/auth/google/callback",
		element: (
			<div>
				<Redirectionpage />
			</div>
		)
	},
	{
		path: "/Contact",
		element: (
			<div>
				<Navbar />
				<Contact />
				<Footer />
			</div>
		)
	}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
