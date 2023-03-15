import type { TypographyVariants } from 'core/types';
import type { CSSProperties } from 'react';

export interface Typography extends Record<TypographyVariants, CSSProperties>, FontStyle, TypographyUtils {}

export type TypographyOptions = Partial<Record<TypographyVariants, CSSProperties> & FontStyleOptions>;

export interface TypographyUtils {
  pxToRem: (px: number) => string;
}

export type FontStyleOptions = Partial<FontStyle>;

export interface FontStyle {
  fontFamily: React.CSSProperties['fontFamily'];
  monospaceFontFamily: React.CSSProperties['fontFamily'];
  fontSize: number;
  fontWeightLight: React.CSSProperties['fontWeight'];
  fontWeightRegular: React.CSSProperties['fontWeight'];
  fontWeightMedium: React.CSSProperties['fontWeight'];
  fontWeightBold: React.CSSProperties['fontWeight'];
}
