import React, { useContext } from 'react';
import logo from './logo.svg';
import AppContext from './AppContext';

const Logo = () => {
	const { selectedTheme } = useContext(AppContext);
	console.log(JSON.stringify(selectedTheme));
	return (
		<img src={logo}
			 className="app-logo" alt="logo"
			 style={{ backgroundColor: selectedTheme.logoBackground }} />
	);

};

export default Logo;