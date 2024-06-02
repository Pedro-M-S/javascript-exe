import React from "react";
import PropTypes from "prop-types";
import ThemeItem from "./ThemeItem";

const Header = (props) => {
  const selectTheme = (name) => {
    props.selectTheme(name);
  };
  const { selectedTheme, availableThemeNames } = props;
  return (
    <header
      className="app-header"
      style={{
        backgroundColor: selectedTheme.backgroundColor,
        color: selectedTheme.color,
      }}
    >
      <span>{`Current theme: ${selectedTheme.name}`}</span>
      <div className="app-menu">
        <span>Select theme:</span>
        {availableThemeNames.map((theme) => (
          <ThemeItem
            key={theme}
            selectedTheme={selectedTheme}
            themeName={theme}
            select={() => selectTheme(theme)}
          />
        ))}
      </div>
    </header>
  );
};

Header.propTypes = {
  selectedTheme: PropTypes.shape({
    name: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  }),
  selectTheme: PropTypes.func.isRequired,
  availableThemeNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;
