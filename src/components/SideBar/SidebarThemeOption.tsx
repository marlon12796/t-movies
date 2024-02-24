import { ImMobile2 } from 'react-icons/im';
import { useGlobalContext, useTheme } from '../../hooks';
import { type ITheme } from '../../types';
import { cn } from '../../utils/helper';
import { activeListItem, listItem } from '../../styles';

const ThemeOption = ({ theme }: { theme: ITheme }) => {
	const { setTheme, theme: currTheme, checkSystemTheme } = useTheme();
	const { setShowSidebar } = useGlobalContext();

	const { title } = theme;

	const changeTheme = () => {
		title === 'System' ? checkSystemTheme() : setTheme(title as 'Light' | 'Dark');
		setShowSidebar(false);
	};

	return (
		<li>
			<button type='button' className={cn(listItem, theme.title === currTheme && activeListItem)} onClick={changeTheme}>
				{theme.title === 'System' ? <ImMobile2 /> : <theme.icon />}
				<span>{theme.title}</span>
			</button>
		</li>
	);
};

export default ThemeOption;
