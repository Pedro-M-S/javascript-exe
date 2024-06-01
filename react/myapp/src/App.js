import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import Table from './Table';
import Form from './Form';
import AutomaticCounter from './AutomaticCounter';

const people = [{ name: 'Charlie', job: 'Janitor' }];

const headers = { header1: 'Name', header2: 'Job', header3: 'Remove' };

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Switch React Example',
			people: people,
			headers: headers,
			counterActive: true
		};
	}

	addCharacter = (person) => {
		const { people } = this.state;
		this.setState({
			people: [...people, person]
		});
	};

	removeCharacter = (index) => {
		const { people } = this.state;
		this.setState({
			people: people.filter((people, i) => {
				return i !== index;
			})
		});
	};

	conditionalTable = (people, headers) => {
		if (people.length > 0) {
			return <Table headers={headers} data={people} removeData={this.removeCharacter} />;
		} else {
			return <h2>No data</h2>;
		}
	};

	updateCounter = () => {
		this.setState({ counterActive: !this.state.counterActive });
	};

	checkCounter = (counterActive) => {
		if (counterActive) {
			return <AutomaticCounter endCounter={this.updateCounter} />;
		} else {
			return <button onClick={() => this.updateCounter()}>Reset Counter</button>;
		}
	};

	render() {
		const { title, people, headers, counterActive } = this.state;
		const table = this.conditionalTable(people, headers);
		const counter = this.checkCounter(counterActive);
		return (
			<div>
				<h1>{title}</h1>
				<Counter />
				<br />
				{table}
				<br />
				<Form handleSubmit={this.addCharacter} />
				<br />
				{counter}
			</div>
		);
	}
}

export default App;
