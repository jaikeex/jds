import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { OutputIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Output',
  component: OutputIcon
} as ComponentMeta<typeof OutputIcon>;

const Template: Story<SvgIconProps> = args => <OutputIcon {...args} />;

export const Output = Template.bind({});
Output.args = {};
