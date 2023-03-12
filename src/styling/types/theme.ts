import type { Typography, TypographyOptions } from './typography';
import type { Palette, PaletteOptions } from './palette';
import type { Shape, ShapeOptions } from './shape';
import type { Spacing, SpacingOptions } from './spacing';
import type { Overrides } from './overrides';

export interface ThemeOptions {
  name?: string;
  shape?: ShapeOptions;
  palette?: PaletteOptions;
  spacing?: SpacingOptions;
  typography?: TypographyOptions;
  overrides?: Overrides;
}

export interface Theme {
  name: string;
  shape: Shape;
  palette: Palette;
  spacing: Spacing;
  typography: Typography;
  overrides?: Overrides;
}

export type ThemeNameToTheme<ThemeName extends string = string> = Record<ThemeName, Theme>;
