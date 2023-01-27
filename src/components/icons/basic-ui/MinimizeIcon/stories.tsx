import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { MinimizeIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Minimize',
  component: MinimizeIcon
} as ComponentMeta<typeof MinimizeIcon>;

const Template: Story<IconProps> = args => <MinimizeIcon {...args} />;

export const Minimize = Template.bind({});
Minimize.args = {};
