import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { ShareIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Social/Share',
  component: ShareIcon
} as ComponentMeta<typeof ShareIcon>;

const Template: Story<IconProps> = args => <ShareIcon {...args} />;

export const Share = Template.bind({});
Share.args = {};
