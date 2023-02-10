import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { PhoneIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Social/Phone',
  component: PhoneIcon
} as ComponentMeta<typeof PhoneIcon>;

const Template: Story<SvgIconProps> = args => <PhoneIcon {...args} />;

export const Phone = Template.bind({});
Phone.args = {};
