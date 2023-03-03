import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { SassIcon } from '.';
import type { SvgColoredIconProps } from 'components/icons';

export default {
  title: 'Icons/Flat/Sass',
  component: SassIcon
} as ComponentMeta<typeof SassIcon>;

const Template: Story<SvgColoredIconProps> = (args) => <SassIcon {...args} />;

export const Sass = Template.bind({});
Sass.args = {};
