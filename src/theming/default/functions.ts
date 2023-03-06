import type { PaletteColorOptions } from 'theming/types';
import tinyColor from 'tinycolor2';
import type { NumericRange } from 'core/types';
import type { PaletteColor } from 'theming/types';

export const convertPxToRem = (px: number, rootFontSize: number): string => {
  const rem = px / rootFontSize;
  return `${rem}rem`;
};

export const augmentColor = (color: PaletteColorOptions, tonalOffset: NumericRange<0, 100>) => {
  const augmentedColor = { ...color } as PaletteColor;

  const mainColor = color.main;
  augmentedColor.light ??= tinyColor(mainColor).lighten(tonalOffset).toHexString();
  augmentedColor.dark ??= tinyColor(mainColor).darken(tonalOffset).toHexString();
  return augmentedColor;
};
