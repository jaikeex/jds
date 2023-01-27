import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { LinkedInIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Social/LinkedIn',
  component: LinkedInIcon
} as ComponentMeta<typeof LinkedInIcon>;

const Template: Story<IconProps> = args => <LinkedInIcon {...args} />;

export const LinkedIn = Template.bind({});
LinkedIn.args = {};
