import '../src/styles/main.scss';
import { addDecorator } from '@storybook/react';

addDecorator(story => <div className="jds-storybook">{story()}</div>);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  options: {
    storySort: {
      method: 'alphabetical'
    }
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  theme: {
    default: 'light',
    themes: [
      { title: 'light', id: 'light', class: 'theme-light', color: '#ffffff' },
      { title: 'dark', id: 'dark', class: 'theme-dark', color: '#202020' }
    ]
  }
};
