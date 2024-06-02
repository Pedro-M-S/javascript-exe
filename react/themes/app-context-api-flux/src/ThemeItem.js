import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "./AppContext";
import { selectTheme } from "./Actions";

class ThemeItem extends Component {
  render() {
    const { themeName } = this.props;
    return (
      <Consumer>
        {(context) => {
          const { state, dispatch } = context;
          const { selectedTheme } = state;
          const action = selectTheme(themeName);
          return (
            <button
              style={{ color: selectedTheme.linkColor }}
              onClick={() => dispatch(action)}
            >
              {themeName}
            </button>
          );
        }}
      </Consumer>
    );
  }
}

ThemeItem.propTypes = {
  themeName: PropTypes.string.isRequired,
};
export default ThemeItem;
