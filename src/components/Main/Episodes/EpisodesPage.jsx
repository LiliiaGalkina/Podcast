import allstyle from "../allstyles.module.scss";
import style from "./episodespage.module.scss";
import Buttondark from "../../Button/Buttondark";
import TalkListen from "../TalkListen/TalkListen";
import Episodes from "./Episodes";
import DownloadApp from "../DownloadApp/DownloadApp";
import { episodes } from "../newsitems";
import Episod from "./Episod";

const EpisodesPage = ({count}) => {
  return (
    <main>
      <section className={style.hero}>
        <h2 className={allstyle.herotitle}>
          Your Daily <p className={allstyle.herotitlered}>Episodes</p>
        </h2>
        <p className={allstyle.herotext}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit.
        </p>
        <div className={style.episodesherobutton}>
          <Buttondark buttonText="SUBSCRIBE" />
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
      <section className={style.episodes}>
        <div className="container">
          <h2 className={allstyle.sectiontitle}>Recent Episodes</h2>
          <p className={allstyle.sectiontext}>
            Available on your favorite platform
          </p>
         <Episodes count="6"/>
          <div className={style.button}>
					  <Buttondark buttonText="BROWSE ALL EPISODES" />
          </div>
        </div>
        <div className={style.episodesdecorblack}>
          <img src="/Podcast/image/blackdecorsection.png" alt="черная кривая" />
        </div>
      </section>
      <DownloadApp />
    </main>
  );
};

export default EpisodesPage;