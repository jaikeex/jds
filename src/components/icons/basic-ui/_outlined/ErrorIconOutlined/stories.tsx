import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { ErrorIconOutlined } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/Outlined/Error',
  component: ErrorIconOutlined
} as ComponentMeta<typeof ErrorIconOutlined>;

const Template: Story<SvgIconProps> = (args) => <ErrorIconOutlined {...args} />;

export const Error = Template.bind({});
Error.args = {};
