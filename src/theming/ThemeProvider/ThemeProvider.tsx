import React, { useContext, useEffect, useState } from 'react';
import { defaultDarkTheme } from 'theming/default/dark';
import type { Theme } from 'theming/types';
import { ThemeProvider as JSSThemeProvider } from 'react-jss';
import { merge } from 'lodash';

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export interface ThemeContextProviderProps extends React.PropsWithChildren {
  defaultTheme?: Theme;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: defaultDarkTheme,
  setTheme: () => {}
});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider: React.FC<ThemeContextProviderProps> = ({ children = null, defaultTheme = defaultDarkTheme }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = React.useMemo(() => ({ theme: theme, setTheme: setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {/* @ts-ignore */}
      <JSSThemeProvider theme={theme}>{children}</JSSThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
