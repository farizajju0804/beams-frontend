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
// import { Maxbeams } from "./pages/Maxbeams/Maxbeams";
// import { Maxbeampage } from "./pages/Maxbeampage/Maxbeampage";
import { Maxbeamsong } from "./pages/Maxbeamsong/Maxbeamsong";
import Aboutus from "./pages/About-us/About";
// import { Library } from "./pages/Library/Library";
import { Favourites } from "./pages/Library/Favourites";
// import { Completed } from "./pages/Library/Completed";
import { Notes } from "./pages/Library/Notes";
import AuthProvider from "./AuthProvider/AuthProvider";
import { Redirectionpage } from "./pages/Redirectionpage/Redirectionpage";
import Contact from "./pages/Contact-us/Contactus";
import { Emailverification } from "./pages/Emailverification/Emailverification";
import { Resetpass2 } from "./pages/ResetPass2/Resetpass2";
import { VerificationSuccess } from "./pages/Login/VerificationSuccess";
import { ResetSuccessfull } from "./pages/ResetPass2/ResetSuccessfull";
// import { MaxbeamRead } from "./pages/MaxbeamsRead/MaxbeamRead";
import { UserProfile } from "./pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import ScrollToTop from "./ScrollToTop";
import { Termsandconditions } from "./pages/TermandConditions/TermsandConditions";
import { PrivacyPolicies } from "./pages/PrivacyPolicies/PrivacyPolicies";
import LandingPage from "./pages/Landing Page/LandingPage";
import ArticleRead from "./pages/ArticleRead/ArticleRead";
// import ArticleRead1 from "./pages/ArticleRead/ArticleRead1";
import ArticleDescription from "./pages/ArticleDescription/ArticleDescription";
import { Cookies } from "react-cookie";
import Slideshows from "./pages/Slideshows/Slideshows";
import ViewSlideshow from "./pages/View-Slideshow/Viewslideshow";
import Stories from "./pages/Stories/Stories"
import Viewstory from "./pages/View-Story/Viewstory";
import Viewdoyouknow from "./pages/View-Doyouknow/Viewdoyouknow";
import Doyouknows from "./pages/Doyouknows/Doyouknows";

const cookies=new Cookies();
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
        {/* <Newsletter /> */}
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
    path: "/beams",
    element: (
      <PrivateRoute>
        <div>
          <ScrollToTop />
		<Navbar />
          <Beams />
          <Footer />
        </div>
      </PrivateRoute>
    ),
  },
//   {
//     path: "/maxbeams",
//     element: (
//       <PrivateRoute>
//         <div>
//           <ScrollToTop />
//           <LoggedinNav />
//           <Maxbeams />
//           <Footer />
//         </div>
//       </PrivateRoute>
//     ),
//   },

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
			<PrivateRoute>
				<div>
					<ScrollToTop />
					<Navbar />
					<Beams />
					<Footer/>
				</div>
			</PrivateRoute>
			
		)
	},
	{
		path: "/beams-slideshows",
		element: (
		     <PrivateRoute>
				<div>
					<ScrollToTop />
					<Navbar />
					<Slideshows/>
					<Footer/>
				</div>
			</PrivateRoute>
			
		)
	},
	{
		path: "/beams-wonderland",
		element: (
		<PrivateRoute>
				<div>
					<ScrollToTop />
					<Navbar />
					<Doyouknows/>
					<Footer/>
				</div>
			</PrivateRoute>
			
		)
	},
	{
		path: "/beams-storyland",
		element: (
		<PrivateRoute>
				<div>
					<ScrollToTop />
					<Navbar />
					<Stories/>
					<Footer/>
				</div>
			</PrivateRoute>
			
		)
	},
	{
		path: "/view-slideshow",
		element: (
			<PrivateRoute>
				<div>
					<ScrollToTop />
					<Navbar />
					<ViewSlideshow/>
					<Footer/>
				</div>
			</PrivateRoute>
			
		)
	},
	{
		path: "/view-doyouknow",
		element: (
			<PrivateRoute>
				<div>
					<ScrollToTop />
					<Navbar />
					<Viewdoyouknow/>
					<Footer/>
				</div>
			</PrivateRoute>
			
		)
	},
	{
		path: "/view-story",
		element: (
		<PrivateRoute>
				<div>
					<ScrollToTop />
					<Navbar />
					<Viewstory/>
					<Footer/>
				</div>
			</PrivateRoute>
			
		)
	},
	
	// {
	// 	path: "/maxbeams",
	// 	element: (
	// 		<PrivateRoute>
	// 			<div>
	// 				<ScrollToTop />
	// 				<LoggedinNav />
	// 				<Maxbeams />
	// 				<Footer/>
	// 			</div>
	// 		</PrivateRoute>
	// 	)
	// },

	// {
	// 	path: "/maxbeampage/:id",
	// 	element: (
	// 		<div>
	// 			<ScrollToTop />
	// 			<LoggedinNav />
	// 			<Maxbeampage />
	// 			<Footer/>
	// 		</div>
	// 	)
	// },
	{
		path: "/maxbeamsong/:id",
		element: (
			<PrivateRoute>
			<div>
				<ScrollToTop />
				<Navbar />
				<Maxbeamsong />
				<Footer/>
			</div>
			</PrivateRoute>
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
	// {
	// 	path: "/hightlights",
	// 	element: (
	// 		<div>
	// 			<ScrollToTop />
	// 			<LoggedinNav />
	// 			<Library />
	// 			<Footer/>
	// 		</div>
	// 	)
	// },
	{
		path: "/favourites",
		element: (
			<PrivateRoute>
			<div>
				<ScrollToTop />
				<Navbar />
				<Favourites />
				<Footer/>
			</div>
			</PrivateRoute>
		)
	},
	// {
	// 	path: "/completed",
	// 	element: (
	// 		<div>
	// 			<ScrollToTop />
	// 			<LoggedinNav />
	// 			<Completed />
	// 			<Footer/>
	// 		</div>
	// 	)
	// },
	{
		path: "/notes",
		element: (
			<PrivateRoute>
			<div>
				<ScrollToTop />
				<Navbar />
				<Notes />
				<Footer/>
			</div>
			</PrivateRoute>
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
	// {
	// 	path: "/articleread1/",
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
		path: "/articleread/:id",
		element: (
			<PrivateRoute>
			<div>
				<ScrollToTop />
				<Navbar />
				<ArticleRead/>
				<Footer/>
			</div>
			</PrivateRoute>
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
	// {
	// 	path: "/maxbeamread/:id",
	// 	element: (
	// 		<div>
	// 			<ScrollToTop />
	// 			<LoggedinNav />
	// 			<MaxbeamRead />
	// 			<Footer/>
	// 		</div>
	// 	)
	// },
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
		path: "/profile",
		element: (
			<div>
				<ScrollToTop />
				<Navbar />
				<UserProfile />
				<Footer/>
			</div>
		)
	},
	{
		path: "/article-description/:id",
		element: (
			<PrivateRoute>
			<div>
				<ScrollToTop />
				<Navbar />
				<ArticleDescription />
				<Footer/>
			</div>
			</PrivateRoute>
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
