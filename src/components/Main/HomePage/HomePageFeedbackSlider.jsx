import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quote from "/image/homepage/quote.png";
import avatar1 from "/image/homepage/sliderfeedback/avatar1.png";
import avatar2 from "/image/homepage/sliderfeedback/avatar2.png";
import avatar3 from "/image/homepage/sliderfeedback/avatar3.png";
import spotify from "/image/homepage/spotify.png";
import googlepodcasts from "/image/homepage/googlepodcasts.png";
import style from "./homepagefeedbackslider.module.scss";
import arrowleft from "/image/homepage/sliderfeedback/arrowleft.png";
import arrowright from "/image/homepage/sliderfeedback/arrowright.png";

const HomePageFeedbackSlider = () => {
  const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
    <div {...props}>{children}</div>
  );

  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    focusOnSelect: true,
    nextArrow: (
      <SlickButtonFix>
        <div>
          <img
            src={arrowright}
            className={style.arrowright}
            alt="стрелка вправо"
          />
        </div>
      </SlickButtonFix>
    ),
    prevArrow: (
      <SlickButtonFix>
        <div>
          <img
            src={arrowleft}
            className={style.arrowleft}
            alt="стрелка влево"
          />
        </div>
      </SlickButtonFix>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={style.sliderfeedbackcontainer}>
      <Slider {...settings} className={style.sliderfeedback}>
        <div className={style.sliderfeedbackitem}>
          <img
            src={quote}
            className={style.sliderfeedbackquote}
            alt="красная кавычка"
          />
          <p className={style.sliderfeedbacktext}>
            Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod
            tempor incidi ut labore et dolore magna aliqua.
          </p>
          <div className={style.sliderfeedbackperson}>
            <img
              src={avatar1}
              className={style.sliderfeedbackpersonfoto}
              alt="фото девушки"
            />
            <p className={style.sliderfeedbackpersonname}>Luna lovegood,</p>
            <img
              src={spotify}
              className={style.sliderfeedbackpersonimg1}
              alt="Spotify"
            />
          </div>
        </div>
        <div className={style.sliderfeedbackitem}>
          <img
            src={quote}
            className={style.sliderfeedbackquote}
            alt="красная кавычка"
          />
          <p className={style.sliderfeedbacktext}>
            Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod
            tempor incidi ut labore et dolore magna aliqua.
          </p>
          <div className={style.sliderfeedbackperson}>
            <img
              src={avatar2}
              className={style.sliderfeedbackpersonfoto}
              alt="фото девушки"
            />
            <p className={style.sliderfeedbackpersonname}>Emily Blunt,</p>
            <img
              src={googlepodcasts}
              className={style.sliderfeedbackpersonimg2}
              alt="Googlepodcasts"
            />
          </div>
        </div>
        <div className={style.sliderfeedbackitem}>
          <img
            src={quote}
            className={style.sliderfeedbackquote}
            alt="красная кавычка"
          />
          <p className={style.sliderfeedbacktext}>
            Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod
            tempor incidi ut labore et dolore magna aliqua.
          </p>
          <div className={style.sliderfeedbackperson}>
            <img
              src={avatar3}
              className={style.sliderfeedbackpersonfoto}
              alt="фото девушки"
            />
            <p className={style.sliderfeedbackpersonname}>Mia Winters,</p>
            <img
              src={spotify}
              className={style.sliderfeedbackpersonimg1}
              alt="Spotify"
            />
          </div>
        </div>
        <div className={style.sliderfeedbackitem}>
          <img
            src={quote}
            className={style.sliderfeedbackquote}
            alt="красная кавычка"
          />
          <p className={style.sliderfeedbacktext}>
            Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod
            tempor incidi ut labore et dolore magna aliqua.
          </p>
          <div className={style.sliderfeedbackperson}>
            <img
              src={avatar1}
              className={style.sliderfeedbackpersonfoto}
              alt="фото девушки"
            />
            <p className={style.sliderfeedbackpersonname}>Luna lovegood,</p>
            <img
              src={spotify}
              className={style.sliderfeedbackpersonimg1}
              alt="Spotify"
            />
          </div>
        </div>
        <div className={style.sliderfeedbackitem}>
          <img
            src={quote}
            className={style.sliderfeedbackquote}
            alt="красная кавычка"
          />
          <p className={style.sliderfeedbacktext}>
            Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod
            tempor incidi ut labore et dolore magna aliqua.
          </p>
          <div className={style.sliderfeedbackperson}>
            <img
              src={avatar2}
              className={style.sliderfeedbackpersonfoto}
              alt="фото девушки"
            />
            <p className={style.sliderfeedbackpersonname}>Emily Blunt,</p>
            <img
              src={googlepodcasts}
              className={style.sliderfeedbackpersonimg2}
              alt="Googlepodcasts"
            />
          </div>
        </div>
        <div className={style.sliderfeedbackitem}>
          <img
            src={quote}
            className={style.sliderfeedbackquote}
            alt="красная кавычка"
          />
          <p className={style.sliderfeedbacktext}>
            Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod
            tempor incidi ut labore et dolore magna aliqua.
          </p>
          <div className={style.sliderfeedbackperson}>
            <img
              src={avatar3}
              className={style.sliderfeedbackpersonfoto}
              alt="фото девушки"
            />
            <p className={style.sliderfeedbackpersonname}>Mia Winters,</p>
            <img
              src={spotify}
              className={style.sliderfeedbackpersonimg1}
              alt="Spotify"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomePageFeedbackSlider;
