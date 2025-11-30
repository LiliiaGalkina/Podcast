import allstyle from "../allstyles.module.scss";
import style from "./listenerssay.module.scss";

const Listenerssay = () => {
  return (
    <section className={style.listenerssay}>
      <div className="container">
        <h2 className={allstyle.sectiontitle}>What our listeners say</h2>
        <p className={allstyle.sectiontext}>
          Their experience throughout every platform
        </p>
        <div className={style.mainimg}>
          <img src="/Podcast/image/about/listeners-say.png" alt="микрофоны" />
        </div>
        <div className={style.subtitleblock}>
          <h3 className={style.subtitle}>About and History</h3>
          <div className={style.subtitledecorred}>
            <img
              src="/Podcast/image/about/subtitle-decorred.png"
              alt="три красные полоски, декор"
            />
          </div>
        </div>
        <div className={style.textitems}>
          <div className={style.textitem}>
            <p>
              Eu non <span>diam</span> phasellus vestibulum lorem. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim. Id diam vel quam{" "}
              <span>elementum pulvinar</span>.
            </p>
            <p>
              Elementum eu facilisis sed odio morbi quis commodo. Sed odio morbi
              quis commodo odio aenean sed adipiscing odio diam. uno fablotoson
              louw uit.
            </p>
          </div>
          <div className={style.textitem}>
            <p>
              Lorem ipsum dolor sit amet, <span>consectetur adipiscing</span>{" "}
              elit. Quam pellentesque at bibendum euismod tellus duis cursus
              dignissim odio. Sit vulputate et integer in. Sit vel, senectus
              iaculis morbi. <span>Amet</span> interdum imperdiet laoreet{" "}
              <span>morbi</span> tincidunt fermentum, libero. Ante enim eget.
            </p>
            <p>
              Viverra at porttitor accumsan. <a href="#">Orci non here</a>
            </p>
          </div>
        </div>
        <div className={style.subtitleblock}>
          <h3 className={style.subtitle}>Founder and Main Host</h3>
          <div className={style.subtitledecorblue}>
            <img
              src="/Podcast/image/about/subtitle-decorblue.png"
              alt="голубая кривая, декор"
            />
          </div>
        </div>
        <div className={style.imgitems}>
          <div className={style.imgitem}>
            <div className={style.itemimg}>
              <img
                src="/Podcast/image/about/item-img1.jpg"
                alt="фото парня в шапке и очках"
              />
            </div>
            <div className={style.itemcontent}>
              <div className={style.itemcontentup}>
                <p className={style.itemsubtitle}>Host 1</p>
                <h3 className={style.itemtitle}>
                  Porter <br /> Severus
                </h3>
                <p className={style.itemtext}>
                  Lorem ipsum dolor sit amet con sectet piscing elit, sed do
                  eiusmod tempor rarylet podofcast.
                </p>
              </div>
              <div className={style.itemcontentdown}>
                <h4 className={style.socialtitle}>follow me:</h4>
                <div className={style.social}>
                  <a href="#">
                    <img
                      src="/Podcast/image/about/item-tiktok.svg"
                      alt="tiktok"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/Podcast/image/about/item-twitter.svg"
                      alt="twitter"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/Podcast/image/about/item-instagram.svg"
                      alt="instagram."
                    />
                  </a>
                </div>
              </div>
              <div className={style.itemdecor}>
                <img
                  src="/Podcast/image/about/item-decor1.png"
                  alt="улыбающаяся рожица"
                />
              </div>
            </div>
          </div>
          <div className={style.imgitem}>
            <div className={style.itemimg}>
              <img
                src="/Podcast/image/about/item-img2.jpg"
                alt="чернокожий парень"
              />
            </div>
            <div className={style.itemcontent}>
              <div className={style.itemcontentup}>
                <p className={style.itemsubtitle}>Host 2</p>
                <h3 className={style.itemtitle}>
                  Marques <br /> Keith
                </h3>
                <p className={style.itemtext}>
                  Lorem ipsum dolor sit amet con sectet piscing elit, sed do
                  eiusmod tempor rarylet podofcast.
                </p>
              </div>
              <div className={style.itemcontentdown}>
                <h4 className={style.socialtitle}>follow me:</h4>
                <div className={style.social}>
                  <a href="#">
                    <img
                      src="/Podcast/image/about/item-tiktok.svg"
                      alt="tiktok"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/Podcast/image/about/item-twitter.svg"
                      alt="twitter"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/Podcast/image/about/item-instagram.svg"
                      alt="instagram."
                    />
                  </a>
                </div>
              </div>
              <div className={style.itemdecor}>
                <img
                  src="/Podcast/image/about/item-decor2.png"
                  alt="черная снежинка"
                />
              </div>
            </div>
          </div>
        </div>
		  </div>
		    <div className={allstyle.sectiondecordown}>
				  <img src="/Podcast/image/blackdecorsection.png" alt="черная кривая" />
				</div>
    </section>
  );
};
export default Listenerssay;
