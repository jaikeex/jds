import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { GoogleIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Social/Google',
  component: GoogleIcon
} as ComponentMeta<typeof GoogleIcon>;

const Template: Story<IconProps> = args => <GoogleIcon {...args} />;

export const Google = Template.bind({});
Google.args = {};
