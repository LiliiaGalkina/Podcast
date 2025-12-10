import style from "./homepage.module.scss";
import allstyle from "../allstyles.module.scss";
import HomePageSlider from "./HomePageSlider";
import HomePageFeedbackSlider from "./FeedbackSlider/HomePageFeedbackSlider";
import Buttondark from "../../Button/Buttondark";
import DownloadApp from "../DownloadApp/DownloadApp";
import News from "../News/News";
import Pricing from "../Prising/Pricing";
import Episodes from "../Episodes/Episodes";
import Benefits from "../Benefits/Benefits";
import TalkListen from "../TalkListen/TalkListen";
import { Link } from "react-router-dom";

const HomePage = ({ pricing, feedback, benefits }) => {
  return (
    <main className={style.main}>
      <section className={allstyle.hero}>
        <h1 className={allstyle.herotitle}>
          Your Daily <p className={allstyle.herotitlered}>Podcast</p>
        </h1>
        <p className={allstyle.herotext}>
          We cover all kinds of categories and a weekly special guest.
        </p>
        <div className={allstyle.herobutton}>
          <Buttondark buttonText="SUBSCRIBE" />
        </div>
        <div className={style.heroslider}>
          <HomePageSlider />
        </div>
        <div className="container">
          <div className={style.herolinks}>
            <p className={style.herolinkstitle}>Supported by:</p>
            <a href="#" className={style.herolink}>
              <img src="/Podcast/image/homepage/spotify.png" alt="spotify" />
            </a>
            <a href="#" className={style.herolink}>
              <img
                src="/Podcast/image/homepage/googlepodcasts.png"
                alt="google podcasts"
              />
            </a>
            <a href="#" className={style.herolink}>
              <img src="/Podcast/image/homepage/youtube.png" alt="youtube" />
            </a>
          </div>
        </div>
        <div className={allstyle.herodecorleft}>
          <img
            src="/Podcast/image/homepage/hero-decor1.png"
            alt="черная кривая с оранжевой звездочкой на конце"
          />
        </div>
        <div className={allstyle.herodecorright}>
          <img
            src="/Podcast/image/homepage/hero-decor2.png"
            alt="несколько разноцветных звездочек"
          />
        </div>
        <div className={allstyle.sectiondecordown}>
          <img src="/Podcast/image/reddecorsection.png" alt="красная кривая" />
        </div>
      </section>
      <TalkListen />
      <section ref={feedback} className={style.feedback}>
        <div className={style.feedbacktitleblock}>
          <h2 className={allstyle.sectiontitle}>What our listeners say</h2>
          <img
            src="/Podcast/image/homepage/sparkle.png"
            className={style.feedbacktitledecor}
            alt="красное солнышко"
          />
        </div>
        <p className={allstyle.sectiontext}>
          Their experience throughout every platform
        </p>
        <HomePageFeedbackSlider />
        <div className={allstyle.sectiondecordown}>
          <img src="/Podcast/image/blackdecorsection.png" alt="черная кривая" />
        </div>
      </section>
      <Benefits benefits={benefits} />
      <section className={style.episodes}>
        <div className="container">
          <h2 className={allstyle.sectiontitle}>Recent Episodes</h2>
          <p className={allstyle.sectiontext}>
            Available on your favorite platform
          </p>
          <Episodes count={2} />
          <Link to="/episodes" className={style.button}>
            <Buttondark buttonText="BROWSE ALL EPISODES" />
          </Link>
          <div className={allstyle.sectiondecordown}>
            <img
              src="/Podcast/image/blackdecorsection.png"
              alt="черная кривая"
            />
          </div>
        </div>
      </section>
      <Pricing pricing={pricing} />
      <News />
      <DownloadApp />
    </main>
  );
};

export default HomePage;
