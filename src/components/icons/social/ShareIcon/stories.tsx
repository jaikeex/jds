import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { ShareIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Social/Share',
  component: ShareIcon
} as ComponentMeta<typeof ShareIcon>;

const Template: Story<SvgIconProps> = args => <ShareIcon {...args} />;

export const Share = Template.bind({});
Share.args = {};
