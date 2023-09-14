import {ThemeProvider} from "styled-components";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider
      theme={{bg: "black", color: "white", textBtn: "orange", bgBtn: "pink"}}
    >
      <Navbar />
      <Main />
    </ThemeProvider>
  );
}

export default App;
