import { useMatch } from "react-router-dom";
import { episodes } from "../newsitems";
import style from "./episodcontent.module.scss";
import allstyle from "../allstyles.module.scss";
import Buttondark from "../../Button/Buttondark";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import Episodes from "./Episodes";
import DownloadApp from "../DownloadApp/DownloadApp";

const EpisodContent = () => {
  const match = useMatch("/episodes/:id");
  const episodId = match.params.id;
	const episod = episodes.find((elem) => elem.id == episodId);
	const btnText = `<img src="Pocast/image/homepage/episodes/arrow-play.svg"/> LISTEN NOW <span>(${episod.time})</span>`
  return (
    <main>
      <section className={style.hero}>
        <div className="container">
          <Link to={"/episodes"} className={style.linktoback}>
            <img
              src="/Podcast/image/blog/arrow-back.png"
              className={style.arrow}
              alt="стрелка влево"
            />
            <p className={style.arrowtext}>Back to episodes</p>
          </Link>
          <div className={style.heroitems}>
            <div className={style.itemimg}>
              <img src={episod.imageUrl} alt={episod.imageAlt} />
            </div>
            <div className={style.itemcontent}>
              <div className={style.contentheader}>
                <h4 className={style.subtitle}>{episod.subtitle}</h4>
                <div className={style.info}>FEATURED EPISODE</div>
              </div>
              <h3 className={style.title}>{episod.title}</h3>
              <p className={style.text}>{episod.text}</p>
              <div className={style.host}>
                <div className={style.avatarblock}>
                  <img
                    src="Podcast/image/homepage/episodes/avatar.png"
                    className={style.avatarimg}
                    alt="фото автора"
                  />
                  <p className={style.avatartext}>
                    Hosted by: <span>Jane Doe</span>
                  </p>
                </div>
                <p className={style.date}>Sep 22, 2021</p>
              </div>
              <div className={style.buttons}>
                <Buttondark buttonText="SUBSCRIBE" />
                <button className={style.buttonaudio}>
                  <img src="Podcast/image/homepage/episodes/arrow-play.svg" />LISTEN NOW <span>(${episod.time})</span>
                </button>
              </div>
            </div>
          </div>
          <div className={style.tags}>
            <p className={style.tagstext}>Tags:</p>
            {episod.tags[0] ? (
              <div className={style.tag}>{episod.tags[0]}</div>
            ) : (
              ""
            )}
            {episod.tags[1] ? (
              <div className={style.tag}>{episod.tags[1]}</div>
            ) : (
              ""
            )}
            {episod.tags[2] ? (
              <div className={style.tag}>{episod.tags[3]}</div>
            ) : (
              ""
            )}
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
      <section className={style.textinfo}>
        <div className="container">
          <h2 className={style.textinfotitle}>{episod.title}</h2>
          <div className={style.textinfocontent}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              accusantium saepe amet delectus corrupti doloribus sapiente atque
              itaque aut, modi rem laboriosam animi, maiores, ea neque. Deleniti
              sapiente repellat at. Architecto tenetur optio delectus quis
              perspiciatis? Ducimus illum perferendis ut, nulla iste quis? Earum
              dolorem numquam iste consequuntur quasi sed inventore. Natus amet
              temporibus animi soluta quia fuga? Obcaecati, autem. Vitae vel eos
              iste, itaque quisquam maxime eveniet! Quaerat incidunt rem,
              deserunt eaque, similique, vero quibusdam praesentium dolor
              impedit nobis aliquam rerum repellat! Impedit nemo esse possimus
              iste corrupti porro. Incidunt eaque voluptatem quasi est
              consectetur minima deleniti facere labore, aperiam doloribus nisi
              dicta enim quaerat ut aut qui sit eius reprehenderit eos error
              soluta! Possimus culpa sit iusto modi! Repellendus iste similique
              explicabo aliquid veniam voluptas quod nisi mollitia, sit
              exercitationem excepturi odio aut magni. Pariatur vero, maiores
              voluptatum repellat facilis ducimus quam. Optio quibusdam cumque
              inventore doloremque et.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              accusantium saepe amet delectus corrupti doloribus sapiente atque
              itaque aut, modi rem laboriosam animi, maiores, ea neque. Deleniti
              sapiente repellat at. Architecto tenetur optio delectus quis
              perspiciatis? Ducimus illum perferendis ut, nulla iste quis? Earum
              dolorem numquam iste consequuntur quasi sed inventore. Natus amet
              temporibus animi soluta quia fuga? Obcaecati, autem. Vitae vel eos
              iste, itaque quisquam maxime eveniet! Quaerat incidunt rem,
              deserunt eaque, similique, vero quibusdam praesentium dolor
              impedit nobis aliquam rerum repellat! Impedit nemo esse possimus
              iste corrupti porro. Incidunt eaque voluptatem quasi est
              consectetur minima deleniti facere labore, aperiam doloribus nisi
              dicta enim quaerat ut aut qui sit eius reprehenderit eos error
              soluta! Possimus culpa sit iusto modi! Repellendus iste similique
              explicabo aliquid veniam voluptas quod nisi mollitia, sit
              exercitationem excepturi odio aut magni. Pariatur vero, maiores
              voluptatum repellat facilis ducimus quam. Optio quibusdam cumque
              inventore doloremque et.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              accusantium saepe amet delectus corrupti doloribus sapiente atque
              itaque aut, modi rem laboriosam animi, maiores, ea neque. Deleniti
              sapiente repellat at. Architecto tenetur optio delectus quis
              perspiciatis? Ducimus illum perferendis ut, nulla iste quis? Earum
              dolorem numquam iste consequuntur quasi sed inventore. Natus amet
              temporibus animi soluta quia fuga? Obcaecati, autem. Vitae vel eos
              iste, itaque quisquam maxime eveniet! Quaerat incidunt rem,
              deserunt eaque, similique, vero quibusdam praesentium dolor
              impedit nobis aliquam rerum repellat! Impedit nemo esse possimus
              iste corrupti porro. Incidunt eaque voluptatem quasi est
              consectetur minima deleniti facere labore, aperiam doloribus nisi
              dicta enim quaerat ut aut qui sit eius reprehenderit eos error
              soluta! Possimus culpa sit iusto modi! Repellendus iste similique
              explicabo aliquid veniam voluptas quod nisi mollitia, sit
              exercitationem excepturi odio aut magni. Pariatur vero, maiores
              voluptatum repellat facilis ducimus quam. Optio quibusdam cumque
              inventore doloremque et.
            </p>
          </div>
        </div>
      </section>
      <section className={style.episodes}>
        <div className="container">
          <h2 className={allstyle.sectiontitle}>Recent Episodes</h2>
          <p className={allstyle.sectiontext}>
            Available on your favorite platform
          </p>
          <Episodes count="6" />
          <Link to={"/episodes"} className={style.button}>
            <Buttondark buttonText="BROWSE ALL EPISODES" />
          </Link>
        </div>
      </section>
      <DownloadApp />
    </main>
  );
};

export default EpisodContent;
