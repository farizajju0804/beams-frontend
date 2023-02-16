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
import { Emailverification } from "./pages/Emailverification/Emailverification";
import { Resetpass2 } from "./pages/ResetPass2/Resetpass2";
import { VerificationSuccess } from "./pages/Login/VerificationSuccess";
import { ResetSuccessfull } from "./pages/ResetPass2/ResetSuccessfull";
import { MaxbeamRead } from "./pages/MaxbeamsRead/MaxbeamRead";
import { UserProfile } from "./pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import { Maxbeamslideshow } from "./pages/Maxbeamslideshow/Maxbeamslideshow";
import ScrollToTop from "./ScrollToTop";
import { Termsandconditions } from "./pages/TermandConditions/TermsandConditions";
import { PrivacyPolicies } from "./pages/PrivacyPolicies/PrivacyPolicies";
import { LoggedInfooter } from "./models/LoggedInfooter/LoggedInfooter";


const router = createBrowserRouter([
	// {
	// 	path: "/",
	// 	element:
	// },
	{
		path: "/",
		element: (
			<div>
				<ScrollToTop />
				<App />
			</div>
		)
	},
	{
		path: "/login",
		element: (
			<div>
				<ScrollToTop />
				<Navbar />
				<Login />
			</div>
		)
	},
	{
		path: "/signup",
		element: (
			<div>
				<ScrollToTop />
				<Navbar />
				<Signup />
			</div>
		)
	},
	{
		path: "/resetpassword",
		element: (
			<div>
				<ScrollToTop />
				<Navbar />
				<Resetpass />
			</div>
		)
	},
	{
		path: "/resetpass",
		element: (
			<div>
				<ScrollToTop />
				<Navbar />
				<Resetpass2 />
			</div>
		)
	},
	{
		path: "/beams",
		element: (
			<div>
				<ScrollToTop />
				<LoggedinNav />
				<Beams />
				<LoggedInfooter />
			</div>
		)
	},
	{
		path: "/maxbeams",
		element: (
			<PrivateRoute>
				<div>
					<ScrollToTop />
					<LoggedinNav />
					<Maxbeams />
					<Footer />
				</div>
			</PrivateRoute>
		)
	},
	{
		path: "/minibeams",
		element: (
			<div>
				<ScrollToTop />
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
				<ScrollToTop />
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
				<ScrollToTop />
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
				<ScrollToTop />
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
				<ScrollToTop />
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
				<ScrollToTop />
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
				<ScrollToTop />
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
				<ScrollToTop />
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
				<ScrollToTop />
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
				<ScrollToTop />
				<Redirectionpage />
			</div>
		)
	},
	{
		path: "/Contact",
		element: (
			<div>
				<ScrollToTop />
				<Navbar />
				<Contact />
				<Footer />
			</div>
		)
	},
	{
		path: "/emailverification/:email",
		element: (
			<div>
				<ScrollToTop />
				<Navbar />
				<Emailverification />
			</div>
		)
	},
	{
		path: "/verificationsuccess",
		element: (
			<div>
				<ScrollToTop />
				<Navbar />
				<VerificationSuccess />
			</div>
		)
	},
	{
		path: "/resetsuccessful",
		element: (
			<div>
				<ScrollToTop />
				<Navbar />
				<ResetSuccessfull />
			</div>
		)
	},
	{
		path: "/maxbeamread/:id",
		element: (
			<div>
				<ScrollToTop />
				<LoggedinNav />
				<MaxbeamRead />
				<Footer></Footer>
			</div>
		)
	},
	{
		path: "/termsandcondition",
		element: (
			<div>
				<ScrollToTop />
				<Navbar />
				<Termsandconditions />
				<Footer></Footer>
			</div>
		)
	},
	{
		path: "/privacypolicy",
		element: (
			<div>
				<ScrollToTop />
				<Navbar />
				<PrivacyPolicies />
				<Footer></Footer>
			</div>
		)
	},
	{
		path: "/profile",
		element: (
			<div>
				<ScrollToTop />
				<LoggedinNav />
				<UserProfile />
				<Footer></Footer>
			</div>
		)
	},
	{
		path: "/maxbeamslideshow",
		element: (
			<div>
				<ScrollToTop />
				<LoggedinNav />
				<Maxbeamslideshow />
				<Footer></Footer>
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
