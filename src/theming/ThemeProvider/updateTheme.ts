import { cloneDeep, merge } from 'lodash';
import type { ThemeOptions, Theme } from 'theming/types';

export const updateTheme = (themeObj: ThemeOptions, defaultTheme: Theme): Theme => {
  const defaultThemeClone = cloneDeep(defaultTheme);
  return merge(defaultThemeClone, themeObj);
};

export const updateThemeInPlace = (themeObj: ThemeOptions, defaultTheme: Theme): Theme => merge(defaultTheme, themeObj);
