import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { ZoomOutIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/ZoomOut',
  component: ZoomOutIcon
} as ComponentMeta<typeof ZoomOutIcon>;

const Template: Story<IconProps> = args => <ZoomOutIcon {...args} />;

export const ZoomOut = Template.bind({});
ZoomOut.args = {};
