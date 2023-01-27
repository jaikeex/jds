import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { CodeIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Code',
  component: CodeIcon
} as ComponentMeta<typeof CodeIcon>;

const Template: Story<IconProps> = args => <CodeIcon {...args} />;

export const Code = Template.bind({});
Code.args = {};
