import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { JavascriptIcon } from '.';
import { FlatIconProps } from '@components/icons/types';

export default {
  title: 'Icons/Flat/Javascript',
  component: JavascriptIcon
} as ComponentMeta<typeof JavascriptIcon>;

const Template: Story<FlatIconProps> = args => <JavascriptIcon {...args} />;

export const Javascript = Template.bind({});
Javascript.args = {};
