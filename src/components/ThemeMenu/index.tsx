import { m } from 'framer-motion';

import { useMotion, useOnClickOutside, useTheme } from '../../hooks';
import { themeOptions } from '../../constants';
import { cn } from '../../utils/helper';
import { textColor } from '../../styles';
import { Theme } from '../../context/themeContext';

const ThemeMenu = () => {
	const { theme, setTheme, checkSystemTheme, setShowThemeOptions, closeMenu } = useTheme();
	const { zoomIn } = useMotion();

	const { ref } = useOnClickOutside(closeMenu);

	const changeTheme = (theme: Theme) => {
		theme === 'System' ? checkSystemTheme() : setTheme(theme);
		setShowThemeOptions(false);
	};

	return (
		<m.ul
			ref={ref}
			variants={zoomIn(0.9, 0.2)}
			initial='hidden'
			animate='show'
			exit='hidden'
			style={{
				background: `${theme === 'Light' ? '#FAFAFA' : 'rgba(0,0,0,0.4)'}`,
			}}
			className='absolute top-[200%] right-[25%] bg-primary shadow-md backdrop-blur-sm  rounded-md overflow-hidden dark:dark-glass light-glass'
		>
			{themeOptions.map((option, index) => (
				<li
					key={index}
					className={cn(
						'hover:bg-gray-200 dark:hover:bg-black transition-all duration-300',
						theme === option.title && 'bg-gray-200 dark:bg-black '
					)}
				>
					<button
						name='theme'
						type='button'
						className={cn(
							'flex flex-row items-center gap-3 font-medium py-2 px-4 text-[14px]',
							theme === option.title && textColor
						)}
						onClick={() => {
							changeTheme(option.title as Theme);
						}}
					>
						{<option.icon />}
						<span>{option.title}</span>
					</button>
				</li>
			))}
		</m.ul>
	);
};

export default ThemeMenu;
