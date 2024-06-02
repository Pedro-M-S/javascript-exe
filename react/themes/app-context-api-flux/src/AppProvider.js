import React, { Component } from "react";
import PropTypes from "prop-types";
import { Provider } from "./AppContext";
import reducer from "./Reducer";

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

class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTheme: darkTheme,
      availableThemes: [darkTheme, lightTheme],
    };
  }

  dispatch = (action) => this.setState((state) => reducer(state, action));

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          dispatch: this.dispatch,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
