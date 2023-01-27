import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { PhoneIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Social/Phone',
  component: PhoneIcon
} as ComponentMeta<typeof PhoneIcon>;

const Template: Story<IconProps> = args => <PhoneIcon {...args} />;

export const Phone = Template.bind({});
Phone.args = {};
