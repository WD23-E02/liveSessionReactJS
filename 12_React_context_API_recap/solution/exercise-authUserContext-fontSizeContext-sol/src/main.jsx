import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "./context/ThemeMode/ThemeContext";
import AuthProvider from "./context/Auth/AuthContext";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </AuthProvider>
);
