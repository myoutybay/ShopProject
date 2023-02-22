import React from "react";
import { Outlet } from "react-router-dom";
import { FooterSearch, HeaderSearch } from "../components";

export const SearchLayout = () => {
  return (
    <>
      <HeaderSearch />
      <div className="search-container">
        <Outlet />
      </div>
      <FooterSearch />
    </>
  );
};
