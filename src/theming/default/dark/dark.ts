import type { Theme } from 'theming/types';
import { augmentColor, convertPxToRem } from 'theming/default/functions';
import { defaultCommonColors } from 'theming/default/commonColors';
import tinycolor from 'tinycolor2';
import type { PaletteColorOptions } from 'theming/types';

export const defaultDarkTheme: Theme = {
  name: 'default-dark',
  shape: {
    borderRadius: '5px'
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
      dark: '#42a5f5'
    },
    secondary: {
      main: '#90caf9',
      light: '#e3f2fd',
      dark: '#42a5f5'
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f'
    },
    warning: {
      main: '#ffa726',
      light: '#ffb74d',
      dark: '#f57c00'
    },
    info: {
      main: '#ce93d8',
      light: '#e3f2fd',
      dark: '#42a5f5'
    },
    success: {
      main: '#66bb6a',
      light: '#81c784',
      dark: '#388e3c'
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
    margin: {
      xxxsmall: '',
      xxsmall: '0.5rem',
      xsmall: '0.625rem',
      small: '0.813rem',
      medium: '1rem',
      large: '1.375rem',
      xlarge: '1.875rem',
      xxlarge: '2.25rem',
      xxxlarge: ''
    },
    padding: {
      xxxsmall: '',
      xxsmall: '0.188rem',
      xsmall: '0.25rem',
      small: '0.375rem',
      medium: '0.5rem',
      large: '0.75rem',
      xlarge: '1rem',
      xxlarge: '1.25rem',
      xxxlarge: ''
    }
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
      fontSize: '0.938rem',
      fontWeight: 400,
      marginBottom: '0.25rem'
    },
    button: {
      fontSize: '0.938rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.031rem'
    },
    fontFamily: 'OpenSans',
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
