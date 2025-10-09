import style from "./header.module.scss";
import logo from "/image/logo.svg";
import Button from "../Button/Button";
import Buttondark from "../Button/Buttondark";

const Header = () => {
    return (
      <div className={style.header}>
        <div className="container">
          <div className={style.headeritems}>
            <div className={style.navigation}>
              <div className={style.logo}>
                <img src={logo} alt="логотип" />
              </div>
              <nav className={style.menu}>
                <ul className={style.menulist}>
                  <li className={style.menuitem}>
                    <a href="#" className={style.menulink}>
                      Episodes
                    </a>
                  </li>
                  <li className={style.menuitem}>
                    <a href="#" className={style.menulink}>
                      About
                    </a>
                  </li>
                  <li className={style.menuitem}>
                    <a href="#" className={style.menulink}>
                      More
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={style.buttons}>
              <Button buttonText="RECENT EPISODES" />
              <Buttondark buttonText="SUBSCRIBE" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header;