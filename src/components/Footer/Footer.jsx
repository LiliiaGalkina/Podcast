import style from "./footer.module.scss";
import logo from "/image/logo.svg";
import twitter from "/image/footer/twitter.svg";
import insta from "/image/footer/instagram.svg";
import tiktok from "/image/footer/tiktok.svg";
import google from "/image/footer/googlepodcast.png";
import spotify from "/image/footer/spotify.png";
import youtube from "/image/footer/youtube.png";
import appstore from "/image/footer/appstore.svg";
import googleplay from "/image/footer/google_play.svg";
import { Link } from "react-router-dom";

const Footer = ({ feedback, benefits, scrollToSection }) => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.content}>
          <div className={style.info}>
            <Link to="/" className={style.logoblock}>
              <img src={logo} alt="логотип" className={style.logo} />
              <p className={style.logotext}>©2021.</p>
            </Link>
            <p className={style.infotext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className={style.social}>
              <a href="#" className={style.socialitem} target="_blank">
                <img src={twitter} alt="твиттер" />
              </a>
              <a href="#" className={style.socialitem} target="_blank">
                <img src={insta} alt="инстаграм" />
              </a>
              <a href="#" className={style.socialitem} target="_blank">
                <img src={tiktok} alt="тикток" />
              </a>
            </div>
          </div>
          <div className={style.footermenu}>
            <div className={style.footermenucolumn}>
              <Link to={"/about"} className={style.footermenuitem}>
                About
              </Link>
              <Link to="/blog" className={style.footermenuitem}>
                Blog
              </Link>
              <Link to="/episodes"
                className={style.footermenuitem}
              >
                Episodes
              </Link>
            </div>
            <div className={style.footermenucolumn}>
              <Link to="/prising"
                onClick={() => scrollToSection(pricing)}
                className={style.footermenuitem}
               
              >
                Pricing
              </Link>
              <Link
                onClick={() => scrollToSection(feedback)}
                className={style.footermenuitem}
                style={{ color: "#bfbfbf" }}
              >
                Feedback
              </Link>
              <Link
                onClick={() => scrollToSection(benefits)}
                className={style.footermenuitem}
                style={{ color: "#bfbfbf" }}
              >
                Benefits
              </Link>
            </div>
          </div>
          <div className={style.navigatioinfo}>
            <div>
              <p className={style.navigatioinfotext}>
                Listen to episodes on your fav platform:
              </p>
              <div className={style.navigatioinfoitems}>
                <a href="#" className={style.navigatioinfoitem} target="_blank">
                  <img src={google} alt="Google Podcasts" />
                </a>
                <a href="#" className={style.navigatioinfoitem} target="_blank">
                  <img src={spotify} alt="Spotify" />
                </a>
                <a href="#" className={style.navigatioinfoitem} target="_blank">
                  <img src={youtube} alt="" />
                </a>
              </div>
            </div>
            <div>
              <p className={style.navigatioinfotext}>App available on:</p>
              <div className={style.navigatioinfoitems}>
                <a href="#" className={style.navigatioinfoitem} target="_blank">
                  <img src={appstore} alt="Appstore" />
                </a>
                <a href="" className={style.navigatioinfoitem} target="_blank">
                  <img src={googleplay} alt="Google Play" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={style.copyright}>
          <div className={style.copyrightitem}>
            <span>©2022. All Rights Reserved.</span>
            <span className={style.copyrightitemred}>Pod of Cast</span>
          </div>
          <div className={style.copyrightitems}>
            <a href="#" className={style.copyrightitemlink}>
              Terms
            </a>
            <a href="#" className={style.copyrightitemlink}>
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
