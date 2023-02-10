import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { LinkedInIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Social/LinkedIn',
  component: LinkedInIcon
} as ComponentMeta<typeof LinkedInIcon>;

const Template: Story<SvgIconProps> = args => <LinkedInIcon {...args} />;

export const LinkedIn = Template.bind({});
LinkedIn.args = {};
