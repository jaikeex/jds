import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { MaximizeIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Maximize',
  component: MaximizeIcon
} as ComponentMeta<typeof MaximizeIcon>;

const Template: Story<IconProps> = args => <MaximizeIcon {...args} />;

export const Maximize = Template.bind({});
Maximize.args = {};
