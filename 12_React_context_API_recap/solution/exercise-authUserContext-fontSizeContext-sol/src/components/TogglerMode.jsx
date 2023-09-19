import React from "react";
import {useTheme} from "../context/ThemeMode/ThemeContext";

function TogglerMode() {
  const {isDarkMode, toggleTheme} = useTheme();

  return (
    <div>
      <label>
        Dark Mode:
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
      </label>
    </div>
  );
}

export default TogglerMode;
