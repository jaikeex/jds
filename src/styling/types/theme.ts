import type { Typography, TypographyOptions } from './typography';
import type { Palette, PaletteOptions } from './palette';
import type { Shape, ShapeOptions } from './shape';
import type { Spacing, SpacingOptions } from './spacing';

export interface ThemeOptions {
  name?: string;
  shape?: ShapeOptions;
  palette?: PaletteOptions;
  spacing?: SpacingOptions;
  typography?: TypographyOptions;
}

export interface Theme {
  name: string;
  shape: Shape;
  palette: Palette;
  spacing: Spacing;
  typography: Typography;
}

export type ThemeNameToTheme<ThemeName extends string = string> = Record<ThemeName, Theme>;
