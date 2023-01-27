import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { TypescriptIcon } from '.';
import { FlatIconProps } from '@components/icons/types';

export default {
  title: 'Icons/Flat/Typescript',
  component: TypescriptIcon
} as ComponentMeta<typeof TypescriptIcon>;

const Template: Story<FlatIconProps> = args => <TypescriptIcon {...args} />;

export const Typescript = Template.bind({});
Typescript.args = {};
