import style from "./homepageslider.module.scss";
import { homepageSlides } from "../newsitems";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import useResponsiveEvent from "../About/useResponsiveEvent";
import "./swiperstyles.scss";

const HomePageSlider = () => {
	const isScreenLittle = useResponsiveEvent(1500)
	const isScreenSmoll = useResponsiveEvent(1131)
const isMobileScreen = useResponsiveEvent(600);

  return (
    <div className={style.heroslider}>
      <Swiper
        slidesPerView={
          isMobileScreen ? 1 : isScreenSmoll ? 2 : isScreenLittle ? 3 : 4
        }
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        {homepageSlides.map((slide) => (
          <SwiperSlide className={style.slideritem} key={slide.id}>
            <img src={slide.imagesrc} alt={slide.imagealt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePageSlider;
