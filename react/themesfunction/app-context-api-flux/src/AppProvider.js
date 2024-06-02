import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './AppContext';
import reducer from './Reducer';

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

	const initialState = { selectedTheme: darkTheme, availableThemes };

	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<Provider value={{
			state,
			dispatch
		}}>
			{props.children}
		</Provider>
	);
};
AppProvider.propTypes = {
	children: PropTypes.node
};


export default AppProvider;