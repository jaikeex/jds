import { defaultDarkTheme } from 'styling/default';
import { it, expect } from 'vitest';
import type { ThemeOptions } from 'styling/types';
import { createTheme } from './createTheme';

it('should merge themes correctly', () => {
  const defaultTheme = defaultDarkTheme;
  const theme: ThemeOptions = {
    palette: {
      error: {
        main: 'red',
        dark: 'darkred'
      }
    },
    typography: {
      body1: {
        fontSize: '2rem',
        textDecoration: 'underline',
        color: 'yellow'
      },
      h1: {
        textTransform: 'uppercase'
      }
    }
  };

  const newTheme = createTheme(theme, defaultTheme);

  expect(newTheme.palette.error.main).toBe('red');
  expect(newTheme.palette.error.dark).toBe('darkred');
  expect(newTheme.palette.error.light).toBe('#e57373');
  expect(newTheme.typography.body1.fontSize).toBe('2rem');
  expect(newTheme.typography.body1.textDecoration).toBe('underline');
  expect(newTheme.typography.body1.color).toBe('yellow');
  expect(newTheme.typography.body1.marginBottom).toBe('0.375rem');
  expect(newTheme.typography.body1.fontWeight).toBe(400);
  expect(newTheme.typography.h1.textTransform).toBe('uppercase');
  expect(newTheme.typography.h1.fontSize).toBe('5rem');
  expect(newTheme.spacing.margin.medium).toBe('1rem');
});
