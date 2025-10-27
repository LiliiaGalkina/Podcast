import style from "./homepage.module.scss";
import HomePageSlider from "./HomePageSlider";
import decorleft from "/image/homepage/hero-decor1.png";
import decorright from "/image/homepage/hero-decor2.png";
import decordown from "/image/homepage/hero-decor3.png";
import google from "/image/homepage/googlepodcasts.png";
import spotify from "/image/homepage/spotify.png";
import youtube from "/image/homepage/youtube.png";
import talkman from "/image/homepage/talk-man.svg";
import talklamp from "/image/homepage/talk-lamp.svg";
import quote from "/image/homepage/quote.png";
import bannerdecor1 from "/image/homepage/banner-decor.png";
import bannerdecor2 from "/image/homepage/blackstar.png";
import banneravatar from "/image/homepage/avatar.png";
import bannergreencircle from "/image/homepage/green-circle.svg";
import redsun from "/image/homepage/sparkle.png";
import HomePageFeedbackSlider from "./HomePageFeedbackSlider";
import blackdecorsection from "/image/homepage/blackdecorsection.png";

const HomePage = () => {
  return (
    <main className={style.main}>
      <section className={style.hero}>
        <h1 className={style.herotitle}>
          Your Daily <p className={style.herotitlered}>Podcast</p>
        </h1>
        <p className={style.herotext}>
          We cover all kinds of categories and a weekly special guest.
        </p>
        <div className={style.heroslider}>
          <HomePageSlider />
        </div>
        <div className="container">
          <div className={style.herolinks}>
            <p className={style.herolinkstitle}>Supported by:</p>
            <a href="#" className={style.herolink}>
              <img src={spotify} alt="spotify" />
            </a>
            <a href="#" className={style.herolink}>
              <img src={google} alt="google podcasts" />
            </a>
            <a href="#" className={style.herolink}>
              <img src={youtube} alt="youtube" />
            </a>
          </div>
        </div>
        <div className={style.herodecorleft}>
          <img
            src={decorleft}
            alt="черная кривая с оранжевой звездочкой на конце"
          />
        </div>
        <div className={style.herodecorright}>
          <img src={decorright} alt="несколько разноцветных звездочек" />
        </div>
        <div className={style.herodecordown}>
          +
          <img src={decordown} alt="красная кривая" />
        </div>
      </section>
      <section className={style.talklisten}>
        <div className="container">
          <h2 className={style.talklistentitle}>
            Talk. Listen. Get inspired by every minute of it.
          </h2>
          <div className={style.talklistenitems}>
            <div className={style.talklistenitem}>
              <div className={style.talklistenitemimg}>
                <img
                  src={talkman}
                  alt="нарисованная голова мужчины, над ним облачко со знаками вопроса"
                />
              </div>
              <p className={style.talklistenitemtext}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio.
              </p>
            </div>
            <div className={style.talklistenitem}>
              <div className={style.talklistenitemimg}>
                <img
                  src={talklamp}
                  alt="нарисованная голова мужчины, над ним облачко со знаками вопроса"
                />
              </div>
              <p className={style.talklistenitemtext}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio.
              </p>
            </div>
          </div>
          <div className={style.talklistenbanner}>
            <div className={style.bannerquote}>
              <img src={quote} alt="красные кавычки" />
            </div>
            <h3 className={style.bannertitle}>
              One of the best daily podcasts that covers every topic on Spotify.
            </h3>
            <div className={style.bannermanblock}>
              <div className={style.banneravatar}>
                <img src={banneravatar} alt="фото John Smith" />
              </div>
              <p className={style.bannername}>John Smith,</p>
              <div className={style.bannerpositionbody}>
                <div className={style.bannergreencircle}>
                  <img
                    src={bannergreencircle}
                    alt="зеленый кружок с черными полосками"
                  />
                </div>
                <p className={style.bannerposition}>Social Community Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.feedback}>
        <div className={style.feedbacktitleblock}>
          <h2 className={style.feedbacktitle}>What our listeners say</h2>
          <img src={redsun} className={style.feedbacktitledecor} alt="красное солнышко" />
        </div>
        <p className={style.feedbacktext}>
          Their experience throughout every platform
        </p>
        <HomePageFeedbackSlider />
        <div className={style.feedbackupdecor}>
          <img src={blackdecorsection} alt="черная кривая" />
        </div>
        <div className={style.feedbackdowndecor}>
          <img src={blackdecorsection} alt="черная кривая" />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
