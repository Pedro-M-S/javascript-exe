import React, { Component } from 'react';

class AutomaticCounter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	timerTick = () => {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});
	};

  componentDidMount() {
    this.timer = setInterval(this.timerTick, 100);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count === 30) {
			this.setState({ count: 0 });
      this.props.endCounter();
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

	render() {
		return (
			<h2>{this.state.count}</h2>
		);
	}
}

export default AutomaticCounter;
