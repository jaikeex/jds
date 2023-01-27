import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { JavaIcon } from '.';
import { FlatIconProps } from '@components/icons/types';

export default {
  title: 'Icons/Flat/Java',
  component: JavaIcon
} as ComponentMeta<typeof JavaIcon>;

const Template: Story<FlatIconProps> = args => <JavaIcon {...args} />;

export const Java = Template.bind({});
Java.args = {};
