import React, { memo } from "react";
import { Product } from ".";
import producticon from "../../assets/svg/code.svg";

import "./Products.scss";

const Products = ({ title = "", products = {} }) => {
  return (
    <>
      <div className="product-banner">
        <h2>{title}</h2>
        <img src={producticon} alt="code-icon" />
      </div>
      <div className="products-layout">
        {products.slice(0, 4).map((product, key) => (
          <Product product={product} duration={250 * key} key={product.Oid} />
        ))}
      </div>
    </>
  );
};

export default memo(Products);
