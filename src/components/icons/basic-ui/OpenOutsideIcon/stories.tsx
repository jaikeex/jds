import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { OpenOutsideIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/OpenOutside',
  component: OpenOutsideIcon
} as ComponentMeta<typeof OpenOutsideIcon>;

const Template: Story<SvgIconProps> = (args) => <OpenOutsideIcon {...args} />;

export const OpenOutside = Template.bind({});
OpenOutside.args = {};
