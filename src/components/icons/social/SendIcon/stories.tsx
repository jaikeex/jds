import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SendIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Social/Send',
  component: SendIcon
} as ComponentMeta<typeof SendIcon>;

const Template: Story<SvgIconProps> = args => <SendIcon {...args} />;

export const Send = Template.bind({});
Send.args = {};
