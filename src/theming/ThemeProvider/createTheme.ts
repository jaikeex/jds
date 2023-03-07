import { merge } from 'lodash';
import type { ThemeOptions, Theme } from 'theming/types';

export const createTheme = (themeObj: ThemeOptions, defaultTheme: Theme): Theme => merge(defaultTheme, themeObj);
