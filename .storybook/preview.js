import '../src/styles/main.scss';
import { addDecorator } from '@storybook/react';

addDecorator(story => <div className="jds-storybook">{story()}</div>);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  theme: {
    themes: [
      { title: 'light', id: 'light', class: 'theme-light', color: '#ffffff' },
      { title: 'dark', id: 'dark', class: 'theme-dark', color: '#202020' }
    ]
  }
};
