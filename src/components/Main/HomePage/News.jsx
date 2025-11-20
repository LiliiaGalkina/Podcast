import allstyle from "../allstyles.module.scss";
import style from "./news.module.scss";
import Buttondark from "../../Button/Buttondark";

const News = () => {
  return (
    <section className={style.news}>
      <div className="container">
        <h2 className={allstyle.sectiontitle}>Article and News</h2>
        <p className={allstyle.sectiontext}>News, tips, tricks and more</p>
        <div className={style.items}>
          <div className={style.itemsdecorup}>
            <img src="/image/homepage/news/decorup.png" alt="черная снежинка" />
          </div>
          <div className={style.itemshadow}>
            <div className={style.img}>
              <img
                src="/image/homepage/news/news1.png"
                alt="аудио аппаратура"
              />
            </div>
            <div className={style.content}>
              <div className={style.contentup}>
                <h4 className={style.subtitle}>PODCAST</h4>
                <h3 className={style.titlered}>Setup your own podcast</h3>
                <p className={style.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minimvel iam, quis nostrud exercitation ullamco
                  laboris...
                </p>
              </div>
              <div className={style.categories}>
                <div className={style.categoriesbody}>
                  <div className={style.category}>business</div>
                  <div className={style.category}>startup</div>
                </div>
                <div className={style.date}>Sep 14, 2021</div>
              </div>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.img}>
              <img
                src="/image/homepage/news/news2.png"
                alt="дtвушка в маске рисует на стене"
              />
            </div>
            <div className={style.content}>
              <div className={style.contentup}>
                <h4 className={style.subtitle}>TIPS & TRICK</h4>
                <h3 className={style.title}>Doodle artwork 101</h3>
                <p className={style.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minimvel iam, quis nostrud exercitation ullamco
                  laboris...
                </p>
              </div>
              <div className={style.categories}>
                <div className={style.categoriesbody}>
                  <div className={style.category}>art</div>
                  <div className={style.category}>creative</div>
                  <div className={style.category}>tips and trick</div>
                </div>
                <div className={style.date}>Sep 12, 2021</div>
              </div>
            </div>
          </div>
          <div className={style.itemsdecordown}>
            <img src="/image/homepage/news/decordown.png" alt="черная кривая" />
          </div>
        </div>
        <div className={style.button}>
          <Buttondark buttonText="BROWSE ALL" />
        </div>
      </div>
      <div className={style.decor}>
        <img src="/image/homepage/hero-decor3.png" alt="красная кривая" />
      </div>
    </section>
  );
};

export default News;
