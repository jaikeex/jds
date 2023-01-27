import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { KeyIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Key',
  component: KeyIcon
} as ComponentMeta<typeof KeyIcon>;

const Template: Story<IconProps> = args => <KeyIcon {...args} />;

export const Key = Template.bind({});
Key.args = {};
