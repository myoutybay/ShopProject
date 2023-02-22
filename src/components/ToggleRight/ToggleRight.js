import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import messageicon from "../../assets/images/facebook.png";
import rocketicon from "../../assets/images/rocket.png";
import "./ScrollToTop.scss";

function ToggleRight() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else if (window.pageYOffset <= 100) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      <img src={messageicon} alt="message" />
      {isVisible && (
        <img src={rocketicon} alt="arrow-up" onClick={scrollToTop} />
      )}
    </div>
  );
}

export default ToggleRight;
