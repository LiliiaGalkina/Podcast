import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideritem1 from "/image/homepage/slider/slider-item1.png";
import slideritem2 from "/image/homepage/slider/slider-item2.png";
import slideritem3 from "/image/homepage/slider/slider-item3.png";
import style from "./homepageslider.module.scss";
import slidericon1 from "/image/homepage/slider/google.svg";
import slidericon2 from "/image/homepage/slider/spotify.svg";
import slidericon3 from "/image/homepage/slider/youtube.svg";
import itemdecorblack1 from "/image/homepage/slider/slider-item2-decor1.png";
import itemdecororange1 from "/image/homepage/slider/slider-item2-decor2.png";
import itemdecorblue1 from "/image/homepage/slider/slider-item2-decor3.png";
import itemdecorblack2 from "/image/homepage/slider/slider-item1-decor3.png";
import itemdecorwhite2 from "/image/homepage/slider/slider-item1-decor1.png";
import itemdecororange2 from "/image/homepage/slider/slider-item1-decor2.png";
import itemdecorblue2 from "/image/homepage/slider/slider-item1-decor4.png";
import itemdecorrainbow3 from "/image/homepage/slider/slider-item3-decor1.png";
import itemdecororange31 from "/image/homepage/slider/slider-item3-decor2.png";
import itemdecororange32 from "/image/homepage/slider/slider-item3-decor3.png";
import itemdecorblue3 from "/image/homepage/slider/slider-item3-decor4.png";
import itemdecororangeblue3 from "/image/homepage/slider/slider-item3-decor5.png";
import itemdecorblueblack3 from "/image/homepage/slider/slider-item3-decor6.png";
import itemdecororangeline3 from "/image/homepage/slider/slider-item3-decor7.png";
import itemdecororangestar3 from "/image/homepage/slider/slider-item3-decor8.png";
import itemdecorblackline3 from "/image/homepage/slider/slider-item3-decor9.png";
import itemdecorblackstar3 from "/image/homepage/slider/slider-item3-decor10.png";

const HomePageSlider = () => {
  const settings = {
    //centerMode:true,
    dots: true,
    centerPadding: "200px",
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          focusOnSelect: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 790,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className={style.slidercontainer}>
      <Slider {...settings} className={style.slider}>
        <div className={style.slideritem}>
          <img src={slideritem2} alt="девушка закатила глаза и высунула язык" />
          <h3 className={style.sliderTitle}>Perplexed Mind</h3>
          <div className={style.slidericons}>
            <a href="#" className={style.slidericon}>
              <img src={slidericon1} alt="google" />
            </a>
            <a href="#" className={style.slidericon}>
              <img src={slidericon2} alt="spotify" />
            </a>
            <a href="#" className={style.slidericon}>
              <img src={slidericon3} alt="youtube" />
            </a>
          </div>
          <div className={style.itemdecorblack1}>
            <img src={itemdecorblack1} alt="черная звездочка" />
          </div>
          <div className={style.itemdecororange1}>
            <img src={itemdecororange1} alt="оранжевая дуга" />
          </div>
          <div className={style.itemdecorblue1}>
            <img src={itemdecorblue1} alt="голубая спираль" />
          </div>
        </div>
        <div className={style.slideritem}>
          <img src={slideritem1} alt="человеческая фигура на фоне листьев" />
          <h3 className={style.sliderTitle}>Self–confidence</h3>
          <div className={style.slidericons}>
            <a href="#" className={style.slidericon}>
              <img src={slidericon1} alt="google" />
            </a>
            <a href="#" className={style.slidericon}>
              <img src={slidericon2} alt="spotify" />
            </a>
            <a href="#" className={style.slidericon}>
              <img src={slidericon3} alt="youtube" />
            </a>
          </div>
          <div className={style.itemdecorblack2}>
            <img src={itemdecorblack2} alt="черная звездочка" />
          </div>
          <div className={style.itemdecorblue2}>
            <img src={itemdecorblue2} alt="три голубых кривых" />
          </div>
          <div className={style.itemdecororange2}>
            <img src={itemdecororange2} alt="две оранжевых кривых" />
          </div>
          <div className={style.itemdecorwhite2}>
            <img src={itemdecorwhite2} alt="белая спираль" />
          </div>
        </div>
        <div className={style.slideritem}>
          <img src={slideritem2} alt="девушка закатила глаза и высунула язык" />
          <h3 className={style.sliderTitle}>Perplexed Mind</h3>
          <div className={style.slidericons}>
            <a href="#" className={style.slidericon}>
              <img src={slidericon1} alt="google" />
            </a>
            <a href="#" className={style.slidericon}>
              <img src={slidericon2} alt="spotify" />
            </a>
            <a href="#" className={style.slidericon}>
              <img src={slidericon3} alt="youtube" />
            </a>
          </div>
          <div className={style.itemdecorblack1}>
            <img src={itemdecorblack1} alt="черная звездочка" />
          </div>
          <div className={style.itemdecororange1}>
            <img src={itemdecororange1} alt="оранжевая дуга" />
          </div>
          <div className={style.itemdecorblue1}>
            <img src={itemdecorblue1} alt="голубая спираль" />
          </div>
        </div>
        <div className={style.slideritem}>
          <img src={slideritem3} alt="девушки и парни сидят на полу" />
          <h3 className={style.sliderTitle}>Women’s Rights</h3>
          <div className={style.slidericons}>
            <a href="#" className={style.slidericon}>
              <img src={slidericon1} alt="google" />
            </a>
            <a href="#" className={style.slidericon}>
              <img src={slidericon2} alt="spotify" />
            </a>
            <a href="#" className={style.slidericon}>
              <img src={slidericon3} alt="youtube" />
            </a>
          </div>
          <div className={style.itemdecorrainbow3}>
            <img src={itemdecorrainbow3} alt="три разноцветные полоски" />
          </div>
          <div className={style.itemdecororange31}>
            <img src={itemdecororange31} alt="оранжевый восклицательный знак" />
          </div>
          <div className={style.itemdecororange32}>
            <img src={itemdecororange32} alt="оранжевый восклицательный знак" />
          </div>
          <div className={style.itemdecorblue3}>
            <img src={itemdecorblue3} alt="голубая спираль" />
          </div>
          <div className={style.itemdecororangeblue3}>
            <img
              src={itemdecororangeblue3}
              alt="оранжевой сердечко в голубом облачке"
            />
          </div>
          <div className={style.itemdecorblueblack3}>
            <img
              src={itemdecorblueblack3}
              alt="два голубых крожоска и под ним черная кривая"
            />
          </div>
          <div className={style.itemdecororangestar3}>
            <img src={itemdecororangestar3} alt="оранжевая звездочка" />
          </div>
          <div className={style.itemdecorblackstar3}>
            <img src={itemdecorblackstar3} alt="черная звездочка" />
          </div>
          <div className={style.itemdecororangeline3}>
            <img src={itemdecororangeline3} alt="оранжевая линия" />
          </div>
          <div className={style.itemdecorblackline3}>
            <img src={itemdecorblackline3} alt="черная линия" />
          </div>
        </div>
        <div className={style.slideritem}>
          <img src={slideritem1} alt="человеческая фигура на фоне листьев" />
          <h3 className={style.sliderTitle}>Self–confidence</h3>
          <div className={style.slidericons}>
            <a href="#" className={style.slidericon}>
              <img src={slidericon1} alt="google" />
            </a>
            <a href="#" className={style.slidericon}>
              <img src={slidericon2} alt="spotify" />
            </a>
            <a href="#" className={style.slidericon}>
              <img src={slidericon3} alt="youtube" />
            </a>
          </div>
          <div className={style.itemdecorblack2}>
            <img src={itemdecorblack2} alt="черная звездочка" />
          </div>
          <div className={style.itemdecorblue2}>
            <img src={itemdecorblue2} alt="три голубых кривых" />
          </div>
          <div className={style.itemdecororange2}>
            <img src={itemdecororange2} alt="две оранжевых кривых" />
          </div>
          <div className={style.itemdecorwhite2}>
            <img src={itemdecorwhite2} alt="белая спираль" />
          </div>
        </div>
        <div className={style.slideritem}>
          <img src={slideritem2} alt="девушка закатила глаза и высунула язык" />
          <h3 className={style.sliderTitle}>Perplexed Mind</h3>
          <div className={style.slidericons}>
            <a href="#" className={style.slidericon}>
              <img src={slidericon1} alt="google" />
            </a>
            <a href="#" className={style.slidericon}>
              <img src={slidericon2} alt="spotify" />
            </a>
            <a href="#" className={style.slidericon}>
              <img src={slidericon3} alt="youtube" />
            </a>
          </div>
          <div className={style.itemdecorblack1}>
            <img src={itemdecorblack1} alt="черная звездочка" />
          </div>
          <div className={style.itemdecororange1}>
            <img src={itemdecororange1} alt="оранжевая дуга" />
          </div>
          <div className={style.itemdecorblue1}>
            <img src={itemdecorblue1} alt="голубая спираль" />
          </div>
        </div>
        <div className={style.slideritem}>
          <img src={slideritem3} alt="девушки и парни сидят на полу" />
          <h3 className={style.sliderTitle}>Women’s Rights</h3>
          <div className={style.slidericons}>
            <a href="#" className={style.slidericon}>
              <img src={slidericon1} alt="google" />
            </a>
            <a href="#" className={style.slidericon}>
              <img src={slidericon2} alt="spotify" />
            </a>
            <a href="#" className={style.slidericon}>
              <img src={slidericon3} alt="youtube" />
            </a>
          </div>
          <div className={style.itemdecorrainbow3}>
            <img src={itemdecorrainbow3} alt="три разноцветные полоски" />
          </div>
          <div className={style.itemdecororange31}>
            <img src={itemdecororange31} alt="оранжевый восклицательный знак" />
          </div>
          <div className={style.itemdecororange32}>
            <img src={itemdecororange32} alt="оранжевый восклицательный знак" />
          </div>
          <div className={style.itemdecorblue3}>
            <img src={itemdecorblue3} alt="голубая спираль" />
          </div>
          <div className={style.itemdecororangeblue3}>
            <img
              src={itemdecororangeblue3}
              alt="оранжевой сердечко в голубом облачке"
            />
          </div>
          <div className={style.itemdecorblueblack3}>
            <img
              src={itemdecorblueblack3}
              alt="два голубых крожоска и под ним черная кривая"
            />
          </div>
          <div className={style.itemdecororangestar3}>
            <img src={itemdecororangestar3} alt="оранжевая звездочка" />
          </div>
          <div className={style.itemdecorblackstar3}>
            <img src={itemdecorblackstar3} alt="черная звездочка" />
          </div>
          <div className={style.itemdecororangeline3}>
            <img src={itemdecororangeline3} alt="оранжевая линия" />
          </div>
          <div className={style.itemdecorblackline3}>
            <img src={itemdecorblackline3} alt="черная линия" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomePageSlider;
