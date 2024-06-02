import React, { useContext } from "react";
import logo from "./logo.svg";
import AppContext from "./AppContext";

const Logo = () => {
  const { state } = useContext(AppContext);
  const { selectedTheme } = state;
  return (
    <img
      src={logo}
      className="app-logo"
      alt="logo"
      style={{ backgroundColor: selectedTheme.logoBackground }}
    />
  );
};

export default Logo;
