import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { NodeJsIcon } from '.';
import { SvgColoredIconProps } from '@components/icons';

export default {
  title: 'Icons/Flat/Node.js',
  component: NodeJsIcon
} as ComponentMeta<typeof NodeJsIcon>;

const Template: Story<SvgColoredIconProps> = args => <NodeJsIcon {...args} />;

export const NodeJs = Template.bind({});
NodeJs.args = {};
NodeJs.storyName = 'Node.js';
