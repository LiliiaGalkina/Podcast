import style from "./aboutsponsorslider.module.scss";
import { sponsor } from "../newsitems";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";
import "./swiperstyles.scss";
import { Navigation } from "swiper/modules";
import useResponsiveEvent from "./useResponsiveEvent.jsx";

const AboutSponsorSlider = () => {
  const isMobileScreen = useResponsiveEvent(769);
  const isMobileScreenLittle = useResponsiveEvent(481);

  return (
    <div className={style.slider}>
      <Swiper
        slidesPerView={isMobileScreenLittle ? 1 : isMobileScreen ? 2 : 3}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
      >
        {sponsor.map((item) => (
          <SwiperSlide className={style.slidersponsoritem} key={item.id}>
            <div className={style.itemimg}>
              <img src={item.imagesrc} alt={item.imgalt} />
            </div>
            <p className={style.itemtext}>{item.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutSponsorSlider;
