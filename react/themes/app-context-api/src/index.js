import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import AppProvider from "./AppProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>,
);
