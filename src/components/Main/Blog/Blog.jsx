import allstyle from "../allstyles.module.scss";
import style from "./blog.module.scss";

const Blog = () => {
  return (
    <main>
      <section className={style.heroblog}>
        <h1 className={allstyle.herotitle}>
          Article <br /> and <span className={allstyle.herotitlered}>News</span>
        </h1>
        <p className={allstyle.herotext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam–quis.
			  </p>
			  <input type="text" className={style.search} placeholder="Search..."/>
        <div className={allstyle.herodecorleft}>
          <img
            src="/image/homepage/hero-decor1.png"
            alt="черная кривая с оранжевой звездочкой на конце"
          />
        </div>
        <div className={allstyle.herodecorright}>
          <img
            src="/image/homepage/hero-decor2.png"
            alt="несколько разноцветных звездочек"
          />
        </div>
      </section>
    </main>
  );
};

export default Blog;
