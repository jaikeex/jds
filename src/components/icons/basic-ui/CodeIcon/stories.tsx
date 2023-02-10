import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { CodeIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Code',
  component: CodeIcon
} as ComponentMeta<typeof CodeIcon>;

const Template: Story<SvgIconProps> = args => <CodeIcon {...args} />;

export const Code = Template.bind({});
Code.args = {};
