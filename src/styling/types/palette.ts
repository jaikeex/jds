import type { NumericRange } from 'core/types';

export interface Palette {
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  warning: PaletteColor;
  info: PaletteColor;
  success: PaletteColor;
  common: CommonColor;
  grey: Color;
  text: TextColor;
  divider: string;
  background: BackgroundColor;
  tonalOffset: NumericRange<0, 100>;
  rgba: (color: string, alpha: number) => string;
  lighten: (color: string, amount: number) => string;
  darken: (color: string, amount: number) => string;
  getContrastText: (background: string) => string;
  augmentColor: (color: PaletteColorOptions) => PaletteColor;
}

export interface PaletteOptions {
  primary?: PaletteColorOptions;
  secondary?: PaletteColorOptions;
  error?: PaletteColorOptions;
  warning?: PaletteColorOptions;
  info?: PaletteColorOptions;
  success?: PaletteColorOptions;
  common?: CommonColorOptions;
  grey?: ColorOptions;
  text?: TextColorOptions;
  divider?: string;
  background?: BackgroundColorOptions;
}

export interface PaletteColorOptions {
  light?: string;
  main: string;
  dark?: string;
}

export interface PaletteColor {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

export type ColorOptions = Partial<Color>;

export interface Color {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface TextColorOptions {
  primary?: string;
  secondary?: string;
  disabled?: string;
  contrast?: TextContrastColorsOptions;
}

export interface TextColor {
  primary: string;
  secondary: string;
  disabled: string;
  contrast: TextContrastColors;
}

export type TextContrastColorsOptions = Partial<TextContrastColors>;

export interface TextContrastColors {
  light: string;
  dark: string;
}

export type BackgroundColorOptions = Partial<BackgroundColor>;

export interface BackgroundColor {
  default: string;
  sheet: string;
}

export type CommonColorOptions = Partial<CommonColor>;

export interface CommonColor {
  black: string;
  white: string;
  red: Color;
  green: Color;
  blue: Color;
  yellow: Color;
}
