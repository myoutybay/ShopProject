import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import { Product } from "../../components";
import { useProductStore } from "../../stores";

const SearchPage = () => {
  let [searchParams] = useSearchParams();
  const param = searchParams.get("param");
  const {
    getAllProductsByName,
    products,
    errorMessage: productErrorMessage,
  } = useProductStore((state) => state);

  useEffect(() => {
    getAllProductsByName(param);
  }, [getAllProductsByName, param]);
  return (
    <div>
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
      <div className="products-layout">
        {products.length > 0 &&
          products
            .slice(0, 4)
            .map((product, key) => (
              <Product
                product={product}
                duration={250 * key}
                key={product.Oid}
              />
            ))}
      </div>
    </div>
  );
};

export default SearchPage;
