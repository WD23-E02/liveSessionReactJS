import React, {useContext} from "react";
import "./App.css";
import FontSizeProvider from "./context/FontSizeContext";
import {ThemeContext} from "./context/ThemeMode/context";
import Main from "./components/Main";

import UserLogin from "./components/UserLogin";

function App() {
  const {isDarkMode, toggleTheme} = useContext(ThemeContext);

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <h1> Mode Toggle</h1>
        <button
          style={{color: isDarkMode ? "red" : "green"}}
          onClick={toggleTheme}
        >
          Toggle {isDarkMode ? "⚡ Light" : " 🕶 Dark"} Mode
        </button>
      </header>
      <UserLogin />
      <FontSizeProvider>
        <Main />
      </FontSizeProvider>
    </div>
  );
}

export default App;
