import '../src/styles/main.scss';
import { addDecorator } from '@storybook/react';
import { defaultDarkTheme } from '../src/theming/default';
import { ThemeProvider } from '../src/theming/ThemeProvider';

addDecorator((story) => (
  <div className="jds-storybook">
    <ThemeProvider theme={defaultDarkTheme}>{story()}</ThemeProvider>
  </div>
));

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
