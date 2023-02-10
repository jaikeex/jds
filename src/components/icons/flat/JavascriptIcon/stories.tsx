import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { JavascriptIcon } from '.';
import { SvgColoredIconProps } from '@components/icons';

export default {
  title: 'Icons/Flat/Javascript',
  component: JavascriptIcon
} as ComponentMeta<typeof JavascriptIcon>;

const Template: Story<SvgColoredIconProps> = args => (
  <JavascriptIcon {...args} />
);

export const Javascript = Template.bind({});
Javascript.args = {};
