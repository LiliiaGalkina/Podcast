import style from "./benefitspage.module.scss";
import allstyle from "../allstyles.module.scss";
import Benefits from "./Benefits";
import DownloadApp from "../DownloadApp/DownloadApp";

const BenefitsPage = () => {
  return (
    <main>
      <section className={style.hero}>
        <h2 className={allstyle.herotitle}>
          Membership <br /> <span className={allstyle.herotitlered}>benefits</span>
        </h2>
        <p className={allstyle.herotext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
          tempor incididunt ut labore et dolore magna aliqua. 
        </p>
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
		  <Benefits />
		  <DownloadApp/>
    </main>
  );
};

export default BenefitsPage;
