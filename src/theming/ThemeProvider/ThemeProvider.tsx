import React, { useContext, useState } from 'react';
import { defaultLightTheme } from 'theming/default/light';
import { defaultDarkTheme } from 'theming/default/dark';
import type { Theme, Themes } from 'theming/types';
import { ThemeProvider as JSSThemeProvider } from 'react-jss';

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export interface ThemeContextProviderProps extends React.PropsWithChildren {
  defaultTheme?: Theme;
  additionalThemes?: Themes;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: defaultLightTheme,
  setTheme: () => {}
});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider: React.FC<ThemeContextProviderProps> = ({
  children = null,
  defaultTheme = defaultLightTheme,
  additionalThemes = {}
}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const availableThemes = {
    'default-light': defaultLightTheme,
    'default-dark': defaultDarkTheme,
    [defaultTheme.name]: defaultTheme,
    ...additionalThemes
  };

  const themeChangeHandler = (theme: string | Theme) => {
    if (typeof theme === 'string') {
      theme in availableThemes && setTheme(availableThemes[theme]);
    } else {
      setTheme(theme);
    }
  };

  const defaultProps = { theme: theme, setTheme: themeChangeHandler };

  return (
    <ThemeContext.Provider value={defaultProps}>
      {/* @ts-ignore */}
      <JSSThemeProvider theme={theme}>{children}</JSSThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
