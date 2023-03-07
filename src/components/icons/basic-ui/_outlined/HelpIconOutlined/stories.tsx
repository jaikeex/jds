import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { HelpIconOutlined } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/Outlined/Help',
  component: HelpIconOutlined
} as ComponentMeta<typeof HelpIconOutlined>;

const Template: Story<SvgIconProps> = (args) => <HelpIconOutlined {...args} />;

export const Help = Template.bind({});
Help.args = {};
