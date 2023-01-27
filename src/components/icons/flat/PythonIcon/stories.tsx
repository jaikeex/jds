import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { PythonIcon } from '.';
import { FlatIconProps } from '@components/icons/types';

export default {
  title: 'Icons/Flat/Python',
  component: PythonIcon
} as ComponentMeta<typeof PythonIcon>;

const Template: Story<FlatIconProps> = args => <PythonIcon {...args} />;

export const Python = Template.bind({});
Python.args = {};
