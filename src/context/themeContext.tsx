import React, { useState, useEffect, useCallback, createContext } from 'react';
import { getTheme, saveTheme } from '../utils/helper';

interface ThemeContextType {
	showThemeOptions: boolean;
	setShowThemeOptions: (show: boolean) => void;
	openMenu: () => void;
	closeMenu: () => void;
	setTheme: (newTheme: 'Dark' | 'Light') => void;
	checkSystemTheme: () => void;
	theme: string;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
	children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [showThemeOptions, setShowThemeOptions] = useState<boolean>(false);
	const [theme, setTheme] = useState<string>(getTheme() || '');

	const checkSystemTheme = useCallback(() => {
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark' : 'Light';
		setTheme(systemTheme);
	}, []);

	useEffect(() => {
		if (!theme) checkSystemTheme();
	}, [theme, checkSystemTheme]);

	useEffect(() => {
		if (theme === 'Dark') {
			document.documentElement.classList.add('dark');
			saveTheme('Dark');
		} else if (theme === 'Light') {
			document.documentElement.classList.remove('dark');
			saveTheme('Light');
		}
	}, [theme]);

	const openMenu = useCallback(() => setShowThemeOptions(true), []);
	const closeMenu = useCallback(() => setShowThemeOptions(false), []);

	return (
		<ThemeContext.Provider
			value={{
				showThemeOptions,
				openMenu,
				closeMenu,
				setTheme,
				theme,
				checkSystemTheme,
				setShowThemeOptions,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
