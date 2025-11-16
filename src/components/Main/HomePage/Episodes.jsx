import allstyle from "./homepage.module.scss";
import style from "./episodes.module.scss";
import Buttondark from "../../Button/Buttondark";

const Episodes = () => {
	return (
    <section className={style.episodes}>
      <div className="container">
        <h2 className={allstyle.sectiontitle}>Recent Episodes</h2>
        <p className={allstyle.sectiontext}>Available on your favorite platform</p>
        <div className={style.content}>
          <div className={style.decor}>
            <img
              src="./image/homepage/episodes/decor.png"
              alt="три красные черточки"
            />
          </div>
          <div className={style.items}>
            <a href="#" className={style.itemshadow}>
              <div className={style.itemup}>
                <div className={style.itemimg}>
                  <img
                    src="/image/homepage/episodes/episode1.png"
                    alt="на сером фоне на стульях сидят вирусы"
                  />
                </div>
                <div className={style.iteminfo}>
                  <h4 className={style.itemsubtitle}>Eps. 6</h4>
                  <h3 className={style.itemtitlered}>
                    Pandemic Becoming Endemic
                  </h3>
                  <p className={style.itemtext}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ac ultrices odio.
                  </p>
                </div>
              </div>
              <div className={style.itemdown}>
                <div className={style.itemcategories}>
                  <div className={style.itemcategory}>covid-19</div>
                  <div className={style.itemcategory}>health</div>
                </div>
                <div className={style.itemhost}>
                  <p className={style.itemhosttext}>Hosted by: </p>
                  <div className={style.itemhostimg}>
                    <img
                      src="/image/homepage/episodes/host.png"
                      alt="двойное фото авторов"
                    />
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className={style.item}>
              <div className={style.itemup}>
                <div className={style.itemimg}>
                  <img
                    src="/image/homepage/episodes/episode2.png"
                    alt="машина наклонилась на юок и стоит на двух колесах"
                  />
                </div>
                <div className={style.iteminfo}>
                  <h4 className={style.itemsubtitle}>Eps. 5</h4>
                  <h3 className={style.itemtitle}>
                    Tesla Autopilot Controversy
                  </h3>
                  <p className={style.itemtext}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ac ultrices odio.
                  </p>
                </div>
              </div>
              <div className={style.itemdown}>
                <div className={style.itemcategories}>
                  <div className={style.itemcategory}>automation</div>
                  <div className={style.itemcategory}>tech</div>
                </div>
                <div className={style.itemhost}>
                  <p className={style.itemhosttext}>Hosted by: </p>
                  <div className={style.itemhostimg}>
                    <img
                      src="/image/homepage/episodes/host.png"
                      alt="двойное фото авторов"
                    />
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className={style.item}>
              <div className={style.itemup}>
                <div className={style.itemimg}>
                  <img
                    src="/image/homepage/episodes/episode3.png"
                    alt="девушки и парни сидят на полу"
                  />
                </div>
                <div className={style.iteminfo}>
                  <h4 className={style.itemsubtitle}>Eps. 4</h4>
                  <h3 className={style.itemtitle}>
                    Women's Rights? Is it alright?
                  </h3>
                  <p className={style.itemtext}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ac ultrices odio.
                  </p>
                </div>
              </div>
              <div className={style.itemdown}>
                <div className={style.itemcategories}>
                  <div className={style.itemcategoory}>
                    women’s rights
                  </div>
                </div>
                <div className={style.itemhost}>
                  <p className={style.itemhosttext}>Hosted by: </p>
                  <div className={style.itemhostimg}>
                    <img
                      src="/image/homepage/episodes/host.png"
                      alt="двойное фото авторов"
                    />
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className={style.itemshadow}>
              <div className={style.itemup}>
                <div className={style.itemimg}>
                  <img
                    src="/image/homepage/episodes/episode4.png"
                    alt="человек в сером облегающем косюие лежит на серой листве"
                  />
                </div>
                <div className={style.iteminfo}>
                  <h4 className={style.itemsubtitle}>Eps. 3</h4>
                  <h3 className={style.itemtitlered}>
                    How to Deal with Self–Confidence
                  </h3>
                  <p className={style.itemtext}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ac ultrices odio.
                  </p>
                </div>
              </div>
              <div className={style.itemdown}>
                <div className={style.itemcategories}>
                  <div className={style.itemcategory}>self-esteem</div>
                  <div className={style.itemcategory}>health</div>
                </div>
                <div className={style.itemhost}>
                  <p className={style.itemhosttext}>Hosted by: </p>
                  <div className={style.itemhostimg}>
                    <img
                      src="/image/homepage/episodes/host.png"
                      alt="двойное фото авторов"
                    />
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className={style.item}>
              <div className={style.itemup}>
                <div className={style.itemimg}>
                  <img
                    src="/image/homepage/episodes/episode5.png"
                    alt="мужчина в костюме сидит на опрокинутом стуле"
                  />
                </div>
                <div className={style.iteminfo}>
                  <h4 className={style.itemsubtitle}>Eps. 2</h4>
                  <h3 className={style.itemtitle}>
                    Type of Social Classes of People
                  </h3>
                  <p className={style.itemtext}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ac ultrices odio.
                  </p>
                </div>
              </div>
              <div className={style.itemdown}>
                <div className={style.itemcategories}>
                  <div className={style.itemcategory}>
                    social class
                  </div>
                  <div className={style.itemcategory}>wealth</div>
                </div>
                <div className={style.itemhost}>
                  <p className={style.itemhosttext}>Hosted by: </p>
                  <div className={style.itemhostimg}>
                    <img
                      src="/image/homepage/episodes/host.png"
                      alt="двойное фото авторов"
                    />
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className={style.itemshadow}>
              <div className={style.itemup}>
                <div className={style.itemimg}>
                  <img
                    src="/image/homepage/episodes/episode6.png"
                    alt="лицо девушки, которая ержится за свое лицо"
                  />
                </div>
                <div className={style.iteminfo}>
                  <h4 className={style.itemsubtitle}>Eps. 1</h4>
                  <h3 className={style.itemtitlered}>
                    Are you a Perplexed Mind Person?
                  </h3>
                  <p className={style.itemtext}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ac ultrices odio.
                  </p>
                </div>
              </div>
              <div className={style.itemdown}>
                <div className={style.itemcategories}>
                  <div className={style.itemcategory}>
                    mind-behaviour
                  </div>
                  <div className={style.itemcategory}>health</div>
                </div>
                <div className={style.itemhost}>
                  <p className={style.itemhosttext}>Hosted by: </p>
                  <div className={style.itemhostimg}>
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
        <div className={style.button}>
          <Buttondark buttonText="BROWSE ALL EPISODES" />
        </div>
      </div>
      <div className={style.decorblack}>
        <img src="/image/homepage/blackdecorsection.png" alt="черная кривая" />
      </div>
    </section>
  );
}

export default Episodes;