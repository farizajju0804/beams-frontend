
import LandingPage from "./pages/Landing Page/LandingPage";
import ScrollToTop from "./ScrollToTop";
import "./App.css"
import { CookiesProvider } from "react-cookie";
import ReactGA from "react-ga4";
// sample comment
function App() {
	ReactGA.initialize("G-KT4TNN89SS");
	return (
		<CookiesProvider>

		<div className="App">
		   <ScrollToTop />
			<LandingPage/>
		</div>

		</CookiesProvider>

	);
}

export default App;
