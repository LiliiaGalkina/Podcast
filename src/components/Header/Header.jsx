import style from "./header.module.scss";
import logo from "/image/logo.svg";
import arrowdown from "/image/header/arrowdown.svg";
import Button from "../Button/Button";
import Buttondark from "../Button/Buttondark";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ feedback, benefits, scrollToSection }) => {
  const [showInnerMenu, setShowInnerMenu] = useState(false);

  const toggleMenu = () => {
    setShowInnerMenu(!showInnerMenu);
  };

  return (
    <div className={style.header}>
      <div className="container">
        <div className={style.headeritems}>
          <div className={style.navigation}>
            <Link to="/" className={style.logo}>
              <img src={logo} alt="логотип" />
            </Link>
            <nav className={style.menu}>
              <ul className={style.menulist}>
                <li className={style.menuitem}>
                  <Link to={"/"} className={style.menulink}>
                    Home
                  </Link>
                </li>
                <li className={style.menuitem}>
                  <Link to={"/about"} className={style.menulink}>
                    About
                  </Link>
                </li>
                <li className={style.menuitem} onClick={toggleMenu}>
                  <div>
                    <Link className={style.menulink}>More</Link>
                    <div
                      className={style.arrowdown}
                      style={{
                        transform: showInnerMenu
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                    >
                      <img src={arrowdown} alt="стрелка вниз" />
                    </div>
                  </div>
                  <ul
                    className={style.innermenu}
                    style={{ display: showInnerMenu ? "block" : "none" }}
                  >
                    <li className={style.innermenuitem}>
                      <Link to="/blog" className={style.menulink}>
                        Blog
                      </Link>
                    </li>
                    <li className={style.innermenuitem}>
                      <Link to="/episodes" className={style.menulink}>
                        Episodes
                      </Link>
                    </li>
                    <li className={style.innermenuitem}>
                      <Link to="/prising"
                        onClick={() => scrollToSection(pricing)}
                        className={style.menulink}
                        
                      >
                        Pricing
                      </Link>
                    </li>
                    <li className={style.innermenuitem}>
                      <Link
                        onClick={() => scrollToSection(feedback)}
                        className={style.menulink}
                        style={{ color: "#bfbfbf" }}
                      >
                        Feedback
                      </Link>
                    </li>
                    <li className={style.innermenuitem}>
                      <Link
                        onClick={() => scrollToSection(benefits)}
                        className={style.menulink}
                        style={{ color: "#bfbfbf" }}
                      >
                        Benefits
                      </Link>
                    </li>
                  </ul>
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
};

export default Header;
