import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import About from "./About/About";

const AppRoute = () => {
	return (
		<Routes>
			<Route path={"/"} element={<HomePage />} />
			<Route path={"/about"} element={ <About/>} />
		</Routes>
	)
}

export default AppRoute;