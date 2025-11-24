import { useMatch } from "react-router-dom";
import { posts } from "../newsitems";
import allstyle from "../allstyles.module.scss";
import style from "./newsitemcontent.module.scss";
import { Link } from "react-router-dom";

const NewsItemContent = () => {
  const match = useMatch("/:id");
  const postId = match.params.id;
  const post = posts.find((elem) => elem.id == postId);

  return (
    <main>
      <section className={style.hero}>
        <div className={style.heroheader}>
          <Link to={"/"}>
            <img
              src="/image/blog/arrow-back.png"
              className={style.arrow}
              alt="стрелка влево"
            />
            <p className={style.arrowtext}>Back to articles</p>
          </Link>
          <p className={style.date}>{post.date}</p>
          <h3 className={style.category}>{post.category}</h3>
          <h2 className={style.title}>{post.title}</h2>
          <div className={style.theme}>{post.theme}</div>
          <div className={style.social}>
            <img src="/image/footer/twitter.svg" alt="twitter" />
            <img src="/image/footer/instagram.svg" alt="instagram" />
            <img src="/image/footer/tiktok.svg" alt="tiktok" />
          </div>
			  </div>
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
		  <section className={style.content}>
			  <img src={post.image} alt={post.description} />
			  <div className={style.contentext}>{post.text}</div>
		  </section>
    </main>
  );
};

export default NewsItemContent;
