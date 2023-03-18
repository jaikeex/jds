import './styles/index.css';
import { addDecorator } from '@storybook/react';
import { defaultDarkTheme, defaultLightTheme } from '../src/styling/default';
import { ThemeProvider } from '../src/styling/ThemeProvider';
import ThemeSwitchButton from './ThemeSwitchButton/ThemeSwitchButton';

addDecorator((story) => {
  return (
    <div className="jds-storybook">
      <ThemeProvider defaultTheme={defaultLightTheme}>
        <ThemeSwitchButton /> {story()}
      </ThemeProvider>
    </div>
  );
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: '#ffffff'
      },
      {
        name: 'dark',
        value: '#202020'
      }
    ]
  },
  theme: {
    default: 'dark',
    themes: [
      { title: 'light', id: 'light', class: 'theme-light', color: '#ffffff' },
      { title: 'dark', id: 'dark', class: 'theme-dark', color: '#202020' }
    ]
  }
};
