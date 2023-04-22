import './styles/index.css';
import { addDecorator } from '@storybook/react';
import { defaultDarkTheme } from '../src/styling/default';
import { ThemeProvider } from '../src/styling/ThemeProvider';
import ThemeSwitchButton from './ThemeSwitchButton/ThemeSwitchButton';
import { themes } from '@storybook/theming';

addDecorator((story, context) => {
  return (
    <div className="jds-storybook">
      <ThemeProvider defaultTheme={defaultDarkTheme}>
        {context.viewMode === 'story' && <ThemeSwitchButton context={context} />}
        {story()}
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
  docs: {
    theme: themes.dark
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
        value: '#1e293b'
      }
    ]
  }
};
