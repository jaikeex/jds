import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { ZoomInIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/ZoomIn',
  component: ZoomInIcon
} as ComponentMeta<typeof ZoomInIcon>;

const Template: Story<SvgIconProps> = args => <ZoomInIcon {...args} />;

export const ZoomIn = Template.bind({});
ZoomIn.args = {};
