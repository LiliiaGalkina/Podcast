import allstyle from "../allstyles.module.scss";
import style from "./about.module.scss";
import Buttondark from "../../Button/Buttondark";
import Button from "../../Button/Button";

const About = () => {
  return (
    <main>
      <section className={allstyle.hero}>
        <h1 className={allstyle.herotitle}>
          About <p className={allstyle.herotitlered}>Pod of Cast</p>
        </h1>
        <p className={allstyle.herotext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam–quis.
        </p>
        <div className={style.buttons}>
          <Button buttonText="BECOME SPONSOR" />
          <Buttondark buttonText="SUBSCRIBE" />
        </div>
        <div className="container">
          <div className={style.items}>
            <div className={style.item}>
              <p className={style.digittext}>
                <span className={style.digittextred}>76</span>K
              </p>
              <p className={style.text}>Community Members</p>
            </div>
            <div className={style.item}>
              <p className={style.digittext}>
                <span className={style.digittextred}>128</span>K
              </p>
              <p className={style.text}>Podcast Subscribers</p>
            </div>
            <div className={style.item}>
              <p className={style.digittext}>
                <span className={style.digittextred}>59</span>K
              </p>
              <p className={style.text}>Daily Listeners</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
