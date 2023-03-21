import type { Theme } from 'styling/types';
import { augmentColor, convertPxToRem } from 'styling/default/functions';
import { defaultCommonColors } from 'styling/default/commonColors';
import tinycolor from 'tinycolor2';
import type { PaletteColorOptions } from 'styling/types';

export const defaultDarkTheme: Theme = {
  name: 'dark',
  shape: {
    borderRadius: {
      small: '4px',
      medium: '6px',
      large: '10px',
      fullRound: '9999px'
    }
  },
  palette: {
    background: {
      default: '#202020',
      sheet: '#202020'
    },
    divider: '#999999',
    primary: {
      main: '#90caf9',
      light: '#e3f2fd',
      dark: '#42a5f5',
      contrastText: '#202020'
    },
    secondary: {
      main: '#90caf9',
      light: '#e3f2fd',
      dark: '#42a5f5',
      contrastText: '#202020'
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
      contrastText: '#202020'
    },
    warning: {
      main: '#ffa726',
      light: '#ffb74d',
      dark: '#f57c00',
      contrastText: '#202020'
    },
    info: {
      main: '#ce93d8',
      light: '#e3f2fd',
      dark: '#42a5f5',
      contrastText: '#202020'
    },
    success: {
      main: '#66bb6a',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: '#202020'
    },
    text: {
      primary: '#e1e1e1',
      secondary: '#bbbbbb',
      disabled: '#6b7280',
      contrast: {
        light: '#e1e1e1',
        dark: '#202020'
      }
    },
    common: defaultCommonColors,
    grey: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827'
    },
    tonalOffset: 15,
    rgba(color: string, alpha: number) {
      return tinycolor(color).setAlpha(alpha).toRgbString();
    },
    lighten(color: string, amount: number) {
      return tinycolor(color).lighten(amount).toHexString();
    },
    darken(color: string, amount: number) {
      return tinycolor(color).darken(amount).toHexString();
    },
    getContrastText(background: string) {
      return tinycolor
        .mostReadable(background, [this.text.contrast.dark, this.text.contrast.light], { level: 'AAA' })
        .toHexString();
    },
    augmentColor(color: PaletteColorOptions) {
      return augmentColor(color, this.tonalOffset);
    }
  },
  spacing: {
    0: '0rem',
    1: '0.125rem',
    2: '0.25rem',
    3: '0.375rem',
    4: '0.5rem',
    5: '0.625rem',
    6: '0.75rem',
    7: '0.875rem',
    8: '1rem',
    9: '1.25rem',
    10: '1.5rem',
    11: '1.75rem',
    12: '2rem',
    14: '2.25rem',
    16: '2.5rem',
    20: '2.75rem',
    24: '3rem',
    28: '3.5rem',
    32: '4rem',
    36: '5rem',
    40: '6rem',
    44: '7rem',
    48: '8rem'
  },
  typography: {
    h1: {
      fontSize: '2.488rem',
      fontWeight: 400,
      marginBottom: '1.375rem'
    },
    h2: {
      fontSize: '2.074rem',
      fontWeight: 400,
      marginBottom: '1rem'
    },
    h3: {
      fontSize: '1.728rem',
      fontWeight: 400,
      marginBottom: '0.938rem'
    },
    h4: {
      fontSize: '1.44rem',
      fontWeight: 400,
      marginBottom: '0.813rem'
    },
    h5: {
      fontSize: '1.2rem',
      fontWeight: 500,
      marginBottom: '0.625rem'
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      marginBottom: '0.5rem'
    },
    subHeading1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.25,
      marginBottom: '0.375rem'
    },
    subHeading2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.25,
      marginBottom: '0.375rem'
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      marginBottom: '0.375rem'
    },
    body2: {
      fontSize: '0.938rem',
      fontWeight: 400,
      marginBottom: '0.375rem'
    },
    body3: {
      fontSize: '0.875rem',
      fontWeight: 400,
      marginBottom: '0.375rem'
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      marginBottom: '0.25rem'
    },
    label: {
      fontSize: '0.875rem',
      fontWeight: 400,
      marginBottom: '0.25rem'
    },
    button: {
      fontSize: '0.938rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.031rem'
    },
    fontFamily: '"OpenSans", sans-serif',
    monospaceFontFamily: '"JetBrains Mono", monospace !important',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    pxToRem(px: number) {
      return convertPxToRem(px, this.fontSize);
    }
  }
};
