import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './AppContext';

const darkTheme = {
	name: 'dark',
	backgroundColor: '#282c34',
	color: '#0956f3',
	linkColor: '#61dafb',
	logoBackground: 'white'
};

const lightTheme = {
	name: 'light',
	backgroundColor: '#0956f3',
	color: '#282c34',
	linkColor: '#61dafb',
	logoBackground: 'red'
};

const availableThemes = [darkTheme, lightTheme];

const AppProvider = (props) => {

	const [selectedTheme, setSelectedTheme] = useState(darkTheme);

	const selectTheme = (name) => {
		const theme = availableThemes.find(theme => theme.name === name);
		if (theme) {
			setSelectedTheme(theme);
		}
	};
	return (
		<Provider value={{
			selectedTheme,
			availableThemes,
			selectTheme
		}}>
			{props.children}
		</Provider>
	);
};
AppProvider.propTypes = {
	children: PropTypes.node
};


export default AppProvider;