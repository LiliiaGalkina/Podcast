import allstyle from "../allstyles.module.scss";
import style from "./benefits.module.scss";
import Buttondark from "../../Button/Buttondark";

const Benefits = ({benefits}) => {
  return (
    <section ref = {benefits} className={style.benefits}>
      <div className="container">
        <div className={style.titleblock}>
          <h2 className={allstyle.sectiontitle}>Membership benefits</h2>
          <img
            src="/image/homepage/benefits/benefitsdecor.png"
            className={style.titledecor}
            alt="черная кривая"
          />
        </div>
        <p className={allstyle.sectiontext}>
          Become our sponsor and get all benefits
        </p>
        <div className={style.items}>
          <div className={style.item}>
            <div className={style.itemimg}>
              <img
                src="/image/homepage/benefits/benefits1.png"
                alt="голубая кривая"
              />
            </div>
            <h3 className={style.itemtitle}>Topic by Request</h3>
            <p className={style.itemtext}>
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
          <div className={style.item}>
            <div className={style.itemimg}>
              <img
                src="/image/homepage/benefits/benefits2.png"
                alt="цветные ромбики"
              />
            </div>
            <h3 className={style.itemtitle}>Exclusive Content</h3>
            <p className={style.itemtext}>
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
          <div className={style.item}>
            <div className={style.itemimg}>
              <img
                src="/image/homepage/benefits/benefits3.png"
                alt="улыбающаяся рожица"
              />
            </div>
            <h3 className={style.itemtitle}>Join the Community</h3>
            <p className={style.itemtext}>
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
          <div className={style.item}>
            <div className={style.itemimg}>
              <img
                src="/image/homepage/benefits/benefits4.png"
                alt="три улыбающиеся рожицы друг за другом"
              />
            </div>
            <h3 className={style.itemtitle}>Livestreaming Access</h3>
            <p className={style.itemtext}>
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
          <div className={style.item}>
            <div className={style.itemimg}>
              <img src="/image/homepage/benefits/benefits5.png" alt="огонь" />
            </div>
            <h3 className={style.itemtitle}>Exclusive Episodes & Merch</h3>
            <p className={style.itemtext}>
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
          <div className={style.item}>
            <div className={style.itemimg}>
              <img
                src="/image/homepage/benefits/benefits6.png"
                alt="черная снежинка"
              />
            </div>
            <h3 className={style.itemtitle}>And much more!</h3>
            <p className={style.itemtext}>
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
        </div>
        <div className={style.button}>
          <Buttondark buttonText="SEE PRICING" />
        </div>
      </div>
      <div className={style.decor}>
        <img src="/image/blackdecorsection.png" alt="черная кривая" />
      </div>
    </section>
  );
};

export default Benefits;
