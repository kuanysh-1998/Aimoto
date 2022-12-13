import { useRef, useState } from "react";
import { BsSmartwatch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const supportButton = useRef();
  const btnToWatches = useRef();
  const partners = useRef();

  return (
    <header id="#" className="header">
      <div className="container">
        <nav className="header__nav">
          <div className="header__watch">
            <Link className="header__watch" to="/">
              <BsSmartwatch /> AIMOTO
            </Link>
          </div>
          <ul className={click ? "header__list active" : "header__list"}>
            <Link
              ref={btnToWatches}
              className="header__item"
              onClick={() => setClick(!click)}
              to={{
                pathname: "/",
                hash: "#watch",
              }}
            >
              Aimoto часы
            </Link>
            <Link
              className="header__item"
              onClick={() => setClick(!click)}
              to='/aksessuary'
            >
              Аксессуары
            </Link>
            <Link
              className="header__item"
              onClick={() => setClick(!click)}
              to='/infowatch'
            >
              More info
            </Link>
            <Link
              ref={partners}
              onClick={() => setClick(!click)}
              className="header__item"
              to={{
                pathname: "/",
                hash: "#partners",
              }}
            >
              Партнеры
            </Link>
            <Link
              onClick={() => setClick(!click)}
              className="header__item"
              to='/about'
            >
              О компании
            </Link>
            <Link
              ref={supportButton}
              onClick={() => setClick(!click)}
              className="header__item"
              to={{
                pathname: "/",
                hash: "#support",
              }}
            >
              Поддержка
            </Link>
            <Link
              onClick={() => setClick(!click)}
              className="header__item"
              to='/services'
            >
              Сервисные центры
            </Link>
            <Link
              onClick={() => setClick(!click)}
              className="header__item"
              to='/faq'
            >
              FAQ
            </Link>
          </ul>
          <div className="header__hamburgermenu" onClick={() => handleClick()}>
            {!click ? (
              <GiHamburgerMenu className="header__icon" />
            ) : (
              <AiFillCloseSquare className="header__icon" />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
