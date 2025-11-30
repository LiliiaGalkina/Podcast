import style from "./prisingpage.module.scss";
import allstyle from "../allstyles.module.scss";
import Pricing from "./Pricing";
import DownloadApp from "../DownloadApp/DownloadApp";

const PrisingPage = () => {
  return (
    <main>
      <section className={style.hero}>
        <h2 className={allstyle.herotitle}>
          About our <br />{" "}
          <span className={allstyle.herotitlered}>Pricing plans</span>
        </h2>
        <p className={allstyle.herotext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
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
        <div className={allstyle.sectiondecordown}>
          <img src="/Podcast/image/reddecorsection.png" alt="красная кривая" />
        </div>
      </section>
      <section className={style.prisinginfo}>
        <div className="container">
          <h3 className={allstyle.sectiontitle}>Select your pricing plan</h3>
          <div className={style.content}>
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
        <div className={allstyle.sectiondecordown}>
          <img src="/Podcast/image/blackdecorsection.png" alt="черная кривая" />
        </div>
      </section>
      <Pricing />
      <DownloadApp />
    </main>
  );
};

export default PrisingPage;
