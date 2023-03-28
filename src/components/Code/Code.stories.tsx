import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { CodeProps } from './Code';
import Code from './Code';

export default {
  title: 'Design System/Code',
  component: Code,
  parameters: {
    viewMode: 'story'
  }
} as ComponentMeta<typeof Code>;

const Template: Story<CodeProps> = (args) => <Code {...args} />;

export const Default = Template.bind({});
Default.args = {
  language: 'javascript',
  children: `import { Story, ComponentMeta } from '@storybook/react';
import Code, { CodeProps } from './Code';

export default {
  title: 'Design System/Code',
  component: Code
} as ComponentMeta<typeof Code>;

const codeString = '...'

const Template: Story<CodeProps> = args => <Code {...args}>{codeString}</Code>;

export const Default = Template.bind({});
Default.args = {
  language: 'javascript',
};`
};

export const LineNumbers = Template.bind({});
LineNumbers.args = {
  ...Default.args,
  showLineNumbers: true,
  children: `import { Story, ComponentMeta } from '@storybook/react';
import Code, { CodeProps } from './Code';

export default {
  title: 'Design System/Code',
  component: Code
} as ComponentMeta<typeof Code>;

const codeString = '...'

const Template: Story<CodeProps> = args => <Code {...args}>{codeString}</Code>;

export const Default = Template.bind({});
Default.args = {
  language: 'javascript',
  showLineNumbers: true
};`
};
