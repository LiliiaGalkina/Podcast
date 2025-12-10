import quote from "/image/homepage/quote.png";
import style from "./homepagefeedbackslider.module.scss";
import { feedbackSliderItems } from "../../newsitems";
import useResponsiveEvent from "../../About/useResponsiveEvent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const HomePageFeedbackSlider = () => {
  const isMobileScreen = useResponsiveEvent(769);

  return (
    <div className={style.sliderfeedbackcontainer}>
      <Swiper
        slidesPerView={isMobileScreen ? 1 : 2}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
      >
        {feedbackSliderItems.map((sliderItem) => (
          <SwiperSlide key={sliderItem.id} className={style.sliderfeedbackitem}>
            <img
              src={quote}
              className={style.sliderfeedbackquote}
              alt="красная кавычка"
            />
            <p className={style.sliderfeedbacktext}>{sliderItem.text}</p>
            <div className={style.sliderfeedbackperson}>
              <img
                src={sliderItem.avatarsrc}
                className={style.sliderfeedbackpersonfoto}
                alt={sliderItem.avataralt}
              />
              <p className={style.sliderfeedbackpersonname}>
                {sliderItem.name}
              </p>
              <img
                src={sliderItem.sourcesrc}
                className={
                  sliderItem.class == "big"
                    ? style.sliderfeedbackpersonimg2
                    : style.sliderfeedbackpersonimg1
                }
                alt={sliderItem.sourcealt}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePageFeedbackSlider;
