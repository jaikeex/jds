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
    theme === defaultDarkTheme ? setTheme('light') : setTheme('dark');
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
