import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const count = this.state.count;
    return (
      <div>
        <h2>{count}</h2>
        <button onClick={this.handleClick}>Increment</button>
        <br />
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default CounterClass;
