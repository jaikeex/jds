import React from 'react';
import { IconButton } from '../../src/components/IconButton';
import { LightModeIcon, DarkModeIcon } from '../../src/components/icons/basic-ui/_filled';
import { useTheme } from '../../src/styling/ThemeProvider';
import { defaultDarkTheme } from '../../src/styling/default';
import { Tooltip } from '../../src/components/Tooltip';

export interface ThemeSwitchButtonProps {}

const ThemeSwitchButton: React.FC<ThemeSwitchButtonProps> = () => {
  const { setTheme, theme } = useTheme();

  const themeChangeHandler = () => {
    const newTheme = theme === defaultDarkTheme ? 'light' : 'dark';
    setTheme(newTheme);

    const body = document.querySelector('body');
    const root = document.querySelector('#root');

    if (body && root) {
      body.classList.add('jds-storybook-main');
      root.classList.add('jds-storybook-root');
      body.classList.remove('sb-show-main');
      body.style.background = newTheme === 'dark' ? '#1e293b' : '#ffffff';
    }
  };

  return (
    <Tooltip position="right" content={`Switch to ${theme === defaultDarkTheme ? 'light theme' : 'dark theme'}`}>
      <div style={{ position: 'fixed', top: '10px', left: '10px' }}>
        <IconButton enableBackground enableRippleEffect onClick={themeChangeHandler} size="small">
          {theme === defaultDarkTheme ? <LightModeIcon size={24} /> : <DarkModeIcon size={24} />}
        </IconButton>
      </div>
    </Tooltip>
  );
};

export default ThemeSwitchButton;
