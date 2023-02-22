import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { ProductDetail } from "../../components";
import { useProductStore, useBankStore } from "../../stores";
import "./ProductPage.scss";

function ProductPage() {
  const { slug } = useParams();
  const {
    getProductBySlug,
    product,
    errorMessage: productErrorMessage,
  } = useProductStore((state) => state);
  const { getBanks, banks } = useBankStore((state) => state);

  useEffect(() => {
    getBanks();
    getProductBySlug(slug);
  }, [getBanks, getProductBySlug, slug]);

  return (
    <div className="product-detail-layout">
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
      {productErrorMessage && <p>{toast(productErrorMessage)}</p>}
      <ProductDetail product={product} banks={banks} />
      {/* {Object.keys(product).length !== 0 && <ProductDetail product={product} />} */}
    </div>
  );
}

export default ProductPage;
