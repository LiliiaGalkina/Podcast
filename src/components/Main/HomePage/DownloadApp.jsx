import allstyle from "../allstyles.module.scss";
import style from "./downloadapp.module.scss";
import Buttondark from "../../Button/Buttondark";

const DownloadApp = () => {
  return (
    <section className={style.downloadapp}>
      <div className="container">
        <div className={style.version}>BETA</div>
        <h2 className={allstyle.sectiontitle}>
          Available now <br />
          Pod of Cast App
        </h2>
        <p className={allstyle.sectiontext}>
          We just launched our podcast app!
        </p>
        <div className={style.buttonblock}>
          <div className={style.buttondecor}>
            <img
              src="/image/homepage/downloadapp/button-decor.png"
              alt="три красные черточки"
            />
          </div>
          <div className={style.button}>
            <Buttondark buttonText="DOWNLOAD NOW" />
          </div>
        </div>
        <p className={style.socialtext}>Content also available on:</p>
        <div className={style.social}>
          <img
            src="/image/homepage/downloadapp/google.svg"
            className={style.socialitem}
            alt="google podcast"
          />
          <img
            src="/image/homepage/downloadapp/spotify.svg"
            className={style.socialitem}
            alt="google podcast"
          />
          <img
            src="/image/homepage/downloadapp/youtube.svg"
            className={style.socialitem}
            alt="google podcast"
          />
        </div>
        <div className={style.leftdecorblock}>
          <img
            src="/image/homepage/downloadapp/phoneleft.png"
            className={style.leftdecormainimg}
            alt="мобильный телефон с открытым сайтом Podcast"
          />
          <img
            src="/image/homepage/downloadapp/big-red-decor.png"
            className={style.leftdecorbigred}
            alt="красное солнышко"
          />
          <img
            src="/image/homepage/downloadapp/middle-red-decor.png"
            className={style.leftdecormiddlered}
            alt="красное солнышко"
          />
          <img
            src="/image/homepage/downloadapp/little-red-decor.png"
            className={style.leftdecorlittlered}
            alt="красное солнышко"
          />
        </div>
        <div className={style.rightdecorblock}>
          <img
            src="/image/homepage/downloadapp/phoneright.png"
            className={style.rightdecormainimg}
            alt="мобильный телефон с открытым сайтом Podcast"
          />
          <img
            src="/image/homepage/downloadapp/black-decor.png"
            className={style.rightdecorblack}
            alt="абстракция из черных кругов"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
