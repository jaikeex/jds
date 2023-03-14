import React, { useContext, useState } from 'react';
import { defaultLightTheme } from 'styling/default/light';
import { defaultDarkTheme } from 'styling/default/dark';
import type { Theme, ThemeNameToTheme } from 'styling/types';
import { ThemeProvider as JSSThemeProvider } from 'react-jss';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

interface CacheProps {
  children: React.ReactNode;
}

const EmotionCacheProvider: React.FC<CacheProps> = ({ children }) => {
  const cache = React.useMemo(
    () =>
      createCache({
        key: 'jds',
        insertionPoint: document.querySelector('title')!,
        prepend: true
      }),
    []
  );

  return <CacheProvider value={cache}>{children}</CacheProvider>;
};

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: string | Theme) => void;
}

export interface ThemeContextProviderProps extends React.PropsWithChildren {
  defaultTheme?: Theme;
  additionalThemes?: ThemeNameToTheme;
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
    'light': defaultLightTheme,
    'dark': defaultDarkTheme,
    [defaultTheme.name]: defaultTheme,
    ...additionalThemes
  };

  const themeChangeHandler = React.useCallback((theme: string | Theme) => {
    if (typeof theme === 'string') {
      theme in availableThemes && setTheme(availableThemes[theme]);
    } else {
      setTheme(theme);
    }
  }, []);

  const defaultProps = { theme: theme, setTheme: themeChangeHandler };

  return (
    <EmotionCacheProvider>
      <ThemeContext.Provider value={defaultProps}>
        {/* @ts-ignore */}
        <JSSThemeProvider theme={theme}>{children}</JSSThemeProvider>
      </ThemeContext.Provider>
    </EmotionCacheProvider>
  );
};

export default ThemeProvider;
