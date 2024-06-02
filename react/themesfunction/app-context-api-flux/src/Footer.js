import React, { useContext } from 'react';
import AppContext from './AppContext';


const Footer = () => {
	const { state } = useContext(AppContext);
	const { selectedTheme } = state;
	return (
		<footer className="app-footer">
			<span>{selectedTheme.name}</span>
		</footer>
	);

};
export default Footer;