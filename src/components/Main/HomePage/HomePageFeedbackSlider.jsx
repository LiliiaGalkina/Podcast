import quote from "/image/homepage/quote.png";
import style from "./homepagefeedbackslider.module.scss";
import arrowleft from "/image/homepage/sliderfeedback/arrowleft.png";
import arrowright from "/image/homepage/sliderfeedback/arrowright.png";
import { feedbackSliderItems } from "../newsitems";
import { useEffect, useState } from "react";
import useResponsiveEvent from "../About/useResponsiveEvent";

const HomePageFeedbackSlider = () => {
  const [slideIdx, setSlideIdx] = useState(0);

  const isMobileScreen = useResponsiveEvent(769);

  let sliderLength = isMobileScreen ? 1 : 2;

  const isPrevButtonDisabled = slideIdx === 0;
  const isNextButtonDisabled =
    slideIdx === feedbackSliderItems.length - sliderLength;

  const handlePrevClick = () => {
    if (slideIdx > 0) {
      setSlideIdx(slideIdx - 1);
    }
  };

  const handleNextClick = () => {
    if (slideIdx < feedbackSliderItems.length - sliderLength) {
      setSlideIdx(slideIdx + 1);
    }
  };

  return (
    <div className={style.sliderfeedbackcontainer}>
      <div className={style.sliderfeedback}>
        {feedbackSliderItems &&
          feedbackSliderItems
            .slice(slideIdx, slideIdx + sliderLength)
            .map((sliderItem) => (
              <div key={sliderItem.id} className={style.sliderfeedbackitem}>
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
              </div>
            ))}
      </div>
      <div className={style.arrows}>
        <button
          className={style.arrowleft}
          onClick={handlePrevClick}
          disabled={isPrevButtonDisabled}
        >
          <img src={arrowleft} alt="стрелка влево" />
        </button>
        <button
          className={style.arrowright}
          onClick={handleNextClick}
          disabled={isNextButtonDisabled}
        >
          <img src={arrowright} alt="стрелка вправо" />
        </button>
      </div>
    </div>
  );
};

export default HomePageFeedbackSlider;
