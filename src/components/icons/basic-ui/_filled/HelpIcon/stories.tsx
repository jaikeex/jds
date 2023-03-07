import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { HelpIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/Filled/Help',
  component: HelpIcon
} as ComponentMeta<typeof HelpIcon>;

const Template: Story<SvgIconProps> = (args) => <HelpIcon {...args} />;

export const Help = Template.bind({});
Help.args = {};
