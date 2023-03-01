import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { ReactJsIcon } from '.';
import type { SvgColoredIconProps } from '@components/icons';

export default {
  title: 'Icons/Flat/React.js',
  component: ReactJsIcon
} as ComponentMeta<typeof ReactJsIcon>;

const Template: Story<SvgColoredIconProps> = (args) => <ReactJsIcon {...args} />;

export const ReactJs = Template.bind({});
ReactJs.args = {};
ReactJs.storyName = 'React.js';
