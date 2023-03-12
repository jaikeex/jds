import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import type { ThemeOptions, Theme } from 'styling/types';

export const updateTheme = (themeObj: ThemeOptions, defaultTheme: Theme): Theme => {
  const defaultThemeClone = cloneDeep(defaultTheme);
  return merge(defaultThemeClone, themeObj);
};

export const updateThemeInPlace = (themeObj: ThemeOptions, defaultTheme: Theme): Theme => merge(defaultTheme, themeObj);
