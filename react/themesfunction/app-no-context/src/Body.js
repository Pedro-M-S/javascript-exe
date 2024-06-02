import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";

const Body = (props) => {
  const { logoBackground } = props.selectedTheme;
  return (
    <div className="app-body">
      <Logo logoBackground={logoBackground} />
    </div>
  );
};

Body.propTypes = {
  selectedTheme: PropTypes.shape({ logoBackground: PropTypes.string }),
};
export default Body;
