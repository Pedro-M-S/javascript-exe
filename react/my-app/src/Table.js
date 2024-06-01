import React, { Component } from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

class Table extends Component {
	render() {
		const headers = this.props.headers;
		const data = this.props.data;
		const removeData = this.props.removeData;

		return (
			<table border={1}>
				<TableHeader headers={headers} />
				<TableBody data={data} removeData={removeData} />
			</table>
		);
	}
}

export default Table;
