import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { KeyOffIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/KeyOff',
  component: KeyOffIcon
} as ComponentMeta<typeof KeyOffIcon>;

const Template: Story<IconProps> = args => <KeyOffIcon {...args} />;

export const KeyOff = Template.bind({});
KeyOff.args = {};
