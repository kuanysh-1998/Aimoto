import { Link } from "react-router-dom";

const Product = ({ id, image, title, price, link }) => {
  return (
    <div className="check__card">
      <img className="check__card-image" src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price} ₽</p>
      <div className="check__card-btns">
        <a className="btn" target="_blank" href={link} type="button" rel="noreferrer">
          Купить
        </a>

        <Link className="btn btn-primary" to={`/description${id}`}>
          Перейти к описанию
        </Link>
      </div>
    </div>
  );
};

export default Product;
