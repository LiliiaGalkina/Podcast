import allstyle from "../allstyles.module.scss";
import style from "./episodes.module.scss";
import Buttondark from "../../Button/Buttondark";
import { episodes } from "../newsitems";
import Episod from "./Episod";
import { Link } from "react-router-dom";

const Episodes = ({count}) => {
	
  return (
    <div className={style.content}>
      <div className={style.decor}>
        <img
          src="/Podcast/image/homepage/episodes/decor.png"
          alt="три красные черточки"
        />
      </div>
      <div className={style.items}>
        {episodes.slice(0, count).map((episodItem) => (
          <Episod key={episodItem.id} {...episodItem} />
        ))}
      </div>
    </div>
  );
};

export default Episodes;
