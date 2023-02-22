import React, { useState } from "react";

function Tabs({ selected, children }) {
  const [activeTab, setActiveTab] = useState(selected || 0);

  function handleChange(index) {
    setActiveTab(index);
  }
  return (
    <>
      <ul className="tabs-container">
        {children.map((elem, index) => {
          let style = index === activeTab ? "tab-selected" : "";
          return (
            <li
              key={index}
              className={`tab-controll ${style}`}
              onClick={() => handleChange(index)}
            >
              {elem.props.title}
            </li>
          );
        })}
      </ul>
      <div className="tab">{children[activeTab]}</div>
    </>
  );
}

export default Tabs;
