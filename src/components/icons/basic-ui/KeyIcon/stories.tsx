import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { KeyIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Key',
  component: KeyIcon
} as ComponentMeta<typeof KeyIcon>;

const Template: Story<SvgIconProps> = args => <KeyIcon {...args} />;

export const Key = Template.bind({});
Key.args = {};
