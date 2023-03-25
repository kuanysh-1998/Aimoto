import "./aksessuary.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Aksessuary = () => {
  const [remeshok, setRemeshok] = useState([]);

  useEffect(() => {
    axios
      .get("https://6419bb3ef398d7d95d47e413.mockapi.io/aimoto")
      .then(({ data }) => setRemeshok(data[2].remeshki));
  }, []);

  return (
    <div className="aksessuary">
      <div className="container">
        <div className="aksessuary__content">
          <h2>РЕМЕШКИ ДЛЯ ЧАСОВ</h2>

          <div className="aksessuary__row">
            {remeshok.map(({ id, title, price, buy, img }) => (
              <div className="aksessuary__card" key={id}>
                <img src={img} alt="remeshok" />
                <h3>{title}</h3>
                <p>{price} ₽</p>
                <div className="aksessuary__card-btns">
                  <a
                    className="btn aksessuary__btn"
                    target="_blank"
                    href={buy}
                    type="button"
                    rel="noreferrer"
                  >
                    Купить
                  </a>
                  <Link className="btn btn-primary" to={`/aboutremeshok${id}`}>
                    Перейти к описанию
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aksessuary;
