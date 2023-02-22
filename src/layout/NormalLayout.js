import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

export const NormalLayout = () => {
  return (
    <>
      <Header />
      <div className="content-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
