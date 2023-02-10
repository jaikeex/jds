import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { GoogleIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Social/Google',
  component: GoogleIcon
} as ComponentMeta<typeof GoogleIcon>;

const Template: Story<SvgIconProps> = args => <GoogleIcon {...args} />;

export const Google = Template.bind({});
Google.args = {};
