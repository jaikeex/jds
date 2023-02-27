import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { JavascriptIcon } from '.';
import type { SvgColoredIconProps } from '@components/icons';

export default {
  title: 'Icons/Flat/Javascript',
  component: JavascriptIcon
} as ComponentMeta<typeof JavascriptIcon>;

const Template: Story<SvgColoredIconProps> = (args) => (
  <JavascriptIcon {...args} />
);

export const Javascript = Template.bind({});
Javascript.args = {};
