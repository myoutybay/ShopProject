import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useScreenSize } from "../../utils/media-query";
import { ColorModeContext } from "../../App";
import logo from "../../logo.svg";
import github from "../../assets/svg/github.svg";
import searchicon from "../../assets/svg/search.svg";
import { InputSearch } from "../Input";

import "./Header.scss";
function Header() {
  const { isMedium, isLarge } = useScreenSize();
  const { changeTheme, themeColor } = useContext(ColorModeContext);
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="row-container">
        <div className="col-3">
          {isMedium || isLarge ? (
            <img
              className="logo"
              src={logo}
              alt="Logo"
              onClick={() => navigate("/")}
            />
          ) : (
            <img
              className="logo"
              src={github}
              alt="Logo"
              onClick={() => navigate("/")}
            />
          )}
        </div>
        <div className="col-9">
          <div className="row-container">
            <div className=" nav-button-container">
              <DarkModeSwitch
                checked={themeColor === "dark"}
                onChange={changeTheme}
                size={50}
                style={{
                  // make center vertical
                  position: "relative",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
                moonColor="#435ec3"
                sunColor="#FFD700"
              />
              <InputSearch text="Search" icon={searchicon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function HeaderSearch() {
  const { isMedium, isLarge } = useScreenSize();
  const { changeTheme, themeColor } = useContext(ColorModeContext);
  const navigate = useNavigate();
  return (
    <div className="header-search">
      <div className="row-container">
        <div className="col-3">
          {isMedium || isLarge ? (
            <img
              className="logo"
              src={logo}
              alt="Logo"
              style={{ height: "100px" }}
              onClick={() => navigate("/")}
            />
          ) : (
            <img
              className="logo"
              src={github}
              alt="Logo"
              style={{ height: "100px" }}
              onClick={() => navigate("/")}
            />
          )}
        </div>
        <div className="col-9">
          <div className="row-container">
            <div className=" nav-button-container">
              <DarkModeSwitch
                checked={themeColor === "dark"}
                onChange={changeTheme}
                size={50}
                style={{
                  // make center vertical
                  position: "relative",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
                moonColor="#435ec3"
                sunColor="#FFD700"
              />
              <InputSearch text="Search" icon={searchicon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Header, HeaderSearch };
