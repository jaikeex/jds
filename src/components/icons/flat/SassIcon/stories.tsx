import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SassIcon } from '.';
import { FlatIconProps } from '@components/icons/types';

export default {
  title: 'Icons/Flat/Sass',
  component: SassIcon
} as ComponentMeta<typeof SassIcon>;

const Template: Story<FlatIconProps> = args => <SassIcon {...args} />;

export const Sass = Template.bind({});
Sass.args = {};
