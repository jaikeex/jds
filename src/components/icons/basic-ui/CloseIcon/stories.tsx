import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { CloseIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Close',
  component: CloseIcon
} as ComponentMeta<typeof CloseIcon>;

const Template: Story<IconProps> = args => <CloseIcon {...args} />;

export const Close = Template.bind({});
Close.args = {};
