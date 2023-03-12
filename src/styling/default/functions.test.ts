import { expect, it } from 'vitest';
import { defaultDarkTheme } from 'styling/default';

it('should correctly calculate px -> rem conversion', () => {
  const theme = defaultDarkTheme;
  const rem = theme.typography.pxToRem(24);

  expect(rem).toBe('1.5rem');
});

it('should correctly transform text color to match contrast threshhold', () => {
  const theme = defaultDarkTheme;
  const color = '#666666';

  const newColor = theme.palette.getContrastText(color);
  expect(newColor).toBe('#e1e1e1');
});

it('should correctly augment palette color based on provided main color', () => {
  const theme = defaultDarkTheme;
  const mainColor = '#66bb6a';
  const augmentedColor = theme.palette.augmentColor({ main: mainColor });

  expect(augmentedColor).toStrictEqual({ main: '#66bb6a', light: '#9bd39e', dark: '#419345' });
});
