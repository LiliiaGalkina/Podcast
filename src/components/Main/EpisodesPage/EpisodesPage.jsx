import allstyle from "../allstyles.module.scss";
import style from "./episodespage.module.scss";
import Buttondark from "../../Button/Buttondark";
import TalkListen from "../HomePage/TalkListen";
import Episodes from "../HomePage/Episodes";
import DownloadApp from "../HomePage/DownloadApp";

const EpisodesPage = () => {
  return (
    <main>
      <section className={style.hero}>
        <h1 className={allstyle.herotitle}>
          Your Daily <p className={allstyle.herotitlered}>Episodes</p>
        </h1>
        <p className={allstyle.herotext}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit.
        </p>
        <div className={allstyle.herobutton}>
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
		  <TalkListen/>
		  <Episodes />
		  <DownloadApp/>
    </main>
  );
};

export default EpisodesPage;