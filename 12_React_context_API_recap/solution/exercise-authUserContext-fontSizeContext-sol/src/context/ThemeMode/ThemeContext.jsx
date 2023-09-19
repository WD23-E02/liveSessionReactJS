import React, {useContext, useState} from "react";

import {ThemeContext} from "./context.jsx";

const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
