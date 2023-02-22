/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { numberWithCommas } from "../../utils/currency";
import "./Products.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ product = {}, duration }) => {
  const { ProductName, Thumbnail, Slug, SaledPrice } = product;
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-left"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration={duration}
    >
      <div className="products-item">
        <div className="products-media">
          <img
            src={Thumbnail}
            alt="html css products"
            className="products-image"
            loading="lazy"
          />
          <span className="products-label products-label--hot">Bán chạy</span>
        </div>
        <div className="products-content">
          <div className="products-tags">
            <span className="item-tags">{product?.Category?.CategoryName}</span>
          </div>
          <h3 className="products-name">{ProductName}</h3>
          <div className="products-meta">
            <div className="products-price">
              <span className="products-main">
                {numberWithCommas(SaledPrice)}đ
              </span>
            </div>
          </div>
          <a
            rel="noopener noreferrer"
            className="products-buy products-buy--secondary"
            onClick={() => navigate(`/product/${Slug}`)}
          >
            Xem chi tiết
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
