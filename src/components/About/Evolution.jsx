import { data } from "./data";
import "./evolution.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Evolution = () => {
  return (
    <div className="evolution">
      <div className="container">
        <h2>Знаковые события Aimoto</h2>
        <p>Наш путь к лучшему</p>

        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="evolution__path"
          style={{zIndex: 'auto'}}
        >
          {data.map(
            ({ year, icon1, icon2, icon3, title1, title2, title3, link }, index) => {
              return (
                <SwiperSlide className="evolution__path-item" key={year}>
                  <h2>{year}</h2>
                  <div className="evolution__icontext">
                    <img src={icon1} alt="knopka" />
                    <div>{title1}</div>
                  </div>

                  <div className="evolution__icontext">
                    <img src={icon2 ? icon2 : ''} alt={icon2 ? 'img' : ''} />
                    <div>{title2} {link ? <a href={link}>"технологии предоставления оперативной медико-социальной помощи".</a> : ''}</div>
                  </div>

                  <div className="evolution__icontext">
                    <img src={icon3 ? icon3 : ""} alt={icon3 ? "img" : ""} />
                    <div>{title3 ? title3 : ""}</div>
                  </div> 
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Evolution;
