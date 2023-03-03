import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { JavaIcon } from '.';
import type { SvgColoredIconProps } from 'components/icons';

export default {
  title: 'Icons/Flat/Java',
  component: JavaIcon
} as ComponentMeta<typeof JavaIcon>;

const Template: Story<SvgColoredIconProps> = (args) => <JavaIcon {...args} />;

export const Java = Template.bind({});
Java.args = {};
