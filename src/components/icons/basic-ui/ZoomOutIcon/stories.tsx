import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { ZoomOutIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/ZoomOut',
  component: ZoomOutIcon
} as ComponentMeta<typeof ZoomOutIcon>;

const Template: Story<SvgIconProps> = (args) => <ZoomOutIcon {...args} />;

export const ZoomOut = Template.bind({});
ZoomOut.args = {};
