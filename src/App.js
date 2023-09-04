
import LandingPage from "./pages/Landing Page/LandingPage";
import ScrollToTop from "./ScrollToTop";
import "./App.css"
import { CookiesProvider } from "react-cookie";

function App() {

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
