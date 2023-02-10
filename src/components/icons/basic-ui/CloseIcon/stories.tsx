import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { CloseIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Close',
  component: CloseIcon
} as ComponentMeta<typeof CloseIcon>;

const Template: Story<SvgIconProps> = args => <CloseIcon {...args} />;

export const Close = Template.bind({});
Close.args = {};
