import allstyle from "../allstyles.module.scss";
import style from "./pricing.module.scss";
import Buttondark from "../../Button/Buttondark";

const Pricing = () => {
  return (
    <section className={style.pricing}>
      <div className="container">
        <div className={style.titleblock}>
          <h2 className={allstyle.sectiontitle}>Become our sponsor</h2>
          <img
            src="/image/homepage/pricing/decorred.png"
            className={style.titledecor}
            alt="красное солнышко"
          />
        </div>
        <p className={allstyle.sectiontext}>
          Get exclusive episodes, merch and more
        </p>
        <div className={style.items}>
          <div className={style.itemsdecorup}>
            <img
              src="/image/homepage/pricing/decorstarblack.png"
              alt="черная звезда"
            />
          </div>
          <div className={style.item}>
            <h3 className={style.itemtitle}>Member</h3>
            <p className={style.itemtext}>
              Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
              tempor.
            </p>
            <div className={style.itemblock}>
              <Buttondark buttonText="SUBSCRIBE" />
              <div className={style.itemprice}>
                <span>9.99$</span>
                <span>/month</span>
              </div>
            </div>
          </div>
          <div className={style.itemred}>
            <h3 className={style.itemtitle}>Family</h3>
            <p className={style.itemtext}>
              Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
              tempor.
            </p>
            <div className={style.itemblock}>
              <Buttondark buttonText="SUBSCRIBE" />
              <div className={style.itemprice}>
                <span>14.99$</span>
                <span>/month</span>
              </div>
            </div>
          </div>
          <div className={style.item}>
            <h3 className={style.itemtitle}>Official</h3>
            <p className={style.itemtext}>
              Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
              tempor.
            </p>
            <div className={style.itemblock}>
              <Buttondark buttonText="SUBSCRIBE" />
              <div className={style.itemprice}>
                <span>29.99$</span>
                <span>/month</span>
              </div>
            </div>
          </div>
          <div className={style.itemdoppos}>
            <p className={style.itemdoptext}>What’s included:</p>
            <ul className={style.itemdoplist}>
              <li className={style.itemdopitem}>Exclusive Content</li>
              <li className={style.itemdopitem}>5% Discount on Merch</li>
              <li className={style.itemdopitem}>Join the Community</li>
              <li className={style.itemdopitem}>Livestreaming Access</li>
            </ul>
          </div>
          <div className={style.itemdopred}>
            <p className={style.itemdoptext}>What’s included:</p>
            <ul className={style.itemdoplist}>
              <li className={style.itemdopitem}>Everything in Tier 1</li>
              <li className={style.itemdopitem}>Free tickets to Events</li>
              <li className={style.itemdopitem}>Limited Edition Merch</li>
              <li className={style.itemdopitem}>Promote your Product</li>
              <li className={style.itemdopitem}>Promote your Product</li>
            </ul>
          </div>
          <div className={style.itemdop}>
            <p className={style.itemdoptext}>What’s included:</p>
            <ul className={style.itemdoplist}>
              <li className={style.itemdopitem}>Everything in Tier 2</li>
              <li className={style.itemdopitem}>
                Exclusive Badge on Livestreaming
              </li>
              <li className={style.itemdopitem}>Become an Official Sponsor</li>
              <li className={style.itemdopitem}>
                Early Access to All Episodes
              </li>
              <li className={style.itemdopitem}>Free Stikers and Merch</li>
            </ul>
          </div>
          <div className={style.itemsdecordonw}>
            <img
              src="/image/homepage/pricing/decorblue.png"
              alt="голубая кривая"
            />
          </div>
        </div>
      </div>
      <div className={style.decor}>
        <img src="/image/homepage/blackdecorsection.png" alt="черная кривая" />
      </div>
    </section>
  );
};

export default Pricing;
