import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { MaximizeIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Maximize',
  component: MaximizeIcon
} as ComponentMeta<typeof MaximizeIcon>;

const Template: Story<SvgIconProps> = (args) => <MaximizeIcon {...args} />;

export const Maximize = Template.bind({});
Maximize.args = {};
