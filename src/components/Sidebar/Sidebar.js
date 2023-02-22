import React from "react";
import PropTypes from "prop-types";
import { useScreenSize } from "../../utils/media-query";
import computericon from "../../assets/images/computer.png";
import "./Sidebar.scss";

// const TableOfContents = ({ categories }) => {
//   return (
//     <div className="accordion">
//       {categories.map((category) => (
//         <div className="accordion__item">
//           <div className="accordion__header">
//             <div className="accordion__toggle">...</div>
//             <div className="accordion__title"> {category.CategoryName}</div>
//           </div>
//           <div className="accordion__content"></div>
//         </div>
//       ))}
//     </div>
//   );
// };
const SideBarList = ({ categories }) => {
  return categories.map((category) => (
    <div
      className={"card"}
      key={category.Oid}
      // onClick={() => navigate(`/${category.slug}`)}
    >
      <img
        src={category.image ? category.image : computericon}
        width="40"
        height="40"
        alt={category.CategoryName}
        className="fa-3dicon"
      />
      <span className="card-item-title">{category.CategoryName}</span>
      <span className="card-item-title"></span>
    </div>
  ));
};

const Sidebar = ({ categories }) => {
  const { isLarge } = useScreenSize();
  return isLarge ? (
    <SideBarList categories={categories} />
  ) : (
    <SideBarList categories={categories} />
  );
  // return <SideBarList categories={categories} />;
};

export default Sidebar;
Sidebar.propTypes = {
  categories: PropTypes.array.isRequired,
};
