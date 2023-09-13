import {useContext} from "react";
import {ThemeContext} from "./contexts/themeContext/context";
import "./App.css";
import Main from "./components/Main";
import UserLogin from "./components/UserLogin";
import AuthProvider from "./contexts/authContext/AuthProvider";
import Profile from "./components/Profile";

function App() {
  // 4- use the context

  const {isDark, toggleTheme} = useContext(ThemeContext);
  console.log(isDark);
  return (
    <AuthProvider>
      <div className={`App ${isDark ? "dark" : "light"} `}>
        <header>
          <h3>Theme Mode Context</h3>
          <button onClick={toggleTheme}>
            Toggle {isDark ? "Light ⚡" : "Dark 🕶"} Theme
          </button>
        </header>

        {/* <UserLogin /> */}
        <Profile />
        <Main />
      </div>
    </AuthProvider>
  );
}

export default App;
