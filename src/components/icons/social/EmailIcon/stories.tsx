import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { EmailIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Social/Email',
  component: EmailIcon
} as ComponentMeta<typeof EmailIcon>;

const Template: Story<IconProps> = args => <EmailIcon {...args} />;

export const Email = Template.bind({});
Email.args = {};
