import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideritem1 from "/image/homepage/slider/slider-item1.png";
import slideritem2 from "/image/homepage/slider/slider-item2.png";
import slideritem3 from "/image/homepage/slider/slider-item3.png";
import style from "./homepageslider.module.scss";

const HomePageSlider = () => {
      const settings = {
        dots: true,
        slidesToShow: 6,
        slidesToScroll: 1,
      };
    return (
      <Slider {...settings}>
        <div className={style.slideritem}>
          <img src={slideritem1} alt="человеческая фигура на фоне листьев" />
        </div>
        <div className={style.slideritem}>
          <img src={slideritem2} alt="девушка закатила глаза и высунула язык" />
        </div>
        <div className={style.slideritem}>
          <img src={slideritem3} alt="девушки и парни сидят на полу" />
        </div>
        <div className={style.slideritem}>
          <img src={slideritem1} alt="человеческая фигура на фоне листьев" />
        </div>
        <div className={style.slideritem}>
          <img src={slideritem2} alt="девушка закатила глаза и высунула язык" />
        </div>
        <div className={style.slideritem}>
          <img src={slideritem3} alt="девушки и парни сидят на полу" />
        </div>
      </Slider>
    );
}

export default HomePageSlider;