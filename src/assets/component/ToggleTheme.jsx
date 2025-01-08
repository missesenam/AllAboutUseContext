import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const ToggleTheme = () => {
  const theme = { light: "#ffffff", dark: "#121212" };
  return (
    <div
      style={{
        backgroundColor: "#ff5733",
        padding: "20px",
        borderRadius: "10px",
        textTransform: "uppercase",
      }}
    >
      <ThemeContext.Provider value={theme}>
        <Togglebutton />
      </ThemeContext.Provider>
    </div>
  );
};

const Togglebutton = () => {
  const themeButton = useContext(ThemeContext);
  const [isLightMode, setIsLightMode] = useState(true);

  const handleTheme = () => {
    const newTheme = isLightMode ? themeButton.dark : themeButton.light;
    document.body.style.backgroundColor = newTheme;
    setIsLightMode(!isLightMode);
  };
  return (
    <div>
      <button onClick={handleTheme}>click</button>
    </div>
  );
};

export default ToggleTheme;
