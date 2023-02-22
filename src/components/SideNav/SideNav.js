import React, { useEffect } from "react";
import "./SideNav.scss";
import { useCategoryStore } from "../../stores";
import { useNavStore } from "../../stores";
import { NavButton } from "../Button";
import searchicon from "../../assets/svg/search.svg";
import Sidebar from "../Sidebar";

const SideNav = () => {
  const { getCategories, categories } = useCategoryStore((state) => state);

  useEffect(() => {
    getCategories();
  }, [getCategories]);
  const { activeNav, showNavbar } = useNavStore((state) => state);

  return (
    <div className={activeNav ? "SideNav-Wrapper active" : "SideNav-Wrapper"}>
      <div className="SideNav-Holder">
        <div className="sidebar-cards">
          {categories.length > 0 && categories && (
            <Sidebar categories={categories} />
          )}
        </div>
        <NavButton onClick={showNavbar} alt="Search" icon={searchicon} />
      </div>
    </div>
  );
};

export default SideNav;
