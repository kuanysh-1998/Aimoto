import { BsTelegram, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const supportButton = useRef();
  const btnToWatches = useRef();
  const partners = useRef();

  return (
    <footer className="footer">
      <div className="footer__left">
        <h3>Работаем по всей России</h3>
        <p>
          125040, г. Москва, ул. Скаковая, 36, пом. 110 ООО «ЦЕНТР ТРЕВОЖНАЯ
          КНОПКА» ОГРН 5147746434303
        </p>
        <a href="https://go.2gis.com/7i3stg" target="_blank" rel="noreferrer">
          Посмотреть на карте
        </a>
      </div>
      <div className="footer__right">
        <a
          href="https://knopka24.ru/"
          className="footer__logo"
          target="_blank"
          rel="noreferrer"
        >
          AIMOTO
        </a>

        <ul className="footer__links">
          <li>
            <Link
              className="footer__links-hash"
              ref={btnToWatches}
              to={{
                pathname: "/",
                hash: "#watch",
              }}
            >
              Aimoto часы
            </Link>
          </li>
          <li>
            <Link
              className="footer__links-hash"
              ref={supportButton}
              to={{
                pathname: "/",
                hash: "#support",
              }}
            >
              Поддержка
            </Link>
          </li>
          <li>
            <Link
              ref={partners}
              className="footer__links-hash"
              to={{
                pathname: "/",
                hash: "#partners",
              }}
            >
              Партнеры
            </Link>
          </li>
          <li>
            <Link
               className="footer__links-hash"
              to="/faq"
            >
              FAQ
            </Link>
          </li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://web.telegram.org/k/#@Aimotobot"
            target="_blank"
            rel="noreferrer"
          >
            <BsTelegram />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=79253592529"
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp />
          </a>

          <a
            href="mailto:helpdesk@knopka24.ru"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail />
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; 2022 «Кнопка Жизни»</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
