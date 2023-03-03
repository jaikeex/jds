import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { CloseIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/Close',
  component: CloseIcon
} as ComponentMeta<typeof CloseIcon>;

const Template: Story<SvgIconProps> = (args) => <CloseIcon {...args} />;

export const Close = Template.bind({});
Close.args = {};
