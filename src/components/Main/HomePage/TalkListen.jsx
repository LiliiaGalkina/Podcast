import style from "./talklisten.module.scss";

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
        <div className={style.banner}>
          <div className={style.bannerquote}>
            <img src="/image/homepage/quote.png" alt="красные кавычки" />
          </div>
          <h3 className={style.bannertitle}>
            One of the best daily podcasts that covers every topic on Spotify.
          </h3>
          <div className={style.bannermanblock}>
            <div className={style.banneravatar}>
              <img src="/image/homepage/avatar.png" alt="фото John Smith" />
            </div>
            <p className={style.bannername}>John Smith</p>
            <div className={style.bannerpositionbody}>
              <div className={style.bannergreencircle}>
                <img
                  src="/image/homepage/green-circle.svg"
                  alt="зеленый кружок с черными полосками"
                />
              </div>
              <p className={style.bannerposition}>Social Community Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TalkListen;