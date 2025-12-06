import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./homepageslider.module.scss";
import { homepageSlides } from "../newsitems";


const HomePageSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    centerPadding: "200px",
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 790,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
	

  return (
    <div className={style.slidercontainer}>
		  <Slider {...settings} className={style.slider}>
			  {homepageSlides.map((slide) => (
				  <div className={style.slideritem} key={slide.id}>
					  <img src={slide.imagesrc} alt={slide.imagealt} />
				  </div>
			  ))}
              
      </Slider>
    </div>
  );
};

export default HomePageSlider;
