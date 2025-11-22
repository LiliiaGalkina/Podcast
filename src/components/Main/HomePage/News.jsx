import allstyle from "../allstyles.module.scss";
import style from "./news.module.scss";
import Buttondark from "../../Button/Buttondark";
import { Link } from "react-router-dom";
import NewsItem from "../Newsitem/Newsitem";

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
          <NewsItem
            image="/image/homepage/news/news1.png"
            description="девушка в маске рисует на стене"
            subtitle="PODCAST"
            title="Setup your own podcast"
            text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minimvel iam, quis nostrud exercitation ullamco
                  laboris..."
            category1="business"
            category2="startup"
            date="Sep 14, 2021"
          />
          <NewsItem
            image="/image/homepage/news/news2.png"
            description="аудио аппаратура"
            subtitle="TIPS & TRICK"
            title="Doodle artwork 101"
            text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minimvel iam, quis nostrud exercitation ullamco
                  laboris..."
            category1="art"
            category2="creative"
            category3="tips and trick"
            date="Sep 14, 2021"
          />
          <div className={style.itemsdecordown}>
            <img src="/image/homepage/news/decordown.png" alt="черная кривая" />
          </div>
        </div>
        <Link to="/blog" className={style.button}>
          <Buttondark buttonText="BROWSE ALL" />
        </Link>
      </div>
      <div className={style.decor}>
        <img src="/image/reddecorsection.png" alt="красная кривая" />
      </div>
    </section>
  );
};

export default News;
