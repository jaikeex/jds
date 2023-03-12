import merge from 'lodash/merge';
import type { ThemeOptions, Theme } from 'styling/types';

export const createTheme = (themeObj: ThemeOptions, defaultTheme: Theme): Theme => merge(defaultTheme, themeObj);
