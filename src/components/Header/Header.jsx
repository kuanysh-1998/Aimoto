import { useRef, useState } from "react";
import { BsSmartwatch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const btnToWatches = useRef();
  const [showInfo, setShowInfo] = useState(false);

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
              to="/aksessuary"
            >
              Аксессуары
            </Link>

            <Link
              onClick={() => setClick(!click)}
              className="header__item"
              to="/about"
            >
              О компании
            </Link>

            <Link
              onClick={() => setClick(!click)}
              className="header__item"
              to="/services"
            >
              Сервисные центры
            </Link>

            <Link
              onClick={() => {setClick(!click); setShowInfo(!showInfo)}}
              className="header__item"
              to="/proshivka"
            >
              Админ панель
            </Link>

            <Link className={ !showInfo ? 'header__showInfo' : 'header__item'} to="/infowatch">
              More info
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
