import { Link } from "react-router-dom";
import style from "./newsitem.module.scss";

const NewsItem = ({image, description, subtitle, title, text, category1, category2, category3, date }) => {
	return (
    <Link className={style.item}>
      <div className={style.img}>
        <img src={image} alt={description} />
      </div>
      <div className={style.content}>
        <div className={style.contentup}>
          <h4 className={style.subtitle}>{subtitle}</h4>
          <h3 className={style.titlered}>{title}</h3>
          <p className={style.text}>{text}</p>
        </div>
        <div className={style.categories}>
          <div className={style.categoriesbody}>
            <div className={style.category}>{category1}</div>
            {category2 ? <div className={style.category}>{category2}</div> : ""}
            {category3 ? <div className={style.category}>{category3}</div> : ""}
          </div>
          <div className={style.date}>{date}</div>
        </div>
      </div>
    </Link>
  );
}

export default NewsItem;