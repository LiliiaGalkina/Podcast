import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./aboutsponsorslider.module.scss";
import arrowleft from "/image/homepage/sliderfeedback/arrowleft.png";
import arrowright from "/image/homepage/sliderfeedback/arrowright.png";

const AboutSponsorSlider = () => {
  const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
    <div {...props}>{children}</div>
  );

  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 3,
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
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={style.slidersponsorcontainer}>
      <Slider {...settings} className={style.sliderfeedback}>
        <div className={style.slidersponsoritem}>
          <div className={style.itemimg}>
            <img src="/Podcast/image/about/spotify.png" alt="spotify" />
          </div>
          <p className={style.itemtext}>
            Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in
            sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu
            in auctor. Gravida leo et.
          </p>
        </div>
        <div className={style.slidersponsoritem}>
          <div className={style.itemimg}>
            <img
              src="/Podcast/image/about/googlepodcasts.png"
              alt="googlepodcasts"
            />
          </div>
          <p className={style.itemtext}>
            Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in
            sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu
            in auctor. Gravida leo et.
          </p>
        </div>

        <div className={style.slidersponsoritem}>
          <div className={style.itemimg}>
            <img src="/Podcast/image/about/youtube.png" alt="youtube" />
          </div>
          <p className={style.itemtext}>
            Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in
            sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu
            in auctor. Gravida leo et.
          </p>
        </div>
        <div className={style.slidersponsoritem}>
          <div className={style.itemimg}>
            <img
              src="/Podcast/image/about/googlepodcasts.png"
              alt="googlepodcasts"
            />
          </div>
          <p className={style.itemtext}>
            Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in
            sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu
            in auctor. Gravida leo et.
          </p>
        </div>
        <div className={style.slidersponsoritem}>
          <div className={style.itemimg}>
            <img src="/Podcast/image/about/spotify.png" alt="spotify" />
          </div>
          <p className={style.itemtext}>
            Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in
            sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu
            in auctor. Gravida leo et.
          </p>
        </div>
        <div className={style.slidersponsoritem}>
          <div className={style.itemimg}>
            <img src="/Podcast/image/about/youtube.png" alt="youtube" />
          </div>
          <p className={style.itemtext}>
            Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in
            sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu
            in auctor. Gravida leo et.
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default AboutSponsorSlider;
