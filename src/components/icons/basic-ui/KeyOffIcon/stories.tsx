import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { KeyOffIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/KeyOff',
  component: KeyOffIcon
} as ComponentMeta<typeof KeyOffIcon>;

const Template: Story<SvgIconProps> = (args) => <KeyOffIcon {...args} />;

export const KeyOff = Template.bind({});
KeyOff.args = {};
