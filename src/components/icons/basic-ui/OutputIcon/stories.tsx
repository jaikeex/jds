import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { OutputIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Output',
  component: OutputIcon
} as ComponentMeta<typeof OutputIcon>;

const Template: Story<IconProps> = args => <OutputIcon {...args} />;

export const Output = Template.bind({});
Output.args = {};
