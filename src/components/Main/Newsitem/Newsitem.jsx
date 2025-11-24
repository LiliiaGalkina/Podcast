import { Link } from "react-router-dom";
import style from "./newsitem.module.scss";


const NewsItem = ({
  image,
  description,
  category,
  title,
  text,
  theme,
  date,
}) => {
	console.log(theme)
  return (
    <Link className={style.item}>
      <div className={style.img}>
        <img src={image} alt={description} />
      </div>
      <div className={style.content}>
        <div className={style.contentup}>
          <h4 className={style.subtitle}>{category}</h4>
          <h3 className={style.title}>{title}</h3>
          <p className={style.text}>{text}</p>
        </div>
        <div className={style.categories}>
          <div className={style.categoriesbody}>
					  <div className={style.category}>{theme}</div>
           
          </div>
          <div className={style.date}>{date}</div>
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;
