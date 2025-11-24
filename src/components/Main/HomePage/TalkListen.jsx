import style from "./talklisten.module.scss";
import Banner from "../Banner";

const TalkListen = () => {
	return (
    <section className={style.talklisten}>
      <div className="container">
        <h2 className={style.title}>
          Talk. Listen. Get inspired by every minute of it.
        </h2>
        <div className={style.items}>
          <div className={style.item}>
            <div className={style.itemimg}>
              <img
                src="/image/homepage/talk-man.svg"
                alt="нарисованная голова мужчины, над ним облачко со знаками вопроса"
              />
            </div>
            <p className={style.itemtext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.
            </p>
          </div>
          <div className={style.item}>
            <div className={style.itemimg}>
              <img
                src="/image/homepage/talk-lamp.svg"
                alt="нарисованная голова мужчины, над ним облачко со знаками вопроса"
              />
            </div>
            <p className={style.itemtext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.
            </p>
          </div>
        </div>
        <Banner
          bannertext="One of the best daily podcasts that covers every topic on Spotify."
        />
      </div>
    </section>
  );
}

export default TalkListen;