import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { TypescriptIcon } from '.';
import type { SvgColoredIconProps } from 'components/icons';

export default {
  title: 'Icons/Flat/Typescript',
  component: TypescriptIcon
} as ComponentMeta<typeof TypescriptIcon>;

const Template: Story<SvgColoredIconProps> = (args) => <TypescriptIcon {...args} />;

export const Typescript = Template.bind({});
Typescript.args = {};
