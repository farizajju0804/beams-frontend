import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Navbar } from "./models/navbar/Navbar";
import { Resetpass } from "./pages/ResetPass/Resetpass";
import { Signup } from "./pages/SignUp/Signup";

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
	}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
