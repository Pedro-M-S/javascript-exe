import React, { useContext } from 'react';
import ThemeItem from './ThemeItem';
import AppContext from './AppContext';

const Header = () => {
	const { state } = useContext(AppContext);
	const { selectedTheme, availableThemes } = state;
	return (
		<header className="app-header"
				style={{ backgroundColor: selectedTheme.backgroundColor, color: selectedTheme.color }}>
			<span>{`Current theme: ${selectedTheme.name}`}</span>
			<div className="app-menu">
				<span>Select theme:</span>
				{
					availableThemes.map((theme) => (
						<ThemeItem
							key={theme.name}
							themeName={theme.name}
						/>
					))
				}
			</div>
		</header>
	);
};
export default Header;
