import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { ShareIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Social/Share',
  component: ShareIcon
} as ComponentMeta<typeof ShareIcon>;

const Template: Story<SvgIconProps> = (args) => <ShareIcon {...args} />;

export const Share = Template.bind({});
Share.args = {};
