import React, { useContext } from 'react';
import AppContext from './AppContext';


const Footer = () => {
	const { selectedTheme } = useContext(AppContext);
	return (
		<footer className="app-footer">
			<span>{selectedTheme.name}</span>
		</footer>
	);

};
export default Footer;