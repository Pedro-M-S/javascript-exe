import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  const { name } = props.selectedTheme;
  return (
    <footer className="app-footer">
      <span>{name}</span>
    </footer>
  );
};

Footer.propTypes = {
  selectedTheme: PropTypes.shape({ name: PropTypes.string }),
};
export default Footer;
