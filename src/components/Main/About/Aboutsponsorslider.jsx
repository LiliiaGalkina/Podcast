import style from "./aboutsponsorslider.module.scss";
import { sponsor } from "../newsitems";
import arrowleft from "/image/homepage/sliderfeedback/arrowleft.png";
import arrowright from "/image/homepage/sliderfeedback/arrowright.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";
import "./swiperstyles.scss";
import { Pagination, Navigation } from "swiper/modules";

const AboutSponsorSlider = () => {

  return (
    <div className={style.slider}>
      <Swiper
        slidesPerView={3}
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
