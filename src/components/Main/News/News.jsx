import allstyle from "../allstyles.module.scss";
import style from "./news.module.scss";
import Buttondark from "../../Button/Buttondark";
import { Link } from "react-router-dom";
import NewsItem from "./Newsitem";
import { posts } from "../newsitems";

const News = () => {
  return (
    <section className={style.news}>
      <div className="container">
        <h2 className={allstyle.sectiontitle}>Article and News</h2>
        <p className={allstyle.sectiontext}>News, tips, tricks and more</p>
        <div className={style.items}>
          <div className={style.itemsdecorup}>
            <img
              src="/Podcast/image/homepage/news/decorup.png"
              alt="черная снежинка"
            />
          </div>
          {posts.slice(0, 2).map((postItem) => (
            <NewsItem key={postItem.id} {...postItem} />
          ))}
          <div className={style.itemsdecordown}>
            <img
              src="/Podcast/image/homepage/news/decordown.png"
              alt="черная кривая"
            />
          </div>
        </div>
        <Link to="/blog" className={style.button}>
          <Buttondark buttonText="BROWSE ALL" />
        </Link>
      </div>
      <div className={allstyle.sectiondecordown}>
        <img src="/Podcast/image/reddecorsection.png" alt="красная кривая" />
      </div>
    </section>
  );
};

export default News;
