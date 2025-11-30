import allstyle from "../allstyles.module.scss";
import style from "./blog.module.scss";
import NewsItem from "../News/Newsitem";
import DownloadApp from "../DownloadApp/DownloadApp";
import Buttondark from "../../Button/Buttondark";
import { useState } from "react";
import { posts, categories } from "../newsitems";

const Blog = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterItems = () => {
    if (selectedCategory === "All") {
      return posts;
    }
    return posts.filter(
      (post) => post.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  };

  return (
    <main>
      <section className={style.heroblog}>
        <h2 className={allstyle.herotitle}>
          Article <br /> and <span className={allstyle.herotitlered}>News</span>
        </h2>
        <p className={allstyle.herotext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam–quis.
        </p>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={style.search}
          placeholder="Search..."
        />
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
      <section className={style.posts}>
        <div className="container">
          <div className={style.titleblock}>
            <h2 className={allstyle.sectiontitle}>Latest Posts</h2>
            <img
              src="/Podcast/image/homepage/pricing/decorred.png"
              className={style.titledecor}
              alt="три красные линии"
            />
          </div>
          <div className={style.categories}>
            {categories.map((category, index) => (
              <div
                key={index}
                className={style.category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  color: category === selectedCategory ? "#cd4631" : "#4d4d4d",
                }}
              >
                {category}
              </div>
            ))}
          </div>
          <div className={style.postsitems}>
            {filterItems().map((postItem) => (
              <NewsItem key={postItem.id} {...postItem} />
            ))}
          </div>
        </div>
        <div className={style.button}>
          <Buttondark buttonText="BROWSE ALL" />
        </div>
        <div className={style.postsdecordown}>
          <img src="/Podcast/image/reddecorsection.png" alt="красная кривая" />
        </div>
      </section>
      <DownloadApp />
    </main>
  );
};

export default Blog;
