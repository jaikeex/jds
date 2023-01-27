import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SendIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Social/Send',
  component: SendIcon
} as ComponentMeta<typeof SendIcon>;

const Template: Story<IconProps> = args => <SendIcon {...args} />;

export const Send = Template.bind({});
Send.args = {};
