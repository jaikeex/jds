import React, { useContext, useState } from 'react';
import { defaultLightTheme } from 'styling/default/light';
import { defaultDarkTheme } from 'styling/default/dark';
import type { Theme, ThemeNameToTheme } from 'styling/types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';

interface CacheProps {
  children: React.ReactNode;
}

const EmotionCacheProvider: React.FC<CacheProps> = ({ children }) => {
  const cache = React.useMemo(
    () =>
      createCache({
        key: 'jds',
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

  const defaultValue = React.useMemo(
    () => ({ theme: theme, setTheme: themeChangeHandler }),
    [theme, themeChangeHandler]
  );

  return (
    <div className={theme.name}>
      <ThemeContext.Provider value={defaultValue}>
        <EmotionCacheProvider>
          <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
        </EmotionCacheProvider>
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
