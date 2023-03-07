import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { ErrorIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/Filled/Error',
  component: ErrorIcon
} as ComponentMeta<typeof ErrorIcon>;

const Template: Story<SvgIconProps> = (args) => <ErrorIcon {...args} />;

export const Error = Template.bind({});
Error.args = {};
