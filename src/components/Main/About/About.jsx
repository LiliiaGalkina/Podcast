import allstyle from "../allstyles.module.scss";
import style from "./about.module.scss";
import Buttondark from "../../Button/Buttondark";
import Button from "../../Button/Button";
import Listenerssay from "./Listenerssay";
import AboutSponsorSlider from "./Aboutsponsorslider";
import MessageForm from "./MessageForm";
import DownloadApp from "../DownloadApp/DownloadApp";

const About = () => {
  return (
    <main>
      <section className={style.heroabout}>
        <h2 className={allstyle.herotitle}>
          About <p className={allstyle.herotitlered}>Pod of Cast</p>
        </h2>
        <p className={allstyle.herotext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam–quis.
        </p>
        <div className={style.buttons}>
          <Button buttonText="BECOME SPONSOR" />
          <Buttondark buttonText="SUBSCRIBE" />
        </div>
        <div className="container">
          <div className={style.items}>
            <div className={style.item}>
              <p className={style.digittext}>
                <span className={style.digittextred}>76</span>K
              </p>
              <p className={style.text}>Community Members</p>
            </div>
            <div className={style.item}>
              <p className={style.digittext}>
                <span className={style.digittextred}>128</span>K
              </p>
              <p className={style.text}>Podcast Subscribers</p>
            </div>
            <div className={style.item}>
              <p className={style.digittext}>
                <span className={style.digittextred}>59</span>K
              </p>
              <p className={style.text}>Daily Listeners</p>
            </div>
          </div>
        </div>
        <div className={style.herodecorred}>
          <img src="/Podcast/image/about/hero-decor.png" alt="красная кривая" />
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
      </section>
      <Listenerssay />
      <section className={style.sponsor}>
        <div className={style.sponsortitleblock}>
          <h2 className={allstyle.sectiontitle}>Our Sponsor</h2>
          <img
            src="/Podcast/image/homepage/sparkle.png"
            className={style.sponsortitledecor}
            alt="красное солнышко"
          />
        </div>
        <p className={allstyle.sectiontext}>Our current official sponsor</p>
        <AboutSponsorSlider />
        <div className={allstyle.sectiondecordown}>
          <img src="/Podcast/image/blackdecorsection.png" alt="черная кривая" />
        </div>
      </section>
      <section className={style.getintouch}>
        <div className="container">
          <div className={style.getintouchtitleblock}>
            <h2 className={allstyle.sectiontitle}>Get in touch</h2>
            <img
              src="/Podcast/image/about/getintouch-decor.png"
              className={style.getintouchtitledecor}
              alt="красное солнышко"
            />
          </div>
          <p className={allstyle.sectiontext}>Send your message to us</p>
          <MessageForm />
        </div>
        <div className={style.formdecordown}>
          <img src="/Podcast/image/reddecorsection.png" alt="красная кривая" />
        </div>
        <div className={style.formdecorleft}>
          <img src="/Podcast/image/about/hero-decor.png" alt="красная кривая" />
        </div>
        <div className={style.formdecorright}>
          <img src="/Podcast/image/homepage/benefits/benefits2.png" alt="" />
        </div>
      </section>
      <DownloadApp />
    </main>
  );
};

export default About;
