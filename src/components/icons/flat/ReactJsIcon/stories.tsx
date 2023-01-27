import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { ReactJsIcon } from '.';
import { FlatIconProps } from '@components/icons/types';

export default {
  title: 'Icons/Flat/React.js',
  component: ReactJsIcon
} as ComponentMeta<typeof ReactJsIcon>;

const Template: Story<FlatIconProps> = args => <ReactJsIcon {...args} />;

export const ReactJs = Template.bind({});
ReactJs.args = {};
ReactJs.storyName = 'React.js';
