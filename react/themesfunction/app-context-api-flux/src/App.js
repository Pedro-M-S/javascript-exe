import React, { useContext } from 'react';
import AppContext from './AppContext';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';


const App = () => {
	const { state } = useContext(AppContext);
	debugger
	const { selectedTheme } = state;
	return (
		<div className="app" style={{ backgroundColor: selectedTheme.backgroundColor, color: selectedTheme.color }}>
			<Header />
			<Body />
			<Footer />
		</div>
	);
};
export default App;
