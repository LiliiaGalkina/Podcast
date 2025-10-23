import style from "./homepage.module.scss";
import HomePageSlider from "./HomePageSlider";
import decorleft from "/image/homepage/hero-decor1.png";
import decorright from "/image/homepage/hero-decor2.png";
import decordown from "/image/homepage/hero-decor3.png";
import google from "/image/homepage/googlepodcasts.png";
import spotify from "/image/homepage/spotify.png";
import youtube from "/image/homepage/youtube.png";

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
          <img src={decorleft} alt="черная кривая с оранжевой звездочкой на конце"/>
        </div>
        <div className={style.herodecorright}>
          <img src={decorright} alt="несколько разноцветных звездочек" />
        </div>
        <div className={style.herodecordown}>
          <img src={decordown} alt="красная кривая" />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
