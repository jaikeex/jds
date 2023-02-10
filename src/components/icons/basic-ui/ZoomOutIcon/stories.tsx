import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { ZoomOutIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/ZoomOut',
  component: ZoomOutIcon
} as ComponentMeta<typeof ZoomOutIcon>;

const Template: Story<SvgIconProps> = args => <ZoomOutIcon {...args} />;

export const ZoomOut = Template.bind({});
ZoomOut.args = {};
