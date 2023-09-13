import {useState} from "react";
import {ThemeContext} from "./context";

// 2- create your container component to provide the state and we use to wrap our components

function ThemeProvider({children}) {
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    //setIsDark(!isDark);

    // setY((y) => y + 1);
    //other way is to pass a callback function
    setIsDark((previousData) => !previousData);
  }

  return (
    <ThemeContext.Provider value={{isDark, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

// 4- use the context
