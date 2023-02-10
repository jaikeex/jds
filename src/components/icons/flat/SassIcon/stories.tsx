import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SassIcon } from '.';
import { SvgColoredIconProps } from '@components/icons';

export default {
  title: 'Icons/Flat/Sass',
  component: SassIcon
} as ComponentMeta<typeof SassIcon>;

const Template: Story<SvgColoredIconProps> = args => <SassIcon {...args} />;

export const Sass = Template.bind({});
Sass.args = {};
