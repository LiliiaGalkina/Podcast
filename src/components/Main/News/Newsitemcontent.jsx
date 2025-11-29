import { useMatch } from "react-router-dom";
import { posts } from "../newsitems";
import style from "./newsitemcontent.module.scss";
import { Link } from "react-router-dom";
import Banner from "../Banner";
import News from "./News";
import DownloadApp from "../DownloadApp/DownloadApp";

const NewsItemContent = () => {
  const match = useMatch("/:id");
  const postId = match.params.id;
  const post = posts.find((elem) => elem.id == postId);

  return (
    <main>
      <section className={style.hero}>
        <div className="container">
          <div className={style.heroheader}>
            <Link to={"/blog"} className={style.linktoback}>
              <img
                src="/Podcast/image/blog/arrow-back.png"
                className={style.arrow}
                alt="стрелка влево"
              />
              <p className={style.arrowtext}>Back to articles</p>
            </Link>
            <p className={style.date}>{post.date}</p>
          </div>
          <h4 className={style.category}>{post.category}</h4>
          <h2 className={style.title}>{post.title}</h2>
          <div className={style.theme}>{post.theme}</div>
          <div className={style.social}>
            <img src="/Podcast/image/footer/twitter.svg" alt="twitter" />
            <img src="/Podcast/image/footer/instagram.svg" alt="instagram" />
            <img src="/Podcast/image/footer/tiktok.svg" alt="tiktok" />
          </div>
        </div>
        <div className={style.herodecorleft}>
          <img
            src="/Podcast/image/homepage/hero-decor1.png"
            alt="черная кривая с оранжевой звездочкой на конце"
          />
        </div>
        <div className={style.herodecorright}>
          <img
            src="/Podcast/image/homepage/hero-decor2.png"
            alt="несколько разноцветных звездочек"
          />
        </div>
      </section>
      <div className={style.mainimg}>
        <img src={post.image} alt={post.description} />
      </div>
      <div className="container">
        <section className={style.content}>
          <h3 className={style.subtitle}>{post.title}</h3>
          <div className={style.contentext}>{post.text}</div>
        </section>
        <Banner bannertext="Quote example goes in here..." />
        <section className={style.dopinfo}>
          <div className={style.items}>
            <div className={style.itemtext}>
              <h4 className={style.itemtitle}>Bullet list example:</h4>
              <ul className={style.notnumberlist}>
                <li className={style.notnumberitem}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                  pellentesque at bibendum euismod tellus duis curs us dignissim
                  odio. Sit vulputate et integer in.
                </li>
                <li className={style.notnumberitem}>
                  Sit vel, senectus iaculis morbi. Amet interdum imperdiet
                  laoreet morbi tincidunt fermentum, libero. Ante enim eget
                  viverra at porttitor accumsan. Orci non here
                </li>
                <li className={style.notnumberitem}>
                  Quis dictum cursus faucibus mattis dignissim. Pellent que
                  purus in sed sodales in mauris molestie. Eleifend est
                  consctetur interdum eu in auctor. Gravida leo et.
                </li>
              </ul>
            </div>
            <div className={style.itemtext}>
              <h4 className={style.itemtitle}>Number list example:</h4>
              <ol className={style.numberlist}>
                <li className={style.numberitem}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                  pellentesque at bibendum euismod tellus duis curs us dignissim
                  odio. Sit vulputate et integer in.
                </li>
                <li className={style.numberitem}>
                  Sit vel, senectus iaculis morbi. Amet interdum imperdiet
                  laoreet morbi tincidunt fermentum, libero. Ante enim eget
                  viverra at porttitor accumsan. Orci non here
                </li>
                <li className={style.numberitem}>
                  Quis dictum cursus faucibus mattis dignissim. Pellent que
                  purus in sed sodales in mauris molestie. Eleifend est
                  consctetur interdum eu in auctor. Gravida leo et.
                </li>
              </ol>
            </div>
            <div className={style.item}>
              <div className={style.itemimg}>
                <img
                  src="/Podcast/image/blog/itemimg1.png"
                  alt="голубые, красные и черные завитушки"
                />
              </div>
              <p className={style.firstitemcaption}>
                this is an image with a caption example
              </p>
            </div>
            <div className={style.item}>
              <div className={style.itemimg}>
                <img
                  src="/Podcast/image/blog/itemimg2.png"
                  alt="черные завитушки"
                />
              </div>
              <div className={style.seconditemcaption}>
                <a href="#">download here</a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={style.articles}>
        <News />
      </div>
      <DownloadApp />
    </main>
  );
};

export default NewsItemContent;
