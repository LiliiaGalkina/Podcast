import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import About from "./About/About";
import Blog from "./Blog/Blog";
import NewsItemContent from "./Newsitem/Newsitemcontent";

const AppRoute = ({ episodes, pricing, feedback, benefits }) => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <HomePage
            episodes={episodes}
            pricing={pricing}
            feedback={feedback}
            benefits={benefits}
          />
        }
      />
      <Route path={"/about"} element={<About />} />
		  <Route path={"/blog"} element={<Blog />} />
		  <Route path={`/:elemId`} element={<NewsItemContent/> } />
    </Routes>
  );
};

export default AppRoute;
