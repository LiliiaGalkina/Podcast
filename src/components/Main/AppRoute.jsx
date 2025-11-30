import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import About from "./About/About";
import Blog from "./Blog/Blog";
import EpisodesPage from "./Episodes/EpisodesPage";
import NewsItemContent from "./News/Newsitemcontent";
import EpisodContent from "./Episodes/EpisodContent";
import PrisingPage from "./Prising/PrisingPage";

const AppRoute = ({ pricing, feedback, benefits }) => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <HomePage
            feedback={feedback}
            benefits={benefits}
          />
        }
      />
      <Route path={"/about"} element={<About />} />
		  <Route path={"/blog"} element={<Blog />} />
		  <Route path={"/episodes"} element={<EpisodesPage/> } />
		  <Route path={`/:elemId`} element={<NewsItemContent />} />
		  <Route path={`/episodes/:elemId`} element={<EpisodContent />} />
		  <Route path="/prising" element={<PrisingPage/> } />
    </Routes>
  );
};

export default AppRoute;
