import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Theme } from '../context/themeContext';

export const getErrorMessage = (error: any) => {
	let errorMessage;

	if (error) {
		if ('status' in error) {
			const errMsg = 'error' in error ? error.error : JSON.stringify(error.data);

			errorMessage = errMsg;
		} else {
			errorMessage = error.message;
		}
	} else {
		errorMessage = 'Unable to fetch the data. Please try again later.';
	}

	return errorMessage;
};

export const saveTheme = (theme: Theme) => {
	localStorage.setItem('theme', theme);
};

export const getTheme = (): Theme => {
	const theme = (localStorage.getItem('theme') ?? 'System') as Theme;
	return theme ? theme : 'System';
};

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
