import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ThemeProvider from "./contexts/themeContext/ThemeProvider.jsx";
// import "./index.css";
// 3- wrap the entire components with ThemeProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  //   </BrowserRouter>
);
