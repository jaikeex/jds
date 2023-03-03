import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { EmailIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Social/Email',
  component: EmailIcon
} as ComponentMeta<typeof EmailIcon>;

const Template: Story<SvgIconProps> = (args) => <EmailIcon {...args} />;

export const Email = Template.bind({});
Email.args = {};
