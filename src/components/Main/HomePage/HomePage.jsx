import style from "./homepage.module.scss";
import allstyle from "../allstyles.module.scss";
import HomePageSlider from "./HomePageSlider";
import HomePageFeedbackSlider from "./HomePageFeedbackSlider";
import Buttondark from "../../Button/Buttondark";
import DownloadApp from "./DownloadApp";
import News from "./News";
import Pricing from "./Pricing";
import Episodes from "./Episodes";
import Benefits from "./Benefits";
import TalkListen from "./TalkListen";

const HomePage = ({episodes, pricing, feedback, benefits}) => {
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
        <div className={style.herodecordown}>
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
        <div className={style.feedbackupdecor}>
          <img src="/Podcast/image/blackdecorsection.png" alt="черная кривая" />
        </div>
        <div className={style.feedbackdowndecor}>
          <img src="/Podcast/image/blackdecorsection.png" alt="черная кривая" />
        </div>
      </section>
      <Benefits benefits={benefits} />
      <Episodes episodes={episodes} />
      <Pricing pricing={pricing} />
      <News />
      <DownloadApp />
    </main>
  );
};

export default HomePage;
