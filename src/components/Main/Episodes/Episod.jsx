import { Link } from "react-router-dom";
import style from "./episodes.module.scss";

const Episod = ({id, subtitle, title, text, imageUrl, imageAlt, tags}) => {
  return (
    <Link to={`/episodes/${id}`} className={style.item}>
      <div className={style.itemup}>
        <div className={style.itemimg}>
          <img src={imageUrl} alt={imageAlt} />
        </div>
        <div className={style.iteminfo}>
          <h4 className={style.itemsubtitle}>{subtitle}</h4>
          <h3 className={style.itemtitle}>{title}</h3>
          <p className={style.itemtext}>{text}</p>
        </div>
      </div>
      <div className={style.itemdown}>
			  <div className={style.itemcategories}>
				  {tags[0] ? <div className={style.itemcategory}>{tags[0]}</div> : ""}
          {tags[1] ? <div className={style.itemcategory}>{tags[1]}</div> : ""}
          {tags[2] ? <div className={style.itemcategory}>{tags[3]}</div> : ""}
          
        </div>
        <div className={style.itemhost}>
          <p className={style.itemhosttext}>Hosted by: </p>
          <div className={style.itemhostimg}>
            <img
              src="/Podcast/image/homepage/episodes/host.png"
              alt="двойное фото авторов"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Episod
