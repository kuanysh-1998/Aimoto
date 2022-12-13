import "./aboutremeshok.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


const Aboutremeshok = () => {
  const [remeshok, setRemeshok] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://aimoto-server-production.up.railway.app/remeshki/" + id )
      .then((res) => res.json())
      .then((data) => setRemeshok(data));
  }, []);

  return (
    <div className="remeshok">
      <div className="container">
        <div className="remeshok__content">
          <div className="remeshok__images">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              style={{ width: "100%", maxWidth: '33rem' }}
            >
              <SwiperSlide>
                <img src={remeshok.img} alt="img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={remeshok.img1} alt="img1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={remeshok.img2} alt="img2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={remeshok.img3} alt="img3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={remeshok.img4} alt="img4" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={remeshok.img5} alt="img5" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="remeshok__description">
            <div className="remeshok__descr">
              <h3>Описание</h3>
              <p>{remeshok.description}</p>
              <h3>Комплектация</h3>
              <p>Ремешок</p>
              <h3>Характеристики</h3>
              <ul>
                <li>{remeshok.size}</li>
                <li>
                  Рекомендовано для ——— Универсальный
                </li>
                <li>
                  Материал браслета/ремешка ———  Гипоаллергенный силикон
                </li>
                <li>{remeshok.length}</li>
                <li>{remeshok.color}</li>
                <li>Гарантийный срок ——— 12 мес</li>
                <li>Страна-изготовитель ——— Китай</li>
                <li>Бренд ——— Aimoto</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutremeshok;
