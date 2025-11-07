import style from "./homepage.module.scss";
import HomePageSlider from "./HomePageSlider";
import decorleft from "/image/homepage/hero-decor1.png";
import decorright from "/image/homepage/hero-decor2.png";
import decordown from "/image/homepage/hero-decor3.png";
import google from "/image/homepage/googlepodcasts.png";
import spotify from "/image/homepage/spotify.png";
import youtube from "/image/homepage/youtube.png";
import talkman from "/image/homepage/talk-man.svg";
import talklamp from "/image/homepage/talk-lamp.svg";
import quote from "/image/homepage/quote.png";
import bannerdecor1 from "/image/homepage/banner-decor.png";
import bannerdecor2 from "/image/homepage/blackstar.png";
import banneravatar from "/image/homepage/avatar.png";
import bannergreencircle from "/image/homepage/green-circle.svg";
import redsun from "/image/homepage/sparkle.png";
import HomePageFeedbackSlider from "./HomePageFeedbackSlider";
import blackdecorsection from "/image/homepage/blackdecorsection.png";
import Buttondark from "../Button/Buttondark";

const HomePage = () => {
  return (
    <main className={style.main}>
      <section className={style.hero}>
        <h1 className={style.herotitle}>
          Your Daily <p className={style.herotitlered}>Podcast</p>
        </h1>
        <p className={style.herotext}>
          We cover all kinds of categories and a weekly special guest.
        </p>
        <div className={style.heroslider}>
          <HomePageSlider />
        </div>
        <div className="container">
          <div className={style.herolinks}>
            <p className={style.herolinkstitle}>Supported by:</p>
            <a href="#" className={style.herolink}>
              <img src={spotify} alt="spotify" />
            </a>
            <a href="#" className={style.herolink}>
              <img src={google} alt="google podcasts" />
            </a>
            <a href="#" className={style.herolink}>
              <img src={youtube} alt="youtube" />
            </a>
          </div>
        </div>
        <div className={style.herodecorleft}>
          <img
            src={decorleft}
            alt="черная кривая с оранжевой звездочкой на конце"
          />
        </div>
        <div className={style.herodecorright}>
          <img src={decorright} alt="несколько разноцветных звездочек" />
        </div>
        <div className={style.herodecordown}>
          +
          <img src={decordown} alt="красная кривая" />
        </div>
      </section>
      <section className={style.talklisten}>
        <div className="container">
          <h2 className={style.talklistentitle}>
            Talk. Listen. Get inspired by every minute of it.
          </h2>
          <div className={style.talklistenitems}>
            <div className={style.talklistenitem}>
              <div className={style.talklistenitemimg}>
                <img
                  src={talkman}
                  alt="нарисованная голова мужчины, над ним облачко со знаками вопроса"
                />
              </div>
              <p className={style.talklistenitemtext}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio.
              </p>
            </div>
            <div className={style.talklistenitem}>
              <div className={style.talklistenitemimg}>
                <img
                  src={talklamp}
                  alt="нарисованная голова мужчины, над ним облачко со знаками вопроса"
                />
              </div>
              <p className={style.talklistenitemtext}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio.
              </p>
            </div>
          </div>
          <div className={style.talklistenbanner}>
            <div className={style.bannerquote}>
              <img src={quote} alt="красные кавычки" />
            </div>
            <h3 className={style.bannertitle}>
              One of the best daily podcasts that covers every topic on Spotify.
            </h3>
            <div className={style.bannermanblock}>
              <div className={style.banneravatar}>
                <img src={banneravatar} alt="фото John Smith" />
              </div>
              <p className={style.bannername}>John Smith,</p>
              <div className={style.bannerpositionbody}>
                <div className={style.bannergreencircle}>
                  <img
                    src={bannergreencircle}
                    alt="зеленый кружок с черными полосками"
                  />
                </div>
                <p className={style.bannerposition}>Social Community Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.feedback}>
        <div className={style.feedbacktitleblock}>
          <h2 className={style.sectiontitle}>What our listeners say</h2>
          <img
            src={redsun}
            className={style.feedbacktitledecor}
            alt="красное солнышко"
          />
        </div>
        <p className={style.sectiontext}>
          Their experience throughout every platform
        </p>
        <HomePageFeedbackSlider />
        <div className={style.feedbackupdecor}>
          <img src={blackdecorsection} alt="черная кривая" />
        </div>
        <div className={style.feedbackdowndecor}>
          <img src={blackdecorsection} alt="черная кривая" />
        </div>
      </section>
      <section className={style.benefits}>
        <div className="container">
          <div className={style.benefitstitleblock}>
            <h2 className={style.sectiontitle}>Membership benefits</h2>
            <img
              src="/image/homepage/benefits/benefitsdecor.png"
              className={style.benefitstitledecor}
              alt="черная кривая"
            />
          </div>
          <p className={style.sectiontext}>
            Become our sponsor and get all benefits
          </p>
          <div className={style.benefitsitems}>
            <div className={style.benefitsitem}>
              <div className={style.benefitsitemimg}>
                <img
                  src="/image/homepage/benefits/benefits1.png"
                  alt="голубая кривая"
                />
              </div>
              <h3 className={style.benefitsitemtitle}>Topic by Request</h3>
              <p className={style.benefitsitemtext}>
                Lorem ipsum dolor sit amet consectet pis cing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className={style.benefitsitem}>
              <div className={style.benefitsitemimg}>
                <img
                  src="/image/homepage/benefits/benefits2.png"
                  alt="цветные ромбики"
                />
              </div>
              <h3 className={style.benefitsitemtitle}>Exclusive Content</h3>
              <p className={style.benefitsitemtext}>
                Lorem ipsum dolor sit amet consectet pis cing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className={style.benefitsitem}>
              <div className={style.benefitsitemimg}>
                <img
                  src="/image/homepage/benefits/benefits3.png"
                  alt="улыбающаяся рожица"
                />
              </div>
              <h3 className={style.benefitsitemtitle}>Join the Community</h3>
              <p className={style.benefitsitemtext}>
                Lorem ipsum dolor sit amet consectet pis cing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className={style.benefitsitem}>
              <div className={style.benefitsitemimg}>
                <img
                  src="/image/homepage/benefits/benefits4.png"
                  alt="три улыбающиеся рожицы друг за другом"
                />
              </div>
              <h3 className={style.benefitsitemtitle}>Livestreaming Access</h3>
              <p className={style.benefitsitemtext}>
                Lorem ipsum dolor sit amet consectet pis cing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className={style.benefitsitem}>
              <div className={style.benefitsitemimg}>
                <img src="/image/homepage/benefits/benefits5.png" alt="огонь" />
              </div>
              <h3 className={style.benefitsitemtitle}>
                Exclusive Episodes & Merch
              </h3>
              <p className={style.benefitsitemtext}>
                Lorem ipsum dolor sit amet consectet pis cing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className={style.benefitsitem}>
              <div className={style.benefitsitemimg}>
                <img
                  src="/image/homepage/benefits/benefits6.png"
                  alt="черная снежинка"
                />
              </div>
              <h3 className={style.benefitsitemtitle}>And much more!</h3>
              <p className={style.benefitsitemtext}>
                Lorem ipsum dolor sit amet consectet pis cing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
          <div className={style.benefitsbutton}>
            <Buttondark buttonText="SEE PRICING" />
          </div>
        </div>
        <div className={style.benefitsdecor}>
          <img
            src="/image/homepage/blackdecorsection.png"
            alt="черная кривая"
          />
        </div>
      </section>
      <section className={style.episodes}>
        <div className="container">
          <h2 className={style.sectiontitle}>Recent Episodes</h2>
          <p className={style.sectiontext}>
            Available on your favorite platform
          </p>
          <div className={style.episodescontent}>
            <div className={style.episodesdecor}>
              <img
                src="./image/homepage/episodes/decor.png"
                alt="три красные черточки"
              />
            </div>
            <div className={style.episodesitems}>
              <a href="#" className={style.episodesitemshadow}>
                <div className={style.episodesitemup}>
                  <div className={style.episodesitemimg}>
                    <img
                      src="/image/homepage/episodes/episode1.png"
                      alt="на сером фоне на стульях сидят вирусы"
                    />
                  </div>
                  <div className={style.episodesiteminfo}>
                    <h4 className={style.episodesitemsubtitle}>Eps. 6</h4>
                    <h3 className={style.episodesitemtitlered}>
                      Pandemic Becoming Endemic
                    </h3>
                    <p className={style.episodesitemtext}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur ac ultrices odio.
                    </p>
                  </div>
                </div>
                <div className={style.episodesitemdown}>
                  <div className={style.episodesitemcategories}>
                    <div className={style.episodesitemcategoory}>covid-19</div>
                    <div className={style.episodesitemcategoory}>health</div>
                  </div>
                  <div className={style.episodesitemhost}>
                    <p className={style.episodesitemhosttext}>Hosted by: </p>
                    <div className={style.episodesitemhostimg}>
                      <img
                        src="/image/homepage/episodes/host.png"
                        alt="двойное фото авторов"
                      />
                    </div>
                  </div>
                </div>
              </a>
              <a href="#" className={style.episodesitem}>
                <div className={style.episodesitemup}>
                  <div className={style.episodesitemimg}>
                    <img
                      src="/image/homepage/episodes/episode2.png"
                      alt="машина наклонилась на юок и стоит на двух колесах"
                    />
                  </div>
                  <div className={style.episodesiteminfo}>
                    <h4 className={style.episodesitemsubtitle}>Eps. 5</h4>
                    <h3 className={style.episodesitemtitle}>
                      Tesla Autopilot Controversy
                    </h3>
                    <p className={style.episodesitemtext}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur ac ultrices odio.
                    </p>
                  </div>
                </div>
                <div className={style.episodesitemdown}>
                  <div className={style.episodesitemcategories}>
                    <div className={style.episodesitemcategoory}>
                      automation
                    </div>
                    <div className={style.episodesitemcategoory}>tech</div>
                  </div>
                  <div className={style.episodesitemhost}>
                    <p className={style.episodesitemhosttext}>Hosted by: </p>
                    <div className={style.episodesitemhostimg}>
                      <img
                        src="/image/homepage/episodes/host.png"
                        alt="двойное фото авторов"
                      />
                    </div>
                  </div>
                </div>
              </a>
              <a href="#" className={style.episodesitem}>
                <div className={style.episodesitemup}>
                  <div className={style.episodesitemimg}>
                    <img
                      src="/image/homepage/episodes/episode3.png"
                      alt="девушки и парни сидят на полу"
                    />
                  </div>
                  <div className={style.episodesiteminfo}>
                    <h4 className={style.episodesitemsubtitle}>Eps. 4</h4>
                    <h3 className={style.episodesitemtitle}>
                      Women's Rights? Is it alright?
                    </h3>
                    <p className={style.episodesitemtext}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur ac ultrices odio.
                    </p>
                  </div>
                </div>
                <div className={style.episodesitemdown}>
                  <div className={style.episodesitemcategories}>
                    <div className={style.episodesitemcategoory}>
                      women’s rights
                    </div>
                  </div>
                  <div className={style.episodesitemhost}>
                    <p className={style.episodesitemhosttext}>Hosted by: </p>
                    <div className={style.episodesitemhostimg}>
                      <img
                        src="/image/homepage/episodes/host.png"
                        alt="двойное фото авторов"
                      />
                    </div>
                  </div>
                </div>
              </a>
              <a href="#" className={style.episodesitemshadow}>
                <div className={style.episodesitemup}>
                  <div className={style.episodesitemimg}>
                    <img
                      src="/image/homepage/episodes/episode4.png"
                      alt="человек в сером облегающем косюие лежит на серой листве"
                    />
                  </div>
                  <div className={style.episodesiteminfo}>
                    <h4 className={style.episodesitemsubtitle}>Eps. 3</h4>
                    <h3 className={style.episodesitemtitlered}>
                      How to Deal with Self–Confidence
                    </h3>
                    <p className={style.episodesitemtext}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur ac ultrices odio.
                    </p>
                  </div>
                </div>
                <div className={style.episodesitemdown}>
                  <div className={style.episodesitemcategories}>
                    <div className={style.episodesitemcategoory}>
                      self-esteem
                    </div>
                    <div className={style.episodesitemcategoory}>health</div>
                  </div>
                  <div className={style.episodesitemhost}>
                    <p className={style.episodesitemhosttext}>Hosted by: </p>
                    <div className={style.episodesitemhostimg}>
                      <img
                        src="/image/homepage/episodes/host.png"
                        alt="двойное фото авторов"
                      />
                    </div>
                  </div>
                </div>
              </a>
              <a href="#" className={style.episodesitem}>
                <div className={style.episodesitemup}>
                  <div className={style.episodesitemimg}>
                    <img
                      src="/image/homepage/episodes/episode5.png"
                      alt="мужчина в костюме сидит на опрокинутом стуле"
                    />
                  </div>
                  <div className={style.episodesiteminfo}>
                    <h4 className={style.episodesitemsubtitle}>Eps. 2</h4>
                    <h3 className={style.episodesitemtitle}>
                      Type of Social Classes of People
                    </h3>
                    <p className={style.episodesitemtext}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur ac ultrices odio.
                    </p>
                  </div>
                </div>
                <div className={style.episodesitemdown}>
                  <div className={style.episodesitemcategories}>
                    <div className={style.episodesitemcategoory}>
                      social class
                    </div>
                    <div className={style.episodesitemcategoory}>wealth</div>
                  </div>
                  <div className={style.episodesitemhost}>
                    <p className={style.episodesitemhosttext}>Hosted by: </p>
                    <div className={style.episodesitemhostimg}>
                      <img
                        src="/image/homepage/episodes/host.png"
                        alt="двойное фото авторов"
                      />
                    </div>
                  </div>
                </div>
              </a>
              <a href="#" className={style.episodesitemshadow}>
                <div className={style.episodesitemup}>
                  <div className={style.episodesitemimg}>
                    <img
                      src="/image/homepage/episodes/episode6.png"
                      alt="лицо девушки, которая ержится за свое лицо"
                    />
                  </div>
                  <div className={style.episodesiteminfo}>
                    <h4 className={style.episodesitemsubtitle}>Eps. 1</h4>
                    <h3 className={style.episodesitemtitlered}>
                      Are you a Perplexed Mind Person?
                    </h3>
                    <p className={style.episodesitemtext}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur ac ultrices odio.
                    </p>
                  </div>
                </div>
                <div className={style.episodesitemdown}>
                  <div className={style.episodesitemcategories}>
                    <div className={style.episodesitemcategoory}>
                      mind-behaviour
                    </div>
                    <div className={style.episodesitemcategoory}>health</div>
                  </div>
                  <div className={style.episodesitemhost}>
                    <p className={style.episodesitemhosttext}>Hosted by: </p>
                    <div className={style.episodesitemhostimg}>
                      <img
                        src="/image/homepage/episodes/host.png"
                        alt="двойное фото авторов"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className={style.episodesbutton}>
            <Buttondark buttonText="BROWSE ALL EPISODES" />
          </div>
        </div>
        <div className={style.episodesdecorblack}>
          <img
            src="/image/homepage/blackdecorsection.png"
            alt="черная кривая"
          />
        </div>
      </section>
      <section className={style.pricing}>
        <div className="container">
          <div className={style.pricingktitleblock}>
            <h2 className={style.sectiontitle}>Become our sponsor</h2>
            <img
              src="/image/homepage/pricing/decorred.png"
              className={style.pricingtitledecor}
              alt="красное солнышко"
            />
          </div>
          <p className={style.sectiontext}>
            Get exclusive episodes, merch and more
          </p>
          <div className={style.pricingitems}>
            <div className={style.pricingitem}>
              <h3 className={style.pricingitemtitle}>Member</h3>
              <p className={style.pricingitemtext}>
                Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
                tempor.
              </p>
              <div className={style.pricingitemblock}>
                <Buttondark buttonText="SUBSCRIBE" />
                <div className={style.pricingitemprice}>
                  <span>$9.99</span>
                  <span>/month</span>
                </div>
              </div>
            </div>
            <div className={style.pricingitemred}>
              <h3 className={style.pricingitemtitle}>Family</h3>
              <p className={style.pricingitemtext}>
                Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
                tempor.
              </p>
              <div className={style.pricingitemblock}>
                <Buttondark buttonText="SUBSCRIBE" />
                <div className={style.pricingitemprice}>
                  <span>$14.99</span>
                  <span>/month</span>
                </div>
              </div>
            </div>
            <div className={style.pricingitem}>
              <h3 className={style.pricingitemtitle}>Official</h3>
              <p className={style.pricingitemtext}>
                Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
                tempor.
              </p>
              <div className={style.pricingitemblock}>
                <Buttondark buttonText="SUBSCRIBE" />
                <div className={style.pricingitemprice}>
                  <span>$29.99</span>
                  <span>/month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
