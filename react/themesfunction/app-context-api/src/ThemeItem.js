import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';


const ThemeItem = (props) => {
	const { selectedTheme, selectTheme } = useContext(AppContext);
	return (
		<button style={{ color: selectedTheme.linkColor }} onClick={() => selectTheme(props.themeName)}>
			{props.themeName}
		</button>
	);
};
ThemeItem.propTypes = {
	themeName: PropTypes.string.isRequired
};

export default ThemeItem;
