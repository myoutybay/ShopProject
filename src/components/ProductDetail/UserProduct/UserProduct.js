import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useProductStore } from "../../../stores";
import Product from "../../Product/Product";

function UserProduct({ product = {} }) {
  const {
    getProductsByUser,
    products,
    errorMessage: productErrorMessage,
  } = useProductStore((state) => state);

  useEffect(() => {
    getProductsByUser(product?.User.Oid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getProductsByUser]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="products-layout">
        {productErrorMessage && <p>{toast(productErrorMessage)}</p>}
        {products.length > 0 &&
          products.map((product) => (
            <Product product={product} key={product.Oid} />
          ))}
      </div>
    </>
  );
}

export default UserProduct;
