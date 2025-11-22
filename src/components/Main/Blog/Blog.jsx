import allstyle from "../allstyles.module.scss";
import style from "./blog.module.scss";
import NewsItem from "../Newsitem/Newsitem";
import DownloadApp from "../HomePage/DownloadApp";

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
        <input type="text" className={style.search} placeholder="Search..." />
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
      <section className={style.posts}>
        <div className="container">
          <div className={style.titleblock}>
            <h2 className={allstyle.sectiontitle}>Latest Posts</h2>
            <img
              src="/image/homepage/pricing/decorred.png"
              className={style.titledecor}
              alt="три красные линии"
            />
          </div>
          <div className={style.categories}>
            <div className={style.category}>All</div>
            <div className={style.category}>Business</div>
            <div className={style.category}>News</div>
            <div className={style.category}>Tips & Trick</div>
            <div className={style.category}>Podcast</div>
            <div className={style.category}>Productivity</div>
          </div>
          <div className={style.postsitems}>
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
            <NewsItem
              image="/image/homepage/news/news3.png"
              description="рамка из листочков и веточек"
              subtitle="NEWS"
              title="Mother Nature Taking Over"
              text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minimvel iam, quis nostrud exercitation ullamco
                  laboris..."
              category1="news"
              category2="nature"
              date="Sep 10, 2021"
            />
            <NewsItem
              image="/image/homepage/news/news4.png"
              description="парень и девушка в наушниках сидят на диване"
              subtitle="PRODUCTIVITY"
              title="How to Be Productive"
              text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minimvel iam, quis nostrud exercitation ullamco
                  laboris..."
              category1="productivity"
              category2="mindset"
              date="Sep 8, 2021"
            />
          </div>
			  </div>
			    <div className={style.postsdecordown}>
						<img src="/image/reddecorsection.png" alt="красная кривая" />
					  </div>
		  </section>
		  <DownloadApp/>
    </main>
  );
};

export default Blog;
