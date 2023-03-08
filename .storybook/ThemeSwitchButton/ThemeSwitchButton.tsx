import React from 'react';
import { IconButton } from '../../src/components/IconButton';
import { LightModeIcon, DarkModeIcon } from '../../src/components/icons/basic-ui/_filled';
import { useTheme } from '../../src/theming/ThemeProvider';
import { defaultDarkTheme, defaultLightTheme } from '../../src/theming/default';
import { Tooltip } from '../../src/components/Tooltip';
import { Typography } from '../../src/components/Typography';

export interface ThemeSwitchButtonProps {}

const ThemeSwitchButton: React.FC<ThemeSwitchButtonProps> = () => {
  const { setTheme, theme } = useTheme();

  const themeChangeHandler = () => {
    theme === defaultDarkTheme ? setTheme('default-light') : setTheme('default-dark');
  };

  return (
    <IconButton onClick={themeChangeHandler} size="small" style={{ position: 'fixed', top: '10px', left: '10px' }}>
      <Tooltip
        content={
          <Typography variant="body3">{`Switch to ${
            theme === defaultDarkTheme ? 'light theme' : 'dark theme'
          }`}</Typography>
        }
      >
        {theme === defaultDarkTheme ? <LightModeIcon /> : <DarkModeIcon />}
      </Tooltip>
    </IconButton>
  );
};

export default ThemeSwitchButton;
