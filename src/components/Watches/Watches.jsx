import { MdKeyboardArrowRight } from "react-icons/md";
import Product from "./Product";
import React, { useState, useEffect, useRef } from "react";
import {  toast } from 'react-toastify';
import { useLocation } from "react-router";

const Watches = () => {
  const [count, setCount] = useState(1);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const scrollRef = useRef();
  const location = useLocation();

  let productFilterAfterSearch = products.filter((product) =>
    product.title.toUpperCase().includes(search.toUpperCase())
  ).length;

  useEffect(() => {
    fetch('https://aimoto-api.onrender.com/watches').then((res) => res.json())
    .then((data) => setProducts(data));
  }, []);


  const handleScroll = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth"  });
  };
  
  useEffect(() => {
    if (location.hash === "#watch") {
      handleScroll();
    }
  }, [location]);

  return (
    <section ref={scrollRef} id="watch" className="check">
      <div className="container check__container">
        <div className="check__content">
          <div className="check__top">
            <h2>Детские часы</h2>
            <div className="check__right">
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCount(1);
                }}
                type="search"
                placeholder="название часов..."
              />
              <button className="btn"  onClick={() => {
                setCount(count * products.length);
                toast('Все продукты успешно отображены!');
                }}>
                Показать все <MdKeyboardArrowRight />
              </button>
            </div>
          </div>

          <div className="check__row">
            {products.filter((product) =>
                product.title.toUpperCase().includes(search.toUpperCase())
              )
              .filter((product, index) => index < 3 * count)
              .map(({ id, image, title, price, link }) => (
                <React.Fragment key={id}>
                  <Product id={id} image={image} title={title} price={price} link={link} />
                </React.Fragment>
              ))}
          </div>
          {!productFilterAfterSearch && (
            <h2 className="check__undefined">
              По данному запросу ничего не найдено..
            </h2>
          )}

          {count * 3 >= products.length ? (
            <button className="btn" type="button"  onClick={() => setCount(1)}>
              Скрыть
            </button>
          ) : (
            <button className="btn"
              style={{
                display:
                  count * 3 >= productFilterAfterSearch
                     ? "none"
                    : "inline-block",
              }}
              onClick={() => setCount(count + 1)}
            >
              Показать еще
            </button>
          )}

          {productFilterAfterSearch ? (
            <span> Показано {count * 3 >= productFilterAfterSearch
                ? productFilterAfterSearch
                : count * 3} из {productFilterAfterSearch}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Watches;
