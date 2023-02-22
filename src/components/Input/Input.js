import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate, createSearchParams } from "react-router-dom";

import { useProductStore } from "../../stores";
import useDebounce from "../../services/useDebounce";

import "./Input.scss";

const BasicInput = React.memo(({ text }) => {
  return (
    <div className="basic-input-holder">
      <input className="basic-input" type="text" placeholder=" " />
      <label className="basic-input-label" htmlFor="input">
        {text}
      </label>
    </div>
  );
});
const InputSearch = React.memo(function ({ text, icon }) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const { getProductsByName, seachProducts } = useProductStore(
    (state) => state
  );
  const debounced = useDebounce(searchValue, 500);

  // useCallback or useMemo to handle onChange input values
  const handleOnChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);
  // const handleOnChange = (e) => {
  //   setSearchValue(e.target.value);
  // };

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchValue("");
      return;
    }

    getProductsByName(debounced);
    // if (!products.length > 0) {
    //   getProductsByName(debounced);
    //   return;
    // }
  }, [debounced, getProductsByName]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (searchValue !== "") {
        navigate({
          pathname: "/search/",
          search: `${createSearchParams({ param: searchValue }).toString()}`,
        });
        setSearchValue("");
      }
    },
    [searchValue, navigate]
  );

  return (
    <div className={`input-icon-wrap ${searchValue ? " show" : ""} `}>
      <form onSubmit={handleSubmit}>
        <div className="input-icon-holder">
          <input
            className="input-icon"
            type="text"
            placeholder=" "
            onChange={handleOnChange}
          />
          <label className="input-icon-label" htmlFor="input">
            {text}
          </label>
          <button type="submit" className="input-button">
            <img className="input-button-icon" src={icon} alt={text} />
          </button>
        </div>
      </form>
      <div className="input-results">
        <ul>
          {seachProducts.map(({ ProductName, Slug }, index) => (
            <li key={index} onClick={() => setSearchValue("")}>
              <Link to={`/product/${Slug}`}>{ProductName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export { BasicInput, InputSearch };
