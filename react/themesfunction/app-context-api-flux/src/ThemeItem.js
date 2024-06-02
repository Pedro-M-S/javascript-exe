import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import { selectTheme } from './Actions';


const ThemeItem = (props) => {
	const { state, dispatch } = useContext(AppContext);
	const { selectedTheme } = state;
	return (
		<button style={{ color: selectedTheme.linkColor }} onClick={() => dispatch(selectTheme(props.themeName))}>
			{props.themeName}
		</button>
	);
};
ThemeItem.propTypes = {
	themeName: PropTypes.string.isRequired
};

export default ThemeItem;
