import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Navbar } from "./models/navbar/Navbar";
import { Resetpass } from "./pages/ResetPass/Resetpass";
import { Signup } from "./pages/SignUp/Signup";
import Beams from "./pages/Beams1/Beams";
import { LoggedinNav } from "./models/LoggedinNav/LoggedinNav";
import { Newsletter } from "./Footer/Newsletter";
import { Footer } from "./Footer/Footer";
import { Maxbeams } from "./pages/Maxbeams/Maxbeams";
import { Maxbeampage } from "./pages/Maxbeampage/Maxbeampage";
import { Maxbeamsong } from "./pages/Maxbeamsong/Maxbeamsong";
import Aboutus from "./pages/About-us/About";
import { Library } from "./pages/Library/Library";
import { Favourites } from "./pages/Library/Favourites";
import { Completed } from "./pages/Library/Completed";
import { Notes } from "./pages/Library/Notes";
import AuthProvider from "./AuthProvider/AuthProvider";
import { Redirectionpage } from "./pages/Redirectionpage/Redirectionpage";
import Contact from "./pages/Contact-us/Contactus";
import { Emailverification } from "./pages/Emailverification/Emailverification";
import { Resetpass2 } from "./pages/ResetPass2/Resetpass2";
import { VerificationSuccess } from "./pages/Login/VerificationSuccess";
import { ResetSuccessfull } from "./pages/ResetPass2/ResetSuccessfull";
import { MaxbeamRead } from "./pages/MaxbeamsRead/MaxbeamRead";
import { UserProfile } from "./pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import ScrollToTop from "./ScrollToTop";
import { Termsandconditions } from "./pages/TermandConditions/TermsandConditions";
import { PrivacyPolicies } from "./pages/PrivacyPolicies/PrivacyPolicies";
import LandingPage from "./pages/Landing Page/LandingPage";
import ArticleRead from "./pages/ArticleRead/ArticleRead";
import ArticleRead1 from "./pages/ArticleRead/ArticleRead1";
import ArticleDescription from "./pages/ArticleDescription/ArticleDescription";

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
        <Navbar />
        <LandingPage />
        <Newsletter />
        <Footer />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <ScrollToTop />
        <Navbar />
        <Login />
      </div>
    ),
  },
  {
    path: "/signup",
    element: (
      <div>
        <ScrollToTop />
        <Navbar />
        <Signup />
      </div>
    ),
  },
  {
    path: "/resetpassword",
    element: (
      <div>
        <ScrollToTop />
        <Navbar />
        <Resetpass />
      </div>
    ),
  },
  {
    path: "/resetpass",
    element: (
      <div>
        <ScrollToTop />
        <Navbar />
        <Resetpass2 />
      </div>
    ),
  },
  {
    path: "/beams/:id",
    element: (
      <PrivateRoute>
        <div>
          <ScrollToTop />
          <LoggedinNav />
          <Beams />
          <Footer />
        </div>
      </PrivateRoute>
    ),
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
    ),
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
					<Footer/>
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
					<Footer/>
				</div>
			</PrivateRoute>
		)
	},

	{
		path: "/maxbeampage/:id",
		element: (
			<div>
				<ScrollToTop />
				<LoggedinNav />
				<Maxbeampage />
				<Footer/>
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
				<Footer/>
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
				<Newsletter/>
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
				<Footer/>
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
				<Footer/>
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
				<Footer/>
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
				<Footer/>
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
		path: "/contact",
		element: (
			<div>
				<ScrollToTop />
				<Navbar />
				<Contact />
				<Newsletter/>
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
	// {
	// 	path: "/articleread1",
	// 	element: (
	// 		<div>
	// 			<ScrollToTop />
	// 			<Navbar />
	// 			<ArticleRead1/>
	// 			<Footer/>
	// 		</div>
	// 	)
	// },
	{
		path: "/articleread1/",
		element: (
			<div>
				<ScrollToTop />
				<Navbar />
				<ArticleRead1/>
				<Footer/>
			</div>
		)
	},
	{
		path: "/articleread/:id",
		element: (
			<div>
				<ScrollToTop />
				<Navbar />
				<ArticleRead/>
				<Footer/>
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
				<Footer/>
			</div>
		)
	},
	{
		path: "/terms-of-service",
		element: (
			<div>
				<ScrollToTop />
				<Navbar />
				<Termsandconditions />
				<Footer/>
			</div>
		)
	},
	{
		path: "/privacy-policy",
		element: (
			<div>
				<ScrollToTop />
				<Navbar />
				<PrivacyPolicies />
				<Footer/>
		
			</div>
		)
	},
	{
		path: "/profile/:id",
		element: (
			<div>
				<ScrollToTop />
				<LoggedinNav />
				<UserProfile />
				<Footer/>
			</div>
		)
	},
	{
		path: "/article-description/:id",
		element: (
			<div>
				<ScrollToTop />
				<LoggedinNav />
				<ArticleDescription />
				<Footer/>
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
