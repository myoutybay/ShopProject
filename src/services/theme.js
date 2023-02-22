import { useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const saveTheme = () => {
    const themeString = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", themeString);
    setTheme(themeString);
  };

  const changeTheme = () => {
    const darkClass = "dx-swatch-dark";
    const lightClass = "dx-swatch-light";

    const allClasses =
      document.body.className.indexOf(darkClass) >= 0 ? "light" : "dark";

    if (allClasses === "dark") {
      document.body.classList.add(darkClass);
      document.body.classList.remove(lightClass);
    } else {
      document.body.classList.add(lightClass);
      document.body.classList.remove(darkClass);
    }

    // allClasses === "dark"
    //   ? document.body.classList.add(darkClass)
    //   : document.body.classList.remove(darkClass);
    saveTheme();
  };
  return {
    setTheme: saveTheme,
    themeColor: theme,
    changeTheme,
  };
}
