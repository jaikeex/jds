import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { PythonIcon } from '.';
import type { SvgColoredIconProps } from '@components/icons';

export default {
  title: 'Icons/Flat/Python',
  component: PythonIcon
} as ComponentMeta<typeof PythonIcon>;

const Template: Story<SvgColoredIconProps> = (args) => <PythonIcon {...args} />;

export const Python = Template.bind({});
Python.args = {};
