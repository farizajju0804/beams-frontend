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
	}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
