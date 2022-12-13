import "./partners.scss";
import { useLocation } from "react-router";
import { useRef, useEffect } from "react";
import {data} from './data';

const Partners = () => {
  const scrollRef = useRef();
  const location = useLocation();

  const handleScroll = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (location.hash === "#partners") {
      handleScroll();
    }
  }, [location]);

  return (
    <div ref={scrollRef} id="partners" className="partners">
      <div className="container">
            <h2>Наши партнеры</h2>
            <p>Продукцию AIMOTO можно купить:</p>

            <div className="partners__content">
            <div className="partners__links">
                
                {
                    data.map(({id, link, img}) => (
                       <div key={id}>
                        <a href={link} target='_blank' rel="noreferrer"><img src={img} alt="logo of partner" /></a>
                       </div>
                    ))
                }
                
            </div>
            </div>
      </div>
    </div>
  );
};

export default Partners;
