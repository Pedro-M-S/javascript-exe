import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const darkTheme = {
  name: "dark",
  backgroundColor: "#282c34",
  color: "#0956f3",
  linkColor: "#61dafb",
  logoBackground: "white",
};

const lightTheme = {
  name: "light",
  backgroundColor: "#0956f3",
  color: "#282c34",
  linkColor: "#61dafb",
  logoBackground: "red",
};

const availableThemes = [darkTheme, lightTheme];
const App = (props) => {
  const [selectedTheme, setSelectedTheme] = useState(darkTheme);

  const selectTheme = (name) => {
    const theme = availableThemes.find((item) => item.name === name);
    if (theme) {
      setSelectedTheme(theme);
    }
  };
  const themeNames = availableThemes.map((theme) => theme.name);
  return (
    <div
      className="app"
      style={{
        backgroundColor: selectedTheme.backgroundColor,
        color: selectedTheme.color,
      }}
    >
      <Header
        selectedTheme={selectedTheme}
        availableThemeNames={themeNames}
        selectTheme={selectTheme}
      />
      <Body selectedTheme={selectedTheme} />
      <Footer selectedTheme={selectedTheme} />
    </div>
  );
};

export default App;
