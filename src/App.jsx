import "./reset.scss";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoute from "./components/Main/AppRoute";

function App() {
	return (
		<Router>
			<Header />
			<AppRoute />
			<Footer/>
		</Router>
)
}

export default App;
