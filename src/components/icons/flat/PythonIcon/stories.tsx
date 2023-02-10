import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { PythonIcon } from '.';
import { SvgColoredIconProps } from '@components/icons';

export default {
  title: 'Icons/Flat/Python',
  component: PythonIcon
} as ComponentMeta<typeof PythonIcon>;

const Template: Story<SvgColoredIconProps> = args => <PythonIcon {...args} />;

export const Python = Template.bind({});
Python.args = {};
