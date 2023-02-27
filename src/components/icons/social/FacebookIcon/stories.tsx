import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { FacebookIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Social/Facebook',
  component: FacebookIcon
} as ComponentMeta<typeof FacebookIcon>;

const Template: Story<SvgIconProps> = (args) => <FacebookIcon {...args} />;

export const Facebook = Template.bind({});
Facebook.args = {};
