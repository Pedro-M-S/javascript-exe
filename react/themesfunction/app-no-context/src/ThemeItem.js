import React from "react";
import PropTypes from "prop-types";

const ThemeItem = (props) => {
  const select = (name) => {
    props.select(name);
  };
  const { selectedTheme, themeName } = props;
  return (
    <button
      style={{ color: selectedTheme.linkColor }}
      onClick={() => select(themeName)}
    >
      {themeName}
    </button>
  );
};

ThemeItem.propTypes = {
  selectedTheme: PropTypes.shape({ linkColor: PropTypes.string }).isRequired,
  themeName: PropTypes.string.isRequired,
  select: PropTypes.func.isRequired,
};
export default ThemeItem;
